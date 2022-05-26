import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const url = `https://hidden-crag-33232.herokuapp.com/updateProfile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result.insertedId) {
                    toast.success('Added Profile');
                    reset();
                }
                else {
                    toast.error('Failed to add profile');
                }

            });
    }



    return (
        <div className='mb-20'>
            <h1 className='font-bold text-xl text-[#635BFF] text-center mb-4'>Update Your Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50 mx-auto">
                    <div className="card-body">
                        <div className="form-control mb-3">
                            <input
                                type="name"
                                disabled
                                value={user?.displayName || ''}
                                className="input input-bordered"
                                {...register("name")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="email"
                                disabled
                                value={user?.email || ''}
                                className="input input-bordered"
                                {...register("email")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <textarea
                                class="textarea"
                                placeholder='Description' {...register("description")}
                            >
                            </textarea>
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Phone' {...register("phone")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Location' {...register("location")}
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Photo URL' {...register("img")}
                            />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline btn-accent font-bold">Update Profile</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default MyProfile;