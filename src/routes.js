import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './javascript/component/main/Main';
import About from './javascript/component/about/About';
import Contact from './javascript/component/contact/Contact';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    );
}
