import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    console.log(this.signupDetails)
  }

}
