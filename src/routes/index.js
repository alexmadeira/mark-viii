import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Projects from '~/pages/Projects';
import Project from '~/pages/Project';
import Curriculo from '~/pages/Curriculo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projetos" component={Projects} />
      <Route path="/projeto/:slug" component={Project} />
      <Route path="/curriculo" component={Curriculo} />
    </Switch>
  );
}
