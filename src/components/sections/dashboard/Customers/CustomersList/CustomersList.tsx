import { ChangeEvent, ReactElement, useMemo, useState } from 'react';
import {
  Avatar,
  Divider,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
  Typography,
  debounce,
} from '@mui/material';
import { DataGrid, GridApi, GridColDef, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomPagination from '../../components/CustomPagination';

interface CustomerData {
  id: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  lastOrder: string;
  status: 'active' | 'inactive';
}

const columns: GridColDef<CustomerData>[] = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'name',
    headerName: 'Customer Name',
    flex: 1,
    minWidth: 200,
    renderCell: (params) => (
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Avatar>{params.value.charAt(0)}</Avatar>
        <Typography variant="body1">{params.value}</Typography>
      </Stack>
    ),
  },
  { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
  { field: 'phone', headerName: 'Phone', flex: 1, minWidth: 150 },
  { field: 'orders', headerName: 'Total Orders', flex: 0.5, minWidth: 130 },
  { field: 'lastOrder', headerName: 'Last Order', flex: 0.7, minWidth: 150 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 120,
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color: params.value === 'active' ? 'success.main' : 'error.main',
        }}
      >
        {params.value}
      </Typography>
    ),
  },
];

const CustomersList = (): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();
  const [search, setSearch] = useState('');

  // ... similar search handling logic as TopSellingProduct

  return (
    <Stack
      bgcolor="background.paper"
      borderRadius={5}
      width={1}
      boxShadow={(theme) => theme.shadows[4]}
      height={1}
    >
      <Stack
        direction={{ sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        padding={3.75}
        gap={3.75}
      >
        <Typography variant="h5" color="text.primary">
          Customers
        </Typography>
        <TextField
          variant="filled"
          placeholder="Search customers..."
          onChange={handleChange}
          value={search}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="mdi:search" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Divider />
      <Stack height={1}>
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={[]} // Add your customer data here
          getRowHeight={() => 70}
          hideFooterSelectedRowCount
          disableColumnResize
          disableColumnSelector
          disableRowSelectionOnClick
          rowSelection={false}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[10]}
          slots={{
            loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
            pagination: CustomPagination,
            noRowsOverlay: () => <section>No customers found</section>,
          }}
          sx={{
            height: 1,
            width: 1,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default CustomersList;