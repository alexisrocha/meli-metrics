import { GET_CHART } from "../constants"
import axios from "axios"

const getChart = (charts) => ({
    type: GET_CHART,
    charts
})

let obj = {
    title: 'lorem',
    desc: 'lorem ipsum',
    config: 
    [
        {
            metric_id: 1,
            time_frame: '60days',
            dimension: {
                site: 'MLA',
                subgroup: 'All site'
            },
            comparation: [ 'YOY' ]
        },
        {
            metric_id: 2,
            time_frame: '12months',
            dimension: {
                site: 'MLB',
                subgroup: 'All site'
            },
            comparation: [ 'YOY' ]
        }
    ]
}

export const fetchChart = id =>{
    return dispatch => (
        axios.get(`https://run.mocky.io/v3/2d11beed-0fbe-492a-aa9a-468917b51a13`)
        .then(res => obj)
        .then(charts => dispatch(getChart(charts)))
    )
}