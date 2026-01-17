import React from 'react';
import { Container, Typography, Box,  Grid, TextField, Button, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>

            <Grid container spacing={8}>

                {/* LEFT COLUMN: CONTACT INFO (Placeholders) */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                        Have a question about our programs or want to get involved?
                        We would love to hear from you. Fill out the form or reach us via the details below.
                    </Typography>

                    <Stack spacing={4}>
                        {/* Email */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Paper elevation={2} sx={{ p: 1.5, borderRadius: '50%', mr: 2, bgcolor: 'primary.light', color: 'white' }}>
                                <EmailIcon />
                            </Paper>
                            <Box>
                                <Typography variant="subtitle2" fontWeight="bold">Email Us</Typography>
                                <Typography variant="body2" color="text.secondary">info@tcsa.org.au</Typography>
                            </Box>
                        </Box>

                        {/* Phone (Placeholder) */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Paper elevation={2} sx={{ p: 1.5, borderRadius: '50%', mr: 2, bgcolor: 'primary.light', color: 'white' }}>
                                <PhoneIcon />
                            </Paper>
                            <Box>
                                <Typography variant="subtitle2" fontWeight="bold">Call Us</Typography>
                                <Typography variant="body2" color="text.secondary">(03) 6200 0000</Typography>
                            </Box>
                        </Box>

                        {/* Address (Placeholder) */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Paper elevation={2} sx={{ p: 1.5, borderRadius: '50%', mr: 2, bgcolor: 'primary.light', color: 'white' }}>
                                <LocationOnIcon />
                            </Paper>
                            <Box>
                                <Typography variant="subtitle2" fontWeight="bold">Visit Us</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hobart, Tasmania<br />
                                    Australia
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>


                {/* RIGHT COLUMN: CONTACT FORM */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                            Send us a Message
                        </Typography>

                        <Grid container spacing={3}>
                            {/* Name Field */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    placeholder="Jane"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder="Doe"
                                />
                            </Grid>

                            {/* Email Field */}
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant="outlined"
                                    type="email"
                                    placeholder="jane@example.com"
                                />
                            </Grid>

                            {/* Message Field */}
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    placeholder="How can we help you?"
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{ py: 1.5, fontWeight: 'bold' }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Contact;