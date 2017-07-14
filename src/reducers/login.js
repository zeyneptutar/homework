import { handleActions } from 'redux-actions';

const initialLoginState = {
  errors: {},
  success: false,
  rejected: false,
};

export function clearLoginState() {
  return initialLoginState;
}

export function login(state, action) {
  let { payload } = action;

  if (payload.error)
    return {
      error: payload.error,
      success: false,
      rejected: true,
    };

  return {
    errors: {},
    success: true,
    rejected: false,
  };
}

export default handleActions({
  clearLoginState,
  login,
}, initialLoginState);
