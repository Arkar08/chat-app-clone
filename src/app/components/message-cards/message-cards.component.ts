import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-cards',
  templateUrl: './message-cards.component.html',
  styleUrls: ['./message-cards.component.css']
})
export class MessageCardsComponent implements OnInit {
  @Input() message:string | undefined;
  @Input() senderId:string | undefined;
  @Input() date:string | undefined;
  changCard:boolean = false;
  userId:any;
  constructor() { }

  ngOnInit(): void {
      this.userId = localStorage.getItem('userId')
      this.getStatus()
  }


  getStatus(){
    const changeUser = this.userId.replace(/"/g, '')
    if(changeUser === this.senderId?.toString()){
      this.changCard =true;
    }else{
      this.changCard = false;
    }
  }

}
