import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() name:string | undefined;
  @Input() messages:any[] | undefined;
  @Input() statusChat:any | undefined;
  @Input() chatListUserId:any | undefined;

  message:string = '';
  constructor(private service:ApiService,private socket:SocketService) { 
  }

  ngOnInit(): void {
    this.socket.listenForMessages((data: any) => {
      this.messages?.push({meassage:data.message,createdAt:data.date})
      this.statusChat = false; 
    });
  }
  
  sendMessage(){
    const data = {
      chatId:this.chatListUserId,
      message:this.message
    }
      this.service.postData('/message',data).subscribe((res:any)=>{
        if(res.success === true){
          this.service.getData(`/message/${this.chatListUserId}`).subscribe((res)=>{
            if(res.success === true){
              this.messages = res.data.map((data:any)=>{
                return data;
              })
              this.statusChat = false;
              this.message =''
            }
          })
        }
        this.socket.emit('sendMessageToRoom',res.data)
      })
  }

}
