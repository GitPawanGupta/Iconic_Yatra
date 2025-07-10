import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Stack,
  Container,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import {
  Email,
  Facebook,
  Instagram,
  WhatsApp
} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{width:'100%'}}>
      <AppBar position="static" sx={{ bgcolor: '#1f3c65'}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', px: 0 }}>
          {/* Left Section */}
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <IconButton size="small" color="inherit" component="a" href="mailto:info@iconicyatra.com">
              <Email fontSize="small" />
            </IconButton>
            <Typography
              variant="body2"
              component="a"
              href="mailto:info@iconicyatra.com"
              sx={{ color: '#fff', textDecoration: 'none' }}
            >
              info@iconicyatra.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              |
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              📞 +917053900957 <strong> Support (24 X 7):</strong> +911202555001
            </Typography>
          </Stack>

          {/* Right Section */}
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" mt={isMobile ? 1 : 0} sx={{ ml: 3 }}>
            <SearchIcon sx={{ color: 'white' }}  />
            <Typography variant="body2" color="white"  >Follow Us On</Typography>
            <IconButton size="small" color="inherit" href="https://facebook.com" target="_blank">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit" href="https://instagram.com" target="_blank">
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit" href="https://wa.me/919999999999" target="_blank">
              <WhatsApp fontSize="small" />
            </IconButton>

            <Link href="/payment" color="inherit" underline="none" sx={{ ml: 3, fontWeight: 600 }}>
              Payment Now
            </Link>
            <Link href="/services" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 600 }}>
              Service
            </Link>
            <Link href="https://newscollage.travserver.com/newstoday.html" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 600 }}>
              News
            </Link>
            <Link href="https://iconicyatra.travserver.com/crm/login" color="inherit" underline="none" sx={{ fontWeight: 600 }}>
              Admin
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
};

export default Header;
