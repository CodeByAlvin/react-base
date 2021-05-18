import { RouteComponentProps } from 'react-router-dom';
import ErrorFor404 from '../views/Common/ErrorFor404';
import ErrorFor505 from '../views/Common/ErrorFor505';
import Home from '../views/Home';
import Order from '../views/Order';

export interface RouterConfigModel {
  path: string;
  component: React.ComponentType<RouteComponentProps> | React.ComponentType;
  routes?: Array<RouterConfigModel>;
  exact?: boolean;
  strict?: boolean;
  redirectPath?: string;
}

const routeConfig: Array<RouterConfigModel> = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/order/:id',
    component: Order,
  },
  {
    path: '/404',
    component: ErrorFor404,
  },
  {
    path: '/505',
    component: ErrorFor505,
  },
  {
    path: '/*',
    component: ErrorFor404,
  },
];

export default routeConfig;
