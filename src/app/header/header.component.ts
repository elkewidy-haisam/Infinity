import { Cart } from '../cart-component/cart.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  
  private cart: Cart;
  
  constructor(private dataStorageService: DataStorageService) {}
  
  onSaveCart() {
    this.dataStorageService.storeCarts()
      .subscribe(
        (response: Response) => {
           console.log(response);
        }
      );
    }
  
  onFetchCart() {
    
    this.dataStorageService.getShoppingCart();
    
  }
  
  onFetchPreviews() {
    
    this.dataStorageService.getPreviews();
    
  }
  
  onFetchReleases() {
    
    this.dataStorageService.getReleases();
    
  }
  
  onFetchOrders() {
    
    this.dataStorageService.getOrders();
    
  }

}
