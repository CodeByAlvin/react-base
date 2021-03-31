import { NavLink } from 'react-router-dom';
import './style.scss';

const GlobalHeader = (): JSX.Element => (
  <div>
    <NavLink exact to="/">
      go to home
    </NavLink>
    <NavLink to="/order/123456789">go to order</NavLink>
    <NavLink to="/404">go 404</NavLink>
    <NavLink to="/505">go 505</NavLink>
    <NavLink to="/unknown">unknown url</NavLink>
  </div>
);

export default GlobalHeader;
