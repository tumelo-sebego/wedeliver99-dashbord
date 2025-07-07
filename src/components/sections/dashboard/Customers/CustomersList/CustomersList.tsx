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
import { useNavigate } from 'react-router-dom';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomPagination from 'components/sections/dashboard/components/CustomPagination';

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

const customerRows: CustomerData[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+27 82 123 4567',
    orders: 12,
    lastOrder: '2024-06-15',
    status: 'active',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+27 83 234 5678',
    orders: 5,
    lastOrder: '2024-06-10',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Carol Lee',
    email: 'carol.lee@example.com',
    phone: '+27 84 345 6789',
    orders: 8,
    lastOrder: '2024-06-12',
    status: 'active',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@example.com',
    phone: '+27 85 456 7890',
    orders: 3,
    lastOrder: '2024-06-01',
    status: 'inactive',
  },
];

const CustomersList = (): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    debouncedSearch(event.target.value);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((searchValue: string) => {
        apiRef.current.setQuickFilterValues([searchValue]);
      }, 500),
    [apiRef]
  );

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
          rows={customerRows} // Use the mock data here
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
          onRowClick={(params) => navigate(`/customers?id=${params.row.id}`)}
        />
      </Stack>
    </Stack>
  );
};

export default CustomersList;