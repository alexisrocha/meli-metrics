import {
  GET_CHART,
  DELETE_CHART,
  SELECTED_CHART,
  SET_SELECTEDCHART,
  ADD_METRIC,
  DELETE_METRIC,
  COPY_CHART
} from "../constants";

const initialState = {
  charts: [],
  selectedChart: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART:
      return { ...state, charts: [...state.charts, action.charts] };
    case DELETE_CHART:
      let newChart = state.charts
      newChart.splice(action.id, 1)
      return {
        ...state,
        charts: newChart,
      };
    case SET_SELECTEDCHART:
      return { ...state, selectedChart: action.selectedChart };
    case ADD_METRIC:
      let chart = [...state.charts[state.selectedChart].config, action.metric]
      let newCharts = []
      for(let i = 0; i < state.charts.length; i++){
        if(i == state.selectedChart) newCharts[i] = {...state.charts[i], config: chart}
        else newCharts[i] = state.charts[i]
      }
      return {...state, charts: newCharts};
    case DELETE_METRIC:
      let chart2 = state.charts[state.selectedChart].config.filter(metric => metric.metric_id != action.id)
      let newCharts2 = []
      for(let i = 0; i < state.charts.length; i++){
        if(i == state.selectedChart) newCharts2[i] = {...state.charts[i], config: chart2}
        else newCharts2[i] = state.charts[i]
      }
      return {...state, charts: newCharts2};
    case COPY_CHART:
      return {...state, charts: [...state.charts, state.charts[action.id]]}
    default:
      return state;
  }
};
