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

   emit(data:any){
    return this.socket.emit('message',data)
   }
  
}
