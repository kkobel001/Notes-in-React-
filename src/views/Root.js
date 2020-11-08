import React from 'react';
import MainTemplates from 'templates/MainTemplates';
import Notes from 'views/Notes';
import Articales from 'views/Articales';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';
// import { routes } from 'routes';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <MainTemplates>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/notes" />}
        />
        <Route
          exact
          path="/notes"
          component={Notes}
        />
        <Route
          path="/notes/:id"
          component={DetailsPage}
        />
        <Route
          path="/articles/:id"
          component={DetailsPage}
        />
        <Route
          path="/twitters/:id"
          component={DetailsPage}
        />
        <Route
          exact
          path="/articales"
          component={Articales}
        />
        <Route
          exact
          path="/twitters"
          component={Twitters}
        />
      </Switch>
    </MainTemplates>
  </BrowserRouter>
);

export default Root;
