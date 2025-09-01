import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products = [
    { id: 1, name: 'Phone', price: 500 },
    { id: 2, name: 'Laptop', price: 1200 },
    { id: 3, name: 'Watch', price: 200 },
  ];

}
