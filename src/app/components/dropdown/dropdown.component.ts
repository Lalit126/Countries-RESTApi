import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent  {

  showOptions = false;

  @Input()
  placeholder:string;

  @Input()
options : string[];

@Input()
value: string;

@Output()
valueChange : EventEmitter<string> = new EventEmitter()

select(value : string){
this.valueChange.emit(value);

}
toggleOptions(){

  this.showOptions = !this.showOptions;
}



}
