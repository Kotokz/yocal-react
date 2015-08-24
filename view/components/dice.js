/**
 * Created by kotokz on 15/8/22.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/dice'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import R from 'ramda'
import Die from './die'

export default class Dice extends Component {

    render () {
        let {
            dice,
            rolls,
            heldDice,
            roll,
            hold
            } = this.props;
        let heldCheck = R.contains(R.__, heldDice)

        return (
            <div className='dice'>
                {dice.map(function (val, idx) {
                    const cn = classNames(
                        'die-container',
                        {isHeld: heldCheck(idx)}
                    );
                    return (
                        <div className={cn} key={idx}>
                            <Die
                                number={val}
                                onClick={() => hold(idx)}/>
                        </div>
                    )
                })}
                {rolls !== 3 && <button onClick={roll}>Roll again</button>}
            </div>
        )
    }
}

Dice.propTypes = {
    dice: PropTypes.array.isRequired,
    rolls: PropTypes.number.isRequired,
    heldDice: PropTypes.array.isRequired,
    hold: PropTypes.func.isRequired,
    roll: PropTypes.func.isRequired,
}
