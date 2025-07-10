import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Container,
  Paper,
} from '@mui/material';

const TestimonialPage = () => {
  return (
    <Box sx={{ backgroundColor: '#ebebeb', minHeight: '40vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Paper elevation={1} sx={{ p: 2, mb: 4 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Testimonial</Typography>
          </Breadcrumbs>
        </Paper>

        {/* Title */}
        <Typography variant="h5" gutterBottom>
          Customer{' '}
          <Box component="span" sx={{ color: '#d32f2f' }}>
            Testimonials
          </Box>
        </Typography>

        {/* No data message */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '1rem',
          }}
        >
          No testimonial is available.
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
