import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/my-portfolio'>My Portfolio</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>



    return (
        <div className="navbar bg-white lg:px-24 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-serif">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500">HAMMER.BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-x-1 text-xl font-medium font-serif">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;