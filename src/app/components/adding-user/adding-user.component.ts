import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-adding-user',
  templateUrl: './adding-user.component.html',
  styleUrls: ['./adding-user.component.css']
})
export class AddingUserComponent implements OnInit {
  contact:any;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
  }

  continue(){
    const data = {
      contact:this.contact
    }
    this.service.postData('/conversation',data).subscribe((res:any)=>{
      console.log(res)
    },error =>{
      alert(error.error.message)
    })
  }
}
