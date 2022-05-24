import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mt-8">
                {/* <!-- Page content here --> */}
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-2'>Dashboard</h1>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='text-slate-700 font-medium'>My Profile</Link></li>


                    {
                        admin ?
                            <div>
                                <li><Link to='/dashboard/users' className='text-slate-700 font-medium'>All Users</Link></li>
                                <li><Link to='/dashboard/allOrders' className='text-slate-700 font-medium'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/addProduct' className='text-slate-700 font-medium'>Add A Product</Link></li>
                                <li><Link to='/dashboard/manageProduct' className='text-slate-700 font-medium'>Manage Products</Link></li>
                            </div>
                            :
                            <div>
                                <li><Link to='/dashboard/myOrders' className='text-slate-700 font-medium'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview' className='text-slate-700 font-medium'>Add A Review</Link></li>
                            </div>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;