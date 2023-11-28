import React from 'react';
import { Box, Typography } from '@mui/material';
const Main = ({ city, country, icon, temp, weatherDescription }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '24px' }}>
      <Box>
        <Box sx={{ height: '240px' }} component='img' src={require(`../assets/${icon}.png`)} alt="Weather Icon" />
        <Typography sx={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', color: '#3b3b3b' }}>
          {city}, {country}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: '500', color: '#696969' }}>
          {Math.round(temp - 273.15)}.0 °C {weatherDescription} 
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
