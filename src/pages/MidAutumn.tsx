import React, {useState} from 'react';
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    ImageList,
    ImageListItem,
    Paper,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlaceIcon from '@mui/icons-material/Place';
import {Link} from 'react-router-dom';
import heroImg from '../assets/midautumn/hero.jpg';
import crowdImg from '../assets/midautumn/crowd.jpg';
import wavingImg from '../assets/midautumn/waving.jpg';
import volunteersImg from '../assets/midautumn/volunteers.jpg';
import groupImg from '../assets/midautumn/group.jpg';
import hanfuImg from '../assets/midautumn/hanfu.jpg';
import lionImg from '../assets/midautumn/lion.jpg';
import danceSchoolImg from '../assets/midautumn/dance_school.jpg';
import danceEthnicImg from '../assets/midautumn/dance_ethnic.jpg';
import qipaoImg from '../assets/midautumn/qipao.jpg';
import lanternImg from '../assets/midautumn/lantern.jpg';
import kitchenImg from '../assets/midautumn/kitchen.jpg';
import foodImg from '../assets/midautumn/food.jpg';
import audienceImg from '../assets/midautumn/audience.jpg';
import chatImg from '../assets/midautumn/chat.jpg';
import familyImg from '../assets/midautumn/family.jpg';
import mpImg from '../assets/midautumn/mp.jpg';
import awardImg from '../assets/midautumn/award.jpg';
import sponsorImg from '../assets/midautumn/sponsor.jpg';

type Lang = 'en' | 'zh';

const sponsors = [
    'China Lanzhou Beef Noodle',
    'Saigonexpress',
    'Nocton Vineyard',
    'UGG',
    'Beebom TRAVEL & RETREATS',
];

