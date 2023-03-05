import React, { useContext, useEffect, useState } from 'react'
import "../Pages_css/Navbar.css";
import i1 from "../Images/main-logo.png";
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import useDimensions from '../utils/useDimensions';
import Button from '@mui/material/Button';
import { ThemeContext } from '../context/Theme';

export const Navbar = () => {
    const {theme, ToggleTheme} = useContext(ThemeContext);
    const { width } = useDimensions();

    const [isSticky, setIsSticky] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [hamIcon, setHamIcon] = useState("bi-list");

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

    const PromiseFunc = new Promise((resolve) => {
        resolve(!hamburger);
    });

    const handleOpen = () => {
        PromiseFunc.then((value) => {
            if (value) setHamIcon("bi-x-lg");
            else setHamIcon("bi-list");

            setHamburger(value)
        });
    }


    if (width > 600) {
        return <NavbarForWideScreen isSticky={isSticky} handleOpen={handleOpen} hamburger={hamburger} hamIcon={hamIcon} theme={theme} ToggleTheme={ToggleTheme} />
    }

    return (
        <div className={`NavbarForSmallScreen theme-${theme}`}>
            <div className='d-flex flex-row justify-content-between align-items-center logo-div'
                style={{ position: "sticky", top: 0, left: 0, zIndex: 100 }}>
                <NavLink className="nav-link" to="/">
                    <img src={i1} width="80px" alt=""></img>
                </NavLink>
                <button className='btn hamburger' disabled={hamburger} style={{ boxShadow: "none" }} onClick={handleOpen}>
                    <i className={`bi fs-2 bi-list`}></i>
                </button>
            </div>
            <NavbarForSmallScreen isSticky={isSticky} handleOpen={handleOpen} hamburger={hamburger} hamIcon={hamIcon} theme={theme} ToggleTheme={ToggleTheme} />
        </div>
    )
}


const NavbarForWideScreen = ({ isSticky, handleOpen, hamburger, hamIcon, theme, ToggleTheme }) => {
    return <div className={`NavbarForWideScreen d-flex flex-column justify-content-between theme-${theme} ${isSticky && "sticky"}`}>
        <div className='w-100 d-flex align-items-center justify-content-between'>
            <div className="nav-logo">
                <NavLink className="nav-link" to="/">
                    <img src={i1} width="90px" alt=""></img>
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
                                        <NavLink className="nav-link" to="/Consulting">Consulting</NavLink>
                                        <NavLink className="nav-link" to="/Webdevelopment">Web Development</NavLink>
                                        <NavLink className="nav-link" to="/MobileAppDevelopment"> Mobile App Development</NavLink>
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
                                        <NavLink className="nav-link" to="/MicrosoftAzure">Microsoft Azure</NavLink>

                                        <NavLink className="nav-link" to="/AmazonWebServices">Amazon Web Services</NavLink>
                                        <NavLink className="nav-link" to="/GoogleCloudPlatform">Google Cloud Platform</NavLink>
                                        <NavLink className="nav-link" to="/Office365">Office 365</NavLink>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </li>
                    <li id="link4"><NavLink className="nav-link" to="/About">About</NavLink></li>
                    <li id="link5"><NavLink className="nav-link" to="/Contact">Contact Us</NavLink></li>
                    <Button onClick={ToggleTheme}>
                        {
                            theme === "light" ?
                                <i className="bi bi-moon-fill fs-5" style={{color:"#21a4bb"}}></i>
                                :
                                <i className="bi bi-sun fs-5" style={{color:"#F6BE00"}}></i>
                        }
                    </Button>
                </ul>
            </nav>

            {/* hamburger */}
            <button className='btn hamburger' style={{ boxShadow: "none" }} onClick={handleOpen}>
                <i className={`bi fs-2 ${hamIcon}`}></i>
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
                                        <NavLink className="nav-link" to="/Consulting">Consulting</NavLink>
                                        <NavLink className="nav-link" to="/Webdevelopment">Web Development</NavLink>
                                        <NavLink className="nav-link" to="/MobileAppDevelopment"> Mobile App Development</NavLink>
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
                                        <NavLink className="nav-link" to="/MicrosoftAzure">Microsoft Azure</NavLink>
                                        <NavLink className="nav-link" to="/AmazonWebServices">Amazon Web Services</NavLink>
                                        <NavLink className="nav-link" to="/GoogleCloudPlatform">Google Cloud Platform</NavLink>
                                        <NavLink className="nav-link" to="/Office365">Office 365</NavLink>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </li>
                    <li id="link4"><NavLink className="nav-link" to="/About">About</NavLink></li>
                    <li id="link5"><NavLink className="nav-link" to="/Contact">Contact Us</NavLink></li>
                    <Button onClick={ToggleTheme}>
                        {
                            theme === "light" ?
                                <i className="bi bi-moon-fill fs-5" style={{color:"#21a4bb"}}></i>
                                :
                                <i className="bi bi-sun fs-5" style={{color:"#F6BE00"}}></i>
                        }
                    </Button>
                </ul>
            </div>
        </div>
    </div>
}

