import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'flex-start' }}>
      {navigations.map(({ path: destination, label, children }) => (
        <Box
          key={destination}
          sx={{
            position: 'relative',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            '&:hover .dropdown': {
              display: 'flex',
              flexDirection: 'column',
              opacity: 1,
              transform: 'translateY(5px)',
              boxShadow: 6,
              borderRadius: 2,
            },
          }}
        >
          <Box
            component={ScrollLink}
            activeClass="current"
            to={destination}
            spy={true}
            smooth={true}
            duration={350}
            sx={{
              color: 'text.disabled',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: '1.1rem', md: 'inherit' },
              '&:hover': {
                color: 'primary.main',
                
              },
            }}
            aria-label={`Navigate to ${label}`}
          >
            {label}
          </Box>

          {/* Dropdown menu */}
          {children && (
            <Box
              className="dropdown"
              sx={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 10,
                minWidth: 140,
                width: 'auto', // Allow the dropdown to expand based on text length
                bgcolor: 'background.paper',
                boxShadow: 3,
                borderRadius: 4,
                mt: -0.6,
                zIndex: 5,
                cursor: "pointer",
                py: -8,
                opacity: 0,
                transition: 'opacity 0.3s, transform 0.3s, box-shadow 0.3s, border-radius 0.3s',
                '&:hover': {
                  display: 'flex',
                 
                },
                '&:hover .dropdown-item:first-of-type': {
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                },
                '&:hover .dropdown-item:last-of-type': {
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,

                },
              }}
            >
              {children.map((child) => (
                <Box
                  key={child.path}
                  className="dropdown-item"
                  component={ScrollLink}
                  to={child.path}
                  spy={true}
                  smooth={true}
                  duration={350}
                  sx={{
                    px: 2,
                    py: 0.5,
                    color: 'text.primary',
                    whiteSpace: 'nowrap',
                    fontSize: '1rem',
                    fontWeight: 500,
                    
                    transition: 'background 0.2s, color 0.2s',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: 'primary.main',
                    },
                  }}
                >
                  {child.label}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
