import React, { useState } from 'react';
import {
    AppBar, Toolbar, Button, Container, Box, IconButton,
    Menu, MenuItem, Stack, Drawer, List, ListItemButton,
    ListItemText, Collapse, Divider, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import logoImage from '../assets/common/logo.jpg';

const pages = [
    { name: 'Home', path: '/', isDropdown: false },
    { name: 'About Us', path: '/about', isDropdown: false },
    { name: 'Events', path: '/events', isDropdown: true },
    { name: 'Contact', path: '/contact', isDropdown: false }
];

const eventItems = [
    { name: 'Event 1', path: '/rally' },
    { name: 'Event 2', path: '/rally' },
    { name: 'Event 3', path: '/rally' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
    const [eventsAnchorEl, setEventsAnchorEl] = useState<null | HTMLElement>(null);
    const isDesktopEventsOpen = Boolean(eventsAnchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMobileEventsClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent drawer from closing when clicking expand
        setMobileEventsOpen(!mobileEventsOpen);
    };

    const handleOpenDesktopEvents = (event: React.MouseEvent<HTMLElement>) => {
        setEventsAnchorEl(event.currentTarget);
    };

    const handleCloseDesktopEvents = () => {
        setEventsAnchorEl(null);
    };

    const drawerContent = (
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={logoImage} alt="Logo" style={{ height: '50px' }} />
            </Box>
            <Divider />

            <List>
                {pages.map((page) => {
                    // 1. IS IT THE DROPDOWN (EVENTS)?
                    if (page.isDropdown) {
                        return (
                            <React.Fragment key={page.name}>
                                <ListItemButton onClick={handleMobileEventsClick}>
                                    <ListItemText primary={page.name} slotProps={{ primary: { fontWeight: 'medium' }}} />
                                    {mobileEventsOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={mobileEventsOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {eventItems.map((item) => (
                                            <ListItemButton
                                                key={item.name}
                                                component={Link}
                                                to={item.path}
                                                onClick={handleDrawerToggle} // Close drawer on selection
                                                sx={{ pl: 4, bgcolor: '#f5f5f5' }} // Indent & grey background
                                            >
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        );
                    }

                    return (
                        <ListItemButton
                            key={page.name}
                            component={Link}
                            to={page.path}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText primary={page.name} slotProps={{ primary: { fontWeight: 'medium' }}} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'white', py: 1 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        >
                            {drawerContent}
                        </Drawer>
                        <Link to="/">
                            <img src={logoImage} alt="Logo" style={{ height: '55px', display: 'block' }} />
                        </Link>
                    </Box>
                    <Stack
                        direction="row"
                        spacing={4}
                        alignItems="center"
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        {pages.map((page) => {
                            if (page.isDropdown) {
                                return (
                                    <React.Fragment key={page.name}>
                                        <Button
                                            onClick={handleOpenDesktopEvents}
                                            endIcon={<KeyboardArrowDownIcon />}
                                            sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}
                                        >
                                            {page.name}
                                        </Button>

                                        <Menu
                                            anchorEl={eventsAnchorEl}
                                            open={isDesktopEventsOpen}
                                            onClose={handleCloseDesktopEvents}
                                        >
                                            {eventItems.map((item) => (
                                                <MenuItem
                                                    key={item.name}
                                                    component={Link}
                                                    to={item.path}
                                                    onClick={handleCloseDesktopEvents}
                                                >
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </React.Fragment>
                                );
                            }
                            return (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    sx={{ color: 'black', fontSize: '1rem', textTransform: 'none' }}
                                >
                                    {page.name}
                                </Button>
                            );
                        })}
                        <Link to="/">
                            <img src={logoImage} alt="Logo" style={{ height: '85px', display: 'block' }} />
                        </Link>
                    </Stack>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;