import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mt-8">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl text-primary'>Dashboard</h1>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='text-slate-700 font-medium'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrders' className='text-slate-700 font-medium'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview' className='text-slate-700 font-medium'>Add A Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;