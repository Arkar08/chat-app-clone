import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

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
  
  constructor(private service:ApiService) { }

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
        this.lastMessage = messageList[messageList.length - 1].meassage
      }
      if(res.message === 'Message not found'){
        this.statusChat = true;
      }
    })
  }
}
