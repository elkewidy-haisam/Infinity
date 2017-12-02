import { CartService } from '../cart-component/cart.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Comic } from './comic.model';
import { EventEmitter, Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class ComicService {
  
    observeComics : EventEmitter<Comic[]>;
    comicSelected = new EventEmitter<Comic>();
    comicsChanged = new Subject<Comic[]>();
    
    comics: Comic[] = [];
  
    fireBaseComics: Comic[] = [
      new Comic('Firebase Title 1', 'Firebase Synopsis 1', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Comic('Firebase Title 2', 'Firebase Synopsis 2', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Comic('Firebase Title 3', 'Firebase Synopsis 3', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Comic('Firebase Title 4', 'Firebase Synopsis 4', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Comic('Firebase Title 5', 'Firebase Synopsis 5', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      
   ];
  
    constructor(private cartService: CartService) {}
    
    setComics(otherComics) {
      
      this.comics = otherComics;
      console.log("Checking that the comics were actually placed there welp: " + this.comics.slice());
      // console.log("Comparing it to firebase comics: " + this.fireBaseComics.slice());
      console.log("Checking that if you fetch the comics now; you actually get them: " + this.getComics());
      this.comicsChanged.next(this.comics.slice());
      this.observeComics.emit(this.comics.slice());
      
    }
    
    getComics() {
      console.log("Trying to fetch the comics using the getComics() method: " + this.comics.slice());
      return this.comics.slice();
      
    }
  
    getFirebaseComics() {
      
      return this.fireBaseComics.slice();
      
    }
  
    getComic(index: number) {
      return this.comics[index];
    }
  
  
  
    addComicToShoppingCart(comic: Comic) {
      
      this.cartService.addComic(comic);
      
    }
  

}
