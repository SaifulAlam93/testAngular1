import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  newMessage = "";
  constructor(private shared: SharedService) { }

  sendMessage() {
    this.shared.updateMessage(this.newMessage);
  }

  saveMessage() {
    localStorage.setItem("sharedMessage", this.newMessage);
  }
}
