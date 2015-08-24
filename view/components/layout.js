/**
 * Created by kotokz on 15/8/22.
 */

import React, { Component, PropTypes } from 'react';
import NavBar from './navbar';
import BS from 'react-bootstrap';

class Layout extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    render() {
        return (
            <div>
                <NavBar />
                <BS.Row className='show-grid'>
                    {this.props.children}
                </BS.Row>
            </div>
        );
    }

}

export default Layout;