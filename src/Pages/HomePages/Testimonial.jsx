import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Ankit Rajput',
    location: 'Sikkim',
    feedback:
      'The overall plan by iconic travels was good. Very responsive to our queries. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    feedback:
      'Amazing experience! Everything was smooth and perfectly managed.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ravi Mehta',
    location: 'Mumbai',
    feedback:
      'Superb service. Our trip to Goa was memorable!',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    name: 'Neha Gupta',
    location: 'Lucknow',
    feedback:
      'Hassle-free bookings and excellent support. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonial = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ textAlign: 'center', py: 5, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#0a0d3e" mb={5}>
        TESTIMONIALS
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', maxWidth: '1200px', mx: 'auto' }}>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Avatar
                src={t.image}
                alt={t.name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 1,
                  border: '3px solid #1976d2',
                }}
              />
              
              <Typography
                variant="h6"
                color="#1976d2"
                mt={1}
                fontWeight="bold"
              >
                {t.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t.location}
              </Typography>
              <Typography
                variant="body2"
                fontStyle="italic"
                color="textSecondary"
                sx={{ px: 2 }}
              >
                {t.feedback}
              </Typography>
            </Box>
          ))}
        </Slider>

        {/* Arrows */}
        <IconButton
          onClick={() => sliderRef.current.slickPrev()}
          sx={{
            position: 'absolute',
            top: '45%',
            left: -20,
            transform: 'translateY(-50%)',
            backgroundColor: '#1976d2',
            color: '#fff',
            zIndex: 2,
            '&:hover': { backgroundColor: '#115293' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={() => sliderRef.current.slickNext()}
          sx={{
            position: 'absolute',
            top: '45%',
            right: -20,
            transform: 'translateY(-50%)',
            backgroundColor: '#1976d2',
            color: '#fff',
            zIndex: 2,
            '&:hover': { backgroundColor: '#115293' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonial;
