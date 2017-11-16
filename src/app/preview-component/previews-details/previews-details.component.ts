import { Preview } from '../preview.model';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-previews-details',
  templateUrl: './previews-details.component.html',
  styleUrls: ['./previews-details.component.css']
})
export class PreviewsDetailsComponent implements OnInit {

  @Input() preview: Preview;
  @Output() previewSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
    
  }
  
  onSelected() {
    this.previewSelected.emit();
  }

}
