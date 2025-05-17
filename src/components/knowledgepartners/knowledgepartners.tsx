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
        photo: '/images/padma.jpeg',
        name: 'Dr. Padma gadiyar',
        category: 'Queensland’s 40 under 40 2023',
        description:
            'Founder and CEO of Smilo.ai, an innovative AI-powered app and web-based virtual care platform connecting patients and dental practitioners.',
        linkedin: 'https://www.linkedin.com/in/drpadmagadiyar/',
    }, {
        id: 2,
        photo: '/images/mridula.png',
        name: 'Mridula Kapil Bhargava',
        category: 'Public Health Advocacy',
        description:
            'A dynamic public health professional with over a decade of dedicated service in healthcare, emphasizing health advocacy and literacy, especially in diabetes.',
        linkedin: 'https://www.linkedin.com/in/mridulakapil',
    },
    
    {
        id: 3,
        photo: '/images/amruta.png',
        name: 'Amruta Tripathy',
        category: 'Healthcare professional & Health Economist',
        description:
            'Passionate healthcare professional with a robust educational foundation in medicine, health economics, management, and research methods.',
        linkedin: 'https://www.linkedin.com/in/amruta-tripathy-5204',
    },
    {
        id: 4,
        photo: '/images/parul.png',
        name: 'Parul Sharma',
        category: 'Entrepreneurship',
        description:
            'A commanding officer and dental advisor at the Indian Army for over 25 years , passionate about improving the oral health and well-being of the troops, the geriatric patients, and the community at large.',
        linkedin: 'https://www.linkedin.com/in/parulsharma337',
    },
    {
        id: 5,
        photo: '/images/jan.png',
        name: 'Jan Gerrit Schuurman',
        category: 'Science & Art',
        description:
            'Behavioral Scientist and Scholar Activist with a history in fundamental research, industry research, science governance and Risk Communication.',
        linkedin: 'https://www.linkedin.com/in/jan-gerrit-schuurman-16059617',
    },
    {
        id: 6,
        photo: '/images/priyanka.png',
        name: 'Priyanka Gudsoorkar',
        category: 'Public Health Researcher',
        description:
            'Assistant Professor at the University of Cincinnati College of Medicine, and co-founder of Solidarity Dental Foundation, with an aim to improve oral health for all.',
        linkedin: 'https://www.linkedin.com/in/priyankagudsoorkar',
    },
    {
        id: 14,
        photo: '/aarushi.jpg',
        name: 'Aarushi Anand',
        category: 'Biomedical Engineering',
        description:
            'Social media strategist, Content planner, creator and manager @ Artrushi Specialising in Robotics to integrate psychology with technology for innovative approaches in healthcare services.',
        linkedin: 'https://www.linkedin.com/in/aarushianand2802',
    },
    {
        id: 8,
        photo: '/images/sujaya.png',
        name: 'Sujay Mehta',
        category: 'Global Health & Innovation',
        description:
            'Faculty at Harvard Macy Institute, MIT, & Solidarity Dental  Passionate about innovation in global health systems and partnerships for equity-driven impact.',
        linkedin: 'https://www.linkedin.com/in/sujayamehta',
    },
    {
        id: 9,
        photo: '/images/aman.png',
        name: 'Dr Amman Pabbla',
        category: 'Public Health Researcher',
        description:
            'A public health researcher in the Netherlands and ex-dentist with 10+ years of experience turning real-world data into strategy—improving healthcare access, equity, and outcomes across systems.',
        linkedin: 'https://www.linkedin.com/in/amy-nederpelt-phd2024',
    },
    {
        id: 10,
        photo: '/images/shweta.png',
        name: 'Shweta Singh',
        category: 'Public Health Researcher',
        description:
            'Technical Head ( Research and Public Health) at ACCESS Health International with expertise on Health care utilization pattern, Adolescent health, Family planning and Health care of Elderly.',
        linkedin: 'https://www.linkedin.com/in/shweta-singh-8a0b0039',
    },
    {
        id: 11,
       
        photo: '/images/Yenni2.jpeg',
        name: 'Yenni Zhang',
        category: 'passionate about health equity',
        description:
            'Legal and Creative support.',
        linkedin: 'https://nl.linkedin.com/in/yenni-zhang-069033268',
    },
    {
        id: 12,
        photo: '/images/aaravee2.jpeg',
        name: 'Aaravee Anand',
        category: 'Medical Innovation',
        description:
            'Medical student and researcher passionate about innovative clinical solutions and health equity.',
        linkedin: 'http://linkedin.com/in/aaravee-anand-820632297',
    },
    {
        id: 15,
        photo: '/images/Himanshu.jpeg',
        name: 'Dr. Himanshu Kalia',
        category: 'Medical Innovation',
        description:
            'AI in Healthcare | Digital Twin & Medical Tech Research | Innovator in Digital Healthcare | Consultant in Digital Twin Technologies | Published Researcher with Expertise in Healthtech, Innovation, and Startup',
        linkedin: 'https://www.linkedin.com/in/hkalia1/',
    }, {
        id: 16,
        photo: '/images/vagisha.jpg',
        name: 'Dr. Vagisha',
        category: 'Medical Innovation',
        description:
            'A Public Health Professional, Oral Health Education Activist , Tobacco Control Advocate, Founder at Muskaan Health Organization',
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
