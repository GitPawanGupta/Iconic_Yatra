import React from 'react'
import { Typography } from '@mui/material'

const PopularDestinations = () => {
  return (
    <div>
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, ml: 5, mt: 5, textAlign: 'center' }}>
          Popular <span style={{ color: 'red' }}>Destinations</span>
    </Typography>
    </div>
  )
}

export default PopularDestinations
