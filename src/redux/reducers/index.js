 import { combineReducers } from "redux";
 import chartReducer from "./chart-reducer";
 import metricReducer from "./metric-reducer";

 export default combineReducers({
     chart: chartReducer,
     metric: metricReducer
 })