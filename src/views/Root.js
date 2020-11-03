import React from 'react';
import MainTemplates from 'templates/MainTemplates';
import Notes from 'views/Notes';
import Articales from 'views/Articales';
import Twitters from 'views/Twitters';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <MainTemplates>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route
          path="/articales"
          component={Articales}
        />
        <Route
          path="/twitters"
          component={Twitters}
        />
      </Switch>
    </MainTemplates>
  </BrowserRouter>
);

export default Root;
