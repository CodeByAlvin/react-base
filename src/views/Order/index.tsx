import { useParams } from 'react-router-dom';

const Order: React.FC = () => {
  const parameter = useParams<{ id: string }>();

  return (
    <div>
      <p>this is Order, Order id {parameter.id}</p>
    </div>
  );
};

export default Order;
