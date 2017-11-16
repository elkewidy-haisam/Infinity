import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Comic } from '../comic.model';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  @Output() comicWasSelected = new EventEmitter<Comic>();
  
  comics: Comic[] = [
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Comic('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg')
  ];
  constructor(private comicService: ComicService) { }

  ngOnInit() {
    
  }
  
  onComicSelected(comic: Comic) {
    
    
  }

}
