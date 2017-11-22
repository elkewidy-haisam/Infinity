import { Cart } from '../cart-component/cart.model';
import { CartService } from '../cart-component/cart.service';
import { Comic } from '../comics-component/comic.model';
import { ComicService } from '../comics-component/comic.service';
import { Order } from '../orders-component/order.model';
import { OrderService } from '../orders-component/order.service';
import { Preview } from '../preview-component/preview.model';
import { PreviewService } from '../preview-component/preview.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';



@Injectable()
export class DataStorageService {
  
   constructor(private httpClient: HttpClient, private http: Http, private cartService: CartService, 
     private orderService: OrderService, private previewService: PreviewService,
     private comicService: ComicService) {}
  
  
  storeComics() {
    
    return this.http.put('https://infinity-database-test.firebaseio.com/comics.json', this.comicService.getComics());
    
  }
  
  storeFirebasePreviews() {
    
    return this.httpClient.put('https://infinity-database-test.firebaseio.com/previews.json', this.previewService.getFirebasePreviews(), {
      observe: 'body',
      responseType: 'json'
    });
    
  }
  
  storeFirebaseComics() {
    
    return this.httpClient.put('https://infinity-database-test.firebaseio.com/comic.json', this.comicService.getFirebaseComics(), {
      observe: 'response',
      responseType: 'json'
    });
    
  }
  
  getFirebasePreviews() {
    
    return this.httpClient.get<Preview[]>('https://infinity-database-test.firebaseio.com/comics.json', {
      
      observe: 'body',
      responseType: 'json'
      
    })
    .map(
      (previews) => {
       
       console.log(previews);
       return previews;
        
      }
    )
    .subscribe(
       (previews: Preview[]) => {
         console.log("checking that the previews have been fetched: " + previews)
        this.previewService.setPreviews(previews);
       } 
     );
  }
  
  getFirebaseComics() {
    
    this.httpClient.get<Comic[]>('https://infinity-database-test.firebaseio.com/comic.json', {
      observe: 'body',
      responseType: 'json' 
    })
    .map(
      (comics) => {
      
      console.log(comics);
      return comics;
        
      }
    )
    .subscribe(
       (comics: Comic[]) => {
         
         console.log("checking that the comics have been fetched: " + comics)
         this.comicService.setComics(comics);
           
         }
     );
  }
      
  
  
   storeCarts() {
     
     return this.httpClient.put('https://infinity-database-test.firebaseio.com/cart.json', this.cartService.getComics(), {
       
       observe: 'body',
       responseType: 'json'
       
     });
     
   }
  
    getShoppingCart() {
      
        this.http.get('https://ng-recipe-book.firebaseio.com/cart.json')
      .map(
        (response: Response) => {
          const comics: Comic[] = response.json();
         
          return comics;
        }
      )
      .subscribe(
        (comics: Comic[]) => {
          this.cartService.setComics(comics);
        }
      );
      
    }
  
    getOrders() {
      
      this.http.get('https://infinity-database-test.firebaseio.com/orders.json')
      .map(
        (response: Response) => {
          const orderhistory: Order = response.json();
         
          return orderhistory;
        }
      )
      .subscribe(
        (orderhistory: Order) => {
          this.orderService.setOrderHistory(orderhistory);
        }
      );
      
    }
      
  
    getReleases() {
      
      this.http.get('https://ng-recipe-book.firebaseio.com/releases.json')
      .map(
        (response: Response) => {
          const comics: Comic[] = response.json();
         
          return comics;
        }
      )
      .subscribe(
        (comics: Comic[]) => {
          this.comicService.setComics(comics);
        }
      );
      
      
    }
  
    getPreviews() {
      
      this.http.get('https://ng-recipe-book.firebaseio.com/previews.json')
      .map(
        (response: Response) => {
          const previews: Preview[] = response.json();
         
          return previews;
        }
      )
      .subscribe(
        (previews: Preview[]) => {
          this.previewService.setPreviews(previews);
        }
      );
      
      
    }
  
  viewComicDetails() {
    
    
  }
  
  addComicsToCart(comics : Comic[]) {
    
    return this.http.post('https://infinity-database-test.firebaseio.com/cart.json', this.cartService.getComics());
    
  }
  
  viewPreviewDetails() {
    
    
    
  }
  
  downloadPreview() {
    
    
  }
  
  removeComicFromCart(comic: Comic) {
    
    return this.http.delete('https://infinity-database-test.firebaseio.com/cart.json', comic);
    
  }
  
  addCartToOrderHistory() {
    
    return this.http.post('https://infinity-database-test.firebaseio.com/orders.json', this.cartService.getComics());
    
  }
  
  
  

}
