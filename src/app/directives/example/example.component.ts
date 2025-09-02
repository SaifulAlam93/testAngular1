import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  //ngIf
  
  isLoggedIn = true;

  status = 1;

  changeStatus() {
    this.status = this.status < 3 ? this.status + 1 : 1;
  }


//ngFor
  
  users = ['Saiful', 'Abdullah', 'A.Karim', 'A.Rahim'];


 //ngSwitch
  role = 'admin';
  //--
  isActive = true;

  fontSize = 30;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  increaseFont() {
    this.fontSize += 2;
  }



  //----ngClass


  // app.component.ts (same toggleActive from above)
  // toggleActive() {
  //   this.isActive = !this.isActive;
  // }

}
