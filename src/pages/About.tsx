import React from 'react';
import { Container, Typography, Box, Grid, Paper, Stack, Divider } from '@mui/material';
import DiversityEmblem from '@mui/icons-material/Diversity2';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import aboutImage1 from '../assets/common/about_us1.png';
import aboutImage2 from '../assets/common/about_us2.jpg';

const About = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>

            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                    About TCSA
                </Typography>
            </Box>
            <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}
                    >
                        The Tasmania Chinese Social Association (TCSA) is a community-based multicultural organisation
                        committed to supporting Chinese-Australians, international students, migrants, and broader
                        multicultural communities across Tasmania.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ mt: 2, mb: 1 }}
                    >
                        TCSA aims to
                    </Typography>

                    <Box component="ul" sx={{ pl: 3, m: 0, mb: 2 }}>
                        <li>Promote social inclusion and multicultural participation</li>
                        <li>Support settlement and community connection for new migrants</li>
                        <li>Encourage civic engagement and leadership development</li>
                        <li>Strengthen cross-cultural understanding within Tasmania</li>
                        <li>Build stronger connections between multicultural communities and wider society</li>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}
                    >
                        TCSA focuses particularly on creating practical pathways for young people,
                        international students, and newly arrived migrants to become active contributors
                        and future leaders within the Tasmanian community.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                        component="img"
                        src={aboutImage1}
                        alt="Community Connection"
                        sx={{
                            width: '100%',
                            height: { xs: '300px', md: '400px' }, // Fixed height for neatness
                            objectFit: 'cover',
                            borderRadius: 4,
                            boxShadow: 3,
                        }}
                    />
                </Grid>
            </Grid>

            <Divider sx={{ my: 8 }} />

            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
                    Current Focus Areas
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ProgramCard
                            title="Supporting New Migrants and International Students"
                            icon={<DiversityEmblem color="primary" fontSize="large" />}
                            accentColor="#1976d2" // Primary Blue
                        >
                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                TCSA recognises that many new migrants and international students face challenges including:
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    • social isolation
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • language and communication barriers
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • lack of local networks
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • difficulty understanding Australian systems and services
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • employment and career uncertainty
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • limited opportunities for community participation
                                </Typography>
                            </Stack>

                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                TCSA is working to provide:
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    • community orientation and settlement support
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • social networking opportunities
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • mentoring and peer support
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • referral pathways to local services
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • volunteering opportunities
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • activities that help migrants develop confidence, belonging, and local connections
                                </Typography>
                            </Stack>
                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                The organisation aims to help new arrivals not only “settle”, but also develop a sense of ownership, participation, and long-term belonging within Tasmania.
                            </Typography>
                        </ProgramCard>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ProgramCard
                            title="Youth Leadership and Civic Participation"
                            icon={<DiversityEmblem color="primary" fontSize="large" />}
                            accentColor="#9c27b0" // Primary Blue
                        >
                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                One of TCSA’s major priorities is developing young multicultural leaders in Tasmania.
                                TCSA believes multicultural communities should not only participate in events, but also:
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    • contribute to public life
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • engage with local institutions
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • participate in decision-making
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • difficulty understanding Australian systems and services
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • volunteer within the community
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • become future community and professional leaders
                                </Typography>
                            </Stack>

                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                Future initiatives may include:
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 2, mb: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    • youth leadership programs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • civic participation workshops
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • mentoring by established professionals
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • community volunteering projects
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • networking with government and community organisations
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • leadership pathways for multicultural youth and international students
                                </Typography>
                            </Stack>
                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                The goal is to empower young people to see Tasmania as a place where they can contribute, lead, and build their future.
                            </Typography>
                        </ProgramCard>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 8 }} />

            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
                    Key Community Projects
                </Typography>

                <Grid container spacing={4}>
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

            <Grid container spacing={6} alignItems="center">
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

                <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 2 } }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                        Our Commitment & Vision
                    </Typography>
                    <Typography variant="body1" component={"p"} sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                        TCSA is committed to inclusive practice, strong governance, and evidence-based delivery.
                        We collaborate closely with community organisations, educators, service providers, and volunteers to ensure our programs are accessible, responsive, and outcomes-focused.
                    </Typography>

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

interface ProgramCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    accentColor: string;
}

const ProgramCard = ({ title, icon, children, accentColor }: ProgramCardProps) => (
    <Paper
        elevation={2}
        sx={{
            p: 4,
            height: '100%',
            borderRadius: 3,
            borderLeft: `6px solid ${accentColor}`,
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'translateY(-5px)',
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
