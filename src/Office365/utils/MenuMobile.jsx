import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import menu from './menus';

const MenuMobile = (props) => {
    const { open, handleClose } = props;
    
    return (
        <div className={open ? `menu-mobile-wrapper menu-mobile-active` : 'menu-mobile-wrapper'}>
            <div className="close-btn-div text-end">
                <Button onClick={handleClose}>
                    <i className="bi bi-x-lg fs-2"></i>
                </Button>
            </div>

            <div className="mobile-links-wrapper">
                {
                    menu.map((m, key) => {
                        if (m.subMenu.length > 0) {
                            return <>
                                <div key={key}>
                                    <h6>{m.title}</h6>
                                    <ul className='submenu'>
                                        {
                                            m.subMenu.map((sub, key) => {
                                            return <NavLink to={sub.link} className="mobile-link">
                                                {sub.title}
                                            </NavLink>})
                                        }
                                    </ul>
                                </div>
                            </>
                        }
                        else{
                            return <NavLink to={m.link} className="mobile-link">
                                {m.title}
                            </NavLink>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MenuMobile