/**
 * Created by kotokz on 15/8/23.
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { changeName } from '../actions/HelloWorld';
import { upperHelloSelector } from '../selectors/HelloWorld';
import BS from 'react-bootstrap';

@connect(
    upperHelloSelector,
    dispatch => ({
        changeName: name => dispatch(changeName(name))
    })
)
export default class HelloWorld extends React.Component {

    onChangeName() {
        const { props: { changeName, helloWorld } } = this;
        changeName(helloWorld.get('name'));
    }

    render() {
        return (
            <BS.Panel header='Hello world game'>
                <div>{this.props.helloWorld.get('name')} says "Hello, World!"</div>
                <div>{this.props.upper} says "Hello, World!"</div>
                <button onClick={this.onChangeName.bind(this)}>Click</button>
            </BS.Panel>
        );
    }
}

HelloWorld.propTypes = {
    helloWorld: PropTypes.instanceOf(Immutable.Map).isRequired,
    upper: PropTypes.string.isRequired
};