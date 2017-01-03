import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cv works!';
  private image1 = this.getImgUrl();
  private image2 = this.getImgUrl();
  private image3 = this.getImgUrl();

  ngOnInit() {
      skrollr.init();
  }

  public getImage1(): string {
      return this.image1;
  }

  public getImage2(): string {
      return this.image2;
  }

  public getImage3(): string {
      return this.image3;
  }

  private getWidth(): string {
      return window.innerWidth.toString();
  }

  private getHeight(): string {
      return window.innerHeight.toString();
  }

  private getImgUrl(): string {
      return 'https://unsplash.it/' + this.getWidth() + '/' + this.getHeight() + '/?image=' + this.getRandomInt( 0, 1000 );
  }
  
  private getRandomInt(min: number, max: number): string {
      let num = Math.floor(Math.random() * (1 + max - min)) + min;
      return num.toString(); 
  }
}
