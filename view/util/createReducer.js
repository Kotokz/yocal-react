export default function createReducer(intialState, handlers) {
  return (state = intialState, action) => {
    const handler = handlers[action.type];
    console.log(action);
    if (!handler) {
      console.log("no method")
      return state;
    }
    return handler(state,action);
  };
}
