import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Navbar from "../pages/navbar";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                <Link to="/"> Home </Link>
                </li>
                <li>
                <Link to="/Login"> Login </Link>
                </li>
                <li>
                <Link to="/Generator"> Generator </Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    );
};

export default Layout;