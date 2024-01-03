var optionsChart1 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart1 = new ApexCharts(document.querySelector("#chart1"), optionsChart1);

chart1.render();

var optionsChart2 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'radar'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart2 = new ApexCharts(document.querySelector("#chart2"), optionsChart2);

chart2.render();

var optionsChart3 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart3 = new ApexCharts(document.querySelector("#chart2"), optionsChart3);

chart3.render();