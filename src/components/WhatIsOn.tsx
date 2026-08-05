import React from 'react';
import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from '@mui/material';
import mooncakeImg from '../assets/midautumn/moocake.jpg';
import {useNavigate} from 'react-router-dom';

const WhatIsOn = () => {
    const navigate = useNavigate();

    const handleScrollToDetails = () => {
        // 1. Navigate to the new page path first
        navigate('/midautumn');

        // 2. Wait a split second for the page to load, then scroll to the element
        setTimeout(() => {
            const element = document.getElementById('event_details');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                my: 4,
            }}>
            <Card sx={{borderRadius: 4, boxShadow: 3, overflow: 'hidden'}}>
                <CardContent>
                    <Grid container>
                        <Grid size={{xs: 12, lg: 6}}
                              sx={{p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                            <Typography variant="overline" color="primary" fontWeight="bold">
                                Featured Event
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{mb: 2}}>
                                Mooncake Festival Celebration 2026
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"}>
                                TCSA is currently preparing for its upcoming Mooncake Festival Celebration on 13
                                September 2026, supported through Tasmanian Government funding. The event aims to celebrate:
                            </Typography>

                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    • Family reunion and community connection
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • Multicultural inclusion and cultural exchange
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • Intergenerational engagement
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • Understanding Chinese cultural traditions in Tasmania
                                </Typography>
                            </Stack>
                            <Box sx={{mt: 2}}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleScrollToDetails}
                                >
                                    Read Full Details
                                </Button>
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12, lg: 6}}>
                            <img
                                src={mooncakeImg}
                                alt="Event"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Grid>

                    </Grid>
                </CardContent>

            </Card>
        </Container>
    );
};

export default WhatIsOn;
