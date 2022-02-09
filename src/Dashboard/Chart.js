import React, {useContext} from "react";
import {Card} from './Card'
import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'
import {chartData} from './Data'
import {ThemeContext} from './Dashboard'
import { darkeGrey, lightGrey } from "./GlobalStyle";
function getOptions(dark) {
    return {
        chart: {
            height: '360px',
            type: 'column',
            backgroundColor: dark ? darkeGrey : 'white',
            style:{
                // fontFamily: `'Blinker', sans-serif`, 
            }
        },
        title: {
            text: 'Reveniew by Product',
            style:{
                color: dark ? 'white' : darkeGrey
            }
        },
        xAxis: {
            labels: {
               style: {
                color: dark ? 'white' : darkeGrey   
               } 
            },
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
            gridLineColor: dark ? 'grey' : lightGrey,
            labels: {
                style: {
                 color: dark ? 'white' : darkeGrey   
                } 
             },
            min: 0,
            reversedStacks: false,
            title: {
                style: {
                    color: dark ? 'white' : darkeGrey   
                   } ,
                text: 'Billions of dollars'
            },
            stackLabels: {
                enabled: false,
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
            ItemStyle:{
                style: {
                    color: dark ? 'white' : darkeGrey   
                   } 
            },
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
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
            backgroundColor: dark ? darkeGrey : 'white' ,
            style: {
                color: dark ? 'white' : darkeGrey   
                } 
        },
        plotOptions: {
            series: {
                borderWidth: 0
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: chartData
    }
}

export function Chart(){
    const [theme, setTheme] = useContext(ThemeContext)
    const dark = theme === 'dark'
    return   <Card height={400} dark={dark}> 
  
        <HighChartsReact 
         highcharts={Highcharts}
         options={getOptions(dark)}
        />
     </Card>
}