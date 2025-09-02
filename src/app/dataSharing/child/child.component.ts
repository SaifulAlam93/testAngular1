import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  //P-> C
  @Input() childMessage: string = "I am from Child!!";

  // //C->P
  @Output() messageEvent = new EventEmitter<string>();

  message = "";
  
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
