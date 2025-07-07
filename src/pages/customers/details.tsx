import { useLocation } from 'react-router-dom';
import { customerList } from 'data/customers-list';

const CustomerDetailsPage = () => {
  const id = new URLSearchParams(useLocation().search).get('id');
  const customer = customerList.find(c => String(c.id) === id);

  if (!customer) return <div>Customer not found</div>;

  return (
    <div>
      <img src={customer.avatar} alt={customer.name} width={100} />
      <h2>{customer.name}</h2>
      <p>Country: {customer.country}</p>
    </div>
  );
};

export default CustomerDetailsPage;