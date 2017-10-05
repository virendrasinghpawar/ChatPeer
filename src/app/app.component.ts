import { Component, OnInit,ViewChild } from '@angular/core';
import { SocketService } from './socket-service.service'
declare let d3: any;
// import 'nvd3';
 declare let nvd3 : any;
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('nvd3')  nvd3;
  
  title = 'app works!';
  // socketService : SocketService
  options;
  data;
  ngOnInit() {
// this.datachanger()
console.log(d3)
   this.data = [

      { 
        
        color:"#abcdef",
        key: "line Chart",
        values: [
          {
            x : 1 ,
            y : 10.765957771107
          } ,
          {
            x : 2 ,
            y : 20
          } ,
          {
            x : 3 ,
            y : 30.807804682612
          } 
        ]
      }
    ]
let ref=this
setInterval(ref.datachanger.bind(this),Math.random()*3000)
this.options = {
  chart: {
      type: 'lineChart',
      height: 450,
      width:500,
      // color:'#fff',
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: function(d){ return d.x; },
      y: function(d){ return d.y; },
      // useInteractiveGuideline: true,
      dispatch: {
        stateChange: function(e){ console.log("stateChange"); },
        changeState: function(e){ console.log("changeState"); },
        tooltipShow: function(e){ console.log("tooltipShow"); },
        tooltipHide: function(e){ console.log("tooltipHide"); }
      },
      xAxis: {
        axisLabel: 'Time (ms)'
      },
      yAxis: {
        axisLabel: 'Voltage (v)',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      },
      callback: function(chart){
        console.log("!!! lineChart callback !!!");
      }
    }
    }
 



    // this.socketService.sendMessage("hello socket world")
  }
   xval=3
  datachanger(){
    // this.nvD3.chart.update()
    this.nvd3.chart.update()
    console.log("i ma inside darachacjfafml")
    if(this.data[0].values.length>10){
console.log( this.data[0].values.shift())
    }
   this.data[0].values.push({
            x : this.xval++ ,
            y : 29.765957771107+(Math.random()*1000)
          });
         
      
   
  }
  constructor() {
    // this.socketService=socketService
  }
}