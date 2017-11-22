export class Comic {
  
  public title: string;
  public synopsis: string;
  public imagePath: string;
  
  constructor(title: string, synopsis: string, imagePath: string) {
    this.title = title;
    this.synopsis = synopsis;
    this.imagePath = imagePath;
  }
}
