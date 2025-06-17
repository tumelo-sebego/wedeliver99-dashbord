import { ReactElement } from 'react';
import { Typography, Box } from '@mui/material';

const Products = (): ReactElement => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Products
      </Typography>
    </Box>
  );
};

export default Products;
