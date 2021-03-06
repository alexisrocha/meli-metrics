import { GET_METRICS } from "../constants"

const initialState = {
    metric: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_METRICS:
            let newMetric = state.metric
            newMetric[action.id] = action.metric
            return { ...state, metric: newMetric }
        default:
            return state;
    }
}