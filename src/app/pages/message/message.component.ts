import { Component, Input, OnInit,AfterViewChecked } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,AfterViewChecked {

  @Input() name:string | undefined;
  @Input() messages:any[] | undefined;
  @Input() statusChat:any | undefined;
  @Input() chatListUserId:any | undefined;
  @Input() receivedId:any | undefined;

  message:string = '';
  constructor(private service:ApiService,private socket:SocketService,private snackBar:MatSnackBar) { 
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.socket.listenForMessages((data: any) => {
      this.messages?.push({meassage:data.message,createdAt:data.date})
      this.statusChat = false; 
    });
  }
  
  scrollToBottom(){
    const container = document.getElementById('scrollcontainer') as HTMLElement;
    container.scrollTop = container?.scrollHeight
  }

  sendMessage(){
    const data = {
      chatId:this.chatListUserId,
      message:this.message
    }
      this.service.postData('/message',data).subscribe((res:any)=>{
        if(res.success === true){
          this.service.getData(`/message/${this.chatListUserId}`).subscribe((result)=>{
            if(result.success === true){
              this.messages = result.data.map((data:any)=>{
                return data;
              })
              this.statusChat = false;
              this.message =''
            }
          },error =>{
            this.snackBar.open(error.error.message,'Close', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['error-snackbar']
            })
          })
        }
        const receivedData = {
          receivedId:this.receivedId,
          message:this.message
        }
        Notification.requestPermission().then((perm:any)=>{
          if(perm === 'granted'){
            new Notification('Example noti',{
              body:this.message,
              icon:'favicon.ico',
              tag:'Welcome Message'
            })
          }
        })

        this.socket.emit('sendMessageToRoom',res.data)
        this.socket.emit('sendNotifications',receivedData)
      },error =>{
        this.snackBar.open(error.error.message,'Close', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['error-snackbar']
        })
      })
  }

}
