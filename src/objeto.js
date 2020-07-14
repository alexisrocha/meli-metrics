let getMetric = {"name":"Buy Box","display_name":"Buy Box - GMV","group":"MARKETPLACE","description":"Una descripcion de la metrica","format":"INTEG","dimensions":{"site":["MLA","MLB","MLC","MCO","MLM","MLU","MGT","MBO"],"subgroup":["All site","entretainment","vehicles"]},"time_frames":[{"desc":"60days"},{"desc":"12months"},{"desc":"4weeks"}],"date_comp":[{"code":"YOY","desc":"Last year"},{"code":"MOM","desc":"Last Month"}]};
// https://run.mocky.io/v3/beddddd4-e47c-43c2-8510-fe0fd7986c0a

let getMetric2 = {"name":"Devices Sold","display_name":"Devices Sold","group":"MERCADO PAGO","description":"ejemplo de mercadopago","format":"INTEG","dimensions":{"site":["MLA","MLB","MLC","MCO","MLM","MLU","MGT","MBO"],"subgroup":["All site","entretainment","vehicles"]},"time_frames":[{"desc":"60days"},{"desc":"12months"},{"desc":"4weeks"}],"date_comp":[{"code":"YOY","desc":"Last year"},{"code":"MOM","desc":"Last Month"}]};
// https://run.mocky.io/v3/d2ecd0d4-0234-45fb-a140-6f1d0f63d9b5


let getMetricData = {"labels":["2020-01-31","2020-02-28","2020-03-31","2020-04-30","2020-05-31","2020-06-30","2020-07-31","2020-08-31","2020-09-30","2020-10-31","2020-11-30","2020-12-31"],"data":[{"name":"Actual","data":[100,95,105,123,110,96,92,88,80,99,110,136]},{"name":"Last Year","data":[80,87,97,101,125,97,94,100,95,113,120,100]}]};
// https://run.mocky.io/v3/19f3e90f-4e4c-4e96-998a-abc0d2eb64e0

let getMetricData2 = {"labels":["2020-01-31","2020-02-28","2020-03-31","2020-04-30","2020-05-31","2020-06-30","2020-07-31","2020-08-31","2020-09-30","2020-10-31","2020-11-30","2020-12-31"],"data":[{"name":"Actual","data":[123,110,96,92,88,80,99,110,136,100,95,105]},{"name":"Last Year","data":[80,87,105,101,125,120,100,97,94,100,95,113]}]};
// https://run.mocky.io/v3/dab0f092-acde-4fc9-933e-0c7344cba6cb


let getChart2 = {"title":"lorem","desc":"lorem ipsum","config":[{"metric_id":1,"time_frame":"60days","dimension":{"site":"MLA","subgroup":"All site"},"comparation":["YOY"]},{"metric_id":2,"time_frame":"12months","dimension":{"site":"MLB","subgroup":"All site"},"comparation":["YOY"]}]}
// https://run.mocky.io/v3/beddddd4-e47c-43c2-8510-fe0fd7986c0a

let getChart1 = {"title":"lorem","desc":"lorem ipsum","config":[{"metric_id":1,"time_frame":"60days","dimension":{"site":"MLA","subgroup":"All site"},"comparation":["YOY"]}]};
// https://run.mocky.io/v3/61fbd212-8159-47f7-9083-7167d289a444

/* let getChart = {
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
        }
    ]
} */

/* let getMetric = {
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
} */

/* let getMetricData = {
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
} */

/* let getMetric2 = 
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
} */

/* let getMetricData2 = 
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
} */