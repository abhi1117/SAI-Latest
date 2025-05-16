import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const About: FC = () => {
    const theme = useTheme();

    return (
        <Box
            id="ourvision"
            sx={{
                backgroundColor: 'background.paper',
                py: { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth={false} sx={{ maxWidth: '90%' }}>

                <Grid container spacing={6} alignItems="center">
                    {/* Image Section */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: { xs: 300, md: 400 },
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '110%',
                                    height: '100%',
                                    background: `linear-gradient(45deg, ${theme.palette.primary.light}10 0%, ${theme.palette.primary.dark}10 100%)`,
                                    zIndex: 1,
                                }
                            }}
                        >
                            <Image
                                src="/ourvision.png"
                                alt="About SmileAge India"
                                layout='fill'
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                                quality={100}
                            />
                        </Box>
                    </Grid>

                    {/* Content Section */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ maxWidth: 700, textAlign: 'center' }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    color: 'text.primary',
                                    fontSize: { xs: 32, md: 40 },
                                    position: 'relative',
                                    display: 'inline-block',
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 8,
                                        left: 0,
                                        width: '100%',
                                        height: 6,
                                        backgroundColor: theme.palette.primary.light,
                                        opacity: 0.3,
                                        borderRadius: 3,
                                    }
                                }}
                            >
                                Our Vision
                            </Typography>

                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: { xs: 16, md: 18 },
                                        fontWeight:"bold",
                                        mb: 2,
                                    }}
                                >
                                    SmileAge India is a people-powered initiative dedicated to transforming oral health for underserved and aging populations across India. We work to make oral health literacy a household right—not a hidden privilege—by combining grassroots action, digital innovation, and policy advocacy.
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontWeight: "bold",
                                        fontSize: { xs: 16, md: 18 },
                                    }}
                                >
                                    At SmileAge India, we believe that oral health is central to human dignity, communication, nutrition, and overall well-being. Yet millions—especially elders in old age homes, children in rural schools, and individuals with limited access to care—suffer silently from preventable oral health issues due to lack of awareness, education, and services. We are here to change that.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;