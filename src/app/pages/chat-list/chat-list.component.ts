import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddingUserComponent } from 'src/app/components/adding-user/adding-user.component';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addUserDialog(){
    this.dialog.open(AddingUserComponent,{
      width:'500px',
      data:{}
    })
  }

}
