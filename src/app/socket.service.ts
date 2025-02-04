import { Injectable, OnDestroy } from '@angular/core';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnDestroy {

  private socket = io('http://localhost:5050')
    constructor() {
   }

   ngOnDestroy(){
    this.socket.disconnect()
  }

   emit(event:string,data:any){
    return this.socket.emit(event,data)
   }
    join(event:string,data:any){
      return this.socket.emit(event,data)
    }

    listenForMessages(callback: (message: any) => void) {
      this.socket.on('receiveMessage', (data: any) => {
        callback(data); 
      });
    }
  
    nofication(callback:(message:any) => void){
      this.socket.on('newNotifications',(data:any)=>{
        callback(data)
      })
    }
  
}
