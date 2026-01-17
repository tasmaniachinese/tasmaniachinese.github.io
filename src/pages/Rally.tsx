import React from 'react';
import { Container, Typography, Box, Button, ImageList, ImageListItem, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import rally0 from '../assets/youthviolencerally/rally0.jpg';
import rally1 from '../assets/youthviolencerally/rally1.jpg';
import rally2 from '../assets/youthviolencerally/rally2.jpg';
import rally3 from '../assets/youthviolencerally/rally3.jpg';
import rally4 from '../assets/youthviolencerally/rally4.jpg';
import rally5 from '../assets/youthviolencerally/rally5.jpg';


// Placeholder images - Replace these with your real rally photos later
const itemData = [
    { img: rally0, title: 'Rally' },
    { img: rally1, title: 'Rally' },
    { img: rally2, title: 'Rally' },
    { img: rally3, title: 'Rally' },
    { img: rally4, title: 'Rally' },
    { img: rally5, title: 'Rally' },
];

const Rally = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Button component={Link} to="/" sx={{ mb: 4 }}>
                &larr; Back to Home
            </Button>
            <Paper elevation={0} sx={{ p: { xs: 0, md: 4 } }}> {/* Adds padding on desktop only */}
                <Typography
                    variant={"h2"}
                    align="center"
                    fontWeight="bold"
                    sx={{ mb: 4 }}
                >
                    Youth Violence Rally
                </Typography>
                <Typography component={"p"} sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                    The Hobart Chinese–Australian Community Rally Against Youth Violence was held on Saturday,
                    27 September 2025, at the Tasmanian Parliament Lawns. Organised by the Tasmania Chinese
                    Support Association, the peaceful two-hour rally aimed to raise awareness of escalating
                    youth violence in Hobart and surrounding areas, under the theme “Stop Youth Violence,
                    Our Safety Matters.”
                </Typography>
                <Typography component={"p"} sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                    The rally was prompted by several serious incidents over the past year, including a
                    particularly severe assault on a Chinese man at Glenorchy Shopping Mall, which heightened
                    safety concerns within the Chinese community. Community members, local residents, and
                    public representatives attended, including Alderman Mike Dutta, Hon. Cassy O’Connor MLC,
                    Mala Crew, and Hon. Bec Thomas MLC.
                </Typography>
                <Typography component={"p"} sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                    Speakers highlighted the social and personal impacts of youth violence, bullying, and
                    insufficient early intervention. Community leaders called on the government to strengthen
                    prevention measures, improve school responses to bullying, and enhance public safety.
                    Hon. Cassy O’Connor committed to raising these concerns in Parliament, while Alderman
                    Mike Dutta emphasised social cohesion, anti-racism, and shared responsibility for community
                    safety. Legal and personal testimonies illustrated the long-term consequences of youth
                    violence and institutional inaction.
                </Typography>
                <Typography component={"p"} sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 6 }}>
                    The rally remained orderly and peaceful, with participants displaying banners and engaging
                    in constructive discussion. It received media coverage from Today Australia (今日澳洲),
                    generating wider community discussion. Following the event, Hon. Bec Thomas MLC wrote to
                    the Premier advocating for a comprehensive plan to address youth offending. The Tasmanian
                    Government subsequently confirmed $500,000 in funding to support the establishment of a
                    Youth Hub in Glenorchy, aimed at providing mentoring, education, and mental health support
                    to help young people move away from offending behaviour.
                </Typography>
            </Paper>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    Event Highlights
                </Typography>
                <ImageList
                    variant="standard"
                    cols={3}
                    gap={16}
                    sx={{
                        // Responsive logic for columns:
                        // This tricky CSS makes it 1 column on mobile, 2 on tablet, 3 on desktop
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr) !important',
                            sm: 'repeat(2, 1fr) !important',
                            md: 'repeat(3, 1fr) !important'
                        }
                    }}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: '12px' }} // Adds nice rounded corners to images
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

        </Container>
    );
};

export default Rally;