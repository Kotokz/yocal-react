/**
 * Created by kotokz on 15/8/22.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/dice';
import Dice from "../components/dice";
import Tally from "../components/tally";
import BS from 'react-bootstrap';

@connect(state => state.game)
export default class GameBoard extends Component{

    render () {
        let {
            dispatch,
            scoring,
            isNewTurn,
            dice,
            score,
            rolls,
            heldDice,
            } = this.props;
        let actions = bindActionCreators(actionCreators, dispatch);
        let {
            roll,
            reset,
            hold
            } =  actions;

        return (
            <BS.Panel header='Dice game'>
                <BS.Grid fluid id='main'>
                    <BS.Row className='show-grid'>
                        <div className='Grid' id='main'>
                        <div className='Grid-cell play-column'>
                            {dice.length
                                ? <Dice {...{dice,rolls,heldDice,hold,roll}}/>
                                : <div className='dice'> <BS.Button bsStyle='primary' onClick={roll}>{!score ? 'Start Game' : 'Roll next turn'}</BS.Button></div>
                            }
                        </div>
                        <BS.Col className='Grid-cell Grid--1of3'>
                            <div className='dice'><BS.Button bsStyle='primary' onClick={reset}>Start Over</BS.Button></div>
                            <div id='score'>Score: {score}</div>
                            <Tally scoreMarkers={actions} {...{scoring, isNewTurn}}/>
                        </BS.Col>
                        </div>
                    </BS.Row>
                </BS.Grid>
            </BS.Panel>
        )
    }
}

GameBoard.propTypes = {
    number: PropTypes.number,
    dice: PropTypes.array,
    rolls: PropTypes.number,
    score: PropTypes.number,
    scoring: PropTypes.object,
    dispatch: PropTypes.func,
    isNewTurn: PropTypes.bool,
    heldDice: PropTypes.array,
};