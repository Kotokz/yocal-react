import ActionTypes from '../constants/actiontypes';

export function changeName(name) {
  return {
    type: ActionTypes.HelloWorld.changeName,
    name
  };
}
