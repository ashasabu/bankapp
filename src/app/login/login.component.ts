import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accnum="Your account number please!!!"
  accno_ini=""
  pswd_ini=""
database:any ={
  1000:{acno:1000,username:"Meena",password:1000,balance:5000},
  1001:{acno:1001,username:"Meena",password:1001,balance:3000},
  1002:{acno:1002,username:"Meena",password:1002,balance:4000}
}

  constructor() { }
 
  ngOnInit(): void {
  }

accno(event:any){
  
  console.log(this.accno_ini=event.target.value);
   
  
}
pswd(event:any){
  console.log(this.pswd_ini=event.target.value);
  

}
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
 
  
  var acno=this.accno_ini
  var pswd=this.pswd_ini
  let database=this.database
  if(acno in database){
    if(pswd == database[acno]["password"]){
      alert("login sucessful!!!!")
    }
    else{
      alert("invalid password")
    }

  }
  else{
    alert("user does not exist")
  }
}
}
