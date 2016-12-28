import { browser, element, by } from 'protractor';

export class CvPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cv-root h1')).getText();
  }
}
