import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {
message = "";
  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.shared.currentMessage.subscribe(msg => this.message = msg);
    // this.message = localStorage.getItem("sharedMessage") || "No Data Found";

  }
}
