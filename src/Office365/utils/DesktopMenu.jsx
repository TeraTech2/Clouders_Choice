import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const DesktopMenu = (props) => {
    const {handleClose, open, anchor, area, activeLink, positionTitle, subMenu } = props;

    if(subMenu.length <=0) return null

    return (
            <Menu
                id={positionTitle}
                aria-labelledby={area}
                anchorEl={anchor}
                open={activeLink==area ? open : false}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    subMenu.map((menu, key) => {
                        return <NavLink to={menu.link} style={{textDecoration:"none", color:"black"}}>
                            <MenuItem onClick={handleClose} key={key}>{menu.title}</MenuItem>
                        </NavLink>
                    })
                }
            </Menu>
    )
}

export default DesktopMenu