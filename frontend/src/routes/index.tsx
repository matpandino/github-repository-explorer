import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repository';
import FavoriteRepositories from '../pages/FavoriteRepositories';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repository/:user/:id" component={Repositories} />
      <Route path="/favorite-repos" component={FavoriteRepositories} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
