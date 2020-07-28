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
  last_updated: '2020-06-30T16:09:01.728'
};
// https://run.mocky.io/v3/4af8049f-3477-4337-9853-bfe616f0d049

let getChart1 = {
  title: "lorem",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 1,
      time_frame: "60days",
      dimension: { site: "MLA", subgroup: "All site" },
      comparation: ["YOY"],
    },
  ],
};
// new https://run.mocky.io/v3/0bb9fde4-c5c2-4a40-9630-466fec01b377
// https://run.mocky.io/v3/61fbd212-8159-47f7-9083-7167d289a444

let chartObj1 = {
  metric_id: 1,
  time_frame: '60days',
  dimension: {
      site: 'MLA',
      subgroup: 'All site'
  },
  comparation: [ 'YOY' ]
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
  title: "segundo chart",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 2,
      time_frame: "12months",
      dimension: { site: "MLB", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
// newnew https://run.mocky.io/v3/5b620a5b-4941-4b65-acdb-02da3bebb863
// new https://run.mocky.io/v3/dd639092-466b-4430-81c1-73fd9b5829c9
// https://run.mocky.io/v3/5c6d43d3-89b4-47b8-b5b2-152152e3f391

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
  last_updated: '2020-06-30T16:09:01.728'
};
// old https://run.mocky.io/v3/65b7aa8e-9f35-4b24-82f5-334957cde795
// new https://run.mocky.io/v3/0d901dc2-6024-48d9-97f3-5145408329b1

let getChart3 = {
  title: "tercero",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 3,
      time_frame: "60days",
      dimension: { site: "MLC", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
// new https://run.mocky.io/v3/6477bf45-b68e-45f3-83a5-1a798c517ac6
// https://run.mocky.io/v3/bbac3e4d-6e02-474e-aef0-82a049ea8dd7

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
  last_updated: '2020-06-30T16:09:01.728'
};
// old https://run.mocky.io/v3/551c0751-e44b-4551-8ad7-4b489d545802
// new https://run.mocky.io/v3/ff5a47cc-9dc9-4617-958c-c57c1ed66491

let getChart4 = {
  title: "mexican",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 4,
      time_frame: "60days",
      dimension: { site: "MLM", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
//new https://run.mocky.io/v3/3af1379f-4676-4d4e-958f-d5fb9c379fd4
// https://run.mocky.io/v3/50cdf8d6-2419-4bd9-8d1d-84463bcf0607

let chartObj4 = {
  metric_id: 4,
  time_frame: "60days",
  dimension: { site: "MLM", subgroup: "All site" },
  comparation: ["YOY"],
}
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
  title: "uruguay",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 5,
      time_frame: "60days",
      dimension: { site: "MLU", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
// new https://run.mocky.io/v3/25e5d4bf-fca9-4161-9175-72020548c29a
// https://run.mocky.io/v3/4c242570-12ec-44a5-ae5f-62ddee3b76ee

let chartObj5 = {
  metric_id: 5,
  time_frame: "60days",
  dimension: { site: "MLU", subgroup: "All site" },
  comparation: ["YOY"],
}
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
  last_updated: '2020-06-30T16:09:01.728'
};
// old https://run.mocky.io/v3/565a1c9d-5ca7-43d9-a604-9d57258dbd21
// new https://run.mocky.io/v3/cd10c0cc-4c88-4693-8025-8ee062a409f8

let getChart6 = {
  title: "Guatemala",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 6,
      time_frame: "60days",
      dimension: { site: "MGT", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
// new https://run.mocky.io/v3/6c098f7d-aeb9-44e3-9dd3-40240b4c789b
// https://run.mocky.io/v3/a0d606f3-e11b-4743-aeb6-b4761beadb84

let chartObj6 = {
  metric_id: 6,
  time_frame: "60days",
  dimension: { site: "MGT", subgroup: "All site" },
  comparation: ["YOY"],
}
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
  title: "arg2",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 7,
      time_frame: "60days",
      dimension: { site: "MLA", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
// new https://run.mocky.io/v3/226724ff-5b90-4b39-9d4c-8a32139d8ade
// https://run.mocky.io/v3/2891d615-9637-4f48-b44f-dd473248a70c

let chartObj7 = {
  metric_id: 7,
  time_frame: "60days",
  dimension: { site: "MLA", subgroup: "All site" },
  comparation: ["YOY"],
}
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
  last_updated: '2020-06-30T16:09:01.728'
};
// old https://run.mocky.io/v3/c91e84d2-f505-403a-bde0-094a6c1d9059
// new https://run.mocky.io/v3/2037837b-2caa-4a29-8ac2-48fef5e6ff5d

let getChart8 = {
  title: "arg3",
  desc: "lorem ipsum",
  type: "simple",
  config: [
    {
      metric_id: 8,
      time_frame: "60days",
      dimension: { site: "MLA", subgroup: "All site" },
      comparation: ["YOY"],
    }
  ],
};
// new https://run.mocky.io/v3/0145f405-c88d-4aca-a056-12cc03e3c1a2
// https://run.mocky.io/v3/a911c61a-e19f-4011-bc76-3762f0f9cced

let chartObj8 = {
  metric_id: 8,
  time_frame: "60days",
  dimension: { site: "MLA", subgroup: "All site" },
  comparation: ["YOY"],
}
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
