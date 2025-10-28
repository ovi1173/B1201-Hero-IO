import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from '../../assets/logo.png'
import githubIcon from '../../assets/github.png'
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogo =()=>{
        navigate('/');
    }
    const links = <>
        <ul className="flex">
            <li className="mr-3">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold underline"
                            : "text-gray-700"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li className="mr-2">
                <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold underline"
                            : "text-gray-700"
                    }
                >
                    Apps
                </NavLink>
            </li>

            <li className="mr-2">
                <NavLink
                    to="/installation"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold underline"
                            : "text-gray-700"
                    }
                >
                    Installation
                </NavLink>
            </li>
        </ul>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div onClick={handleLogo} className='flex cursor-pointer justify-center items-center gap-1'>
                    <img className='w-10 h-10' src={Logo} alt="logo is loading" />
                    <a className=" text-base font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">HERO.IO</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <div onClick={() => window.open('https://github.com/ovi1173')} className='rounded-[4px] flex items-center gap-2 cursor-pointer px-[16px] pt-[10px] pb-[12px] font-medium bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]
                 text-white'>
                    <img className='w-4 h-4' src={githubIcon} alt="" />
                    <h2>Contribute</h2>
                </div>

            </div>
        </div>
    );
};

export default Navbar;