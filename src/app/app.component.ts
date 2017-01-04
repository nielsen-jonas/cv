import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cv works!';

  ngOnInit() {
      PageScrollConfig.defaultDuration = 100;
      PageScrollConfig.defaultInterruptible = false;
      let s = skrollr.init();
      if (s.isMobile()) {
          s.destroy()
      }
  }

  private getWidth(): string {
      return window.innerWidth.toString();
  }

  private getHeight(): string {
      return window.innerHeight.toString();
  }

  public imgTechnologies(): string {
      return 'https://source.unsplash.com/IgNebBEjhvw/' + this.getWidth() + 'x' + this.getHeight();
  }

  public imgPortfolio(): string {
      return 'https://source.unsplash.com/yZLkK1XfyHg/' + this.getWidth() + 'x' + this.getHeight();
  }

  public imgEducation(): string {
      return 'https://source.unsplash.com/Nw3ddCwbUKg/' + this.getWidth() + 'x' + this.getHeight();
  }
  
  private getRandomInt(min: number, max: number): string {
      let num = Math.floor(Math.random() * (1 + max - min)) + min;
      return num.toString(); 
  }
}
