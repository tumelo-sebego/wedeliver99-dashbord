import { ReactElement } from 'react';
import { Typography, Box } from '@mui/material';

const Drivers = (): ReactElement => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Drivers
      </Typography>
    </Box>
  );
};

export default Drivers;
