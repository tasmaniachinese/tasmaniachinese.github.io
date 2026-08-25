import React, {useEffect} from 'react';
import {Box, Button, Container, Grid, Paper, Stack, Typography} from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Link} from 'react-router-dom';
import midAutumnImg from '../assets/midautumn/mid_autumn_md.jpg';

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
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <Box
                            component="img"
                            src={midAutumnImg}
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
