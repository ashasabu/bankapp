import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any ={
    1000:{acno:1000,username:"meena",password:1000,balance:5000},
    1001:{acno:1001,username:"neena",password:1001,balance:3000},
    1002:{acno:1002,username:"aneena",password:1002,balance:4000}
  }
  constructor() { }
  register(uname:any,acno1:any,password:any){
    var acno=parseInt(acno1)
   let database=this.database
   if(acno in database){
     //user exist
     return false
   }
   else{
     database[acno]={
       acno,
       uname,
       password,
       balance:0
     }
     console.log(database);
     
     return true
   }

    
    

  }
}
