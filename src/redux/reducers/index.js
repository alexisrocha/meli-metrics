 import { combineReducers } from "redux";
 import chartReducer from "./chart-reducer";
 import metricReducer from "./metric-reducer";
 import metricDataReducer from "./metricData-reducer";

 export default combineReducers({
     chart: chartReducer,
     metric: metricReducer,
     metricData: metricDataReducer
 })