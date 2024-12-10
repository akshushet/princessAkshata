import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    // References for animation
    const appBarRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        // Animate the AppBar sliding down from the top
        gsap.fromTo(
            appBarRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
        );
    }, []);

    const menuItems = [
        { label: 'Home', path: './homeLovePage' },
        { label: 'About', path: './aboutPage' },
        { label: 'Services', path: './servicesPage' },
        { label: 'Contact', path: './contactPage' },
    ];

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            {/* AppBar */}
            <AppBar
                ref={appBarRef}
                position="fixed"
                sx={{
                    backgroundColor: '#FF6F91',
                    color: '#333333',
                    borderRadius: '0 0 20px 20px',
                    top: 0,
                    left: 0,
                    right: 0,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Toolbar>
                    {/* Logo Section */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => navigate('./homeLovePage')}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Favorite sx={{ color: 'red', marginRight: 1 }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>
                            Akshu
                        </Typography>
                    </IconButton>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box
                            ref={menuRef}
                            sx={{ marginLeft: 'auto', display: 'flex', gap: 2 }}
                        >
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                            transition: 'transform 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={toggleDrawer(true)}
                            sx={{ marginLeft: 'auto' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile Menu */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ '& .MuiDrawer-paper': { width: '250px' } }}
            >
                <Box
                    sx={{
                        padding: '20px',
                        height: '100%',
                        backgroundColor: '#fff',
                    }}
                    ref={menuRef}
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.label}
                                onClick={() => {
                                    navigate(item.path);
                                    setDrawerOpen(false); // Close drawer after navigation
                                }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                        transition: 'background-color 0.2s ease-in-out',
                                    },
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
