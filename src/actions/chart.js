import { createAction } from 'redux-actions';
const setPieChart = createAction('setPieChart');

export function setPieChartDataRequest(){
  return dispatch => {
    var adminCount = 0, demoCount = 0;
    for (var key in localStorage){
      if (JSON.parse(localStorage.getItem(key)).roles === "Admin") {
        adminCount +=1;
      } else {
        demoCount +=1;
      }
    }
    dispatch(setPieChart({adminCount: adminCount, demoCount: demoCount}));
  }
}