import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products: any[] = [
    { id: 1, name: 'Laptop', price: 1200, imageUrl: 'assets/img/shop_04.jpg', description: 'High performance laptop' },
    { id: 2, name: 'Phone', price: 600, imageUrl: 'assets/img/shop_04.jpg', description: 'Latest smartphone' },
    { id: 3, name: 'Headphones', price: 150, imageUrl: 'assets/img/shop_04.jpg', description: 'Noise cancelling headphones' },
    { id: 4, name: 'Smartwatch', price: 200, imageUrl: 'assets/img/shop_04.jpg', description: 'Fitness smartwatch' },
    { id: 1, name: 'Laptop', price: 1200, imageUrl: 'assets/img/shop_04.jpg', description: 'High performance laptop' },
    { id: 2, name: 'Phone', price: 600, imageUrl: 'assets/img/shop_04.jpg', description: 'Latest smartphone' },
    { id: 3, name: 'Headphones', price: 150, imageUrl: 'assets/img/shop_04.jpg', description: 'Noise cancelling headphones' },
    { id: 4, name: 'Smartwatch', price: 200, imageUrl: 'assets/img/shop_04.jpg', description: 'Fitness smartwatch' }
  ];
}
