import { ReactElement, useMemo, useState } from 'react';
import {
  Button,
  Divider,
  LinearProgress,
  Link,
  Stack,
  TextField,
  Tooltip,
  Typography,
  debounce,
} from '@mui/material';
import { DataGrid, GridApi, GridColDef, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import { DataRow, rows } from 'data/products';
import CustomPagination from './CustomPagination';
import { currencyFormat } from 'helpers/format-functions';
import ProductImage from 'theme/components/ProductImage';
import { useLocation } from 'react-router-dom';

const columns: GridColDef<DataRow>[] = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'product',
    headerName: 'Product',
    flex: 1,
    minWidth: 182.9625,
    valueGetter: (params: any) => {
      return params.title + ' ' + params.subtitle;
    },
    renderCell: (params: any) => {
      return (
        <Stack direction="row" spacing={1.5} alignItems="center" component={Link} href="#!" sx={{ cursor: 'pointer' }}>
          <Tooltip title={params.row.product.title} placement="top" arrow>
            {/* <Avatar src={params.row.product.avatar} sx={{ objectFit: 'cover' }} /> */}
            <ProductImage src={params.row.product.avatar}/>
          </Tooltip>
          <Stack direction="column" spacing={0.5} justifyContent="space-between">
            <Typography variant="body1" color="text.primary">
              {params.row.product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {params.row.product.subtitle}
            </Typography>
          </Stack>
        </Stack>
      );
    },
    sortComparator: (v1: string, v2: string) => v1.localeCompare(v2),
  },
  {
    field: 'orders',
    headerName: 'Orders',
    flex: 0.75,
    minWidth: 137.221875,
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 0.75,
    minWidth: 137.221875,
    valueGetter: (params: any) => {
      return currencyFormat(params);
    },
  },
  {
    field: 'adsSpent',
    headerName: 'Ads Spent',
    flex: 0.75,
    minWidth: 137.221875,
    valueGetter: (params: any) => {
      return currencyFormat(params, { minimumFractionDigits: 3 });
    },
  },
  {
    field: 'refunds',
    headerName: 'Refunds',
    flex: 0.75,
    minWidth: 137.221875,
    renderCell: ({ row: { refunds } }: any) => {
      if (refunds > 0) return `> ${refunds}`;
      else return `< ${-refunds}`;
    },
    filterable: false,
  },
];

interface TopSellingProductProps {
  title?: string;
  hideAdsAndRefunds?: boolean;
  onProductClick?: (product: any) => void;
}

const TopSellingProduct = ({ title = 'Top Selling Product', hideAdsAndRefunds = false, onProductClick }: TopSellingProductProps): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();
  const [search, setSearch] = useState('');
  const location = useLocation();

  // Determine if we are on the products page
  const isProductsPage = location.pathname === '/products';

  const visibleColumns = useMemo(
    () =>
      columns
        .filter((column) => column.field !== 'id')
        .filter((column) => !hideAdsAndRefunds || (column.field !== 'adsSpent' && column.field !== 'refunds'))
        .map((column) => {
          if (column.field === 'refunds') {
            return {
              ...column,
              getApplyQuickFilterFn: undefined,
              filterable: false,
            };
          }
          return column;
        }),
    [columns, hideAdsAndRefunds],
  );

  const handleRowClick = (product: any) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

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
          {title}
        </Typography>
        {isProductsPage && (
          <Button variant="contained" color="primary">
            Add Product
          </Button>
        )}
      </Stack>
      <Divider />
      <Stack height={1}>
        <DataGrid
          apiRef={apiRef}
          columns={visibleColumns}
          rows={rows}
          getRowHeight={() => 70}
          hideFooterSelectedRowCount
          disableColumnResize
          disableColumnSelector
          disableRowSelectionOnClick
          rowSelection={false}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[5]}
          onResize={() => {
            apiRef.current.autosizeColumns({
              includeOutliers: true,
              expand: true,
            });
          }}
          slots={{
            loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
            pagination: CustomPagination,
            noRowsOverlay: () => <section>No rows available</section>,
          }}
          sx={{
            height: 1,
            width: 1,
          }}
          onRowClick={(params) => handleRowClick(params.row)}
        />
      </Stack>
    </Stack>
  );
};

export default TopSellingProduct;
