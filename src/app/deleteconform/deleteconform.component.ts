import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-deleteconform',
  templateUrl: './deleteconform.component.html',
  styleUrls: ['./deleteconform.component.css']
})
export class DeleteconformComponent implements OnInit {
  @Input()item:string|undefined
  @Output() onCancel=new EventEmitter()
  @Output() onDelete=new EventEmitter
  constructor() { }
  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }
 delete(){
this.onDelete.emit(this.item)
 }
}
