import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import logo from './logo.png'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        m: 0,
        p: 0,
        lineHeight: 1, // prevents extra vertical spacing from text
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 0, p: 0 }}>
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={70}
          style={{
            objectFit: 'contain',
            margin: 0,
            padding: 0,
            display: 'block',
          }}
        />
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1,
            m: 0,
            p: 0,
            whiteSpace: 'nowrap',
            '& span': {
              color: variant === 'primary' ? 'primary.main' : 'unset',
            },
          }}
        >
          Smile<span>Age</span>India
        </Typography>
      </Box>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
