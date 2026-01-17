import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#1a1a1a', // Dark grey background
                color: 'white',
                py: 6,              // Vertical padding
                mt: 'auto'          // Pushes footer to bottom if page content is short
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    {/* COLUMN 1: ABOUT */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            TCSA
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                            The Tasmanian Chinese Support Association is dedicated to connecting communities,
                            celebrating our rich culture, and supporting the wellbeing of all Tasmanians.
                        </Typography>
                    </Grid>

                    {/* COLUMN 2: QUICK LINKS */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/events">Events</FooterLink>
                            <FooterLink to="/rally">Latest News</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                        </Stack>
                    </Grid>

                    {/* COLUMN 3: CONTACT */}
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contact Us
                        </Typography>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.7 }}>
                                <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                                <Typography variant="body2">info@tcsa.org.au</Typography>
                            </Box>
                            <Box sx={{ opacity: 0.7 }}>
                                <Typography variant="body2">Hobart, Tasmania</Typography>
                                <Typography variant="body2">Australia</Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* COLUMN 4: SOCIAL */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Follow Us
                        </Typography>
                        <MuiLink
                            href="https://facebook.com"
                            target="_blank"
                            color="inherit"
                            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}
                        >
                            <FacebookIcon sx={{ mr: 1 }} />
                            Facebook
                        </MuiLink>
                    </Grid>

                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

                {/* COPYRIGHT BAR */}
                <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
                    &copy; {new Date().getFullYear()} Tasmanian Chinese Support Association. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

// Helper component for Links to keep code clean
const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <MuiLink
        component={Link}
        to={to}
        color="inherit"
        underline="hover"
        sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}
    >
        {children}
    </MuiLink>
);

export default Footer;