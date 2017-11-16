import { Comic } from './comic.model';
import { ComicService } from './comic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics-component',
  templateUrl: './comics-component.component.html',
  styleUrls: ['./comics-component.component.css'],
  providers: [ComicService]
})
export class ComicsComponentComponent implements OnInit {

  selectedComic: Comic;
  
  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comicService.comicSelected
      .subscribe((comic: Comic) => {
      this.selectedComic = comic;
    });
  }

}
