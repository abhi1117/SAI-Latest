'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  useTheme,
  Divider,
} from '@mui/material'

const socialLinks = [
  { name: 'Instagram', link: '#', icon: '/images/icons/instagram.svg' },
  { name: 'YouTube', link: '#', icon: '/images/icons/youtube.svg' },
  { name: 'Twitter', link: '#', icon: '/images/icons/twitter.svg' },
  { name: 'Dribbble', link: 'https://dribbble.com/', icon: '/images/icons/dribbble.svg' },
  { name: 'Github', link: 'https://github.com/', icon: '/images/icons/github.svg' },
]

const headerNavigations = [
  { label: 'Home', path: '#hero' },
  { label: 'Our Vision', path: '#about' },
  { label: 'Our Work', path: '#ourwork' },
  { label: 'Publications', path: '#publications' },
  { label: 'Be One of Us', path: '#joinus' },
]

const Footer = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        pt: 4,
        pb: 3,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          SmileAgeIndia
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, mb: 2, fontSize: '0.9rem', opacity: 0.85 }}>
          Reaching the Unreached. Transforming Lives Through Oral Health Literacy.
        </Typography>

        {/* Social Icons */}
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1.5,
            mb: 2,
          }}
        >
          {socialLinks.map((item) => (
            <MuiLink
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.05)',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              <img src={item.icon} alt={`${item.name} icon`} width={18} height={18} />
            </MuiLink>
          ))}
        </Box> */}

        {/* Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2,
          }}
        >
          {headerNavigations.map((nav) => (
            <MuiLink
              key={nav.label}
              href={nav.path}
              underline="none"
              sx={{
                color: 'primary.contrastText',
                fontSize: '0.9rem',
                fontWeight: 500,
                opacity: 0.9,
                transition: 'color 0.3s',
                '&:hover': {
                  color: 'secondary.light',
                },
              }}
            >
              {nav.label}
            </MuiLink>
          ))}
        </Box>

        {/* Optional Divider */}
        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} SmileAgeIndia. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
