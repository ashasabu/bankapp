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
  register(uname:any,acno:any,password:any){
   
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
  //login
  login(acno:any,pswd:any){
 
  
    
    let database=this.database
    if(acno in database){
       if(pswd == database[acno]["password"]){
        //already exist
  return true
        
      }
      else{
        alert("invalid password")
        return false
      }
  
    }
    else{
      alert("user does not exist")
      return false
    }
  }


  //deposit

  deposit(acno:any,pswd:any,amt:any){
    let amount=parseInt(amt)
    let database=this.database
    if(acno in database){
      if(pswd==database[acno]["password"]){
        database[acno]["balance"]+=amount
        return database[acno]["balance"]
      }
      else{
        alert("invalid password")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }
  }

  //withdraw
  withdraw(acno:any,pswd:any,amt:any){
    let amount=parseInt(amt)
    let database=this.database
    if(acno in database){
      if(pswd==database[acno]["password"]){
        if(database[acno]["balance"]>amount){
          database[acno]["balance"]-=amount
          return database[acno]["balance"]
        }
        else{
          alert("insufficient balance")
        return false
        }
      }
      else{
        alert("invalid password")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }
  }
}
