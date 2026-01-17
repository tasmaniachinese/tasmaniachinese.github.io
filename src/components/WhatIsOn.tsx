import React from 'react';
import {Box, Button, Card, CardContent, Container, Grid, Typography} from '@mui/material';
import rallyImage from '../assets/youthviolencerally/rally0.jpg';
import {Link} from 'react-router-dom';

const WhatIsOn = () => {
    return (
        <Container
            maxWidth="lg"
                   sx={{
                       my: 4,
                   }}>
                <Card sx={{ borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
                    <CardContent>
                        <Grid container>
                            <Grid size={{ xs: 12, lg: 6 }} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="overline" color="primary" fontWeight="bold">
                                    Featured Event
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                                    Hobart Chinese‑Australian Community Rally Against Youth Violence
                                </Typography>
                                <Typography variant="body1" color="text.secondary" component={"p"}>
                                    The Hobart Chinese–Australian Community Rally Against Youth Violence was held on 27 September 2025 at the Tasmanian Parliament Lawns, organised by the Tasmania Chinese Support Association. The peaceful rally responded to recent youth violence incidents in Hobart, including a serious assault at Glenorchy, and called for stronger prevention, early intervention, and public safety measures. Community members and political representatives attended, and the event helped prompt further parliamentary discussion and government support for youth-focused initiatives, including funding for a proposed Youth Hub in Glenorchy.
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        component={Link}
                                        to="/rally"
                                    >
                                        Read Full Details
                                    </Button>
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, lg: 6 }}>
                                <img
                                    src={rallyImage}
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