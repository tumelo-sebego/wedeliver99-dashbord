import { ReactElement } from 'react';
import { Typography, Box } from '@mui/material';

const Customers = (): ReactElement => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Customers
      </Typography>
    </Box>
  );
};

export default Customers;
