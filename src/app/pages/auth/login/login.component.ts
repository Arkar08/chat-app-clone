import { Component, OnInit } from '@angular/core';
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


  constructor(private router:Router,private service:ApiService) { }
  
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
      }
    },error=>{
      alert(error.error.message)
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
      this.loginDetails.email = JSON.parse(email || '') ;
      this.loginDetails.password = JSON.parse(password || '');
    }
    return;
  }

}
