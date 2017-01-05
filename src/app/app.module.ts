import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ng2-bootstrap';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { MobileWelcomeComponent } from './pages/mobile-welcome/mobile-welcome.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AmbitionComponent } from './pages/ambition/ambition.component';
import { LinksComponent } from './pages/links/links.component';
import { EducationComponent } from './pages/education/education.component';
import { PersonalSkillsComponent } from './pages/personal-skills/personal-skills.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    TechnologiesComponent,
    MobileWelcomeComponent,
    PortfolioComponent,
    AmbitionComponent,
    LinksComponent,
    EducationComponent,
    PersonalSkillsComponent,
    PersonalInformationComponent,
    MobileNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule,
    LazyLoadImageModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
