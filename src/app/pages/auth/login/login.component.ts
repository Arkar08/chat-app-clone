import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword:any;
  hide:boolean = false;
  remember:boolean =false;
  email:string = ''
  password:string = ''

  loginDetails : any;


  constructor(private router:Router,private service:ApiService,private snackBar:MatSnackBar) { }
  
  ngOnInit(): void {
    this.showPassword = 'password'
    this.checkAndLogin()
  }
  view(){
    if(this.showPassword === 'password'){
      this.showPassword = 'text'
      this.hide = true;
    }else{
      this.showPassword = 'password'
      this.hide = false;
    }
  }

  login(){
    this.loginDetails = {
      email:this.email,
      password:this.password
    }
    if(this.remember){
      localStorage.setItem('remember','true')
      localStorage.setItem('loginemail',JSON.stringify(this.loginDetails.email))
      localStorage.setItem('loginpassword',JSON.stringify(this.loginDetails.password))
    }else{
      localStorage.setItem('remember','false')
      localStorage.removeItem('loginemail')
      localStorage.removeItem('loginpassword')
    }
    this.service.postData('/auth/login',this.loginDetails).subscribe((res:any)=>{
      if(res.status === 200){
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('userId',JSON.stringify(res.data.id))
        this.router.navigateByUrl('/home')
        this.snackBar.open('login successfully', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['success-snackbar']
        })
      }
    },error=>{
      this.snackBar.open(error.error.message,'Close', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['error-snackbar']
      })
    })
  }

  checkInput(data:any){
    this.remember = data.checked;
  }

  checkAndLogin(){
    this.loginDetails = {
      email:this.email,
      password:this.password
    }
    const remember = localStorage.getItem('remember')
    if(remember === 'true'){
      const email = localStorage.getItem('loginemail')
      const password = localStorage.getItem('loginpassword')
      this.email = JSON.parse(email || '');
      this.password = JSON.parse(password || '')
      this.remember = JSON.parse(remember || '')
    }
    return;
  }

}
