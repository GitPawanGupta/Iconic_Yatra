import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const galleryImages = [
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
];

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 1 : 2, // ✅ responsive based on screen size
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Container sx={{ textAlign: 'center', py: 5, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#0a0d3e" mb={5}>
        GALLERY
      </Typography>

      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Slider {...settings}>
          {galleryImages.map((img, idx) => (
            <Box key={idx} sx={{ px: 1 }}>
              <Box
                component="img"
                src={img}
                alt={`Gallery Image ${idx + 1}`}
                sx={{
                  width: '100%',
                  height: { xs: '180px', sm: '250px', md: '300px' },
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Gallery;
