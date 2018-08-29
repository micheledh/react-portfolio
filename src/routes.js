import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './javascript/component/main/Main';
import About from './javascript/component/about/About';
import Contact from './javascript/component/contact/Contact';

const Routes = (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
);

export default Routes;
