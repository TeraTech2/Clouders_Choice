import React from 'react'
import { Outlet } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import MainNavbar from './Navbar';
import { useState } from 'react';

export const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") :"light");

    const ToggleTheme = () => {
        setTheme(prev => {
            localStorage.setItem("theme", prev === "light" ? "dark" : "light");
            return prev === "light" ? "dark" : "light"
        });
    }

    return (
        <>
            <MainNavbar theme={theme} ToggleTheme={ToggleTheme}/>
            <Outlet context={{theme, ToggleTheme}}/>
        </>
    )
}

export default Navbar
