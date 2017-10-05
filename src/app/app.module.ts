import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';
import { AppComponent } from './app.component';
// import {SocketService} from './socket-service.service';
import { HelloComponent } from './hello/hello.component'
import { NvD3Module  } from "ng2-nvd3";
// const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
import 'd3';
import 'nvd3';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,NvD3Module 
    // SocketIoModule.forRoot(config) 
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }