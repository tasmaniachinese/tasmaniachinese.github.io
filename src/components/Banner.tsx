import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import bannerImage from '../assets/common/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: { xs: 8, md: 16 },
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0, 0.5)',
                    zIndex: 1
                }
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    fontWeight="bold"
                    sx={{
                        mb: 2,
                        fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                        lineHeight: { xs: 1.2, md: 1.1 }
                    }}
                >
                    Tasmania Chinese Support Association
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        mb: 4,
                        opacity: 0.9,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        maxWidth: { xs: '100%', md: '80%' },
                        mx: 'auto'
                    }}
                >
                    Connecting communities, celebrating culture, and supporting Tasmania.
                </Typography>

                <Button
                    variant="contained"
                    component={Link}
                    to={"/contact"}
                    color="secondary"
                    size="large"
                    sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        py: { xs: 1, md: 1.5 },
                        px: 4
                    }}
                >
                    Contact Us Today
                </Button>
            </Container>
        </Box>
    );
};

export default Banner;