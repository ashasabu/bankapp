import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers:new HttpHeaders()
}
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

  constructor(private http:HttpClient) { 
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
   
    const data={
      username,
      acno,
      password
    }
    return this.http.post('http://localhost:3000/register',data)

  }
  //login
  login(acno:any,pswd:any){
 const data={
   acno,
   pswd
 }
 return this.http.post('http://localhost:3000/login',data)

  }
    //login
  //   let database=this.database
  //   if(acno in database){
  //      if(pswd == database[acno]["password"]){
  //       //already exist
  //       this.currentUser=database[acno]["username"]
  //       this.currentAcno=acno
  //       this.saveDetails()
   


  // return true
        
  //     }
  //     else{
  //       alert("invalid password")
  //       return false
  //     }
  
  //   }
  //   else{
  //     alert("user does not exist")
  //     return false
  //   }
  // }


  // //deposit

  deposit(acno:any,pswd:any,amt:any){
    const data={
      acno,
      pswd,
      amt
    }
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())

  }

  getOptions(){
const token=JSON.parse(localStorage.getItem("token")||'')
//create http header
let headers=new HttpHeaders()
//add token to req header
if(token){
  headers=headers.append('x-access-token',token)
  options.headers=headers
}
return options
  }


  //withdraw
  withdraw(acno:any,pswd:any,amt:any){
    const data={
      acno,
      pswd,
      amt
    }
    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  }
  //transaction
  transaction(acno:any){
    const data={
      acno
    }
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  }
onDelete(acno:any){
  return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())

}
}
