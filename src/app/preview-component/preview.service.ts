import { Preview } from './preview.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class PreviewService {
  
  previewsChanged = new EventEmitter<Preview[]>();
  private previews: Preview[];
  
  
    fireBasePreviews: Preview[] = [
      new Preview('Firebase Title 1', 'Firebase Synopsis 1', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Preview('Firebase Title 2', 'Firebase Synopsis 2', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Preview('Firebase Title 3', 'Firebase Synopsis 3', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Preview('Firebase Title 4', 'Firebase Synopsis 4', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      new Preview('Firebase Title 5', 'Firebase Synopsis 5', 'http://www.innomag.no/wp-content/uploads/ai-image.jpg' ),
      
   ];
  
  setPreviews(previews: Preview[]) {
    
    this.previews = previews;
    
  }

    getFirebasePreviews() {
      
      return this.fireBasePreviews.slice();
      
    }
  
  
}