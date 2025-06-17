import { ReactElement } from 'react';
import { Typography, Box } from '@mui/material';

const Orders = (): ReactElement => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Orders
      </Typography>
    </Box>
  );
};

export default Orders;
