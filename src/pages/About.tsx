import React from 'react';
import { Container, Typography, Box, Grid, Paper, Stack, Divider } from '@mui/material';
import DiversityEmblem from '@mui/icons-material/Diversity2';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import aboutImage1 from '../assets/common/about_us1.png';
import aboutImage2 from '../assets/common/about_us2.jpg';

// Placeholder images - replace with real ones later
const image1_community = 'https://images.unsplash.com/photo-1582213782179-e0d7145014ad?auto=format&fit=crop&w=800&q=80'; // Diverse hands/community
const image2_vision = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80';    // Nature/Growth/Tasmania vibe

const About = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>

            {/* ================= MAIN TITLE ================= */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                    About TCSA
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                    Strengthening wellbeing, safety, and social connection for Tasmania's diverse communities.
                </Typography>
            </Box>


            {/* ================= SECTION 1: WHO WE ARE (Text Left, Image Right) ================= */}
            <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
                {/* TEXT BLOCK */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                        Our Mission & Origin
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                        Tasmania Chinese Support Association (TCSA) is a community-led not-for-profit organisation established in 2025.
                        Our mission is to strengthen wellbeing, safety, and social connection for culturally and linguistically diverse (CALD) communities across Tasmania.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                        We work directly with families, young people, and community partners to reduce barriers to participation and access to support.
                        We particularly focus on helping non-native English speakers who may experience isolation, communication challenges, or difficulty navigating local services.
                    </Typography>
                </Grid>

                {/* IMAGE BLOCK */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                        component="img"
                        src={aboutImage1}
                        alt="Community Connection"
                        sx={{
                            width: '100%',
                            height: { xs: '300px', md: '400px' }, // Fixed height for neatness
                            objectFit: 'cover',
                            borderRadius: 4, // Soft rounded corners
                            boxShadow: 3,
                        }}
                    />
                </Grid>
            </Grid>

            <Divider sx={{ my: 8 }} />

            {/* ================= SECTION 2: OUR PROGRAMS (Two Feature Cards) ================= */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
                    Our Core Programs
                </Typography>

                <Grid container spacing={4}>
                    {/* PROGRAM 1 CARD */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ProgramCard
                            title="Safe • Confident • Connected"
                            icon={<DiversityEmblem color="primary" fontSize="large" />}
                            accentColor="#1976d2" // Primary Blue
                        >
                            Supports children and young people aged 8–19 through structured workshops focused on personal safety awareness,
                            communication confidence, and safer community participation. Delivered in partnership with schools and local services,
                            the program helps participants develop practical skills, strengthen help-seeking behaviours, and build supportive peer and community networks.
                        </ProgramCard>
                    </Grid>

                    {/* PROGRAM 2 CARD */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ProgramCard
                            title="EmpowerHER Tasmania"
                            icon={<LightbulbIcon color="secondary" fontSize="large" />}
                            accentColor="#9c27b0" // Secondary Purple/Pink
                        >
                            Our pathway program for girls and young women—especially non-native English speakers—designed to reduce barriers
                            to participation in STEM education, careers, and entrepreneurship. EmpowerHER combines accessible STEM learning,
                            mentoring, industry exposure, leadership capability-building, and targeted scholarship supports to help participants navigate transition points into study and work.
                        </ProgramCard>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 8 }} />


            {/* ================= SECTION 3: VISION & VALUES (Image Left, Text Right) ================= */}
            <Grid container spacing={6} alignItems="center">
                {/* IMAGE BLOCK (Order changes on mobile to sit above text) */}
                <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 1 } }}>
                    <Box
                        component="img"
                        src={aboutImage2}
                        alt="Tasmanian Vision"
                        sx={{
                            width: '100%',
                            height: { xs: '300px', md: '400px' },
                            objectFit: 'cover',
                            borderRadius: 4,
                            boxShadow: 3,
                        }}
                    />
                </Grid>

                {/* TEXT BLOCK */}
                <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 2 } }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                        Our Commitment & Vision
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                        TCSA is committed to inclusive practice, strong governance, and evidence-based delivery.
                        We collaborate closely with community organisations, educators, service providers, and volunteers to ensure our programs are accessible, responsive, and outcomes-focused.
                    </Typography>

                    {/* Highlighting the final vision statement */}
                    <Paper elevation={0} sx={{ bgcolor: 'primary.light', p: 3, borderRadius: 2, mt: 3, color: 'white' }}>
                        <Typography variant="h6" component="p" fontWeight="bold" sx={{ fontStyle: 'italic' }}>
                            "Our vision is a Tasmania where every person—regardless of language background—can feel safe, supported, and connected, and where girls and young women can pursue STEM pathways with confidence and opportunity."
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
};

// ================= HELPER COMPONENT FOR PROGRAM CARDS =================
// This keeps the main code clean. It creates a nice box with a colored border on the left.
const ProgramCard = ({ title, icon, children, accentColor }: any) => (
    <Paper
        elevation={2}
        sx={{
            p: 4,
            height: '100%',
            borderRadius: 3,
            borderLeft: `6px solid ${accentColor}`, // The colored accent line
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'translateY(-5px)', // A subtle lift effect on hover
                boxShadow: 4
            }
        }}
    >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            {icon}
            <Typography variant="h5" fontWeight="bold">
                {title}
            </Typography>
        </Stack>
        <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            {children}
        </Typography>
    </Paper>
);

export default About;