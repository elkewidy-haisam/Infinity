import { Cart } from '../cart-component/cart.model';
import { Comic } from '../comics-component/comic.model';
import { ComicService } from '../comics-component/comic.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  comics: Comic[];
  private cart: Cart;
  
  constructor(private dataStorageService: DataStorageService, private comicService: ComicService) {}
  
  onSaveCart() {
    this.dataStorageService.storeCarts()
      .subscribe(
        (response: HttpEvent<Object>) => {
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
  
  onFetchFirebaseComics() {
    
    console.log("Fetching Firebase comics...");
    this.dataStorageService.getFirebaseComics();
    
     
  }

}
