import { Comic } from '../../comics-component/comic.model';
import { OrderService } from '../../orders-component/order.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

cart: Cart = 
    new Cart('username', 
    [ new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg')]);
 
  constructor(private cartService: CartService, private dataStorageService: DataStorageService, private orderService: OrderService) { }

  ngOnInit() {
    
    this.cart.comics = this.cartService.getComics();
    this.cartService.comicsChanged.subscribe((comics: Comic[]) => {
      this.cart.comics = comics;
      });
    
  }
  
  onProceedingtoCheckout() {
    
    this.orderService.addComics(this.cart.comics);
    this.cartService.clearComics(this.cart); 
    
  }

}
