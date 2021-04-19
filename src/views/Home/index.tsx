import { Link, Route, Switch } from 'react-router-dom';
import Another from '../Another';
import Order from '../Order';

const Home: React.FC = () => (
  <div>
    <Link to="/aaa">abc</Link>
    <Link to="/bbb">abcd</Link>
    <Switch>
      <Route path="/aaa">abc</Route>
      <Route path="/bbb">acbd</Route>
    </Switch>
  </div>
);

export default Home;
