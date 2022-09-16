const Reseau = {
  data: (canvas) => {
  return {
   labels: [
    "2018-10",
    "2018-11",
    "2018-12",
    "2019-01",
    "2019-02",
    "2019-03",
    "2019-04",
    "2019-05",
    "2019-06",
    "2019-07",
    "2019-08",
    "2019-09",
    "2019-10",
    "2019-11",
    "2019-12",
    "2020-01",
    "2020-02",
    "2020-03",
    "2020-04",
    "2020-05",
    "2020-06",

],
  datasets: [
    {
      data: [
        0,0,0,
        8321,
        8544,
        9472,
        9816,
        10019,
        10321,
        10539,
        10896,
        11158,
        11520,
        11843,
        12212,
        12544,
        13280,
        13828,
        14075,
        14227,
        14430,
        14743,
        14954,
        15138,
        15325,
        15537,
        15819,
        16122],
      fill: false,
      borderColor: "#fbc658",
      backgroundColor: "transparent",
      pointBorderColor: "#fbc658",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      tension: 0.4,
    },
    {
      data: [
        2939,
        3260,
        3608,
        4008,
        4486,
        4903,
        5321,
        5875,
        6453,
        6953,
        7573,
        8133,
        8932,
        9755,
        10753,
        11535,
        12305,
        13016,
        13694,
        14414,
        15180,
        16009,
        16934,
        17739,
        18753,
        19712,
        20751,
        22229,
        23837,
        25121],
      fill: false,
      borderColor: "#51CACF",
      backgroundColor: "transparent",
      pointBorderColor: "#51CACF",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      tension: 0.4,
    },
    {
      data:  [0,0,0,0,0,0,0,0,0,0,0,0,
        2115,
        2184,
        2250,
        2267,
        2318,
        2342,
        2392,
        2404,
        2426,
        2441,
        245,
        2461,
        2468,
        2472,
        2486,
        2496,
        2511,
        2531,
        2539],
      fill: false,
      borderColor: "#51CACF",
      backgroundColor: "transparent",
      pointBorderColor: "#51CACF",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
      tension: 0.4,
    },
  ],
   
  };
},
options: {
  plugins: {
    legend: { display: false },
    serie:["AC","Youtube","FB"]
  },
},
};
const visiteursPagesVues = {
  data: (canvas) => {
    return {
      labels: [
        "2019-02",
        "2019-03",
        "2019-04",
        "2019-05",
        "2019-06",
        "2019-07",
        "2019-08",
        "2019-09",
        "2019-10",
        "2019-11",
        "2019-12",
        "2020-01",
        "2020-02",
        "2020-03",
        "2020-04",
        "2020-05",
        "2020-06",
      ],
      datasets: [
        {
          data: [
            10473,
            13572,
            15049,
            13486,
            12945,
            10197,
            9907,
            11367,
            13389,
            11991,
            10534,
            10044,
            9874,
            12384,
            12073,
            8558,
            6961],
          fill: false,
          borderColor: "#f17e5d",
          backgroundColor: "transparent",
          pointBorderColor: "#f17e5d",
          pointRadius: 1,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [
            19085,
            22377,
            22259,
            26086,
            18153,
            15027,
            15155,
            20642,
            22708,
            19498,
            19058,
            19494,
            19565,
            25253,
            24761,
            18622,
            15266],
          fill: false,
          borderColor: "#4ACCCD",
          backgroundColor: "transparent",
          pointBorderColor: "#4ACCCD",
          pointRadius: 1,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
  title : "Web",
  legende : ["Visiteurs", "Pages Vues"],
  sousTitre : "Informations certifiés",
};
const options = {
  data: (canvas) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
   }
  },
};



const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2,3,],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["red", "blue", "yellow",],
          borderWidth: 0,
          data: [11822, 3684, 976,],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
const dashboardEmailStatisticsChart2 = {
  data: (canvas) => {
    return {
      labels: [1, 2,3,],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["red", "blue", "yellow",],
          borderWidth: 0,
          data: [8450, 2142, 690,],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const dashboardNASDAQChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

module.exports = {
Reseau,
visiteursPagesVues,
dashboardEmailStatisticsChart,
dashboardEmailStatisticsChart2,
dashboardNASDAQChart,
  };



  
  