const content = {
    en: {
        title: 'TCSA Celebrates First Anniversary with a Successful Mid-Autumn Festival',
        subtitle: 'Bringing more than 300 people together',
        date: 'Sunday, 13 September 2026',
        location: 'Kingborough Community Hub',
        stats: [
            {value: '300+', label: 'Community members'},
            {value: '15', label: 'Dedicated volunteers'},
            {value: '1st', label: 'Anniversary of TCSA'},
        ],
        intro: [
            'The Tasmania Chinese Support Association Inc (TCSA) celebrated its first anniversary with a vibrant Mid-Autumn Festival celebration, bringing together more than 300 people from across Tasmania and from a diverse range of cultural backgrounds.',
            'The event featured a diverse program of cultural performances, traditional and contemporary entertainment, lantern-making activities, food, community information and opportunities for families, friends and community members to connect and celebrate together.',
        ],
        belongingTitle: 'Celebrating culture and belonging',
        belonging: [
            'The Mid-Autumn Festival is traditionally a time for families and communities to come together, share food and stories, and celebrate connection. For TCSA, this year’s celebration carried an additional meaning as it marked the organisation’s first anniversary.',
            'TCSA President and CEO Mingqing Yang said the event was an opportunity not only to celebrate Chinese culture, but also to create a welcoming space where people from different backgrounds could connect.',
        ],
        presidentQuote:
            '“We want people to feel happy, comfortable and safe. We want people to have somewhere they can connect, be heard, support one another and, most importantly, feel that they belong.”',
        presidentName: '— Mingqing Yang, TCSA President and CEO',
        memberQuote:
            '“Thank you so much for organising such a wonderful event. For the first time, I feel like I have a sense of home in Tasmania.”',
        memberName: '— A community member',
        volunteersTitle: 'Powered by volunteers and community support',
        volunteers: [
            'The success of the celebration was made possible through the contribution of approximately 15 dedicated volunteers, who worked throughout the day to prepare, coordinate and deliver the event.',
            'From setting up the venue and assisting performers and guests to preparing food, supporting activities and cleaning up afterwards, volunteers contributed their time and energy to ensure the community could enjoy the celebration.',
            'TCSA also acknowledges the valuable support of its supporting organisations, sponsors, community partners, performers and community members whose contributions helped make the event possible.',
        ],
        milestoneTitle: 'A milestone, and a new beginning',
        milestone: [
            'The organisation was established with the vision of “Unity of Voice, Hand of Support”, with a focus on building connections, supporting community wellbeing, encouraging cultural exchange and helping community members navigate challenges in their lives in Tasmania.',
            'While the event was a great success, TCSA recognises that there are always things that can be improved, and welcomes the feedback shared by participants and volunteers to continue improving future activities.',
            'The celebration may have come to an end, but TCSA’s journey is only beginning.',
        ],
        closing: 'Together, hand in hand, one step at a time.',
        galleryTitle: 'Event Highlights',
        sponsorsTitle: 'Big thanks to our sponsors',
    },
    zh: {
        title: '塔州华人互助协会成立一周年暨中秋嘉年华圆满举行',
        subtitle: '300余人共庆中秋、共享社区温暖',
        date: '2026年9月13日（星期日）',
        location: 'Kingborough Community Hub',
        stats: [
            {value: '300+', label: '社区成员参与'},
            {value: '15', label: '名志愿者'},
            {value: '1', label: '周年庆典'},
        ],
        intro: [
            '塔州华人互助协会（Tasmania Chinese Support Association Inc，简称 TCSA）于2026年9月13日在 Kingborough Community Hub 举办中秋嘉年华暨成立一周年庆典，吸引了来自塔州各地、不同文化背景的300余名社区成员参加。',
            '活动通过文化表演、美食、灯笼制作、互动活动及社区交流等丰富内容，为当地居民和不同文化背景的社区成员创造了一个相聚、交流和共同庆祝的空间，同时也共同见证了 TCSA 成立一周年这一重要里程碑。',
        ],
        belongingTitle: '庆祝文化，更庆祝人与人之间的连接',
        belonging: [
            '中秋节是一个关于团聚、分享和感恩的节日。对于 TCSA 而言，今年的中秋嘉年华又多了一层特别的意义——这是协会成立一周年的重要庆典。',
            'TCSA 主席兼首席执行官 Mingqing Yang 表示，此次活动不仅是对中华文化的庆祝，更希望为不同文化背景的人们提供一个开放、友善和包容的交流空间。',
        ],
        presidentQuote:
            '“我们希望每一个人都能够感到开心、舒心和安心。我们希望大家有一个可以交流、被倾听、彼此支持的地方，更重要的是，让每个人都能够感受到自己属于这个社区。”',
        presidentName: '—— TCSA 主席兼首席执行官 Mingqing Yang',
        memberQuote: '“非常感谢你们举办这么好的活动！第一次感觉在塔州有了家的感觉！”',
        memberName: '—— 一位参加活动的社区成员',
        volunteersTitle: '15名志愿者，以行动支持社区',
        volunteers: [
            '本次活动的成功举办，离不开约15名志愿者的无私投入。',
            '从活动前期准备，到现场布置、协助表演团队及嘉宾、餐饮安排、活动协调，再到活动结束后的清理工作，志愿者们从早到晚投入其中。他们没有报酬，却用自己的时间、体力和热情，为社区贡献了一整天。',
            'TCSA 同时向所有支持单位、赞助商、合作伙伴、表演团队以及每一位参与活动的社区成员表示诚挚感谢。正是大家的共同参与和支持，让这场属于社区的中秋庆典成为可能。',
        ],
        milestoneTitle: '一周年，是庆祝，也是新的起点',
        milestone: [
            'TCSA 始终坚持 “Unity of Voice, Hand of Support——同心发声，携手相助” 的理念，希望通过社区活动、文化交流和支持服务，为社区成员建立更多连接，同时推动一个更加包容、互助和有归属感的多元文化社区。',
            '活动虽然圆满结束，但大型活动中难免仍有一些可以改进的地方。TCSA 感谢所有参与者和志愿者给予的反馈，并将认真总结经验，不断完善未来的社区活动。',
            '中秋嘉年华落下帷幕，但 TCSA 的社区之路才刚刚开始。',
        ],
        closing: '一起手拉手，慢慢走下去。',
        galleryTitle: '活动精彩瞬间',
        sponsorsTitle: '特别感谢我们的赞助商',
    },
};

