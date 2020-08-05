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
  CHART_TO_VERSUS,
  DELETE_ROW,
  ADD_NAME,
  DELETE_NAME,
  ADD_CHART_TO_VERSUS,
  SET_SHADOW_TO_VERSUS,
} from "../constants";
import { changeChart } from "../action-creator/Charts";

const initialState = {
  selectedCountries: [],
  charts: [],
  selectedChart: -1,
  metricID: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART:
      return { ...state, charts: [...state.charts, { ...action.charts }] };
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
      let chart = [
        ...state.charts[state.selectedChart].config.simple,
        action.metric,
      ];
      let newCharts = [];
      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart)
          newCharts[i] = {
            ...state.charts[i],
            config: { ...state.charts[i].config, simple: chart },
          };
        else newCharts[i] = state.charts[i];
      }
      return { ...state, charts: newCharts };
    case DELETE_METRIC:
      let chart2 = state.charts[state.selectedChart].config.simple.filter(
        (x, index) => index != action.id
      );
      let newCharts2 = [];
      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart)
          newCharts2[i] = {
            ...state.charts[i],
            config: { ...state.charts[i].config, simple: chart2 },
          };
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
      let charts3 = [...state.charts[state.selectedChart].config.simple];
      let newCharts3 = [];
      charts3[action.index] = { ...action.newChart };
      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart) {
          newCharts3 = [...newCharts3, { ...state.charts[i] }];
          newCharts3[i].config.simple = [...charts3];
        } else if (i != state.selectedChart) {
          newCharts3 = [...newCharts3, { ...state.charts[i] }];
        }
      }
      return { ...state, charts: [...newCharts3] };
    case CHART_TO_VERSUS:
      let newChartVersus = [];

      for (let i = 0; i < state.charts.length; i++) {
        if (i == state.selectedChart) {
          newChartVersus[i] = {
            ...state.charts[i],
            config: { ...state.charts[i].config, versus: action.list },
          };
        } else {
          newChartVersus[i] = { ...state.charts[i] };
        }
      }

      return {
        ...state,
        selectedCountries: action.listFlag,
        charts: newChartVersus,
      };
    case DELETE_ROW:
      let array = [];
      let deleteRowList = state.charts[
        state.selectedChart
      ].config.versus.filter((x) => x.metric_id != action.metricID);

      for (let i = 0; i < state.charts.length; i++) {
        if (state.selectedChart == i) {
          array[i] = {
            ...state.charts[i],
            config: { ...state.charts[i].config, versus: deleteRowList },
          };
        } else {
          array[i] = { ...state.charts[i] };
        }
      }
      return {
        ...state,
        charts: array,
      };
    case ADD_NAME:
      let newArray = [];

      for (let i = 0; i < state.charts.length; i++) {
        if (state.selectedChart == i) {
          newArray[i] = {
            ...state.charts[i],
            config: { ...state.charts[i].config, versus: action.newList },
          };
        } else {
          newArray[i] = { ...state.charts[i] };
        }
      }
      return {
        ...state,
        charts: newArray,
        selectedCountries: action.flags,
      };
    case DELETE_NAME:
      let newArrayDelete = [];

      for (let i = 0; i < state.charts.length; i++) {
        if (state.selectedChart == i) {
          newArrayDelete[i] = {
            ...state.charts[i],
            config: { ...state.charts[i].config, versus: action.newList },
          };
        } else {
          newArrayDelete[i] = { ...state.charts[i] };
        }
      }
      return {
        ...state,
        charts: newArrayDelete,
        selectedCountries: action.flags,
      };
    case ADD_CHART_TO_VERSUS:
      let newListToAdd = [];
      action.metric.dimension.site = state.selectedCountries;
      for (let i = 0; i < state.charts.length; i++) {
        if (state.selectedChart == i) {
          newListToAdd[i] = {
            ...state.charts[i],
            config: {
              ...state.charts[i].config,
              versus: [...state.charts[i].config.versus, action.metric],
            },
          };
        } else {
          newListToAdd[i] = { ...state.charts[i] };
        }
      }
      return { ...state, charts: newListToAdd };

    case SET_SHADOW_TO_VERSUS:
      return { ...state, metricID: action.id };

    default:
      return state;
  }
};
