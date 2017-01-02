import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TechnologiesComponent,
    MobileWelcomeComponent,
    PortfolioComponent,
    AmbitionComponent,
    LinksComponent,
    EducationComponent,
    PersonalSkillsComponent,
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
