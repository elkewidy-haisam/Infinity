import { Preview } from '../preview.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-previews-list',
  templateUrl: './previews-list.component.html',
  styleUrls: ['./previews-list.component.css']
})
export class PreviewsListComponent implements OnInit {

  @Output() previewWasSelected = new EventEmitter<Preview>();
  
  previews: Preview[] = [
    new Preview('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Preview('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Preview('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Preview('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg'),
    new Preview('A Test Comic', 'this is simply a test', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }
  
  onPreviewSelected(preview: Preview) {
    
    
  }

}
