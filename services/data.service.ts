import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any

  database:any ={
    1000:{acno:1000,username:"meena",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,username:"neena",password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,username:"aneena",password:1002,balance:4000,transaction:[]}
  }

  constructor() { 
    this.getDetails()
  }

//store local storage
saveDetails(){
  localStorage.setItem("database",JSON.stringify(this.database))
  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}
getDetails(){
  if(localStorage.getItem("database")){
    this.database =JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
  
}



  register(username:any,acno:any,password:any){
   
   let database=this.database
   if(acno in database){
     //user exist
     return false
   }
   else{
     database[acno]={
       acno,
       username,
       password,
       balance:0,
       transaction:[]
     }
    
     this.saveDetails()
 
     return true
   }
  }
  //login
  login(acno:any,pswd:any){
 
  
    
    let database=this.database
    if(acno in database){
       if(pswd == database[acno]["password"]){
        //already exist
        this.currentUser=database[acno]["username"]
        this.currentAcno=acno
        this.saveDetails()
   


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
        database[acno]["transaction"].push(
          {
            type:"CREDIT",
            amount:amount
          }
        )
       // console.log(database);
       this.saveDetails()
    


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
          database[acno]["transaction"].push(
            {
              type:"DEBIT",
              amount:amount
            }
          )
       //   console.log(database);
       this.saveDetails()
      


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
  //transaction
  transaction(acno:any){
    return this.database[acno].transaction
  }

}
