import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { Router, Routes } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // uname=""
  // acno=""
  // pswd=""
  //group
  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })
  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
   
    var acno=this.registerForm.value.acno
    var uname=this.registerForm.value.uname
    var pswd=this.registerForm.value.pswd
    const result=this.db.register(uname,acno,pswd)
    if(result){
      alert("sucessfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exist Please login")
    }


  }

}
