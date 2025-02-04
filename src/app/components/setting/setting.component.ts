import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<SettingComponent>,private service:ApiService,private snackBar:MatSnackBar) { }

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
      },error =>{
        this.snackBar.open(error.error.message,'Close', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['error-snackbar']
        })
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
