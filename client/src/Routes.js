import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './scripts/components/Main/index';
import { Header } from './scripts/components/common/Header';

export const routes = () => {
    return (
        <Fragment>
            <Router basename={'/'}>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={Main} />
                </Switch>
            </Router>
        </Fragment>
    );
};
