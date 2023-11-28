import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Thermometer from '../assets/Thermometer.png';
import Feelslike from '../assets/Feelslike.png';
import Humidity from '../assets/Humidity.png';
import Wind from '../assets/Wind.png';



const Widget = ({temp, feelsLike, humidity, wind}) => {
  return (
    <Box sx={{ mt: '24px', borderRadius: '24px' }}>
      <Box sx={{ display: 'flex', my: '12px', justifyContent: 'center', paddingLeft: '5px' }}>
        {/* First Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            backgroundColor: 'white',
            padding: '12px', // Adjusted padding
            borderRadius: '24px',
            mx: '6px',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.8)', // Adjusted border
          }}
        >
          <Box component='img' src={Thermometer} sx={{ width: '50px', height: '50px', mb: '6px' }} />
          <Typography sx={{ fontSize: '17px', fontWeight: 'bold', color: '#3b3b3b' }}> {Math.round(temp - 273.15)}.0 °C</Typography>
          <Typography sx={{ fontSize: '14px', color: '#696969' }}>Temp</Typography>
        </Box>

        {/* Second Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            backgroundColor: 'white',
            padding: '12px', // Adjusted padding
            borderRadius: '24px',
            mx: '6px',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.8)', // Adjusted border
          }}
        >
          <Box component='img' src={Feelslike} sx={{ width: '50px', height: '50px', mb: '6px' }} />
          <Typography sx={{ fontSize: '17px', fontWeight: 'bold', color: '#3b3b3b' }}>{Math.round(feelsLike - 273.15)}.0 °C</Typography>
          <Typography sx={{ fontSize: '14px', color: '#696969' }}>Feelslike</Typography>
        </Box>
      </Box>

      <Box sx={{ my: '12px', display: 'flex', justifyContent: 'center', paddingLeft: '5px' }}>
        {/* Third Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            backgroundColor: 'white',
            padding: '12px', // Adjusted padding
            borderRadius: '24px',
            mx: '6px',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.8)', // Adjusted border
          }}
        >
          <Box component='img' src={Humidity} sx={{ width: '50px', height: '50px', mb: '6px' }} />
          <Typography sx={{ fontSize: '17px', fontWeight: 'bold', color: '#3b3b3b' }}>{humidity}%</Typography>
          <Typography sx={{ fontSize: '14px', color: '#696969' }}>Humidity</Typography>
        </Box>

        {/* Fourth Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            backgroundColor: 'white',
            padding: '12px', // Adjusted padding
            borderRadius: '24px',
            mx: '6px',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.8)', // Adjusted border
          }}
        >
          <Box component='img' src={Wind} sx={{ width: '50px', height: '50px', mb: '6px' }} />
          <Typography sx={{ fontSize: '17px', fontWeight: 'bold', color: '#3b3b3b' }}>{Math.round(wind * 3.6)} km/h</Typography>
          <Typography sx={{ fontSize: '14px', color: '#696969' }}>Wind</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Widget;
