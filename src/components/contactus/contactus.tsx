//Working

// // components/ContactUs.tsx
import React from "react";
import theme from '@/config/theme';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const ContactUs: React.FC = () => {
  return (
   
    <Box id="joinus" sx={{ px: 4, py: 4, mt: 2, backgroundColor: "#f9f9f9" }}>
 
     
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            position: 'relative',
            display: 'inline-block',
            fontSize: { xs: 20, md: 20 },
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
          BE ONE OF US
        </Typography>
      </Box>


      <Typography variant="body1" align="center" color="textSecondary" mb={4}>
        We wouldd love to hear from you!  Please reach us directly through the details below.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Form */}
      
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Divider sx={{ mb: 0 }} />
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              {/* <LocationOn color="primary" sx={{ mr: 2 }} />
              <Typography>1234 Main Street, City, State, ZIP</Typography> */}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              {/* <Phone color="primary" sx={{ mr: 2 }} />
              <Typography>+1 (xxx) xxx-xxxx</Typography> */}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email color="primary" sx={{ mr: 2 }} />
            <Typography>smileageindia1@gmail.com</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
