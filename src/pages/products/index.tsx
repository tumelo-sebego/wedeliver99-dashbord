import { ReactElement } from 'react';
import { Box, Typography, Container } from '@mui/material';

const ProductsPage = (): ReactElement => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>
        {/* Add your products content here */}
      </Box>
    </Container>
  );
};

export default ProductsPage;
