'use client';

import React, { useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

interface Mentor {
    id: number;
    photo: string;
    name: string;
    category: string;
    description: string;
    linkedin: string;
}

const data: Mentor[] = [
   
    {
        id: 1,
        photo: '/images/mridula.png',
        name: 'Mridula Kapil Bhargava',
        category: 'Public Health Advocacy',
        description:
            'A passionate public health innovator focused on improving oral health literacy across diverse communities through tech-driven outreach and policy integration.',
        linkedin: 'https://www.linkedin.com/in/mridulakapil',
    },
    {
        id: 2,
        photo: '/images/amruta.png',
        name: 'Amruta Tripathy',
        category: 'Engineering Leadership',
        description:
            'Senior Engineering Manager at Honeywell with vast experience in software development and leading cross-functional tech teams toward innovation.',
        linkedin: 'https://www.linkedin.com/in/amruta-tripathy-5204',
    },
    {
        id: 4,
        photo: '/images/parul.png',
        name: 'Parul Sharma',
        category: 'Entrepreneurship',
        description:
            'Founder and CEO of Stthira Corporation, a visionary leader driving sustainable and inclusive innovations through entrepreneurship.',
        linkedin: 'https://www.linkedin.com/in/parulsharma337',
    },
    {
        id: 5,
        photo: '/images/jan.png',
        name: 'Jan Gerrit Schuurman',
        category: 'Science & Art',
        description:
            'Combines artistic creativity with scientific expertise to consult on complex challenges while promoting accessible science communication.',
        linkedin: 'https://www.linkedin.com/in/jan-gerrit-schuurman-16059617',
    },
    {
        id: 6,
        photo: '/images/priyanka.png',
        name: 'Priyanka Gudsoorkar',
        category: 'Biomedical Research & Teaching',
        description:
            'Assistant Professor at University of Cincinnati with expertise in biomedical engineering and translational health research.',
        linkedin: 'https://www.linkedin.com/in/priyankagudsoorkar',
    },
    {
        id: 14,
        photo: '/aarushi.jpg',
        name: 'Aarushi Anand',
        category: 'Biomedical Engineering',
        description:
            'Aspiring Biomedical Engineer from UT Austin, passionate about bridging innovation, tech, and medicine for community health advancement.',
        linkedin: 'https://www.linkedin.com/in/aarushianand2802',
    },
    {
        id: 8,
        photo: '/images/sujaya.png',
        name: 'Sujaya Mehta',
        category: 'Global Health & Innovation',
        description:
            'Strategic thinker passionate about innovation in global health systems and partnerships for equity-driven impact.',
        linkedin: 'https://www.linkedin.com/in/sujayamehta',
    },
    {
        id: 9,
        photo: '/images/aman.png',
        name: 'Aman',
        category: 'Neuroscience & Public Engagement',
        description:
            'PhD researcher dedicated to bridging neuroscience with public understanding through research, dialogue, and engagement.',
        linkedin: 'https://www.linkedin.com/in/amy-nederpelt-phd2024',
    },
    {
        id: 10,
        photo: '/images/shweta.png',
        name: 'Shweta Singh',
        category: 'Marketing & Communications',
        description:
            'Drives impactful communication strategies and marketing efforts at Hack2skill, empowering tech communities through storytelling.',
        linkedin: 'https://www.linkedin.com/in/shweta-singh-8a0b0039',
    },
    {
        id: 11,
        photo: '/images/yenni.jpeg',
        name: 'Yenni Zhang',
        category: 'Health Strategy & Policy',
        description:
            'Emerging expert in public health policy and strategy, driving evidence-based reforms with a global perspective.',
        linkedin: 'https://nl.linkedin.com/in/yenni-zhang-069033268',
    },
    {
        id: 12,
        photo: '/images/aaravee.jpeg',
        name: 'Aaravee Anand',
        category: 'Medical Innovation',
        description:
            'Medical student and researcher passionate about innovative clinical solutions and health equity.',
        linkedin: 'http://linkedin.com/in/aaravee-anand-820632297',
    },
];
    

const KnowledgePartners: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const scrollRef = useRef<HTMLDivElement>(null);

    
    // Auto-scroll every 4 seconds
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let isPaused = false;
        let pauseTimeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        // Set initial position to 0
        scrollContainer.scrollLeft = 0;

        const startAutoScroll: () => void = () => {
            interval = setInterval((): void => {
    if (!scrollContainer || isPaused) return;

    scrollContainer.scrollLeft += 1;

    const halfway = scrollContainer.scrollWidth / 2;

                // Reset to start only when we're past halfway but not actively scrolling manually
                if (scrollContainer.scrollLeft >= halfway) {
                    scrollContainer.scrollLeft = scrollContainer.scrollLeft - halfway;
                }
            }, 20);
        };

        startAutoScroll();

   const pauseScrolling: () => void = () => {
       isPaused = true;
       clearTimeout(pauseTimeout);
       pauseTimeout = setTimeout(() => {
           isPaused = false;
       }, 3000); // resume after 3s
   };

        // Attach pause method to ref
        (scrollRef as any).pauseAutoScroll = pauseScrolling;

        return () => {
            clearInterval(interval);
            clearTimeout(pauseTimeout);
        };
    }, []);
    
    
    

    const scrollBy = (offset: number): void => {
        const container = scrollRef.current;
        if (!container) return;

        (scrollRef as any).pauseAutoScroll?.(); // Pause auto scroll
        container.scrollBy({ left: offset, behavior: 'smooth' });
    };
    

    return (
        <Box id="knowledgepartners" sx={{ py: 6, px: isMobile ? 3 : 8, backgroundColor: '#f0f4f8' }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                        },
                    }}
                >
                    Knowledge Partners
                </Typography>

            </Box>

            {/* Scrollable Cards */}
            <Box
                ref={scrollRef}
                sx={{
                    display: 'flex',
                    overflowX: 'hidden',
                    gap: 3,
                    pb: 2,
                    scrollBehavior: 'smooth',
                }}
            >
                {[...data, ...data].map((mentor, idx) => (
                    <Box
                        key={idx}
                        onClick={() => (scrollRef as any).pauseAutoScroll?.()}
                        sx={{
                            cursor: 'pointer', // optional: shows it's clickable
                            flex: '0 0 auto',
                            width: { xs: 260, sm: 280, md: 300 },
                            scrollSnapAlign: 'start',
                            borderRadius: 4,
                            backdropFilter: 'blur(8px)',
                            background: 'rgba(255, 255, 255, 0.8)',
                            border: '1px solid rgba(200,200,200,0.3)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            transition: '0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
                            },
                        }}
                    >
               
                        <Box sx={{ height: 200, position: 'relative', borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: 'hidden' }}>
                            <Image
                                src={mentor.photo}
                                alt={mentor.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </Box>

                        <Box sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {mentor.name}
                                </Typography>
                                <IconButton
                                    href={mentor.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor: '#0A66C2',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#084594',
                                        },
                                        width: 32,
                                        height: 32,
                                    }}
                                >
                                    <LinkedInIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
                                {mentor.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                {mentor.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Bottom-center navigation buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap:2 }}>
                <IconButton
                    onClick={() => scrollBy(-300)}
                    sx={{
                        backgroundColor: 'white',
                        boxShadow: 2,
                        '&:hover': { backgroundColor: '#e0e0e0' },
                    }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    onClick={() => scrollBy(300)}
                    sx={{
                        backgroundColor: 'white',
                        boxShadow: 2,
                        '&:hover': { backgroundColor: '#e0e0e0' },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default KnowledgePartners;