const NavbarForSmallScreen = ({ handleOpen, hamburger, hamIcon, theme, ToggleTheme }) => {

    const [ddl, setDdl] = useState({
        "ddl1": false,
        "ddl2": false
    });

    const handleDDL = (obj) => {
        setDdl(prev => {
            return { ...prev, ...obj }
        });
    }

    return (
        <nav className={`nav-mobile ${hamburger && "active"}`}>
            <div className="nav-mobile-header d-flex flex-row justify-content-between align-items-center">
                <NavLink className="nav-link" to="/" onClick={handleOpen}>
                    <img src={i1} width="70px" alt="logo"></img>
                </NavLink>

                <button className='btn hamburger' style={{ boxShadow: "none" }} onClick={handleOpen}>
                    <i className={`bi fs-2 ${hamIcon}`}></i>
                </button>
            </div>

            {/* menu */}
            <section className='nav-mobile-body'>
                <div className="d-flex justify-content-end align-items-center">
                    <Button onClick={ToggleTheme}>
                        {
                            theme === "light" ?
                                <i className="bi bi-moon-fill fs-5" style={{color:"#21a4bb"}}></i>
                                :
                                <i className="bi bi-sun fs-5" style={{color:"#F6BE00"}}></i>
                        }
                    </Button>
                </div>

                <NavLink className="nav-link nav-link-hover" to="/" onClick={handleOpen}>Home</NavLink>

                <div className='submenu'>
                    <div className={`submenu-ddl ${ddl['ddl1'] && "active"} d-flex justify-content-between align-items-center`}>
                        <NavLink className="nav-link" to="#">Services</NavLink>
                        <Button style={{ boxShadow: "none" }} className='btn'
                            onClick={() => handleDDL({ "ddl1": !ddl['ddl1'] })}>
                            <i className={`bi ${ddl['ddl1'] ? "bi-caret-up-fill" : "bi-caret-down-fill"}`} />
                        </Button>
                    </div>
                    <div className={`submenu-ddl-list ${ddl['ddl1'] && "active"}`}>
                        <NavLink className="nav-link" to="/Consulting" onClick={handleOpen}>Consulting</NavLink>
                        <NavLink className="nav-link" to="/Webdevelopment" onClick={handleOpen}>Web Development</NavLink>
                        <NavLink className="nav-link" to="/MobileAppDevelopment" onClick={handleOpen}> Mobile App Development</NavLink>
                    </div>
                </div>

                <div className='submenu'>
                    <div className={`submenu-ddl ${ddl['ddl2'] && "active"} d-flex justify-content-between align-items-center`}>
                        <NavLink className="nav-link" to="#">Technologies</NavLink>
                        <Button style={{ boxShadow: "none" }} className='btn'
                            onClick={() => handleDDL({ "ddl2": !ddl['ddl2'] })}>
                            <i className={`bi ${ddl['ddl2'] ? "bi-caret-up-fill" : "bi-caret-down-fill"}`} />
                        </Button>
                    </div>
                    <div className={`submenu-ddl-list ${ddl['ddl2'] && "active"}`}>
                        <NavLink className="nav-link" to="/MicrosoftAzure" onClick={handleOpen}>Microsoft Azure</NavLink>
                        <NavLink className="nav-link" to="/AmazonWebServices" onClick={handleOpen}>Amazon Web Services</NavLink>
                        <NavLink className="nav-link" to="/GoogleCloudPlatform" onClick={handleOpen}>Google Cloud Platform</NavLink>
                        <NavLink className="nav-link" to="/Office365" onClick={handleOpen}>Office 365</NavLink>
                    </div>
                </div>

                <NavLink className="nav-link nav-link-hover" to="/About" onClick={handleOpen}>About</NavLink>
                <NavLink className="nav-link nav-link-hover" to="/Contact" onClick={handleOpen}>Contact Us</NavLink>
            </section>
        </nav>
    )
}

export default Navbar
