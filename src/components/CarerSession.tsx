import React from 'react';
import {Box, Card, CardContent, Chip, Container, Divider, Grid, Link, Stack, Typography} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import PhoneIcon from '@mui/icons-material/Phone';

const topics = [
    {
        en: 'Understand your healthcare rights in Australia',
        zh: '了解您在澳大利亚享有的医疗保健权益',
    },
    {
        en: 'Share your caring experiences and the challenges you face',
        zh: '分享照顾家人的经历，以及在照顾过程中遇到的挑战',
    },
    {
        en: 'Learn how to speak up for your needs and advocate for yourself and your family',
        zh: '学习如何表达自身需求，维护自己和家人的权益',
    },
    {
        en: 'Find out about support services and advocacy resources available in Tasmania',
        zh: '了解塔州可提供的支持服务及权益倡导资源',
    },
    {
        en: 'Look after your own physical and mental wellbeing as a carer',
        zh: '关注并提升照顾者自身的身心健康',
    },
];

const details = [
    {
        icon: <EventIcon color="primary"/>,
        en: 'Friday, 23 October 2026',
        zh: '2026年10月23日（星期五）',
    },
    {
        icon: <AccessTimeIcon color="primary"/>,
        en: '2:30pm – 5:00pm',
        zh: '下午2:30–5:00',
    },
    {
        icon: <LocationOnIcon color="primary"/>,
        en: (
            <Link
                href="https://www.google.com/maps/search/?api=1&query=2%2F1A+Anfield+St%2C+Glenorchy+TAS+7010"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
            >
                MRC Tas, CB Stand · 2/1A Anfield St, Glenorchy TAS 7010
            </Link>
        ),
    },
    {
        icon: <TranslateIcon color="primary"/>,
        en: 'Presented in Mandarin by Mandarin-speaking staff',
        zh: '普通话（由普通话工作人员主持并提供讲解）',
    },
    {
        icon: <LocalCafeIcon color="primary"/>,
        en: 'Light refreshments provided',
        zh: '现场提供轻茶点',
    },
];

const CarerSession = () => {
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
                                Upcoming Event · 活动预告
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{mb: 1}}>
                                Carer Information Session
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" sx={{mb: 2}}>
                                照顾者信息分享会
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{mb: 3}}>
                                <Chip label="Hosted by MRC Tas Phoenix Centre" color="primary" variant="outlined"/>
                            </Stack>
                            <Typography variant="body1" component={"p"}>
                                Are you caring for a family member, or helping someone close to you who has health,
                                daily living or other support needs?
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"} sx={{mt: 2}}>
                                MRC Tas Phoenix Centre warmly invites you to a Carer Information Session. Designed
                                especially for carers in the Chinese community, this session will help you understand
                                your rights, the support services available to you, and how to get the help you and
                                your family need.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component={"p"} sx={{mt: 2}}>
                                您是否正在照顾家人，或为身边有健康、日常生活或其他支持需求的人提供帮助？
                                MRC Tas Phoenix Centre 诚挚邀请您参加照顾者信息分享会！
                                本次活动专为华人社区的照顾者举办，旨在帮助您了解自身权益、可获得的支持服务，
                                以及如何更好地为自己和家人争取所需的帮助。
                            </Typography>
                            <Divider sx={{my: 3}}/>
                            <Typography variant="h6" fontWeight="bold" sx={{mb: 1}}>
                                What You Will Learn · 活动内容
                            </Typography>
                            <Box component="ul" sx={{pl: 3, my: 0}}>
                                {topics.map((topic) => (
                                    <Box component="li" key={topic.en} sx={{mb: 1}}>
                                        <Typography variant="body1">{topic.en}</Typography>
                                        <Typography variant="body2" color="text.secondary">{topic.zh}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12, md: 5}}
                              sx={{p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Box sx={{p: 3, borderRadius: 3, bgcolor: 'action.hover'}}>
                                <Typography variant="h6" fontWeight="bold" sx={{mb: 2}}>
                                    Event Details · 活动详情
                                </Typography>
                                <Stack spacing={2}>
                                    {details.map((detail, index) => (
                                        <Stack direction="row" spacing={2} alignItems="flex-start" key={index}>
                                            {detail.icon}
                                            <Box>
                                                <Typography variant="body1">{detail.en}</Typography>
                                                {detail.zh && (
                                                    <Typography variant="body2" color="text.secondary">
                                                        {detail.zh}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Divider sx={{my: 3}}/>
                                <Typography variant="h6" fontWeight="bold" sx={{mb: 1}}>
                                    Register & Enquiries · 报名及咨询
                                </Typography>
                                <Typography variant="body1" component={"p"}>
                                    To register or find out more, please contact Julian.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component={"p"} sx={{mb: 2}}>
                                    如需报名或了解更多信息，请联系 Julian。
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <PhoneIcon color="primary"/>
                                    <Link href="tel:0491908564" variant="h6" fontWeight="bold" underline="hover">
                                        0491 908 564
                                    </Link>
                                </Stack>
                                <Typography variant="body2" color="text.secondary" component={"p"} sx={{mt: 3}}>
                                    All eligible carers are welcome. We look forward to seeing you!
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component={"p"}>
                                    欢迎符合条件的照顾者参加。期待与您见面！
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CarerSession;
