let getMetric1 = {
  name: "Buy Box",
  display_name: "Buy Box - GMV",
  group: "MARKETPLACE",
  description: "Una descripcion de la metrica",
  format: "CUR_2",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
  last_updated: "2020-06-30T16:09:01.728",
};
// https://run.mocky.io/v3/4af8049f-3477-4337-9853-bfe616f0d049

let getChart1 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 1,
        time_frame: "60days",
        dimension: { site: ["MLA", "MLB"], subgroup: "All site" },
        comparation: ["YOY"],
      },
      {
        metric_id: 2,
        time_frame: "60days",
        dimension: { site: ["MLB", "MLB"], subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// link def https://run.mocky.io/v3/5ceb55d7-2f8b-44ee-818c-28c7fe46d36c

let chartObj1 = {
  metric_id: 1,
  time_frame: "60days",
  dimension: {
    site: "MLA",
    subgroup: "All site",
  },
  comparation: ["YOY"],
};
// https://run.mocky.io/v3/930ee191-8d1e-43b8-b7a7-0213a31eadb9

// -------------------------------------------------------------------------------------//
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

let getChart2 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 2,
        time_frame: "60days",
        dimension: { site: "MLB", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// link https://run.mocky.io/v3/cda9ed89-b4ac-40c5-9fd1-8bade2b96214

let chartObj2 = {
  metric_id: 2,
  time_frame: "12months",
  dimension: { site: "MLB", subgroup: "All site" },
  comparation: ["YOY"],
};
// https://run.mocky.io/v3/f0c1db20-2b03-4f07-80f8-d4b22e5e0257

// -------------------------------------------------------------------------------------//

let getMetric3 = {
  name: "CBT - ASP",
  display_name: "CBT - ASP(e) Billable",
  group: "MARKETPLACE",
  description: "Una descripcion de la metrica",
  format: "CUR_2",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
  last_updated: "2020-06-30T16:09:01.728",
};
// old https://run.mocky.io/v3/65b7aa8e-9f35-4b24-82f5-334957cde795
// new https://run.mocky.io/v3/0d901dc2-6024-48d9-97f3-5145408329b1

let getChart3 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 3,
        time_frame: "60days",
        dimension: { site: "MLC", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// new https://run.mocky.io/v3/ba806367-158d-4d3a-b9d3-c0c5d994544a

let chartObj3 = {
  metric_id: 3,
  time_frame: "60days",
  dimension: { site: "MLC", subgroup: "All site" },
  comparation: ["YOY"],
};
// https://run.mocky.io/v3/d720e0d3-f70e-41e9-9abe-58285e395fed

// -------------------------------------------------------------------------------------//

let getMetric4 = {
  name: "Avg Shipping",
  display_name: "Avg Shipping Time",
  group: "MERCADO ENVIOS",
  description: "Una descripcion de la metrica",
  format: "DEC_2",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
  last_updated: "2020-06-30T16:09:01.728",
};
// old https://run.mocky.io/v3/551c0751-e44b-4551-8ad7-4b489d545802
// new https://run.mocky.io/v3/ff5a47cc-9dc9-4617-958c-c57c1ed66491

let getChart4 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 4,
        time_frame: "60days",
        dimension: { site: "MLM", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
//new https://run.mocky.io/v3/3a77392e-e4a8-4936-bc7c-0d0a40277be1

let chartObj4 = {
  metric_id: 4,
  time_frame: "60days",
  dimension: { site: "MLM", subgroup: "All site" },
  comparation: ["YOY"],
};
// https://run.mocky.io/v3/ce8ec606-5383-4169-a423-a2e5620c63c7

// -------------------------------------------------------------------------------------//

let getMetric5 = {
  name: "New Buyers",
  display_name: "New Buyers",
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
// https://run.mocky.io/v3/70e3f815-5cc9-4691-8fd9-4be83fcd0416

let getChart5 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 5,
        time_frame: "60days",
        dimension: { site: "MLM", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// new https://run.mocky.io/v3/bcbcf3c7-1d74-40ae-afd2-276895c136a4

let chartObj5 = {
  metric_id: 5,
  time_frame: "60days",
  dimension: { site: "MLU", subgroup: "All site" },
  comparation: ["YOY"],
};
// https://run.mocky.io/v3/60b3c552-d717-4330-a3be-dab187eb6f51

// -------------------------------------------------------------------------------------//

let getMetric6 = {
  name: "ASP p Shippment",
  display_name: "ASP per Shippment",
  group: "MERCADO ENVIOS",
  description: "Una descripcion de la metrica",
  format: "CUR_2",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
  last_updated: "2020-06-30T16:09:01.728",
};
// old https://run.mocky.io/v3/565a1c9d-5ca7-43d9-a604-9d57258dbd21
// new https://run.mocky.io/v3/cd10c0cc-4c88-4693-8025-8ee062a409f8

let getChart6 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 6,
        time_frame: "60days",
        dimension: { site: "MLM", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// new https://run.mocky.io/v3/7856f07a-199a-4b70-b8c0-03f8be410871

let chartObj6 = {
  metric_id: 6,
  time_frame: "60days",
  dimension: { site: "MGT", subgroup: "All site" },
  comparation: ["YOY"],
};
// new https://run.mocky.io/v3/39a9cccd-2ff2-4738-adb5-cd0b3ec68356
// https://run.mocky.io/v3/32cc928e-156c-4401-9463-355833f7a4af

// -------------------------------------------------------------------------------------//

let getMetric7 = {
  name: "Unique Receivers",
  display_name: "Unique Receivers",
  group: "MERCADO PAGO",
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
// https://run.mocky.io/v3/8a0f81b7-4ad5-4f0d-989b-180f7ecb8e17

let getChart7 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 7,
        time_frame: "60days",
        dimension: { site: "MLM", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// new https://run.mocky.io/v3/49e79708-be54-4b07-9d45-bfd0f09a9df1

let chartObj7 = {
  metric_id: 7,
  time_frame: "60days",
  dimension: { site: "MLA", subgroup: "All site" },
  comparation: ["YOY"],
};
// https://run.mocky.io/v3/a697f11b-4019-4cc9-a4ee-40966f35cc64

// -------------------------------------------------------------------------------------//

let getMetric8 = {
  name: "Share GMV Buy Box",
  display_name: "Share GMV Buy Box",
  group: "MARKETPLACE",
  description: "Una descripcion de la metrica",
  format: "PERC_2",
  dimensions: {
    site: ["MLA", "MLB", "MLC", "MCO", "MLM", "MLU", "MGT", "MBO"],
    subgroup: ["All site", "entretainment", "vehicles"],
  },
  time_frames: [{ desc: "60days" }, { desc: "12months" }, { desc: "4weeks" }],
  date_comp: [
    { code: "YOY", desc: "Last year" },
    { code: "MOM", desc: "Last Month" },
  ],
  last_updated: "2020-06-30T16:09:01.728",
};
// old https://run.mocky.io/v3/c91e84d2-f505-403a-bde0-094a6c1d9059
// new https://run.mocky.io/v3/2037837b-2caa-4a29-8ac2-48fef5e6ff5d

let getChart8 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: {
    simple: [
      {
        metric_id: 8,
        time_frame: "60days",
        dimension: { site: "MLM", subgroup: "All site" },
        comparation: ["YOY"],
      },
    ],
    versus: [],
  },
};
// new https://run.mocky.io/v3/a333e1af-2e4f-423b-b520-6b4ca1125bab

let chartObj8 = {
  metric_id: 8,
  time_frame: "60days",
  dimension: { site: "MLA", subgroup: "All site" },
  comparation: ["YOY"],
};
//https://run.mocky.io/v3/373bf76d-4695-403a-9671-a519b3151923

// -------------------------------------------------------------------------------------//
//getMetricData//

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
//Obj 8: https://run.mocky.io/v3/31409546-41a8-467a-a96b-27899ec667ff

//Objs con 12 campos
//Obj 1 : https://run.mocky.io/v3/4a691a71-4bfa-4e56-8cd2-007d7e20404b
//Obj 2:  https://run.mocky.io/v3/81b7403f-0ecf-4953-bffa-bf5de4c863c9
//Obj 3:  https://run.mocky.io/v3/ea0e8e64-ce75-495d-91d6-83d9b429b1e9
//Obj 4:  https://run.mocky.io/v3/6737bd63-fd5b-4c32-b773-2417896cce1e
//Obj 5:  https://run.mocky.io/v3/ff996f39-c774-411f-ba96-fe8ffb64d331
//Obj 6:  https://run.mocky.io/v3/eb5f1c4c-a6eb-452f-ad93-80b4b23a50fd
//Obj 7:  https://run.mocky.io/v3/91bbbd73-bd82-4418-a2fb-23d1e572c90a
//Obj 8:  https://run.mocky.io/v3/90834ac6-afca-42fb-b14e-588aa2f33e35

// Objs con 4 campos
// obj 1: https://run.mocky.io/v3/c3fd409a-a428-4e86-accb-1ad29687cb76
// obj 2: https://run.mocky.io/v3/245b0073-9f24-4d7a-8dff-81162bad02a9
// obj 3: https://run.mocky.io/v3/ff00300e-9576-4c03-a596-db8c6b5c4102
// obj 4: https://run.mocky.io/v3/e1fb7304-a4b4-433c-876a-ea2afb629dd3
// obj 5: https://run.mocky.io/v3/ff7e2746-aa2c-42c6-9bc2-51dd4b23ca8f
// obj 6: https://run.mocky.io/v3/6df298fc-633d-4159-bc6c-fd2c8cb5dab3
// obj 7: https://run.mocky.io/v3/33544fbe-5bca-40e4-ae59-a083c4f63bed

/* Formatos:
INTEG: Número entero.
CUR_2: Moneda.
PERC_2: Porcentaje. (Acá tengan en cuenta que si están haciendo comparación de porcentajes, lo que tienen que mostrar en la comparación es la diferencia en puntos porcentuales “p.p” y no en %).
DEC_2: Decimales. */

let data = [0.15, 0.61, 0.21, 0.22, 0.32, 0.69, 0.25, 0.67, 0.87, 0.29, 0.72, 0.39, 0.40, 0.86, 0.52, 0.43, 0.24, 0.98, 0.70, 0.19, 0.65, 0.65, 0.20, 0.11, 0.77, 0.92, 0.78, 0.97, 0.17, 0.15, 0.83, 0.97, 0.86, 0.68, 0.76, 0.40, 0.73, 0.20, 0.83, 0.89, 0.41, 0.78, 0.51, 0.91, 0.05, 0.63, 0.47, 0.88, 0.12, 0.88, 0.45, 0.11, 0.97, 0.79, 0.83, 0.61, 0.87, 0.83, 0.16, 0.79];
let data2 = [0.56, 0.98, 0.11, 0.05, 0.79, 0.72, 0.78, 0.61, 0.88, 0.11, 0.25, 0.07, 0.65, 0.14, 0.71, 0.97, 0.62, 0.97, 0.43, 0.45, 0.21, 0.54, 0.28, 0.60, 0.88, 0.41, 0.20, 0.85, 0.74, 0.87, 0.57, 0.03, 0.66, 0.65, 0.59, 0.19, 0.28, 0.34, 0.38, 0.74, 0.77, 0.24, 0.48, 0.82, 0.07, 0.70, 0.87, 0.60, 0.46, 0.54, 0.49, 0.35, 0.34, 0.85, 0.55, 0.72, 0.08, 0.11, 0.48, 0.45];

let metricData1 = {
  labels: ["2020-03-1", "2020-03-2", "2020-03-3", "2020-03-4", "2020-03-5", "2020-03-6", "2020-03-7", "2020-03-8", "2020-03-9", "2020-03-10", "2020-03-11", "2020-03-12", "2020-03-13", "2020-03-14", "2020-03-15", "2020-03-16", "2020-03-17", "2020-03-18", "2020-03-19", "2020-03-20", "2020-03-21", "2020-03-22", "2020-03-23", "2020-03-24", "2020-03-25", "2020-03-26", "2020-03-27", "2020-03-28", "2020-03-29", "2020-03-30", "2020-03-31", "2020-04-1", "2020-04-2", "2020-04-3", "2020-04-4", "2020-04-5", "2020-04-6", "2020-04-7", "2020-04-8", "2020-04-9", "2020-04-10", "2020-04-11", "2020-04-12", "2020-04-13", "2020-04-14", "2020-04-15", "2020-04-16", "2020-04-17", "2020-04-18", "2020-04-19", "2020-04-20", "2020-04-21", "2020-04-22", "2020-04-23", "2020-04-24", "2020-04-25", "2020-04-26", "2020-04-27", "2020-04-28", "2020-04-29"],
  data:[{
    name: "Actual",
    data: [0.15, 0.61, 0.21, 0.22, 0.32, 0.69, 0.25, 0.67, 0.87, 0.29, 0.72, 0.39, 0.40, 0.86, 0.52, 0.43, 0.24, 0.98, 0.70, 0.19, 0.65, 0.65, 0.20, 0.11, 0.77, 0.92, 0.78, 0.97, 0.17, 0.15, 0.83, 0.97, 0.86, 0.68, 0.76, 0.40, 0.73, 0.20, 0.83, 0.89, 0.41, 0.78, 0.51, 0.91, 0.05, 0.63, 0.47, 0.88, 0.12, 0.88, 0.45, 0.11, 0.97, 0.79, 0.83, 0.61, 0.87, 0.83, 0.16, 0.79]
  },
  {
    name: "Last Year",
    data: [0.56, 0.98, 0.11, 0.05, 0.79, 0.72, 0.78, 0.61, 0.88, 0.11, 0.25, 0.07, 0.65, 0.14, 0.71, 0.97, 0.62, 0.97, 0.43, 0.45, 0.21, 0.54, 0.28, 0.60, 0.88, 0.41, 0.20, 0.85, 0.74, 0.87, 0.57, 0.03, 0.66, 0.65, 0.59, 0.19, 0.28, 0.34, 0.38, 0.74, 0.77, 0.24, 0.48, 0.82, 0.07, 0.70, 0.87, 0.60, 0.46, 0.54, 0.49, 0.35, 0.34, 0.85, 0.55, 0.72, 0.08, 0.11, 0.48, 0.45]
  }] 
}
// https://run.mocky.io/v3/31409546-41a8-467a-a96b-27899ec667ff

let metricData2 = {
  labels: ["2020-03-1", "2020-03-2", "2020-03-3", "2020-03-4", "2020-03-5", "2020-03-6", "2020-03-7", "2020-03-8", "2020-03-9", "2020-03-10", "2020-03-11", "2020-03-12", "2020-03-13", "2020-03-14", "2020-03-15", "2020-03-16", "2020-03-17", "2020-03-18", "2020-03-19", "2020-03-20", "2020-03-21", "2020-03-22", "2020-03-23", "2020-03-24", "2020-03-25", "2020-03-26", "2020-03-27", "2020-03-28", "2020-03-29", "2020-03-30", "2020-03-31", "2020-04-1", "2020-04-2", "2020-04-3", "2020-04-4", "2020-04-5", "2020-04-6", "2020-04-7", "2020-04-8", "2020-04-9", "2020-04-10", "2020-04-11", "2020-04-12", "2020-04-13", "2020-04-14", "2020-04-15", "2020-04-16", "2020-04-17", "2020-04-18", "2020-04-19", "2020-04-20", "2020-04-21", "2020-04-22", "2020-04-23", "2020-04-24", "2020-04-25", "2020-04-26", "2020-04-27", "2020-04-28", "2020-04-29"],
  data:[{
    name: "Actual",
    data: [0.8, 0.36, 0.54, 0.61, 0.75, 0.59, 0.5, 0.97, 0.46, 0.95, 0.88, 0.76, 0.74, 0.26, 0.29, 0.59, 0.38, 0.75, 0.86, 0.14, 0.68, 0.25, 0.57, 0.03, 0.38, 0.29, 0.09, 0.14, 0.68, 0.29, 0.56, 0.39, 0.95, 0.42, 0.21, 0.57, 0.93, 0.19, 0.46, 0.33, 0.16, 0.31, 0.39, 0.07, 0.2, 0.2, 0.84, 0.49, 0.93, 0.64, 0.32, 0.55, 0.67, 0.31, 0.4, 0.9, 0.78, 0.74, 0.28, 0.57]
  },
  {
    name: "Last Year",
    data: [0.61, 0.98, 0.69, 0.46, 0.47, 0.28, 0.25, 0.23, 0.54, 0.2, 0.29, 0.69, 0.73, 0.42, 0.9, 0.25, 0.31, 0.4, 0.6, 0.25, 0.53, 0.11, 0.55, 0.16, 0.26, 0.97, 0.47, 0.28, 0.13, 0.84, 0.64, 0.14, 0.42, 0.87, 0.57, 0.1, 0.61, 0.69, 0.18, 0.31, 0.47, 0.88, 0.8, 0.45, 0.59, 0.94, 0.21, 0.83, 0.55, 0.87, 0.95, 1, 0.44, 0.42, 0.88, 0.81, 0.46, 0.45, 0.84, 0.81]
  }] 
}
//https://run.mocky.io/v3/c2b30927-10bd-467a-ab5a-c5718d9c1b30

let metricData3 ={
  labels: ["2020-03-1", "2020-03-2", "2020-03-3", "2020-03-4", "2020-03-5", "2020-03-6", "2020-03-7", "2020-03-8", "2020-03-9", "2020-03-10", "2020-03-11", "2020-03-12"
  ],
  data:[{
    name: "Actual",
    data: [0.98, 0.42, 0.14, 0.97, 0.91, 0.43, 0.06, 0.51, 0.55, 0.21, 0.37, 0.55]
  },
  {
    name: "Last Year",
    data: [0.02, 0.32, 0.59, 0.25, 0.04, 0.73, 0.57, 0.06, 0.36, 0.07, 0.15, 0.92]
  }]
}

//https://run.mocky.io/v3/6737bd63-fd5b-4c32-b773-2417896cce1e

let metricData4 ={
  labels: ["2020-03-1", "2020-03-2", "2020-03-3", "2020-03-4", "2020-03-5", "2020-03-6", "2020-03-7", "2020-03-8", "2020-03-9", "2020-03-10", "2020-03-11", "2020-03-12"],
  data:[{
    name: "Actual",
    data: [0.67, 0.45, 0.61, 0.61, 0.57, 0.33, 0.9, 1, 0.27, 0.88, 0.24, 0.71]
  },
  {
    name: "Last Year",
    data: [0.62, 0.29, 0.49, 0.19, 0.38, 0.81, 0.42, 0.67, 0.85, 0.52, 0.37, 0.83]
  }]
}
//https://run.mocky.io/v3/90834ac6-afca-42fb-b14e-588aa2f33e35

let metricData5 = {
  labels: ["2020-03-1", "2020-03-2", "2020-03-3", "2020-03-4"],
  data:[{
    name: "Actual",
    data: [0.91, 0.96, 0.37, 0.46]
  },
  {
    name: "Last Year",
    data: [0.85, 0.71, 0.03, 0.92]
  }]
}
// https://run.mocky.io/v3/e1fb7304-a4b4-433c-876a-ea2afb629dd3

let metricData6 = {
  labels: ["2020-03-1", "2020-03-2", "2020-03-3", "2020-03-4"],
  data:[{
    name: "Actual",
    data: [0.27, 0.83, 0.41, 0.38]
  },
  {
    name: "Last Year",
    data: [0.06, 0.98, 0.75, 0.73]
  }]
}
// https://run.mocky.io/v3/33544fbe-5bca-40e4-ae59-a083c4f63bed
