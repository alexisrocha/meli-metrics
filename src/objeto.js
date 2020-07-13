let getMetric = 
{
    name: 'nombre',
    display_name: 'Buy Box',
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
//https://run.mocky.io/v3/194dc58a-cefd-4fae-9e71-c639a9161d4f

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
    name: 'nombre',
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
// https://run.mocky.io/v3/2d1084a6-7943-42d2-ade0-8801ef3211fc

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
