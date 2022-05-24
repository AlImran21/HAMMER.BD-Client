import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';



const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(googleUser || user);

    let gError;
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect( () => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [ token, from, navigate ]);


    if (googleLoading || loading) {
        return <Loading />
    }

    if (googleError) {
        gError = <small className='text-red-500'>{googleError?.message}</small>
    }

    if (error) {
        signInError = <small className='text-red-500'>{error?.message}</small>
    }

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data?.email, data?.password);
        reset();
    }





    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 shadow-2xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center mb-8">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                            </label>
                            <label className="label mb-2">
                                <span
                                    className="label-text-alt link link-hover"
                                >Forgot password?
                                </span>
                            </label>
                        </div>
                        {signInError}
                        <input
                            className='btn btn-info text-white w-full'
                            type="submit"
                            value='Sign In' />
                    </form>
                    <p className='text-sm font-medium text-slate-600'>New to HAMMER.BD? <Link to='/register' className='text-green-500'>Create New Account</Link></p>
                    <div className="divider font-bold">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline btn-primary'
                    >
                        Continue With Google
                    </button>
                    {gError}
                </div>
            </div>
        </div>
    );
};

export default Login;
