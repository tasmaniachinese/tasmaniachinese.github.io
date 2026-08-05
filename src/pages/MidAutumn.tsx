import React, {useEffect} from 'react';
import {Box, Button, Container, Grid, Paper, Stack, Typography} from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Link} from 'react-router-dom';
import mooncakeImg from '../assets/midautumn/moocake.jpg';

const MidAutumn = () => {
    // Load the Tally embed script so dynamicHeight=1 works properly
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <Container maxWidth="lg" sx={{py: 8}} id={"event_details"}>
            <Button component={Link} to="/" sx={{mb: 4}}>
                &larr; Back to Home
            </Button>
            <Paper elevation={0} sx={{p: {xs: 0, md: 4}}}>
                <Typography
                    variant={"h2"}
                    align="center"
                    fontWeight="bold"
                    sx={{mb: 4}}
                >
                    Mooncake Festival Celebration 2026 (Tasmanian Government Funded)
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <Typography
                            variant="body1"
                            sx={{fontSize: '1.1rem', lineHeight: 1.8, mb: 3}}
                        >
                            TCSA is currently preparing for its upcoming Mooncake Festival
                            Celebration on 13 September 2026, supported through Tasmanian Government funding.
                        </Typography>

                        <Grid container spacing={2}>
                            {[
                                {
                                    icon: <FamilyRestroomIcon color="primary"/>,
                                    title: 'Family & Community',
                                    desc: 'Celebrating family reunion and strengthening community connections.',
                                },
                                {
                                    icon: <Diversity3Icon color="primary"/>,
                                    title: 'Cultural Exchange',
                                    desc: 'Promoting multicultural inclusion and meaningful cultural exchange.',
                                },
                                {
                                    icon: <GroupsIcon color="primary"/>,
                                    title: 'Intergenerational Engagement',
                                    desc: 'Bringing together younger and older generations through shared experiences.',
                                },
                                {
                                    icon: <MenuBookIcon color="primary"/>,
                                    title: 'Cultural Understanding',
                                    desc: 'Increasing awareness of Chinese cultural traditions within the wider Tasmanian community.',
                                },
                            ].map((item) => (
                                <Grid size={{xs: 12, sm: 6}} key={item.title}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            height: '100%',
                                        }}
                                    >
                                        {item.icon}
                                        <Typography fontWeight={600} sx={{mt: 1}}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid size={12} container alignItems="stretch">
                        {/* IMAGE (anchor) */}
                        <Grid size={{xs: 12, md: 6}} sx={{display: 'flex'}}>
                            <Box
                                component="img"
                                src={mooncakeImg}
                                alt="Mooncake Festival celebration"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: 360,
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    objectFit: 'cover',
                                }}
                            />
                        </Grid>

                        <Grid size={{xs: 12, md: 6}} sx={{display: 'flex'}}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                >
                                    Mooncake Festival Highlights
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{fontSize: '1.05rem', lineHeight: 1.8, mb: 2}}
                                >
                                    The Mooncake Festival is one of the most significant cultural celebrations
                                    in Chinese communities and symbolises reunion, harmony, gratitude, and togetherness.
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{fontSize: '1.05rem', lineHeight: 1.8, mb: 3}}
                                >
                                    TCSA sees community cultural events as important platforms for inclusion,
                                    connection, and multicultural engagement.
                                </Typography>

                                <Typography variant="h6" gutterBottom>
                                    Opportunities for the Community
                                </Typography>

                                <Stack spacing={1}>
                                    <Typography>✓ Multicultural participation</Typography>
                                    <Typography>✓ Cultural performances</Typography>
                                    <Typography>✓ Youth engagement</Typography>
                                    <Typography>✓ Cross-cultural dialogue</Typography>
                                    <Typography>✓ Social cohesion</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid size={12}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: {xs: 2, md: 4},
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Typography
                                variant="h5"
                                align="center"
                                sx={{mb: 3}}
                            >
                                Register for the Mooncake Festival Celebration
                            </Typography>

                            <Box
                                sx={{
                                    maxWidth: 600,
                                    mx: 'auto',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: 450,
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <iframe
                                        src="https://tally.so/embed/Bz2bBN?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                        width="100%"
                                        height="100%"
                                        title="Event Registration Form"
                                        style={{
                                            border: 'none',
                                            display: 'block',
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default MidAutumn;
