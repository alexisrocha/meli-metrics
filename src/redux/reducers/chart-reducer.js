import {
  GET_CHART,
  DELETE_CHART,
  SELECTED_CHART,
  SET_SELECTEDCHART,
  ADD_METRIC,
  DELETE_METRIC,
  COPY_CHART,
  CHANGE_NAME,
  CHANGE_METRIC_INFO,
  CHANGE_VISUALIZATION,
} from "../constants";
import { changeChart } from "../action-creator/Charts";

const initialState = {
  charts: [],
  selectedChart: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART:
      return { ...state, charts: [...state.charts, action.charts] };
    case DELETE_CHART:
      let newChartstoDelete = state.charts.filter(
        (x, index) => index != action.id
      );
      return {
        ...state,
        charts: newChartstoDelete,
      };
    case SET_SELECTEDCHART:
      return { ...state, selectedChart: action.selectedChart };
    case ADD_METRIC:
      let chart = [...state.charts[state.selectedChart].config, action.metric];
      let newCharts = [];
      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart)
          newCharts[i] = { ...state.charts[i], config: chart };
        else newCharts[i] = state.charts[i];
      }
      return { ...state, charts: newCharts };
    case DELETE_METRIC:
      let chart2 = state.charts[state.selectedChart].config.filter(
        (x, index) => index != action.id
      );
      let newCharts2 = [];
      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart)
          newCharts2[i] = { ...state.charts[i], config: chart2 };
        else newCharts2[i] = state.charts[i];
      }
      return { ...state, charts: newCharts2 };
    case COPY_CHART:
      return {
        ...state,
        charts: [...state.charts, { ...state.charts[action.id] }],
      };
    case CHANGE_NAME:
      let newItem = { ...state.charts[action.index], title: action.newName };
      let changeCharts = state.charts;
      for (let i = 0; i < changeCharts.length; i++) {
        if (i == action.index) {
          changeCharts[i] = newItem;
        }
      }
      return {
        ...state,
        charts: changeCharts,
      };

    case CHANGE_VISUALIZATION:
      let newItemVisualization = {
        ...state.charts[action.index],
        type: action.data,
      };
      let newChartsVisualization = state.charts;
      for (let i = 0; i < newChartsVisualization.length; i++) {
        if (i == action.index) {
          newChartsVisualization[i] = newItemVisualization;
        }
      }
      return {
        ...state,
        charts: newChartsVisualization,
      };
    case CHANGE_METRIC_INFO:
      let charts3 = [...state.charts[state.selectedChart].config];
      let newCharts3 = [];
      charts3[action.index] = action.newChart;
      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart) {
          newCharts3 = [...newCharts3, state.charts[i]];
          newCharts3[i].config = charts3;
        } else if (i != state.selectedChart) {
          newCharts3 = [...newCharts3, state.charts[i]];
        }
      }
      return { ...state, charts: newCharts3 };
    default:
      return state;
  }
};
