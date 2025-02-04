import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  userId:any;
  userDetails = {
    name:'',
    email:'',
    contact:''
  };
  active:boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<SettingComponent>,private service:ApiService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getUser()
  }

  logout(){
    this.dialogRef.close('logout')
  }

  getUser(){
    const changeData = this.userId.replace(/"/g, '')
      this.service.getData(`/auth/users/${changeData}`).subscribe((res:any)=>{
        if(res.success === true){
          this.userDetails = res.data;
        }
      })
  }

  edit(){
    this.active = false;
  }


  save(){
    this.active = true;
    console.log(this.userDetails)
  }

}
