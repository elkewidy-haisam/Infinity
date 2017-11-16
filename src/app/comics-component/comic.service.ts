import { CartService } from '../cart-component/cart.service';
import { Comic } from '../comics-component/comic.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ComicService {
    comicSelected = new EventEmitter<Comic>();
    comicsChanged = new EventEmitter<Comic[]>();
    
    private comics: Comic[] = [];
  
    constructor(private cartService: CartService) {}
    
    getComics() {
      return this.comics.slice();
    }
  
    getComic(index: number) {
      return this.comics[index];
    }
  
    setComics(comics) {
      
      this.comics = comics;
      
    }
  
    addComicToShoppingCart(comic: Comic) {
      
      this.cartService.addComic(comic);
      
    }
  

}
