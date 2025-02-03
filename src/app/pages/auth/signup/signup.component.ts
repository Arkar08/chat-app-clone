import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showPassword:any;
  hide:boolean = false;

  signupDetails = {
    name:'',
    email:'',
    password:'',
    contact:0
  }

  name:string = ''
  email:string = ''
  password:string = ''
  contact:any;

  constructor(private service:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.showPassword = 'password'
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

  signUp(){
    this.signupDetails ={
      name:this.name,
      email:this.email,
      password:this.password,
      contact:this.contact
    }
    this.service.postData('/auth/signup',this.signupDetails).subscribe((res:any)=>{
      if(res.status === 201){
        localStorage.setItem('token',res.data.token)
        this.router.navigateByUrl('/home')
      }
    },error=>{
      alert(error.error.message)
    })
  }

}
