import React from 'react';
import { Link } from 'react-router-dom';
import CommonButton from '../../../Components/CommonButton/CommonButton';

const Navbar = () => {

    const MenuItems = <React.Fragment>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Skills</Link></li>
        <li><Link to='/'>Projects</Link></li>
        <li><Link to='/'>Services</Link></li>
    </React.Fragment>
    return (
        <div className="navbar border-b border-gray-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="flex items-center mr-6 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-lg font-semibold">
                        {MenuItems}
                        <CommonButton>Resume</CommonButton>
                    </ul>
                </div>
                <Link to='/' className='text-2xl text-white font-bold'>ASHRAF</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold">
                    {MenuItems}
                </ul>
                <CommonButton>Resume</CommonButton>
            </div>
        </div>
    );
};

export default Navbar;