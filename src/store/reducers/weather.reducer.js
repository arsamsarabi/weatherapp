import { LOAD_WEATHER } from '../actions/types';

const initialState = {
  report: undefined,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_WEATHER:
      return {
        ...state,
        report: payload,
      };
    default:
      return state;
  }
};
