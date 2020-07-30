import { ADD_NAME, DELETE_NAME, CHART_TO_VERSUS, ADD_CHART_TO_VERSUS } from "../constants";

const initialState = {
  selectedCountries: [],
  chartVersus: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.name],
        chartVersus: action.newList,
      };
    case DELETE_NAME:
      let selectedCountries2 = state.selectedCountries.filter(
        (elem) => elem != action.name
      );
      return {
        ...state,
        selectedCountries: selectedCountries2,
        chartVersus: action.newList,
      };
    case CHART_TO_VERSUS:
      return {
        ...state,
        selectedCountries: action.listFlag,
        chartVersus: action.list,
      };
    case ADD_CHART_TO_VERSUS:
      let newList = []
      for(let i = 0; i < state.selectedCountries.length; i++){
        let newMetric = {...action.metric, site: state.selectedCountries[i] }
        newMetric.dimension.site = state.selectedCountries[i]
        newList.push(newMetric)
      }
      return {...state, chartVersus: [...state.chartVersus, ...newList]}
    default:
      return state;
  }
};
