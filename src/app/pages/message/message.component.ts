import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() name:string | undefined;
  @Input() messages:any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
