import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink to = {"/"} className={({isActive}) => `${isActive ?"text-green-500 border-b-2 shadow-2xl border-green-500":""} font-medium text-xl`  } > Home </NavLink>
            </li>
            <li>
                <NavLink to = {"/book"} className={({isActive}) => `${isActive ?"text-green-500 border-b-2 shadow-2xl border-green-500":""} font-medium text-xl`  } >Listed Books</NavLink>
            </li>
            <li>
                <NavLink to = {"/Pages-to-Read"} className={({isActive}) => `${isActive ?"text-green-500 border-b-2 shadow-2xl border-green-500":""} font-medium text-xl`  } >Pages to Read</NavLink>
            </li>

        </>
    )

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar  container m-auto">

                <div className="navbar-start">

                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 

                            </svg>

                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                                {links}
                            
                        </ul>

                    </div>

                    <a className="font-bold text-3xl">Book Vibe</a>

                </div>

                <div className="navbar-center hidden  md:flex">

                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                </div>

                <div className="navbar-end space-x-2">

                   <button className="btn btn-success">Sign in</button>
                   <button className="btn btn-accent">Sign Up</button>

                </div>

            </div>

        </div>
    );
};

export default Navbar;