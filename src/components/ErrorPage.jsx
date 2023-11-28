import React from 'react';
import Undefined from '../assets/undefined.png'; // Fix the typo in the image filename
import { Box, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '70px' }}>
        <Box>
          <Box sx={{ height: '240px', paddingLeft: '135px' }} component='img' src={Undefined} alt="Error Page" />
          <Typography sx={{ mt: '12px', textAlign: 'center', fontSize: '32px', fontWeight: 'bold', color: '#3b3b3b' }}>
            Garchu!! We can't find that city, Please Input a valid one.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
