import { GET_CHART } from "../constants"
import axios from "axios"

let host = "https://run.mocky.io/v3/"

let url = {
    1 : `61fbd212-8159-47f7-9083-7167d289a444`,
    2 : `8ed189c0-7f9f-4a1d-8fa2-b78bcb83da72`
}

const getChart = (charts) => ({
    type: GET_CHART,
    charts
})

export const fetchChart = id =>{
    return dispatch => (
        axios.get(host + url[id])
        .then(res => res.data)
        .then(charts => dispatch(getChart(charts)))
    )
}