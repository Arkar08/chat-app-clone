import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-adding-user',
  templateUrl: './adding-user.component.html',
  styleUrls: ['./adding-user.component.css']
})
export class AddingUserComponent implements OnInit {
  contact:any;
  passData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<AddingUserComponent>) { }

  ngOnInit(): void {
    this.passData = this.data;
  }

  continue(){
      this.passData.contact = this.contact;
      if(this.contact !== undefined){
        this.dialogRef.close(this.passData)
      }else{
        this.dialogRef.close(null)
      }
    }

  cancel(){
    this.dialogRef.close(null)
  }
}
