import { useParams } from 'react-router-dom';
import { GetDetailsAPI, GetDetailsRequest } from '@/apis/user/GetDetails';
import { useEffect } from 'react';

const Order: React.FC = () => {
  const parameter = useParams<{ id: string }>();

  useEffect(() => {
    const request = new GetDetailsRequest();
    new GetDetailsAPI(request)
      .send()
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(() => {
        console.log();
      });
  }, []);

  return (
    <div>
      <p>this is Order, Order id {parameter.id}</p>
    </div>
  );
};

export default Order;
