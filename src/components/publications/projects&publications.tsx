'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  useTheme,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const publications = [
  {
    id: 1,
    title:
      'Patient-reported evaluation of oral/dental health in oncology care—a need and opportunity to support medically necessary oral care needs',
    link: 'https://link.springer.com/article/10.1007/s00520-025-09316-w',
    tag: 'Journal Article',
    year: '2025',
    authors: 'Epstein & Anand S.',
    excerpt:
      'Explores patient-reported oral health experiences in oncology, promoting medically necessary oral care integration.',
  },
  {
    id: 2,
    title:
      'Necessity and influencing factors for integrating oral health in cancer care for older people: a narrative review',
    link: 'https://link.springer.com/article/10.1007/s00520-024-08632-x',
    tag: 'Narrative Review',
    year: '2024',
    authors: 'Anand S. et al',
    excerpt:
      'Identifies critical factors and evidence supporting integration of oral health in geriatric cancer care frameworks.',
  },
  {
    id: 3,
    title:
      'Making the Right to Oral Health a Reality for Older Adults',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11999419/pdf/main.pdf',
    tag: 'Policy Report',
    year: '2025',
    authors: 'Kakuhiro Fukai et al',
    excerpt:
      'Advocates for a rights-based approach to oral healthcare for older populations through global public health strategies.',
  },
  {
    id: 4,
    title:
      'Advancing Materiovigilance in Dentistry: A Crucial Step for Patient Safety in India',
    link: 'https://publication.ida.org.in/partials/PdfDisplay.htm',
    tag: 'Journal Article',
    year: '2024',
    authors: 'Anand S.',
    excerpt:
      'Highlights the importance of materiovigilance for dental safety in India and the need for systemic implementation.',
  },
]

const HomePublications = (): ReturnType<() => JSX.Element> => {
  const theme = useTheme()

  return (
    <Box sx={{ py: { xs: 12, md: 4 }, backgroundColor: '#f7f9fc' }}>
      <Container maxWidth="lg" id="publications">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}>

          <Box
            component="span"
            sx={{
              fontSize: 36,
              mr: 1.5,
              display: 'inline-block',
              animation: 'spin 3s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
          >
            🧬
          </Box>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              position: 'relative',
              display: 'inline-block',
              fontSize: { xs: 30, md: 38 },
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: 4,
                left: 0,
                width: '100%',
                height: 8,
                background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                opacity: 0.25,
                borderRadius: 4,
              },
            }}
          >
            Featured Publications
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {publications.map((pub) => (
            <Grid key={pub.id} item xs={12}>
              <Paper
                elevation={1}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#ffffff',
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: 'italic',
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 1,
                  }}
                >
                  {pub.year} — {pub.authors}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    lineHeight: 1.5,
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  {pub.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {pub.excerpt}
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewIcon sx={{ transition: 'transform 0.2s' }} />}
                    href={pub.link}
                    target="_blank"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'none',
                      px: 2.5,
                      py: 1,
                      border: 2,
                      borderRadius: '12px',
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      letterSpacing: 0.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: '#fff',
                        borderColor: theme.palette.primary.main,
                        '& svg': {
                          transform: 'translateX(3px)',
                        },
                      },
                    }}
                  >
                    Read Full Article
                  </Button>

                  <Chip
                    label={pub.tag}
                    size="small"
                    sx={{ fontStyle: 'italic', fontWeight: 500 }}
                    color="primary"
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePublications
