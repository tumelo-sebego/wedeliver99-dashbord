import { ReactElement } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TopSellingProduct from 'components/sections/dashboard/Home/Sales/TopSellingProduct/TopSellingProduct';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductDetailsPage from './[id]';

const ProductsPage = (): ReactElement => {
  const navigate = useNavigate();
  const id = new URLSearchParams(useLocation().search).get('id');

  if (id) {
    return <ProductDetailsPage id={id} />;
  }

  // Handler for row click
  const handleProductClick = (product: any) => {
    navigate(`/products?id=${product.id}`);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        height: '100%',
        p: 3
      }}
    >
      <Grid
        container
        spacing={3.75}
      >
        <Grid xs={12}>
          <TopSellingProduct
            title="Products"
            hideAdsAndRefunds={true}
            onProductClick={handleProductClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
