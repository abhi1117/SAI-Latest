import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from '@/components/styled-button';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';


interface Exp {
  label: string;
  value: string;
  sx?: SxProps;

}

interface ExpItemProps {
  item: Exp;
}

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{
      textAlign: 'center',
      mb: { xs: 1, md: 0 },
      px: 2,
      py: 1,
      borderRadius: 1,
      '&:hover': {
        backgroundColor: 'action.hover',
        transition: 'background-color 0.3s ease'
      }
    }}>
      <Typography
        sx={{
          color: 'primary.main',
          mb: 0.5,
          fontSize: { xs: 32, md: 42 },
          fontWeight: 800,
          lineHeight: 1
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: 'text.secondary',
          fontSize: { xs: 14, md: 16 },
          fontWeight: 500,
          letterSpacing: 0.5
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const HomeHero: FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        pt: { xs:0 , md:2},
        pb: { xs: 0, md:0 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`,
          zIndex: 0,
          opacity: 0.05
        }
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '90%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Box sx={{ mb:2}}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: 32, md: 48 },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                    color: 'text.primary',
                    position: 'relative',
                    display: 'inline-block',
                    '& span': {
                      position: 'relative',
                      zIndex: 1
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 8,
                      left: 0,
                      width: '100%',
                      height: 12,
                      backgroundColor: theme.palette.primary.light,
                      opacity: 0.3,
                      zIndex: 0,
                      transform: 'skew(-12deg)'
                    }
                  }}
                >
                  <span>
                    Reaching the{' '}
                    <Box
                      component="span"
                      sx={{
                        color: 'primary.main',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: 0,
                          width: '100%',
                          height: 6,
                          backgroundColor: theme.palette.primary.light,
                          opacity: 0.3,
                          borderRadius: 2
                        }
                      }}
                    >
                      Unreached
                    </Box>
                  </span>
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: 28, md: 40 },
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 2,
                    color: 'text.primary'
                  }}
                >
                  Transforming Lives Through
                  <br />
                  Oral Health Literacy
                </Typography>

              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: "bold",
                    mb: 3
                  }}
                >
                  Oral health is more than just teeth its about dignity, communication, nutrition, and well-being. At the Oral Health Literacy Division (OHLID), we are pioneering a digital, inclusive, and sustainable approach to make oral healthcare accessible to every citizen, especially those too often left behind.
                </Typography>
              </Box>

              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: 4
              }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: 16,
                      fontWeight: 600,
                      borderRadius: 2,
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Get Started
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                minHeight: { xs: 300, md: 500 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 3,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.primary.dark}20 100%)`,
                  zIndex: 1
                }
              }}
            >
              <Image
                src="/images/home-hero.jpg"
                alt="Hero image"
                layout='fill'
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                quality={100}
                sizes="(max-width: 768px) 00vw, 50vw"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;