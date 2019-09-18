import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Projects from '~/pages/Projects';
import Project from '~/pages/Project';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projetos" exact component={Projects} />
      <Route path="/projeto/:slug" exact component={Project} />
    </Switch>
  );
}
