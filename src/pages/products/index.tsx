import { ReactElement } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TopSellingProduct from 'components/sections/dashboard/Home/Sales/TopSellingProduct/TopSellingProduct';
import { drawerWidth } from 'layouts/main-layout';

const ProductsPage = (): ReactElement => {
  return (
    <Grid
      container
      component="main"
      columns={12}
      spacing={3.75}
      flexGrow={1}
      pt={4.375}
      pr={1.875}
      pb={0}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        pl: { xs: 3.75, lg: 0 },
      }}
    >
      <Grid xs={12}>
        <TopSellingProduct title="Products" hideAdsAndRefunds={true} />
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