const galleryData = [
    {img: hanfuImg, title: 'Guests in traditional Hanfu'},
    {img: foodImg, title: 'Food shared at the festival'},
    {img: lionImg, title: 'Lion dance'},
    {img: danceSchoolImg, title: 'Performance by Tasmania Chinese School'},
    {img: danceEthnicImg, title: 'Cultural dance performance'},
    {img: qipaoImg, title: 'Qipao performers'},
    {img: lanternImg, title: 'Lantern-making activity'},
    {img: kitchenImg, title: 'Volunteers preparing food'},
    {img: audienceImg, title: 'Audience enjoying the show'},
    {img: chatImg, title: 'Community members catching up'},
    {img: familyImg, title: 'Families celebrating together'},
    {img: mpImg, title: 'Peter George MP speaking'},
    {img: awardImg, title: 'Presentation on stage'},
    {img: sponsorImg, title: 'Sponsor Saigon Express'},
];

const imgSx = {
    width: '100%',
    height: '100%',
    display: 'block',
    borderRadius: 3,
    boxShadow: 3,
    objectFit: 'cover',
} as const;

const Paragraphs = ({items}: { items: string[] }) => (
    <>
        {items.map((text) => (
            <Typography key={text} component={"p"} sx={{fontSize: '1.1rem', lineHeight: 1.8, mb: 2}}>
                {text}
            </Typography>
        ))}
    </>
);

const Quote = ({text, author}: { text: string; author: string }) => (
    <Paper
        elevation={0}
        sx={{
            p: 3,
            my: 3,
            borderLeft: '6px solid',
            borderColor: 'primary.main',
            bgcolor: 'action.hover',
            borderRadius: 2,
        }}
    >
        <FormatQuoteIcon color="primary"/>
        <Typography sx={{fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.8}}>
            {text}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
            {author}
        </Typography>
    </Paper>
);

