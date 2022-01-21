import React from "react";
import {Card} from './Card'
import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

const options= {
    chart: {
        height: '360px',
        type: 'column',
        style:{
            // fontFamily: `'Blinker', sans-serif`, 
        }
    },
    title: {
        text: 'Reveniew by Product'
    },
    xAxis: {
        categories: [
            'Jan',
            'Febr',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            ]
    },
    yAxis: {
        min: 0,
        reversedStacks: false,
        title: {
            text: 'Billions of dollars'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        series: {
            borderWidth: 0
        },
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Phones',
        data: [5, 3, 4, 7, 2],
        color: '#2d6a4f'

    }, {
        name: 'Services',
        data: [2, 2, 3, 2, 1],
        color: '#40916c'

    }, {
        name: 'Laptops',
        data: [3, 4, 4, 2, 5],
        color: '#52b788'
    },
    {
        name: 'Tablets',
        data: [3, 4, 4, 2, 5],
        color: '#74c69d'
    }
    ]
}

export function Chart(){
    return   <Card height={400}> 
    hit
        <HighChartsReact 
         highcharts={Highcharts}
         options={options}
        
        />
     </Card>
}