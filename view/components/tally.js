/**
 * Created by kotokz on 15/8/22.
 */
import React, { Component } from 'react';
import R from 'ramda'

export default class Tally extends Component {

    render() {
        const {
            scoring,
            scoreMarkers,
            isNewTurn
        } = this.props;

        var getNumberDisplay = function(scoring, isNewTurn, scoreMarkers, key) {
            let numDisplay = null;
            if (scoring[key] === null) {
                if (isNewTurn) {
                    numDisplay = '-'
                } else {
                    numDisplay = <button onClick={scoreMarkers['score_' + key]}>Score</button>
                }
            } else {
                numDisplay = scoring[key]
            }
            return numDisplay
        };


        const getNumDisplay = R.curry(getNumberDisplay)(scoring, isNewTurn, scoreMarkers);

        return (
            <div>

                <h2>UPPER SECTION</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Aces = 1</td><td>Count and Add Only Aces</td><td>{getNumDisplay('ones')}</td>
                    </tr>
                    <tr>
                        <td>Twos = 2</td><td>Count and Add Only Twos</td><td>{getNumDisplay('twos')}</td>
                    </tr>
                    <tr>
                        <td>Threes = 3</td><td>Count and Add Only Threes</td><td>{getNumDisplay('threes')}</td>
                    </tr>
                    <tr>
                        <td>Fours = 4</td><td>Count and Add Only Fours</td><td>{getNumDisplay('fours')}</td>
                    </tr>
                    <tr>
                        <td>Fives = 5</td><td>Count and Add Only Fives</td><td>{getNumDisplay('fives')}</td>
                    </tr>
                    <tr>
                        <td>Sixes = 6</td><td>Count and Add Only Sixes</td><td>{getNumDisplay('sixes')}</td>
                    </tr>
                    </tbody>
                </table>

                <h2>LOWER SECTION</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>3 of a kind</td><td>Add Total Of All Dice</td><td>{getNumDisplay('three_of_a_kind')}</td>
                    </tr>
                    <tr>
                        <td>4 of a kind</td><td>Add Total Of All Dice</td><td>{getNumDisplay('four_of_a_kind')}</td>
                    </tr>
                    <tr>
                        <td>Full House</td><td>SCORE 25</td><td>{getNumDisplay('full_house')}</td>
                    </tr>
                    <tr>
                        <td>Sm. Straight (seq of 4)</td><td>SCORE 30</td><td>{getNumDisplay('small_run')}</td>
                    </tr>
                    <tr>
                        <td>Lg. Straight (seq of 5)</td><td>SCORE 40</td><td>{getNumDisplay('large_run')}</td>
                    </tr>
                    <tr>
                        <td>REDUXEE</td><td>SCORE 50</td><td>{getNumDisplay('reduxee')}</td>
                    </tr>
                    <tr>
                        <td>Chance</td><td>Score Total Of All 5 Dice</td><td>{getNumDisplay('chance')}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

Tally.propTypes = {
    isNewTurn: React.PropTypes.bool,
    scoreMarkers: React.PropTypes.object,
    scoring: React.PropTypes.object
};