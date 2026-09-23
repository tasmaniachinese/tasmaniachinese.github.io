import React from 'react';
import {Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from '@mui/material';
import tcsaBannerImg from '../assets/common/tcsa_banner.jpg';
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
                        <Grid size={{xs: 12, md: 7}}
                              sx={{p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography variant="overline" color="primary" fontWeight="bold">
                                Featured Event · Thank You!
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{mb: 2}}>
                                🌕 Mid-Autumn Festival & TCSA First Anniversary
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"}>
                                On Sunday, 13 September, more than 300 people from across Tasmania and from a
                                diverse range of cultural backgrounds joined us at the Kingborough Community Hub
                                for an afternoon of cultural performances, lantern-making, food and community
                                connection, marking TCSA’s first year of service to the community.
                            </Typography>
                            <Stack direction="row" spacing={4} sx={{my: 3}}>
                                <Box>
                                    <Typography variant="h4" fontWeight="bold" color="primary">300+</Typography>
                                    <Typography variant="body2" color="text.secondary">Attendees · 参与者</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" fontWeight="bold" color="primary">15</Typography>
                                    <Typography variant="body2" color="text.secondary">Volunteers · 志愿者</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" fontWeight="bold" color="primary">1st</Typography>
                                    <Typography variant="body2" color="text.secondary">Anniversary · 周年</Typography>
                                </Box>
                            </Stack>
                            <Typography variant="body1" color="text.secondary" component={"p"}>
                                塔州华人互助协会于9月13日在 Kingborough Community Hub 举办中秋嘉年华暨成立一周年庆典，
                                300余名来自塔州各地、不同文化背景的社区成员共庆中秋、共享社区温暖。
                            </Typography>
                            <Divider sx={{my: 3}}/>
                            <Typography variant="body1" fontStyle="italic" component={"p"}>
                                “For the first time, I feel like I have a sense of home in Tasmania.”
                            </Typography>
                            <Typography variant="body1" fontStyle="italic" component={"p"}>
                                “第一次感觉在塔州有了家的感觉！”
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                                — A community member · 一位社区成员
                            </Typography>
                            <Box sx={{mt: 4}}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleScrollToDetails}
                                >
                                    Read the Full Story
                                </Button>
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12, md: 5}}
                              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                component="img"
                                src={tcsaBannerImg}
                                alt="Tasmania Chinese Support Association - Unity of Voice, Hand of Support"
                                sx={{
                                    width: '100%',
                                    maxHeight: {xs: 600, md: 820},
                                    objectFit: 'contain',
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
