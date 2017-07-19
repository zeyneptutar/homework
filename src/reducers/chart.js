import { handleActions } from 'redux-actions';

const initialChartState = {
  adminCount: null,
  demoCount: null
};

export function setPieChart(state, { payload }){
  return {
    ...state,
    adminCount: payload.adminCount,
    demoCount: payload.demoCount,
  }
}

export default handleActions({
  setPieChart,
}, initialChartState);