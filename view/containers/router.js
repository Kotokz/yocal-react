'use strict';

import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import Layout from '../components/layout';
import HelloWorld from './helloworld';
import GameBoard from './gameboard.js'
class YoCalRouter extends React.Component {
    render() {
        return (
            <Router {...this.props}>
                <Redirect from='/' to='/hello' />
                <Route component={Layout}>
                    <Route path="/hello" component={HelloWorld}/>
                    <Route path="/game" component={GameBoard}/>
                </Route>
            </Router>
        );
    }
}

YoCalRouter.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default YoCalRouter;
