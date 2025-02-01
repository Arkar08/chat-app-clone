import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() userName:string | undefined;
  @Input() profile:string | undefined;
  @Input() active:any;
  @Input() index:any;
  @Input() lastMessage:any | undefined;
  constructor() { }

  ngOnInit(): void {
    
  }

  

}
