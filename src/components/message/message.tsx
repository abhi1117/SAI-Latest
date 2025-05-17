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
                                fontWeight: 400,
                                lineHeight: 1.8,
                            }}
                        >
                            <Box
                                component="a"
                                href="https://linkedin.com/in/anandshalya"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'block',
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                linkedin.com/in/anandshalya
                            </Box>
                            <Box
                                component="a"
                                href="https://g.page/adashalya"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'block',
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                g.page/adashalya
                            </Box>
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
                                <span>Oral</span>health is often overlooked in conversations about healthy ageing—yet it is foundational to dignity, nutrition, communication, and quality of life. When older adults struggle to eat, speak, or smile due to tooth loss, pain, or oral infections, it isn’t just a dental issue—it’s a public health failure with far-reaching consequences.
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
                                Conditions like tooth decay, dry mouth, and gum disease are exacerbated by age-related frailty, chronic illness, and multiple medications. Left unaddressed, they drive malnutrition, social isolation, and even systemic diseases—silently eroding the well-being of our elders.
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
                                SmileAge India is my response to this silent crisis. It is a people-powered, tech-enabled, and ecologically conscious mission to make oral health literacy central to healthy ageing in India. Whether through AI screening tools, sustainable oral hygiene kits, grassroots training, or policy advocacy—we are committed to creating inclusive, sustainable change.
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