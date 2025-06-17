import { ReactElement } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TopSellingProduct from 'components/sections/dashboard/Home/Sales/TopSellingProduct/TopSellingProduct';
import { Box } from '@mui/material';

const ProductsPage = (): ReactElement => {
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
          <TopSellingProduct title="Products" hideAdsAndRefunds={true} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
