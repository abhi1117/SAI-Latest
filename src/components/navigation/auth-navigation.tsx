'use client'

import React, { useState } from 'react'
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  Typography,
  IconButton,
  useTheme,
  Button,
  Stack,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  return (
    <>
      <StyledButton
        onClick={() => setOpen(true)}
        disableHoverEffect={false}
      >
        Donate
      </StyledButton>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
            sx: {
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(5px)',
            },
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 420,
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
              textAlign: 'center',
              outline: 'none',
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                color: theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <VolunteerActivismIcon
              sx={{
                fontSize: 48,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            />

            <Typography variant="h6" fontWeight={700} gutterBottom>
              Donate – Coming Soon
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              We’re preparing a secure donation experience to support oral health literacy across India.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="outlined"
                onClick={() => setOpen(false)}
                sx={{ textTransform: 'none', borderRadius: 2 }}
              >
                Close
              </Button>
         
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default AuthNavigation
