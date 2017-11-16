import { Preview } from './preview.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class PreviewService {
  
  previewsChanged = new EventEmitter<Preview[]>();
  private previews: Preview[];
  
  
  setPreviews(previews: Preview[]) {
    
    this.previews = previews;
    
  }

  
  
}