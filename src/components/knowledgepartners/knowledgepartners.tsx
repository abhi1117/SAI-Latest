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
        name: 'Dr. Padma Gadiyar',
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
        category: 'An experienced Dentist and Our Volunteer',
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
        id: 7,
        photo: '/aarushi.jpg',
        name: 'Aarushi Anand',
        category: 'Creative Designer',
        description:
            'Social media strategist,  Content planner, creator and manager @ Artrushi.',
        linkedin: 'https://www.linkedin.com/in/aarushianand2802',
    },
    {
        id: 8,
        photo: '/images/sujaya.png',
        name: 'Sujay Mehta',
        category: 'Public Health Researcher and Dentist,specialist in Orofacial pain and Public Health',
        description:
            'Faculty at Harvard Macy Institute, MIT, & Solidarity Dental  Passionate about innovation in global health systems and partnerships for equity-driven impact.',
        linkedin: 'https://www.linkedin.com/in/sujayamehta',
    },
    {
        id: 9,
        photo: '/images/aman.png',
        name: 'Dr Aman Pabbla',
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
        category: 'Budding Robotic Engineer',
        description:
            'Specialising in Robotics to integrate psychology with technology for innovative approaches in healthcare services.',
        linkedin: 'http://linkedin.com/in/aaravee-anand-820632297',
    },
    {
        id: 13,
        photo: '/images/Himanshu.jpeg',
        name: 'Dr. Himanshu Kalia',
        category: 'Innovator in Digital Healthcare',
        description:
            'AI in Healthcare | Digital Twin & Medical Tech Research | Innovator in Digital Healthcare | Consultant in Digital Twin Technologies | Published Researcher with Expertise in Healthtech, Innovation, and Startup',
        linkedin: 'https://www.linkedin.com/in/hkalia1/',
    }, {
        id: 14,
        photo: '/images/vagisha.jpg',
        name: 'Dr. Vagisha',
        category: 'Medical Innovation',
        description:
            'A Public Health Professional, Oral Health Education Activist , Tobacco Control Advocate, Founder at Muskaan Health Organization',
        linkedin: 'http://linkedin.com/in/aaravee-anand-820632297',
    },
    {
        id: 15,
        photo: '/images/yazmin-cole.jpeg',
        name: 'Yazmin Cole',
        category: 'Public Health Researcher',
        description:
            'Faculty at Harvard Macy Institute, MIT, & Solidarity Dental .Passionate about innovation in global health systems and partnerships for equity-driven impact.',
        linkedin: 'https://www.linkedin.com/in/yazmin-cole/',
    }, {
        id: 16,
        photo: '/images/Priyanka.jpg',
        name: 'Dr.Priyanka Verma',
        category: 'Consultant Dental Surgeon & Our Volunteer',
        description:
            'A Public Health Professional, Oral Health Education Activist.',
        linkedin: 'https://www.linkedin.com/in/dr-priyanka-verma-255a7a16a/',
    },
    {
        id: 17,
        photo: '/images/omer.jpg',
        name: 'Ömer Sönmez',
        category: 'Public Health Researcher',
        description:
            'Passionate public health advocate with a background in Dentistry and Global Health.',
        linkedin: 'https://www.linkedin.com/in/sonmezomerfaruk1/',
    },
    {
        id: 18,
        photo: '/images/abhishek.jpeg',
        name: 'Abhishek Singh',
        category: 'Web Developer - Technology',
        description:
            "Professional web developer skilled in end-to-end application development, with a strong emphasis on performance, security, and cross-platform compatibility.",
        linkedin: 'https://www.linkedin.com/in/abhishek-fullstack/',
    },
    {
        id: 19,
        photo: '/images/Raman.jpg',
        name: 'Raman Preet',
        category: 'Dental public health consultant ',
        description:
            "Expert public health professional and dental public health consultant with extensive experience in global health research, project coordination, and communication leadership. Currently teaching global health and serving as Equal Opportunity Officer at the Dept of Epidemiology, while supporting EU-funded research at both the Global Health and Sustainable Health units.",
        linkedin: 'https://www.linkedin.com/in/raman-preet-rs0211h3010/',
    },
    {
        id: 20,
        photo: '/images/Manu.jpeg',
        name: 'Manu Mathur',
        category: 'Professor and Head - Queen Mary University of London',
        description:
            "A public health specialist and dental researcher with global experience across health systems. His work spans tobacco control, oral health inequalities, and school nutrition. He leads dental public health at QMUL, contributes to global policy initiatives, and mentors emerging researchers through NHS England and international collaborations.",
        linkedin: 'http://linkedin.com/in/manu-mathur-7844285',
    },
    {
        id: 21,
        photo: '/images/Visser.jpeg',
        name: 'Prof Anita Visser',
        category: 'Gerodontology ',
        description:
            "Professor of Gerodontology at the University of Groningen, is a leading expert in special care dentistry. With decades of clinical, academic, and research experience, she pioneers gerodontology education, interdisciplinary care, and innovation in implantology, elderly oral health, and anxiety counselling.",
        linkedin: 'https://www.linkedin.com/in/anita-visser-545b7323/',
    },
   
    {
        id: 22,
        photo: '/images/Wendy.jpg',
        name: 'Wendy Thompson',
        category: 'Dental public health consultant ',
        description:
            "Clinical academic and dentist focused on urgent dental care and antimicrobial resistance. She leads global research and education initiatives, including projects in Sub-Saharan Africa and FDI’s award-winning stewardship programme. Her work integrates co-development, advocacy, and clinical practice to reduce antibiotic overuse and prevent infections.",
        linkedin: 'https://www.linkedin.com/in/wendy-thompson-5b482437/',
    },
    {
        id: 23,
        photo: '/images/Maria.jpg',
        name: 'Maria Schierbaum',
        category: 'Dental public health consultant ',
        description:
            "Health economist and Research assistant in Germany with a focus on oral health literacy. Co-Chair of the Oral Health Literacy Interest Division (OHLID) of the International Health Literacy Division (IHLA).",
        linkedin: 'https://www.linkedin.com/in/maria-s-30b2292a0/',
    },
    {
        id: 24,
        photo: '/images/Ghada.jpg',
        name: 'Ghada Ibrahim',
        category: 'President PACRT-Geneva The Patient Lab in Oncology',
        description:
            "Ghada Ibrahim is President of PACRT-Geneva and a leading voice in patient advocacy for cancer research and care. Based in Switzerland, she champions patient-centric innovation, co-leads PPI projects at IUFRS/CHUV/UNIL, and serves on advisory boards including EUPATI-Switzerland and Inspire2Live, promoting meaningful patient involvement in research, policy, and clinical trials.",
        linkedin: 'https://www.linkedin.com/in/maria-s-30b2292a0/',
    },
    {
        id: 25,
        photo: '/images/Maha.jpg',
        name: 'Maha El Tantawi',
        category: 'Vice Dean at Alexandria University - Faculty of Dentistry',
        description:
            "Global leader in Dental Public Health. Her work spans oral health equity, education, sustainability, and digital innovation. With 200+ publications, she serves on key editorial boards and collaborates with international research and policy networks.",
        linkedin: 'https://www.linkedin.com/in/maha-el-tantawi-755a4a37/?originalSubdomain=eg',
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
