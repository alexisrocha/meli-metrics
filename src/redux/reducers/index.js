 import { combineReducers } from "redux"
 import chartReducer from "./chart-reducer"

 export default combineReducers({
     chart: chartReducer
 })