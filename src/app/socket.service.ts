import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket = io('http://localhost:5050')
    constructor() {
   }

   emit(event:string,data:any){
    return this.socket.emit(event,data)
   }
    join(event:string,data:any){
      return this.socket.emit(event,data)
    }

    listenForMessages(callback: (message: any) => void) {
      this.socket.on('receiveMessage', (data: any) => {
        callback(data);  // Invoke the callback with the message data
      });
    }
  
  
}
