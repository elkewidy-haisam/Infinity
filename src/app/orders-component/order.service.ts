import { Comic } from '../comics-component/comic.model';
import { Order } from './order.model';
import { EventEmitter, Injectable, Input } from '@angular/core';

@Injectable()
export class OrderService {
  
  comicsChanged = new EventEmitter<Comic[]>();
  @Input() private order: Order;
  orderChanged = new EventEmitter<Order>();
  
  private  comics: Comic[] = [
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg')
  ];
  
  getComics() {
    return this.comics.slice();
  }
  
  addComic(comic: Comic) {
    
    this.comics.push(comic);
    this.comicsChanged.emit(this.order.comics.slice());
    
  }
  
  addComics(comics: Comic[]) {
   
   console.log(this.order);
    for (let comic of comics) {
      this.comics.push(comic);
    }
   this.comicsChanged.emit(this.comics);  
    
  }
  
  setOrderHistory(order: Order) {
    
    this.order = order;
    
  }
  
  
}
