import React, { useState, useEffect } from 'react';
import DesktopMenu from '../utils/DesktopMenu';
import menu from '../utils/menus';
import { Button, Stack } from '@mui/material';
import logo from "../imgs/ems1/ems1.PNG";
import { NavLink } from 'react-router-dom';
import useDimensions from '../utils/useDimensions'
import MenuMobile from '../utils/MenuMobile';

const MOBILE_NAV_WIDTH = 900;

const Navbar = () => {
    const [anchor, setAnchor] = useState(null);
    const [activeLink, setActiveLink] = useState("");
    const [menuMobile, setMenuMobile] = useState(false);

    const { width } = useDimensions();

    const handleClick = (event) => setAnchor(event.currentTarget);
    const handleClose = () => setAnchor(null);

    const handleCloseMenuMobile = () => setMenuMobile(false);

    useEffect(() => {
        setAnchor(null)
        setActiveLink("");

        if (width > MOBILE_NAV_WIDTH && menuMobile) {
            setMenuMobile(true)
        }
    }, [menuMobile])


    return (
        <nav className="nav-wrapper">
        <div className="logo-div">
            <img src={logo} alt="logo" width={100} />
        </div>

        {
            width > MOBILE_NAV_WIDTH ?
                <Stack className="links-wrapper" gap={10}>
                    {
                        menu.map((menu, key) => {
                            return <> <NavLink
                                variant='text'
                                className='link'
                                activeclassname="active-link"
                                id={menu.title}
                                aria-controls={anchor ? menu.positionTitle : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchor ? 'true' : undefined}
                                to={menu?.link ? menu.link : "#"}
                                onClick={(e) => {
                                    setActiveLink(menu.title);
                                    handleClick(e);
                                }}>
                                {menu.title}
                            </NavLink>
                                <DesktopMenu handleClick={handleClick} handleClose={handleClose} open={Boolean(anchor)} anchor={anchor} area={menu.title} activeLink={activeLink} positionTitle={menu.positionTitle} subMenu={menu.subMenu} mainLink={menu?.link ? menu?.link : null} key={key} />
                            </>
                        })
                    }
                </Stack>
                :
                <>
                    <Button className='hamburger-btn' onClick={() => setMenuMobile(!menuMobile)}>
                        <i className="bi bi-list fs-2"></i>
                    </Button>
                    <MenuMobile handleClose={handleCloseMenuMobile} open={menuMobile} />
                </>
        }
    </nav>
    )
}

export default Navbar