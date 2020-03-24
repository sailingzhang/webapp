import * as React from 'react';
import {UserGData} from "./userdatamana"
import { observer } from 'mobx-react';
import ReactEcharts from "echarts-for-react"
import * as echarts from 'echarts'; 

// register theme object
echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});


 @observer
export class Testechart extends React.Component<UserGData>{
  constructor(prop:UserGData){
      super(prop);
      console.log("Testechart constructor enter");
    }
    myOption():any{
        let option=  {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        
     return option;
    }
    public render(){
        return (
            // <div>testchart</div>
             <ReactEcharts option={this.myOption()}  style={{height: '300px', width: '100%'}} className='echarts-for-echarts' theme='my_theme' /> 
        )
    }
}

