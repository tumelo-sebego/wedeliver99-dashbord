import { ReactElement } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useLocation } from 'react-router-dom';

import CustomersList from 'components/sections/dashboard/Customers/CustomersList/CustomersList';
import CustomerDetailsPage from './details'; // adjust path as needed

const CustomersPage = (): ReactElement => {
  const id = new URLSearchParams(useLocation().search).get('id');

  if (id) {
    return <CustomerDetailsPage />;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        height: '100%',
        p: 3
      }}
    >
      <Grid container spacing={3.75}>
        <Grid xs={12}>
          <CustomersList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomersPage;
