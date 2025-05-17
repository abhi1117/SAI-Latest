import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Divider,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    Container,
    useMediaQuery
} from '@mui/material';
import {
    Campaign,
    NaturePeople,
    Elderly,
    Policy,
    CheckCircle
} from '@mui/icons-material';

interface InitiativeCardProps {
    title: string;
    description: string;
    highlights: string[];
    icon: React.ReactNode;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ title, description, highlights, icon }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
       
        <Box
            
            sx={{
                p: 3,
                height: '100%',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[6],
                    borderColor: theme.palette.primary.light,
                }
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                    sx={{
                        backgroundColor: theme.palette.mode === 'light' ?
                            theme.palette.primary.light : theme.palette.primary.dark,
                        color: theme.palette.primary.contrastText,
                        p: 1.5,
                        borderRadius: '12px',
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: theme.shadows[2]
                    }}
                >
                    {React.cloneElement(icon as React.ReactElement, { fontSize: isMobile ? 'medium' : 'large' })}
                </Box>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    color={theme.palette.text.primary}
                >
                    {title}
                </Typography>
            </Box>
            <Typography
                variant="body1"
                color="text.secondary"
                mb={3}
                sx={{ lineHeight: 1.7, fontWeight: 600 }}
            >
                {description}
            </Typography>

            <List dense sx={{ pt: 0 }}>
                {highlights.map((highlight, index) => (
                    <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle
                                color="primary"
                                sx={{
                                    fontSize: 18,
                                    filter: `drop-shadow(0 0 2px ${theme.palette.primary.light})`
                                }}
                            />
                        </ListItemIcon>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                lineHeight: 1.6,
                                fontWeight: 700, // make it bold
                            }}
                        >
                            {highlight}
                        </Typography>

                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

interface ImpactMetricProps {
    metric: string;
    status: string;
}

const ImpactMetric: React.FC<ImpactMetricProps> = ({ metric, status }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                textAlign: 'center',
                p: isSmall ? 1.5 : 2,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                backgroundColor: theme.palette.background.default,
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: theme.palette.primary.light + '08',
                    borderColor: theme.palette.primary.light,
                }
            }}
        >
            <Typography
                variant={isSmall ? "h6" : "h5"}
                fontWeight={800}
                color={theme.palette.primary.main}
                gutterBottom
                sx={{ letterSpacing: '0.5px' }}
            >
                {status}
            </Typography>
            <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: isSmall ? '0.65rem' : '0.7rem',
                    fontWeight: 600
                }}
            >
                {metric}
            </Typography>
        </Box>
    );
};

const Ourwork: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const initiatives = [
        {
            title: "Digital Literacy & Awareness Campaigns",
            description: "Developing and deploying culturally sensitive, multilingual oral health literacy content across various platforms to make learning simple, inclusive, and actionable.",
            highlights: [
                "Literacy drives in schools, elderly care centers, and rural communities",
                "Digital content tailored for low-literacy and non-literate audiences",
                "Campaigns on oral-systemic links (diabetes, cardiovascular, aging)",
            ],
            icon: <Campaign />,
        },
        {
            title: "ECOMUSKAAN: Eco-Friendly Oral Hygiene Access",
            description: "Promoting eco-conscious oral hygiene by distributing sustainable toothbrushes through partnerships to address both health and environmental inequities.",
            highlights: [
                "10,000+ biodegradable brushes distributed",
                "Plastic reduction aligned with Swachh Bharat Mission",
                "Combines hygiene with health literacy in every kit",
            ],
            icon: <NaturePeople />,
        },
        {
            title: "Geriatric Oral Health: Partnership with HAI",
            description: "Collaborating with Healthy Ageing India to integrate oral health services for the elderly in Delhi-NCR, providing on-site care and education.",
            highlights: [
                "Mobile van clinics with digital screening and on-the-spot care",
                "Training for caregivers, ASHA workers, and oral health ambassadors",
                "Data collection for future research and AI development",
            ],
            icon: <Elderly />,
        },
        {
            title: "Policy Advocacy & National Integration",
            description: "Working to embed oral health literacy into national programs and policies through research, collaboration, and advocacy.",
            highlights: [
                "Advocacy for a Statutory Oral Health Literacy Body under MoHFW",
                "Collaboration with public and private stakeholders for scale-up",
                "Research-based briefs to influence system-wide change",
            ],
            icon: <Policy />,
        },
    ];

    const impactMetrics = [
        { metric: "Individuals Reached", status: "100,000+" },
        { metric: "Remote Assessments (DSOM)", status: "25,000+" },
        { metric: "Eco-Brushes Distributed", status: "10,000+" },
        { metric: "Elderly Beneficiaries (HAI)", status: "1,400+" },
        { metric: "Training Sessions", status: "300+" },
    ];

    return (
        <Container
            maxWidth="lg"
            id="ourwork"
            sx={{ py: 2, px: isMobile ? 3 : 6 }}
        >
            <Box  sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
                    variant={isMobile ? "h5" : "h4"}
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        mb: 2,
                        letterSpacing: '-0.5px'
                    }}
                >
                    Our Work
                </Typography>

                <Divider
                    sx={{
                        width: 80,
                        height: 4,
                        backgroundColor: theme.palette.primary.main,
                        margin: '0 auto 24px',
                        borderRadius: 2
                    }}
                />

                <Typography
                    variant={isMobile ? "body2" : "body1"}
                    color="text.secondary"
                    sx={{
                        maxWidth: 800,
                        mx: 'auto',
                        lineHeight: 1.8,
                        fontSize: isMobile ? '0.9rem' : '1.1rem'
                    }}
                >
                 <Typography
                        component="span"
                        fontWeight={900}
                    >
                        Together, we are reimagining oral health—from a clinical afterthought to a national movement. Join us in bringing smiles to the forefront of the public health journey of all Indians.
                    </Typography>,
                   

                </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mb: 8 }}>
                {initiatives.map((initiative, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <InitiativeCard
                            title={initiative.title}
                            description={initiative.description}
                            highlights={initiative.highlights}
                            icon={initiative.icon}
                        />
                    </Grid>
                ))}
            </Grid>


            <Box
                sx={{
                    mt: 6,
                    p: isMobile ? 3 : 4,
                    backgroundColor: theme.palette.mode === 'light' ?
                        theme.palette.grey[50] : theme.palette.grey[900],
                    borderRadius: 3,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant={isMobile ? "body2" : "body1"}
                    fontStyle="italic"
                    color="text.secondary"
                    sx={{
                        fontWeight: 500,
                        maxWidth: 800,
                        mx: 'auto',
                        lineHeight: 1.8,
                        fontSize: isMobile ? '0.9rem' : '1.1rem'
                    }}
                >
                    Together, we are reimagining oral health—from a clinical afterthought to a national movement. Join us in bringing smiles to the forefront of Indias public health journey.
                </Typography>
            </Box>
        </Container>
    );
};

export default Ourwork;
