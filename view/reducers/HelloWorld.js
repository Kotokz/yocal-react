import Immutable from 'immutable';
import ActionTypes from '../constants/actiontypes';
import createReducer from '../util/createReducer';

let initialState = Immutable.Map({name: 'Turtle'});

export default createReducer(initialState, {
  [ActionTypes.HelloWorld.changeName](state, action) {
    let name = action.name;
    switch(name) {
    case 'Turtle':
      name = 'E';
      break;
    case 'E':
      name = 'Drama';
      break;
    case 'Drama':
      name = 'Vince';
      break;
    case 'Vince':
      name = 'Turtle';
      break;
    default:
      name = 'Turtle';
    }
    return state.set('name', name);
  }
});
