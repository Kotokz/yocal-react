/**
 * Created by kotokz on 15/8/22.
 */

import React, { Component } from 'react';
import { Link, State } from 'react-router';
import BS from 'react-bootstrap';

var RouteLink = React.createClass({
    mixins: [State],

    render: function () {
        var isActive = this.isActive(this.props.to, this.props.params,
            this.props.query);
        var activeClassName = isActive ? 'active' : '';
        var link = (
            <Link {...this.props} />
        );

        return <li className={activeClassName}>{link}</li>;
    }
});

class NavBar extends Component {

    render() {
        return (
            <BS.Navbar inverse fluid brand="YoCal" toggleNavKey={0}>
                <BS.CollapsibleNav eventKey={0}>
                    <BS.Nav navbar>
                        <RouteLink to="/hello">Hello World</RouteLink>
                        <RouteLink to="/game"> Dice Game</RouteLink>
                    </BS.Nav>
                    <BS.Nav navbar right>
                        <RouteLink to="/login">Login</RouteLink>
                    </BS.Nav>
                </BS.CollapsibleNav>
            </BS.Navbar>
        );
    }
}

export default NavBar;
