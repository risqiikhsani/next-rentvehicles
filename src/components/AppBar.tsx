"use client"

import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Tooltip } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function MyAppBar() {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElNotifications, setAnchorElNotifications] = useState<null | HTMLElement>(null);
  
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    const handleOpenNotificationsMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNotifications(event.currentTarget);
    };
  
    const handleCloseNotificationsMenu = () => {
      setAnchorElNotifications(null);
    };


    return (
        <>
            <Toolbar disableGutters sx={{px:'20px',backgroundColor:'background.paper'}}>
                <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
                <Typography variant="h6" noWrap component="div" color="black">
                    RentVehicles
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="primary">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <Tooltip title="Open notifications">
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                        onClick={handleOpenNotificationsMenu}
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ zIndex: 2001, mt: '45px' }}
                        id="menu-appbar-notifications"
                        anchorEl={anchorElNotifications}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElNotifications)}
                        onClose={handleCloseNotificationsMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>

                    <Tooltip title="Open settings">
                        <IconButton size="large" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ zIndex:2001,mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>

        </>
    )
}