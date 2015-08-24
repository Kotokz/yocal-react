import { createSelector } from 'reselect';

const helloSelector = state => state.helloWorld;

export const upperHelloSelector = createSelector(
  helloSelector,
  (name) => ({
    helloWorld: name,
    upper: name.get('name').toUpperCase()
  })
);
