import leatrice from 'assets/new-customers/leatrice.png';
import roselle from 'assets/new-customers/roselle.jpg';
import darron from 'assets/new-customers/darron.png';
import jone from 'assets/new-customers/jone.png';

interface CustomerData {
  id: number;
  name: string;
  address: string;
  email:string;
  phone:string;
  orders?: number;
  lastOrder?: string;
  status?: 'active' | 'inactive';
}

export const customerList: CustomerData[] = [
   {
    id: 1,
    name: 'Alice Johnson',
    address: '123 Main St, Cape Town, South Africa',
    email: 'alice.johnson@example.com',
    phone: '+27 82 123 4567',
    orders: 12,
    lastOrder: '2024-06-15',
    status: 'active',
  },
  {
    id: 2,
    name: 'Bob Smith',
    address: '456 Elm St, Johannesburg, South Africa',
    email: 'bob.smith@example.com',
    phone: '+27 83 234 5678',
    orders: 5,
    lastOrder: '2024-06-10',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Carol Lee',
    address: '789 Oak St, Durban, South Africa',
    email: 'carol.lee@example.com',
    phone: '+27 84 345 6789',
    orders: 8,
    lastOrder: '2024-06-12',
    status: 'active',
  },
  {
    id: 4,
    name: 'David Brown',
    address: '321 Pine St, Pretoria, South Africa',
    email: 'david.brown@example.com',
    phone: '+27 85 456 7890',
    orders: 3,
    lastOrder: '2024-06-01',
    status: 'inactive',
  },
];
