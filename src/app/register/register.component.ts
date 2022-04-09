import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""
  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
   
    var acno=this.acno
    var uname=this.uname
    var pswd=this.pswd
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
