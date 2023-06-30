import React from 'react'
import ReactApexChart from 'react-apexcharts'
const  series = [
    {
      name: 'Android new',
      group: 'budget',
      data: [44000, 55000, 41000, 67000, 22000, 43000]
    },
    {
      name: 'Android',
      group: 'actual',
      data: [48000, 50000, 40000, 65000, 25000, 40000]
    },
    {
      name: 'IOS new',
      group: 'budget',
      data: [13000, 36000, 20000, 8000, 13000, 27000]
    },
    {
      name: 'IOS',
      group: 'actual',
      data: [20000, 40000, 25000, 10000, 12000, 28000]
    }
  ];

  const options =   {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      }
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      categories: [
        'Online advertising',
        'Sales Training',
        'Print advertising',
        'Catalogs',
        'Meetings',
        'Public relations'
      ]
    },
    fill: {
      opacity: 1
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1000 + 'K'
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  }

export default function GroupedStack() {
  return (
    <div>GroupedStack
        <ReactApexChart options={options} series={series} type="bar" height={350} />

    </div>
  )
}
