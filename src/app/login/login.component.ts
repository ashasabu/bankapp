import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from 'services/data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accnum="Your account number please!!!"
 
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,private db:DataService,private fb:FormBuilder) { }
 
  ngOnInit(): void {
  }

// accno(event:any){
  
//   console.log(this.accno_ini=event.target.value);
   
  
// }
// pswd(event:any){
//   console.log(this.pswd_ini=event.target.value);
  

// }
//template using data binding
// login(a:any,p:any){
//   console.log(a);
  
//   var acno=a.value
//   var pswd=p.value
//   let database=this.database
//   if(acno in database){
//     if(pswd == database[acno]["password"]){
//       alert("login sucessful!!!!")
//     }
//     else{
//       alert("invalid password")
//     }

//   }
//   else{
//     alert("user does not exist")
//   }
// }

login(){
 
  
  var acno=this.loginForm.value.acno
  
  
  var pswd=this.loginForm.value.pswd
  let database=this.db.database
  //call login in dataservice
  if(this.loginForm.valid){
    const result=this.db.login(acno,pswd)
    if(result){
      alert("login sucessful!!!!")
         this.router.navigateByUrl("dashboard")
    }
   
  
  
  
    // if(acno in database){
    //    if(pswd == database[acno]["password"]){
        
  
    //     alert("login sucessful!!!!")
    //     this.router.navigateByUrl("dashboard")
    //   }
    //   else{
    //     alert("invalid password")
    //   }
  
    // }
    // else{
    //   alert("user does not exist")
    // }
  }
  else{
    alert("Invalid Forms")
  }
  }
  
}
