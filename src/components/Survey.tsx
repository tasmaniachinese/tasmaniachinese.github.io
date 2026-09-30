import React from 'react';
import {Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography} from '@mui/material';
import surveyImg from '../assets/survey/survey.jpg';

const Survey = () => {
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
                                Community Survey · 社区问卷
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{mb: 1}}>
                                Tasmania Chinese Community Safety & Social Inclusion Survey
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" sx={{mb: 2}}>
                                塔斯马尼亚华人社区安全与社会包容度调查
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{mb: 3}}>
                                <Chip label="Anonymous · 完全匿名" color="primary" variant="outlined"/>
                                <Chip label="Privacy Protected · 保护隐私" color="primary" variant="outlined"/>
                            </Stack>
                            <Typography variant="body1" component={"p"}>
                                Your experiences should not be ignored.
                            </Typography>
                            <Typography variant="body1" component={"p"}>
                                Your safety should not be left to chance.
                            </Typography>
                            <Typography variant="body1" component={"p"}>
                                Your right to live safely and with dignity must not be questioned.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"} sx={{mt: 2}}>
                                Please complete this completely anonymous survey and help turn our individual
                                experiences into visible, meaningful data.
                            </Typography>
                            <Box sx={{my: 2, pl: 2, borderLeft: 4, borderColor: 'primary.main'}}>
                                <Typography variant="body1" fontStyle="italic" component={"p"}>
                                    Let our experiences be heard.
                                </Typography>
                                <Typography variant="body1" fontStyle="italic" component={"p"}>
                                    Let our circumstances be taken seriously.
                                </Typography>
                                <Typography variant="body1" fontStyle="italic" component={"p"}>
                                    Let evidence guide meaningful change.
                                </Typography>
                            </Box>
                            <Typography variant="body1" fontWeight="bold" component={"p"}>
                                Scan the QR code to complete the survey — speak up for yourself, and for our
                                community.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"} sx={{mt: 2}}>
                                We sincerely ask everyone to take a few minutes to complete the survey.
                                It takes approximately 3–5 minutes — about the time it takes to enjoy a cup of
                                coffee! ☕
                            </Typography>
                            <Divider sx={{my: 3}}/>
                            <Typography variant="h6" fontWeight="bold" color="primary">
                                A Safer Tasmania. A Better Future.
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                Let’s take action together!
                            </Typography>
                        </Grid>

                        <Grid size={{xs: 12, md: 5}}
                              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box
                                component="img"
                                src={surveyImg}
                                alt="Tasmania Chinese Community Safety & Social Inclusion Survey poster with QR code"
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

export default Survey;
