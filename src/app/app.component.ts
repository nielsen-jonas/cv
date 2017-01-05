import { Component, AfterViewInit, HostListener } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'cv works!';
  public imageReload = true;
  private resizeTimer = null;
  private skrollrOn = false;
  private skrollr;

  ngAfterViewInit() {
      PageScrollConfig.defaultDuration = 300;
      PageScrollConfig.defaultInterruptible = false;
      this.skrollr = skrollr.init();
      this.skrollrOn = true;
      if (this.skrollr.isMobile()) {
          this.skrollr.destroy()
          this.skrollrOn = false;
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

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
      if (this.resizeTimer === null) {
          this.imageReload = false;
          this.resizeTimer = setTimeout(() => {
              this.imageReload = true;
              if (this.skrollrOn) {
                  window.requestAnimationFrame(() => {
                      this.skrollr.refresh();
                  });
              }
              this.resizeTimer = null;
          }, 1000);
      }
  }
}
