import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  message = "";
  constructor(private shared: SharedService) { }

  ngOnInit() {
    // this.shared['messageSource'].subscribe(msg => this.message = msg);
    // this.shared.currentMessage.subscribe(msg => this.message = msg);
    // this.shared.messageSource.subscribe(msg => this.message = msg);
    this.message = localStorage.getItem("sharedMessage") || "No Data Found";
  }



}
