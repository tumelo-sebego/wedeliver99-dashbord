import { useLocation } from 'react-router-dom';
import { Card, Stack, Typography, Chip, Divider, Box, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@mui/material';
import { customerList } from 'data/customers-list';

const CustomerDetailsPage = () => {
  const id = new URLSearchParams(useLocation().search).get('id');
  const customer = customerList.find(c => String(c.id) === id);

  if (!customer) return <div>Customer not found</div>;

  // Example: customer.orders is an array of order objects
  // Each order: { image, name, unit, price, orderDate, totalUnits, totalPrice }
  const orders = customer.orders || [];

  return (
    <Card
      className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-nda53v-MuiPaper-root-MuiCard-root"
      sx={{
        p: 4,
        maxWidth: 900,
        margin: '32px auto',
        bgcolor: 'background.paper',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="flex-start">
        {/* Customer Avatar */}
        <Avatar
          src={customer.avatar}
          alt={customer.name}
          sx={{
            width: 120,
            height: 120,
            fontSize: 48,
            bgcolor: 'primary.main',
            mb: { xs: 2, sm: 0 },
          }}
        >
          {customer.name?.[0]}
        </Avatar>

        {/* Customer Details */}
        <Stack spacing={2} flex={1}>
          <Typography variant="h5" component="h2">
            {customer.name}
          </Typography>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Address
            </Typography>
            <Typography variant="body1">{customer.address || 'N/A'}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1">{customer.email}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Phone Number
            </Typography>
            <Typography variant="body1">{customer.phone}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Status
            </Typography>
            <Chip
              label={customer.status}
              color={customer.status === 'active' ? 'success' : 'default'}
              variant="outlined"
              sx={{ textTransform: 'capitalize' }}
            />
          </Box>
        </Stack>
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Product Orders */}
      <Typography variant="h6" gutterBottom>
        Product Orders
      </Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Total Units</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Avatar
                      src={order.image}
                      alt={order.name}
                      variant="rounded"
                      sx={{ width: 56, height: 40 }}
                    />
                  </TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.unit}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.totalUnits}</TableCell>
                  <TableCell>{order.totalPrice}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default CustomerDetailsPage;