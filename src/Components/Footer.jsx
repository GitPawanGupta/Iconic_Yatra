import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Button,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1f3c65', color: '#fff', px: 4 }}>
      <Grid container spacing={4}>
        {/* Payment Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2, letterSpacing: 0.5,py:2 }}>
            PAYMENT POWERED BY
          </Typography>
          <Stack direction="row" spacing={1.35} flexWrap="wrap">
            {[...Array(5)].map((_, i) => (
              <Box
                key={i}
                component="img"
                src={`https://hindustanjourney.com/public/assets/frontend/img/p-method-${i + 1}.jpg`}
                alt={`payment-${i + 1}`}
                sx={{
                  width: 60,
                  height: 40,
                  m: 0.5,
                  bgcolor: '#fff',
                  borderRadius: 1.5,
                  objectFit: 'contain',
                }}
              />
            ))}
          </Stack>

          <Box
            component="img"
            src="https://hindustanjourney.com/public/assets/frontend/img/ministry-logo.jpg"
            alt="Ministry of Corporate Affairs"
            sx={{
              width: '340px',
              height: '80px',
              mt: 2,
              border: '1px solid #4caf50',
              p: 1,
              backgroundColor: '#fff',
              borderRadius: 1,
            }}
          /><br/>

          <Button
            component={RouterLink}
            to="/payment"
            variant="contained"
            sx={{
              mt: 2,
              width: '340px',
              backgroundColor: '#4caf50',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#43a047' },
              py:2
            }}
          >
            ₹ Make Online Payment
          </Button>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2} ml={12}>
          <Typography variant="h6" sx={{ letterSpacing:0.5, py:2 }}>
            IMPORTANT LINK
          </Typography>
          <Stack spacing={1}>
            <Link component={RouterLink} to="/gujarat" underline="hover" color="inherit">› Gujarat</Link>
            <Link component={RouterLink} to="/himachal" underline="hover" color="inherit">› Himachal</Link>
            <Link component={RouterLink} to="/kashmir" underline="hover" color="inherit">› Kashmir</Link>
            <Link component={RouterLink} to="/chardham" underline="hover" color="inherit">› Chardham</Link>
            <Link component={RouterLink} to="/kerala" underline="hover" color="inherit">› Kerala</Link>
            <Link component={RouterLink} to="/terms" underline="hover" color="inherit">› Terms & Conditions</Link>
            <Link component={RouterLink} to="/careers" underline="hover" color="inherit">› Careers</Link>
          </Stack>
        </Grid>

        {/* Our Menu */}
        <Grid item xs={12} sm={6} md={3} ml={15}>
          <Typography variant="h6" sx={{ letterSpacing: 1.5, py:2 }}>
            OUR MENU
          </Typography>
          <Stack spacing={1}>
            <Link component={RouterLink} to="/about" underline="hover" color="inherit">› About us</Link>
            <Link component={RouterLink} to="/blogs" underline="hover" color="inherit">› Latest Blogs</Link>
            <Link component={RouterLink} to="/holidays" underline="hover" color="inherit">› Holiday tours</Link>
            <Link component={RouterLink} to="/honeymoon" underline="hover" color="inherit">› Honeymoon tours</Link>
            <Link component={RouterLink} to="/international" underline="hover" color="inherit">› International tour</Link>
            <Link component={RouterLink} to="/contact" underline="hover" color="inherit">› Contact us</Link>
            <Link component={RouterLink} to="https://newscollage.travserver.com/newstoday.html" underline="hover" color="inherit">› Latest News</Link>
          </Stack>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={8} ml={15}>
          <Typography variant="h6" sx={{ letterSpacing: 1.5, py:2 }}>
            CONTACT US
          </Typography>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Rayos Building, Sector 63 Rd, C Block, Sector 63,<br /> Noida, Uttar Pradesh 201301
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CallIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9958120707 / +91 9990273606</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">info@iconicyatra.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">support@iconicyatra.com</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ borderTop: '1px solid #444', mt: 0.5, pt: 0.5, textAlign:'center' }}>
        <Typography variant="body1" sx={{ color: '#ccc' }}>
          Copyright © 2025 <Box component="span" sx={{ color: 'yellow' }}>iconicyatra.com</Box> All rights reserved.                                <span sx={{textAlign:'right'}}>© Iconic Pvt. Ltd. Recognized by Ministry of Tourism, Govt of India.</span>
        </Typography>

      </Box>
    </Box>
  );
};

export default Footer;
