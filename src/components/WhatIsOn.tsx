import React from 'react';
import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from '@mui/material';
import midAutumnImg from '../assets/midautumn/mid_autumn_lg.jpg';
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
                                🌕 Celebrate the Mid-Autumn Festival with TCSA! 🌕
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"}>
                                Mark your calendars! The Tasmania Chinese Support Association (塔州华人互助会) invites you to an afternoon of vibrant culture, family fun, and community connection. ✨
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    📅 **Sunday, 13 September 2026**
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    🕛 **12:00 PM – 3:00 PM**
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    📍 **Kingborough Community Hub**
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ✨ **共赏明月 • 同庆中秋** ✨
                                </Typography>
                            </Stack>
                            <Typography variant="body1" color="text.secondary" component={"p"}>
                                Everyone is welcome! Admission is completely free. 👉 Scan the QR code on our flyer to register now!
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    * 🥮 Mooncake Tasting
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    * 🏮 Festive Lantern Activities
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    * 🎲 Cardboard & Board Games
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    * 🎭 Cultural Stage Performances
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    * 👨‍👩‍👧‍👦 Family-Friendly Fun
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
                                src={midAutumnImg}
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
