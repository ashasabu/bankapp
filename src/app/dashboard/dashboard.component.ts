import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""
  constructor(private db:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    alert("deposit")
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
   
    const result= this.db.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"successfully deposited... And new balance is"+ result)
    }
  }

  withdraw(){
    alert("withdraw")
  }
}
