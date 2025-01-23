import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingUserComponent } from 'src/app/components/adding-user/adding-user.component';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Output() chatId = new EventEmitter<string>() 
  userAdd = {
    contact:''
  }
  userId:any;
  receivedUserList:any[]=[]
  activeIndex:any;
  constructor(private dialog:MatDialog,private service:ApiService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getConversation()
  }

  addUserDialog(){
    const dialog = this.dialog.open(AddingUserComponent,{
      width:'500px',
      data:this.userAdd
    })
    dialog.afterClosed().subscribe((result:any)=>{
      console.log(result)
      if(result !== null && result !== undefined){
         this.service.postData('/conversation',result).subscribe((res:any)=>{
            if(res.success === true){
              this.getConversation()
            }
          },error =>{
            alert(error.error.message)
          })
        }else{
          this.getConversation()
        }
    })
  }

  getConversation(){
    const changeData = this.userId.replace(/"/g, '')
    this.service.getData(`/conversation/${changeData}`).subscribe((res:any)=>{
      if(res.success === true){
        this.receivedUserList = res.data;
      }
    },error=>{
      alert(error.error.message)
    })
  }

  setActive(index:any){
    this.activeIndex = index;
    for(let i = 0;i<=this.receivedUserList.length-1 ; i++){
      if(this.receivedUserList[i] === this.receivedUserList[index]){
          this.chatId.emit(this.receivedUserList[i])
      }
    }
  }

  
}
