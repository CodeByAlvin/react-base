import { Link, Route, Switch } from 'react-router-dom';

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
