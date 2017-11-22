import { DataStorageService } from '../shared/data-storage.service';
import { Comic } from './comic.model';
import { ComicService } from './comic.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-comics-component',
  templateUrl: './comics-component.component.html',
  styleUrls: ['./comics-component.component.css'],
  providers: [ComicService]
})
export class ComicsComponentComponent implements OnInit {

  comics: Comic[];
  selectedComic: Comic;
  
  constructor(private comicService: ComicService, private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.comicService.comicSelected
      .subscribe((comic: Comic) => {
      this.selectedComic = comic;
    });
    
    this.comics = this.comicService.getComics();
  }
  


}
