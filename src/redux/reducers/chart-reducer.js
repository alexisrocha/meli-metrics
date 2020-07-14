import { GET_CHART } from '../constants'

const initialState = {
    charts: []
} 

export default ( state= initialState, action) => {
    switch(action.type) {
        case GET_CHART:
            return {...state, charts: [...state.charts, action.charts]}
        default: 
            return state;
    }
}  