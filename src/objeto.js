let getMetric = 
{
    name: 'Buy Box',
    display_name: 'Buy Box - GMV',
    group: 'MARKETPLACE',
    description: 'Una descripcion de la metrica',
    format: 'INTEG',
    dimensions: {
        site: ['MLA', 'MLB', 'MLC', 'MCO', 'MLM', 'MLU', 'MGT', 'MBO'],
        subgroup: ['All site', 'entretainment', 'vehicles']
    },
    time_frames: [
        {
            desc: '60days' 
        },
        {
            desc:'12months'
        },
        {
            desc: '4weeks'
        }
    ],
    date_comp:
    [
        {
            code: 'YOY',
            desc: 'Last year'
        },
        {
            code: 'MOM',
            desc: 'Last Month'
        }
    ]
}
//https://run.mocky.io/v3/4557431e-8bb8-4fe1-9439-306455af3ce7
// erase https://designer.mocky.io/manage/delete/4557431e-8bb8-4fe1-9439-306455af3ce7/Y03fTFnE4hvREegNd2vFQYfTr5rLJe06YvFR

let getMetricData = 
{
    labels: ['2020-01-31', '2020-02-28', '2020-03-31', '2020-04-30', '2020-05-31', '2020-06-30', '2020-07-31', '2020-08-31', '2020-09-30', '2020-10-31', '2020-11-30', '2020-12-31'],
    data: 
    [
        {
            name: 'Actual',
            data: [100, 95, 105, 123, 110, 96, 92, 88, 80, 99, 110, 136]
        },
        {
            name: 'Last Year',
            data: [80, 87, 97, 101, 125, 97, 94, 100, 95, 113, 120, 100]
        }
    ]
}

// https://run.mocky.io/v3/8d625039-8fa3-4fd0-b791-7caeda125c5f

let getMetric2 = 
{
    name: 'Devices Sold',
    display_name: 'Devices Sold',
    group: 'MERCADO PAGO',
    description: 'ejemplo de mercadopago',
    format: 'INTEG',
    dimensions: {
        site: ['MLA', 'MLB', 'MLC', 'MCO', 'MLM', 'MLU', 'MGT', 'MBO'],
        subgroup: ['All site', 'entretainment', 'vehicles']
    },
    time_frames: [
        {
            desc: '60days' 
        },
        {
            desc:'12months'
        },
        {
            desc: '4weeks'
        }
    ],
    date_comp:
    [
        {
            code: 'YOY',
            desc: 'Last year'
        },
        {
            code: 'MOM',
            desc: 'Last Month'
        }
    ]
}
// https://run.mocky.io/v3/274d970d-104d-4bdf-94b5-4f3aa526c99f
// erase https://designer.mocky.io/manage/delete/274d970d-104d-4bdf-94b5-4f3aa526c99f/W8sWD3BjkgCXQL0usCnB087aAhYJfdBXxy3d
let getMetricData2 = 
{
    labels: ['2020-01-31', '2020-02-28', '2020-03-31', '2020-04-30', '2020-05-31', '2020-06-30', '2020-07-31', '2020-08-31', '2020-09-30', '2020-10-31', '2020-11-30', '2020-12-31'],
    data: 
    [
        {
            name: 'Actual',
            data: [123, 110, 96, 92, 88, 80, 99, 110, 136, 100, 95, 105]
        },
        {
            name: 'Last Year',
            data: [80, 87, 105, 101, 125, 120, 100, 97, 94, 100, 95, 113]
        }
    ]
}

//https://run.mocky.io/v3/167de9c1-190c-40ce-ae5b-ed5f5978da03

let getChart = 
{
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

// https://run.mocky.io/v3/2d11beed-0fbe-492a-aa9a-468917b51a13
