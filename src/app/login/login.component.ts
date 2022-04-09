import { Component, OnInit } from '@angular/core';
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
  accno_ini=""
  pswd_ini=""


  constructor(private router:Router,private db:DataService) { }
 
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
 
  
  var acno=this.accno_ini
  
  
  var pswd=this.pswd_ini
  let database=this.db.database
  //call login in dataservice
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
}
