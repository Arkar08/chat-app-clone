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
  message:any[]=[]
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    
  }

  userSelect(data:any){
    this.chatListId = data;
    this.getAllChat()
  }

  getAllChat(){
    this.service.getData('/conversation').subscribe((res:any)=>{
      if(res.success === true){
        this.allChatList = res.data
        this.chatId = this.allChatList.filter((chat:any)=>{
          if(chat.receivedId.toString() === this.chatListId._id.toString()){
            return chat._id;
          }
        })
        this.getMessage(this.chatId)
      }
    },error =>{
      alert(error.error.message)
    })
  }

  getMessage(data:any){
    this.service.getData(`/message/${data[0]?._id}`).subscribe((res:any)=>{
      if(res.success === true){
        this.allMessage = res.data
        this.message = this.allMessage
      }
    },error=>{
      alert(error.error.message)
    })
  }

}
