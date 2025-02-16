import { Middleware } from 'redux';

const logger: Middleware = (state) => (next) => (action) => {
  console.log(`Prev State:`, state.getState());
  const result = next(action);
  console.log(`Next State:`, state.getState());
  return result;
};

export default logger;
