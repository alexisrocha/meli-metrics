let getMetric = {
  name: "Buy Box",
  display_name: "Buy Box - GMV",
  group: "MARKETPLACE",
  description: "Una descripcion de la metrica",
  format: "INTEG",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
};
// https://run.mocky.io/v3/beddddd4-e47c-43c2-8510-fe0fd7986c0a

let getMetric2 = {
  name: "Devices Sold",
  display_name: "Devices Sold",
  group: "MERCADO PAGO",
  description: "ejemplo de mercadopago",
  format: "INTEG",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
};
// https://run.mocky.io/v3/d2ecd0d4-0234-45fb-a140-6f1d0f63d9b5

let getMetricData = {
  labels: [
    "2020-01-31",
    "2020-02-28",
    "2020-03-31",
    "2020-04-30",
    "2020-05-31",
    "2020-06-30",
    "2020-07-31",
    "2020-08-31",
    "2020-09-30",
    "2020-10-31",
    "2020-11-30",
    "2020-12-31",
  ],
  data: [
    {
      name: "Actual",
      data: [100, 95, 105, 123, 110, 96, 92, 88, 80, 99, 110, 136],
    },
    {
      name: "Last Year",
      data: [80, 87, 97, 101, 125, 97, 94, 100, 95, 113, 120, 100],
    },
  ],
};
// https://run.mocky.io/v3/19f3e90f-4e4c-4e96-998a-abc0d2eb64e0

let getMetricData2 = {
  labels: [
    "2020-01-31",
    "2020-02-28",
    "2020-03-31",
    "2020-04-30",
    "2020-05-31",
    "2020-06-30",
    "2020-07-31",
    "2020-08-31",
    "2020-09-30",
    "2020-10-31",
    "2020-11-30",
    "2020-12-31",
  ],
  data: [
    {
      name: "Actual",
      data: [123, 110, 96, 92, 88, 80, 99, 110, 136, 100, 95, 105],
    },
    {
      name: "Last Year",
      data: [80, 87, 105, 101, 125, 120, 100, 97, 94, 100, 95, 113],
    },
  ],
};
// https://run.mocky.io/v3/dab0f092-acde-4fc9-933e-0c7344cba6cb

let getChart2 = {
  title: "lorem",
  desc: "lorem ipsum",
  config: [
    {
      metric_id: 1,
      time_frame: "60days",
      dimension: { site: "MLA", subgroup: "All site" },
      comparation: ["YOY"],
    },
    {
      metric_id: 2,
      time_frame: "12months",
      dimension: { site: "MLB", subgroup: "All site" },
      comparation: ["YOY"],
    },
  ],
};
// https://run.mocky.io/v3/8ed189c0-7f9f-4a1d-8fa2-b78bcb83da72

let getChart1 = {
  title: "lorem",
  desc: "lorem ipsum",
  config: [
    {
      metric_id: 1,
      time_frame: "60days",
      dimension: { site: "MLA", subgroup: "All site" },
      comparation: ["YOY"],
    },
  ],
};
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

function generarData() {
  var arrayData = [];
  var arrayData2 = [];
  var arrayLabels = [];
  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  for (var i = 0; i < 4; i++) {
    arrayData.push(getRandomArbitrary(1000000, 3000000) + 100 * i);
  }

  for (var j = 0; j < 4; j++) {
    arrayData2.push(getRandomArbitrary(1000000, 3000000) + 100 * j);
  }

  //Generador de labels;
  for (var z = 1; z <= 4; z++) {
    if (z <= 31) {
      arrayLabels.push("2020-03-" + z);
    } else {
      arrayLabels.push("2020-04-" + (z - 31));
    }
  }

  var obj = new Object();

  obj.labels = arrayLabels;
  obj.data = [
    {
      name: "Actual",
      data: arrayData,
    },
    {
      name: "Last Year",
      data: arrayData2,
    },
  ];
  return obj;
}

function generateObjects() {
  var arrayData = [];
  for (var i = 0; i < 8; i++) {
    arrayData.push(generarData());
  }

  return arrayData;
}

//Objs con 60 campos
//Obj 1 : https://run.mocky.io/v3/0ca2c344-a2f8-432a-9b62-da3cd924c7d5
//Obj 2: https://run.mocky.io/v3/decf5f46-2492-47aa-8304-c8cace4037bf
//Obj 3: https://run.mocky.io/v3/90279549-fd39-4bf2-8622-959334449240
//Obj 4: https://run.mocky.io/v3/32ef81e2-abf2-496f-a7a1-229183e60e49
//Obj 5: https://run.mocky.io/v3/763a58b9-ef20-4863-801a-6069f5916dc6
//Obj 6: https://run.mocky.io/v3/5f8f6696-b594-434e-9553-87e8f531f373
//Obj 7: https://run.mocky.io/v3/a6209efd-db91-4904-b817-a916836dec85
//Obj 8: https://run.mocky.io/v3/2589e285-5d32-48bb-9f41-d3d59a0ab4fb

//Objs con 12 campos
//Obj 1 : https://run.mocky.io/v3/4a691a71-4bfa-4e56-8cd2-007d7e20404b
//Obj 2:  https://run.mocky.io/v3/81b7403f-0ecf-4953-bffa-bf5de4c863c9
//Obj 3:  https://run.mocky.io/v3/ea0e8e64-ce75-495d-91d6-83d9b429b1e9
//Obj 4:  https://run.mocky.io/v3/35907051-8e0b-4440-a36b-c9f9c065ed50
//Obj 5:  https://run.mocky.io/v3/ff996f39-c774-411f-ba96-fe8ffb64d331
//Obj 6:  https://run.mocky.io/v3/eb5f1c4c-a6eb-452f-ad93-80b4b23a50fd
//Obj 7:  https://run.mocky.io/v3/91bbbd73-bd82-4418-a2fb-23d1e572c90a
//Obj 8:  https://run.mocky.io/v3/8a19b7f2-3c52-4f9e-b751-bd97ae4fcb76

// Objs con 4 campos
// obj 1: https://run.mocky.io/v3/c3fd409a-a428-4e86-accb-1ad29687cb76
// obj 2: https://run.mocky.io/v3/245b0073-9f24-4d7a-8dff-81162bad02a9
// obj 3: https://run.mocky.io/v3/ff00300e-9576-4c03-a596-db8c6b5c4102
// obj 4: https://run.mocky.io/v3/fe04d30b-9bd6-47f2-b969-6f76f2a5cefa
// obj 5: https://run.mocky.io/v3/ff7e2746-aa2c-42c6-9bc2-51dd4b23ca8f
// obj 6: https://run.mocky.io/v3/6df298fc-633d-4159-bc6c-fd2c8cb5dab3
// obj 7: https://run.mocky.io/v3/fb224c30-4882-45a0-b74c-01ba4e51dc66
