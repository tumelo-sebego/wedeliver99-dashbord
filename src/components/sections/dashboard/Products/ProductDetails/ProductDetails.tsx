import { ReactElement } from 'react';
import { Box, Card, Typography, Stack, Chip, useMediaQuery, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!product) {
    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff', // Set text color to white
          backgroundColor: theme.palette.grey[900], // Optional: dark background for contrast
        }}
      >
        <Typography variant="body1" color="inherit">
          Select a product to view details
        </Typography>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        height: '100%',
        color: '#fff', // Set text color to white
        backgroundColor: theme.palette.grey[900], // Optional: dark background for contrast
      }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={4}
        p={3}
        alignItems={isMobile ? 'center' : 'flex-start'}
        justifyContent="flex-start"
        height="100%"
      >
        {/* Product Image */}
        <Box
          sx={{
            width: isMobile ? 250 : 300,
            height: isMobile ? 250 : 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            borderRadius: 2,
            mb: isMobile ? 2 : 0,
            flexShrink: 0,
          }}
        >
          <Image src={product.image} width={isMobile ? 200 : 250} height={isMobile ? 200 : 250} />
        </Box>

        {/* Product Details */}
        <Stack spacing={2} flex={1} width="100%">
          <Typography variant="h5" component="h2" color="inherit">
            {product.name}
          </Typography>

          <Box>
            <Typography variant="subtitle2" color="inherit" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1" color="inherit">
              {product.description || 'No description available'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="inherit" gutterBottom>
              Category
            </Typography>
            <Chip label={product.category} color="primary" variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }} />
          </Box>

          <Box>
            <Typography variant="subtitle2" color="inherit" gutterBottom>
              Unit
            </Typography>
            <Typography variant="body1" color="inherit">{product.unit}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="inherit" gutterBottom>
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
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" color="inherit">{price.merchant}</Typography>
                  <Typography variant="body2" fontWeight="bold" color="inherit">
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
