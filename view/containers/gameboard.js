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
        const {
            dispatch,
            scoring,
            isNewTurn,
            dice,
            score,
            rolls,
            heldDice
            } = this.props;
        const {
            roll,
            reset,
            hold
            } = bindActionCreators(actionCreators, dispatch);

        return (
            <BS.Panel header='Dice game'>
                <BS.Grid fluid id='main'>
                    <BS.Row className='show-grid'>
                        <div className='Grid' id='main'>
                        <div className='Grid-cell play-column'>
                            {dice.length
                                ? <Dice {...{hold,roll}} {...{dice,rolls,heldDice}} />
                                : <div className='dice'> <BS.Button bsStyle='primary' onClick={roll}>{!score ? 'Start Game' : 'Roll next turn'}</BS.Button></div>
                            }
                        </div>
                        <BS.Col className='Grid-cell Grid--1of3'>
                            <div className='dice'><BS.Button bsStyle='primary' onClick={reset}>Start Over</BS.Button></div>
                            <div id='score'>Score: {score}</div>
                            <Tally scoreMarkers={bindActionCreators(actionCreators, dispatch)} {...{scoring, isNewTurn}}/>
                        </BS.Col>
                        </div>
                    </BS.Row>
                </BS.Grid>
            </BS.Panel>
        )
    }
}

GameBoard.propTypes = {
    number: React.PropTypes.number,
    dice: React.PropTypes.array,
    rolls: React.PropTypes.number,
    score: React.PropTypes.number,
    scoring: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    isNewTurn: React.PropTypes.bool,
    heldDice: React.PropTypes.array
};