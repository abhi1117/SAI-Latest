import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'

const MessageFromFounder: FC = () => {
    const theme = useTheme()

    return (
        <Box
            id="MessageFromFounder"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                py: 8,
                backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : theme.palette.background.default,
            }}
        >
            <Box
                sx={{
                    width: '95%',
                    maxWidth: '1400px', // Slightly reduced from 1600px for better text flow
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        backgroundColor: 'background.paper',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 3,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: 6,
                        },
                    }}
                >
                    {/* Image Section - Adjusted proportions */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '32%' },
                            minHeight: { xs: '300px', md: '500px' },
                            position: 'relative',
                            backgroundColor: theme.palette.primary.light,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 4,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: 280,
                                height: 280,
                                borderRadius: '50%',
                                border: `4px solid ${theme.palette.background.paper}`,
                                overflow: 'hidden',
                                boxShadow: 3,
                            }}
                        >
                            <Image
                                src="/ShalyaAnand.jpg"
                                alt="Dr.Shalya Anand"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </Box>
                    </Box>

                    {/* Content Section - Optimized for text fitting */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '68%' },
                            p: { xs: 3, md: 5 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="overline"
                            color="primary"
                            sx={{
                                fontWeight: 'bold',
                                letterSpacing: 1,
                                mb: 1,
                                display: 'block',
                                fontSize: '0.9rem',
                            }}
                        >
                            Founders Message
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
                            }}
                        >
                            Dr. Shalya Anand
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{
                                mb: 3,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                lineHeight: 1.6,
                            }}
                        >
                            Founder & Chair, SmileAgeIndia (https://www.smileageindia.com )
                            <br />
                            Chair, Oral Health Literacy Division, International Health Literacy Association
                            <br />
                            Visiting Researcher, Adaptive Rationality, Max Planck Institute for Human Development
                            <br />
                            Ex-Visiting Fellow, Erasmus School of Health Policy & Management (ESHPM)
                            <br />
                            Healthcare Consultant, iAssisT.Health, Amersfoort, The Netherlands
                            <br />
                            Head of Dental Department, Mata Chanan Devi Hospital, Delhi
                        </Typography>


                        <Box>
                            <Typography
                                sx={{
                                    mb: 2,
                                    textAlign: 'justify',
                                    lineHeight: 1.7,
                                    fontStyle: 'italic',
                                    fontSize: '1rem',
                                    span: {
                                        fontWeight: 'bold',
                                        color: theme.palette.primary.main,
                                        mr: 1,
                                    },
                                }}
                            >
                                <span>Oral</span>health is a human right—not a privilege. Yet millions across India silently endure preventable oral diseases due to a lack of awareness, access, and education. This is not merely a dental issue; it is a public health crisis with ripple effects on nutrition, dignity, systemic health, and social inclusion.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    textAlign: 'justify',
                                    fontStyle: 'italic',
                                    lineHeight: 1.7,
                                    fontSize: '1rem',
                                }}
                            >
                                Through Smile Age India, we are building a people-first, digitally enabled, and ecologically conscious movement to make oral health literacy a national priority. Whether its using AI to assess oral conditions remotely, delivering eco-friendly hygiene kits to elders, training health workers, or advocating policy change—we are committed to solutions that are inclusive, sustainable, and impact-driven.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: 'justify',
                                    lineHeight: 1.7,
                                    fontStyle: 'italic',
                                    fontSize: '1rem',
                                    color: theme.palette.mode === 'dark' ? 'text.secondary' : 'text.primary',
                                }}
                            >
                                This mission is deeply personal. As India population ages and inequalities deepen, we must ensure that no one is left behind—not rural elders, not schoolchildren, and not caregivers. Health begins in the mouth, but it speaks to the heart of social justice.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: 'justify',
                                    lineHeight: 1.7,
                                    fontStyle: 'italic',
                                    fontSize: '1rem',
                                    color: theme.palette.mode === 'dark' ? 'text.secondary' : 'text.primary',
                                }}
                            >
                                I invite you to join hands with us—health professionals, educators, students, policymakers, corporates, and citizens—to rewrite the oral health story of our nation. Together, let’s build a future where every smile is seen, heard, and cared for.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MessageFromFounder