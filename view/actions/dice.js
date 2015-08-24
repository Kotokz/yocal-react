/**
 * Created by kotokz on 15/8/22.
 */
import GameConstants from '../constants/gameConstants';

export function roll() {
    console.log("calling roll");
    return {
        type: GameConstants.ROLL_DICE
    };
}
export function reset () {return {type: GameConstants.RESET_GAME}}
export function hold (index) {return {type: GameConstants.HOLD_DIE, index}}
export function score_ones () {return {type: GameConstants.SCORE_ONES}}
export function score_twos () {return {type: GameConstants.SCORE_TWOS}}
export function score_threes () {return {type: GameConstants.SCORE_THREES}}
export function score_fours () {return {type: GameConstants.SCORE_FOURS}}
export function score_fives () {return {type: GameConstants.SCORE_FIVES}}
export function score_sixes () {return {type: GameConstants.SCORE_SIXES}}
export function score_three_of_a_kind () {return {type: GameConstants.SCORE_THREE_OF_A_KIND}}
export function score_four_of_a_kind () {return {type: GameConstants.SCORE_FOUR_OF_A_KIND}}
export function score_full_house () {return {type: GameConstants.SCORE_FULL_HOUSE}}
export function score_small_run () {return {type: GameConstants.SCORE_SMALL_RUN}}
export function score_large_run () {return {type: GameConstants.SCORE_LARGE_RUN}}
export function score_reduxee () {return {type: GameConstants.SCORE_REDUXEE}}
export function score_chance () {return {type: GameConstants.SCORE_CHANCE}}
