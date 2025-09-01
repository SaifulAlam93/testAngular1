import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";


  //c->P

  message = "";

  receiveMessage($event: string) {
    this.message = $event;
  }
}
