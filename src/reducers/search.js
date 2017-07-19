import { handleActions } from 'redux-actions';

const initialSearchState = {
  result: [],
}

export function search(state, { payload }) {
  return {
    ...state,
    result: payload.result,
  }
}

export default handleActions({
  search
},initialSearchState);
