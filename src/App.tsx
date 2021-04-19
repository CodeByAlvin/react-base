import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthorizedRoute } from '@/components/Authorized';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

import routeConfig from '@/router/router.config';

import './App.scss';

const App = (): JSX.Element => {
  const renderRoutes = () => (
    <Router>
      <GlobalHeader />
      <Switch>
        {routeConfig.map(rc => {
          const { path, component, redirectPath = '/404', ...rest } = rc;
          return (
            <AuthorizedRoute
              key={path}
              path={path}
              component={component}
              redirectPath={redirectPath}
              {...rest}
            />
          );
        })}
      </Switch>
      <GlobalFooter />
    </Router>
  );

  return <div className="App">{renderRoutes()}</div>;
};

export default App;
