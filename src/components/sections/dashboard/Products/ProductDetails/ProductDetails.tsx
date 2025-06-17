import { ReactElement } from 'react';
import { Box, Card, Typography, Stack, Chip, Divider } from '@mui/material';
import Image from 'components/base/Image';

interface MerchantPrice {
  merchant: string;
  price: string;
}

interface ProductDetailsProps {
  product?: {
    image: string;
    name: string;
    description?: string;
    prices: MerchantPrice[];
    unit: string;
    category: string;
  };
}

const ProductDetails = ({ product }: ProductDetailsProps): ReactElement => {
  if (!product) {
    return (
      <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Select a product to view details
        </Typography>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%' }}>
      <Stack spacing={3} p={3}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box
            sx={{
              width: 300,
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              borderRadius: 2,
            }}
          >
            <Image src={product.image} width={250} height={250} />
          </Box>
        </Box>

        <Stack spacing={2}>
          <Typography variant="h5" component="h2">
            {product.name}
          </Typography>

          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1">
              {product.description || 'No description available'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Category
            </Typography>
            <Chip label={product.category} color="primary" variant="outlined" />
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Unit
            </Typography>
            <Typography variant="body1">{product.unit}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Prices
            </Typography>
            <Stack spacing={1}>
              {product.prices.map((price) => (
                <Stack
                  key={price.merchant}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ 
                    p: 1.5,
                    bgcolor: 'background.default',
                    borderRadius: 1
                  }}
                >
                  <Typography variant="body2">{price.merchant}</Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {price.price}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductDetails;
