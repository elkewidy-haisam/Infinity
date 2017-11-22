import { Comic } from '../comics-component/comic.model';
import { ComicService } from '../comics-component/comic.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  comics: Comic[];

  constructor(private dataStorageService: DataStorageService, private comicService: ComicService, private httpClient: HttpClient) {
  
    this.comics = this.comicService.getComics();
  
   }

  ngOnInit() {
    
  }
  
 onSaveFirebaseComics() {
    
    this.dataStorageService.storeFirebaseComics()
      .subscribe(
      (response: HttpEvent<Object>) => {
        console.log(response);
      }
      );
    
  }
  
  onFetchFirebaseComics() {
    
    /*this.dataStorageService.getFirebaseComics();
    console.log("Fetching Firebase comics..."); */
    
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
         this.comics = comics;
           
         }
     );
    
    
  }
  
   onSaveFirebasePreviews() {
    
    this.dataStorageService.storeFirebasePreviews()
      .subscribe(
      (response: HttpEvent<Object>) => {
        console.log(response);
      }
      );
    
  }
  
  onFetchFirebasePreviews() {
    
    this.dataStorageService.getFirebasePreviews();
    console.log("Fetching Firebase previews...");
    
  }

}
