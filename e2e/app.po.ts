import { browser, by, element } from 'protractor';

export class N3kNgGridPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
