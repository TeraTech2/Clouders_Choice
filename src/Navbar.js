import React, { useEffect, useState } from 'react'
import "./Pages_css/Navbar.css";
import i1 from "./Images/main-logo.png";
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";


export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [hamburger, setHamburger] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 50) {
                setIsSticky(true)
            }
            else setIsSticky(false)

            return () => {
                window.removeEventListener("scroll");
            }
        })
    }, []);

    const handleOpen = () => {
        setHamburger(!hamburger)
    }


    return (
        <div className={`d-flex flex-column justify-content-between ${isSticky && "sticky"}`}>
            <div className='w-100 d-flex align-items-center justify-content-between'>
                <div className="nav-logo">
                    <NavLink className="nav-link" to="/">
                        <img src={i1} width="200px" alt=""></img>
                    </NavLink>
                </div>

                <nav className='navigationLinks' role="navigation">
                    <ul className='align-items-center'>
                        <li id="link1"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li id="link2">
                            <div className="dropdown">
                                <NavLink className="nav-link" to={"#"}>
                                    <div className="dropbtn">Services
                                        <div className="dropdown-content">
                                            <NavLink to="/Consulting">Consulting</NavLink>
                                            <NavLink to="/Webdevelopment">Web Development</NavLink>
                                            <NavLink to="/MobileAppDevelopment"> Mobile App Development</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li id="link3">
                            <div className="dropdown">
                                <NavLink className="nav-link" to={"#"}>
                                    <div className="dropbtn">Technologies
                                        <div className="dropdown-content">
                                            <NavLink to="/MicrosoftAzure">Microsoft Azure</NavLink>

                                            <NavLink to="/AmazonWebServices">Amazon Web Services</NavLink>
                                            <NavLink to="/GoogleCloudPlatform">Google Cloud Platform</NavLink>
                                            <NavLink to="/Office365">Office 365</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li id="link4"><NavLink className="nav-link" to="/About">About</NavLink></li>
                        <li id="link5"><NavLink className="nav-link" to="/Contact">Contact Us</NavLink></li>
                    </ul>
                </nav>

                {/* hamburger */}
                <button className='btn hamburger' style={{ boxShadow: "none" }} onClick={handleOpen}>
                    <i className="bi bi-list fs-2"></i>
                </button>
            </div>

            <div className={hamburger ? "navigationDivMobile d-flex align-items-start" : "d-none"}>
                <div>
                    <ul className='p-0 fs-0'>
                        <li id="link1"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li id="link2">
                            <div className="dropdown">
                                <NavLink className="nav-link" to="#">
                                    <div className="dropbtn">Services
                                        <div className="dropdown-content">
                                            <NavLink to="/Consulting">Consulting</NavLink>
                                            <NavLink to="/Webdevelopment">Web Development</NavLink>
                                            <NavLink to="/MobileAppDevelopment"> Mobile App Development</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li id="link3">
                            <div className="dropdown">
                                <NavLink className="nav-link" to="#">
                                    <div className="dropbtn">Technologies
                                        <div className="dropdown-content">
                                            <NavLink to="/MicrosoftAzure">Microsoft Azure</NavLink>

                                            <NavLink to="/AmazonWebServices">Amazon Web Services</NavLink>
                                            <NavLink to="/GoogleCloudPlatform">Google Cloud Platform</NavLink>
                                            <NavLink to="/Office365">Office 365</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                        <li id="link4"><NavLink className="nav-link" to="/About">About</NavLink></li>
                        <li id="link5"><NavLink className="nav-link" to="/Contact">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
