import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chatListId:any;
  allChatList:any[]=[]
  chatId:any;
  allMessage:any[]=[]
  message:any[]=[];
  statusChat:boolean=false;
  userId:any;
  chatUserId:any;
  chatListUserId:any;
  lastMessage:any;
  
  constructor(private service:ApiService,private socket:SocketService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
  }

  userSelect(data:any){
    this.chatListId = data;
    const changeUser  = this.userId.replace(/"/g, '')
    this.chatListUserId = this.chatListId._id;
    this.service.getData(`/conversation/find/${this.chatListUserId}/${changeUser}`).subscribe((res:any)=>{
      if(res.success === true){
        this.chatUserId = res.data._id;
      }
      this.getMessage(this.chatUserId)
      this.socket.join('joinRoom',this.chatUserId)
      // this.getLastMessage(this.chatUserId)
    },error =>{
      this.snackBar.open(error.error.message,'Close', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['error-snackbar']
      })
    })
  }

  getMessage(data:any){
    this.service.getData(`/message/${data}`).subscribe((res:any)=>{
      if(res.success === true){
        const messageList = res.data.map((data:any)=>{
          return data;
        })
        this.message = messageList
        this.statusChat = false;
      }
      if(res.message === 'Message not found'){
        this.statusChat = true;
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

  // getLastMessage(data:any){
  //   this.service.getData(`/message/last/${data}`).subscribe((res:any)=>{
  //     if(res.success === true){
  //       this.lastMessage = res.data.message;
  //     }
  //   })
  // }
}
