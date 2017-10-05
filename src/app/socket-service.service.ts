import { Injectable } from '@angular/core';
import { SocketIoModule, SocketIoConfig, Socket} from 'ng2-socket-io';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 

@Injectable()
export class SocketService {

  constructor(private socket: Socket) { }
 
  getMessage() {
        return this.socket
            .fromEvent<any>("msg")
            .map(data => data.msg);
    }

    sendMessage(msg: string) {
        this.socket
            .emit("msg", msg);
    }
    close() {
      this.socket.disconnect()
    }

}
