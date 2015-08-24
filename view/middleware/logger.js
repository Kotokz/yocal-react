
export default function logger() {
  return next => action => {
    console.info('redux: dispatching', action);
    return next(action);
  };
}