const MidAutumn = () => {
    const [lang, setLang] = useState<Lang>('en');
    const t = content[lang];

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const galleryCols = isMd ? 3 : isSm ? 2 : 1;

    return (
        <Container maxWidth="lg" sx={{py: 8}} id={"event_details"}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 4}}>
                <Button component={Link} to="/">
                    &larr; Back to Home
                </Button>
                <ToggleButtonGroup
                    value={lang}
                    exclusive
                    size="small"
                    onChange={(_, value: Lang | null) => value && setLang(value)}
                    aria-label="Language"
                >
                    <ToggleButton value="en">English</ToggleButton>
                    <ToggleButton value="zh">中文</ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Box component="img" src={heroImg} alt="2026 Mooncake Festival - TCSA First Anniversary Celebration"
                 sx={imgSx}/>

            <Box sx={{textAlign: 'center', mt: 6, mb: 4}}>
                <Typography variant="h3" fontWeight="bold" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>
                    {t.title}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{mt: 2}}>
                    {t.subtitle}
                </Typography>
                <Stack direction={{xs: 'column', sm: 'row'}} spacing={1} justifyContent="center" alignItems="center"
                       sx={{mt: 3}}>
                    <Chip icon={<CalendarMonthIcon/>} label={t.date} variant="outlined"/>
                    <Chip icon={<PlaceIcon/>} label={t.location} variant="outlined"/>
                </Stack>
            </Box>

            <Grid container spacing={2} sx={{mb: 6}}>
                {t.stats.map((stat) => (
                    <Grid key={stat.label} size={{xs: 12, sm: 4}}>
                        <Paper elevation={0} sx={{
                            p: 3,
                            textAlign: 'center',
                            borderRadius: 3,
                            border: '1px solid',
                            borderColor: 'divider'
                        }}>
                            <Typography variant="h3" fontWeight="bold" color="primary">{stat.value}</Typography>
                            <Typography color="text.secondary">{stat.label}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{maxWidth: 860, mx: 'auto', mb: 6}}>
                <Paragraphs items={t.intro}/>
            </Box>

            <Box component="img" src={crowdImg} alt="More than 300 people at Kingborough Community Hub"
                 sx={{...imgSx, mb: 8}}/>

            <Grid container spacing={6} alignItems="center" sx={{mb: 8}}>
                <Grid size={{xs: 12, md: 7}}>
                    <Typography variant="h4" fontWeight="bold" sx={{mb: 3}}>{t.belongingTitle}</Typography>
                    <Paragraphs items={t.belonging}/>
                    <Quote text={t.presidentQuote} author={t.presidentName}/>
                </Grid>
                <Grid size={{xs: 12, md: 5}}>
                    <Box component="img" src={wavingImg} alt="Community members greeting each other"
                         sx={{...imgSx, aspectRatio: {md: '4 / 5'}}}/>
                </Grid>
            </Grid>

            <Paper elevation={0} sx={{
                p: {xs: 4, md: 6},
                mb: 8,
                borderRadius: 4,
                textAlign: 'center',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
            }}>
                <FormatQuoteIcon sx={{fontSize: 48}}/>
                <Typography sx={{fontSize: {xs: '1.3rem', md: '1.7rem'}, fontStyle: 'italic', lineHeight: 1.6}}>
                    {t.memberQuote}
                </Typography>
                <Typography sx={{mt: 2, opacity: 0.85}}>{t.memberName}</Typography>
            </Paper>

            <Grid container spacing={6} alignItems="center" sx={{mb: 8}}>
                <Grid size={{xs: 12, md: 5}} order={{xs: 2, md: 1}}>
                    <Box component="img" src={volunteersImg} alt="TCSA volunteers" sx={imgSx}/>
                </Grid>
                <Grid size={{xs: 12, md: 7}} order={{xs: 1, md: 2}}>
                    <Typography variant="h4" fontWeight="bold" sx={{mb: 3}}>{t.volunteersTitle}</Typography>
                    <Paragraphs items={t.volunteers}/>
                </Grid>
            </Grid>

            <Box sx={{maxWidth: 860, mx: 'auto', mb: 4}}>
                <Typography variant="h4" fontWeight="bold" sx={{mb: 3}}>{t.milestoneTitle}</Typography>
                <Paragraphs items={t.milestone}/>
            </Box>
            <Box component="img" src={groupImg} alt="Performers, volunteers and guests on stage"
                 sx={{...imgSx, mb: 3}}/>
            <Typography variant="h5" fontWeight="bold" color="primary" align="center" sx={{mb: 8}}>
                {t.closing}
            </Typography>

            <Box sx={{mb: 8}}>
                <Typography variant="h4" fontWeight="bold" align="center" sx={{mb: 4}}>
                    {t.galleryTitle}
                </Typography>
                <ImageList variant="masonry" cols={galleryCols} gap={16}>
                    {galleryData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{borderRadius: '12px'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

            <Paper elevation={0} sx={{
                p: {xs: 3, md: 4},
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                textAlign: 'center',
            }}>
                <Typography variant="h5" fontWeight="bold" sx={{mb: 3}}>{t.sponsorsTitle}</Typography>
                <Stack direction="row" flexWrap="wrap" justifyContent="center" useFlexGap spacing={1.5}>
                    {sponsors.map((name) => (
                        <Chip key={name} label={name} color="primary" variant="outlined"
                              sx={{fontSize: '1rem', py: 2.5, px: 1}}/>
                    ))}
                </Stack>
            </Paper>
        </Container>
    );
};

export default MidAutumn;
