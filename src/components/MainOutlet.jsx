import React from 'react'
import { Outlet } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import MainNavbar from '../Navbar';

export const Navbar = () => {
    return (
        <>
            <MainNavbar/>
            <Outlet />
        </>
    )
}

export default Navbar
