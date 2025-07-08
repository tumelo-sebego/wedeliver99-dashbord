export interface OrderData {
  customerId: number;
  image: string;
  name: string;
  unit: string;
  price: string;
  orderDate: string;
  totalUnits: number;
  totalPrice: string;
}

// Example product images (replace with your actual image imports if available)
import product1 from 'assets/top-selling-products/laptop.jpg';
import product2 from 'assets/top-selling-products/iphone12.png';
import product3 from 'assets/top-selling-products/nikeV22.jpg';
import product4 from 'assets/top-selling-products/watch.jpg';

export const orderList: OrderData[] = [
  // Orders for Alice Johnson (id: 1)
  {
    customerId: 1,
    image: product1,
    name: 'Milk',
    unit: '1L',
    price: 'R20.00',
    orderDate: '2024-06-01',
    totalUnits: 2,
    totalPrice: 'R40.00',
  },
  {
    customerId: 1,
    image: product2,
    name: 'Bread',
    unit: 'Loaf',
    price: 'R15.00',
    orderDate: '2024-06-03',
    totalUnits: 3,
    totalPrice: 'R45.00',
  },
  {
    customerId: 1,
    image: product3,
    name: 'Eggs',
    unit: 'Dozen',
    price: 'R30.00',
    orderDate: '2024-06-05',
    totalUnits: 1,
    totalPrice: 'R30.00',
  },
  {
    customerId: 1,
    image: product4,
    name: 'Butter',
    unit: '500g',
    price: 'R25.00',
    orderDate: '2024-06-07',
    totalUnits: 2,
    totalPrice: 'R50.00',
  },

  // Orders for Bob Smith (id: 2)
  {
    customerId: 2,
    image: product2,
    name: 'Bread',
    unit: 'Loaf',
    price: 'R15.00',
    orderDate: '2024-06-02',
    totalUnits: 1,
    totalPrice: 'R15.00',
  },
  {
    customerId: 2,
    image: product3,
    name: 'Eggs',
    unit: 'Dozen',
    price: 'R30.00',
    orderDate: '2024-06-04',
    totalUnits: 2,
    totalPrice: 'R60.00',
  },
  {
    customerId: 2,
    image: product1,
    name: 'Milk',
    unit: '1L',
    price: 'R20.00',
    orderDate: '2024-06-06',
    totalUnits: 1,
    totalPrice: 'R20.00',
  },
  {
    customerId: 2,
    image: product4,
    name: 'Butter',
    unit: '500g',
    price: 'R25.00',
    orderDate: '2024-06-08',
    totalUnits: 1,
    totalPrice: 'R25.00',
  },

  // Orders for Carol Lee (id: 3)
  {
    customerId: 3,
    image: product3,
    name: 'Eggs',
    unit: 'Dozen',
    price: 'R30.00',
    orderDate: '2024-06-03',
    totalUnits: 1,
    totalPrice: 'R30.00',
  },
  {
    customerId: 3,
    image: product1,
    name: 'Milk',
    unit: '1L',
    price: 'R20.00',
    orderDate: '2024-06-05',
    totalUnits: 2,
    totalPrice: 'R40.00',
  },
  {
    customerId: 3,
    image: product2,
    name: 'Bread',
    unit: 'Loaf',
    price: 'R15.00',
    orderDate: '2024-06-07',
    totalUnits: 2,
    totalPrice: 'R30.00',
  },
  {
    customerId: 3,
    image: product4,
    name: 'Butter',
    unit: '500g',
    price: 'R25.00',
    orderDate: '2024-06-09',
    totalUnits: 1,
    totalPrice: 'R25.00',
  },

  // Orders for David Brown (id: 4)
  {
    customerId: 4,
    image: product4,
    name: 'Butter',
    unit: '500g',
    price: 'R25.00',
    orderDate: '2024-06-04',
    totalUnits: 1,
    totalPrice: 'R25.00',
  },
  {
    customerId: 4,
    image: product2,
    name: 'Bread',
    unit: 'Loaf',
    price: 'R15.00',
    orderDate: '2024-06-06',
    totalUnits: 2,
    totalPrice: 'R30.00',
  },
  {
    customerId: 4,
    image: product1,
    name: 'Milk',
    unit: '1L',
    price: 'R20.00',
    orderDate: '2024-06-08',
    totalUnits: 1,
    totalPrice: 'R20.00',
  },
  {
    customerId: 4,
    image: product3,
    name: 'Eggs',
    unit: 'Dozen',
    price: 'R30.00',
    orderDate: '2024-06-10',
    totalUnits: 1,
    totalPrice: 'R30.00',
  },
];