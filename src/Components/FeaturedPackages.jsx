import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PackageCard from '../Components/PackageCard';

// Package data
const packages = [
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
    title: 'Mussoorie -Rishikesh- Nainital',
    id: '1',
    dpkg: '1',
    queryLink: 'https://example.com/query/uttarakhand',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '8N Amazing Nepal',
    id: '2',
    dpkg: '1',
    queryLink: 'https://example.com/query/nepal',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Manali Volvo 3 Nights Tour ',
    id: '3',
    dpkg: '1',
    queryLink: 'https://example.com/query/manali',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
    title: 'Explore Kerala',
    id: '4',
    dpkg: '1',
    queryLink: 'https://example.com/query/kerala',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
    title: 'Best of Kerala 6 N',
    id: '5',
    dpkg: '1',
    queryLink: 'https://example.com/query/kerala-6n',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '07 Nights / 08 Days Scenic Kerala',
    id: '6',
    dpkg: '1',
    queryLink: 'https://example.com/query/scenic-kerala',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Southern Hills 4N',
    id: '7',
    dpkg: '1',
    queryLink: 'https://example.com/query/southern-hills',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
    title: 'Kathmandu-Pokhara / 4N-5D',
    id: '8',
    dpkg: '1',
    queryLink: 'https://example.com/query/kathmandu',
  }
];

const FeaturedPackages = () => {
  return (
    <Box sx={{ px: 2, width: '100%', }}>
      {/* Title */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          FEATURE <span style={{ color: 'red' }}>PACKAGES</span>
        </Typography>
        <Divider sx={{ mt: 1, borderColor: '#ccc', borderBottomWidth: 5 }} />
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={3} sx={{backgroundPosition: 'center' , px: 1,  textAlign: 'center', justifyContent: 'center'}}>
        {packages.map((pkg, index) => (
          <Grid
            item
            xs={12}       // 1 column on mobile
            sm={6}        // 2 columns on tablet
            md={3}        // 4 columns on desktop
            key={index}
            sx={{
              display: 'flex',
              backgroundPosition:'center',justifyContent:'center'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 320 }}>
              <PackageCard {...pkg} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* "Click More" Button */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          sx={{
            width: { xs: '100%', sm: 300 },
            backgroundColor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#43a047' },
          }}
        >
          Click More
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedPackages;
