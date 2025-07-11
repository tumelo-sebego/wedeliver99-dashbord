import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProductDetails from 'components/sections/dashboard/Products/ProductDetails/ProductDetails';
import IconifyIcon from 'components/base/IconifyIcon';
import { rows as products } from 'data/products';

interface ProductDetailsPageProps {
  id: string;
}

const ProductDetailsPage = ({ id }: ProductDetailsPageProps): ReactElement => {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const product = products.find(p => String(p.id) === id);
    if (product) {
      setProductDetails({
        ...product,
        description: "Product description here",
        prices: [
          { merchant: "Shoprite", price: `R${product.price.toFixed(2)}` },
          { merchant: "Boxer", price: `R${(product.price * 0.95).toFixed(2)}` },
          { merchant: "Pick 'n Pay", price: `R${(product.price * 1.05).toFixed(2)}` }
        ],
        unit: "pieces",
        category: "Groceries",
        image: product.product.avatar
      });
    }
  }, [id]);

  return (
    <Box sx={{ flexGrow: 1, width: '100%', height: '100%', p: 3 }}>
      <Grid container spacing={3.75}>
        <Grid xs={12}>
          <Stack direction="row" alignItems="center" spacing={2} mb={3}>
            <IconButton 
              onClick={() => navigate('/products')}
              sx={{ bgcolor: 'background.paper', '&:hover': { bgcolor: 'action.hover' } }}
            >
              <IconifyIcon icon="mdi:arrow-left" />
            </IconButton>
          </Stack>
          <ProductDetails product={productDetails} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailsPage;
