import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import MainTemplates from 'templates/MainTemplates';
import Notes from 'views/Notes';
import Articales from 'views/Articales';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplates>
        <Switch>
          <Route
            exact
            path={routes.home}
            render={() => (
              <Redirect to="/notes" />
            )}
          />
          <Route
            exact
            path={routes.notes}
            component={Notes}
          />
          <Route
            path={routes.note}
            component={DetailsPage}
          />
          <Route
            exact
            path={routes.articles}
            component={Articales}
          />
          <Route
            path={routes.article}
            component={DetailsPage}
          />
          <Route
            exact
            path={routes.twitters}
            component={Twitters}
          />
          <Route
            path={routes.twitter}
            component={DetailsPage}
          />
        </Switch>
      </MainTemplates>
    </BrowserRouter>
  </Provider>
);

export default Root;
