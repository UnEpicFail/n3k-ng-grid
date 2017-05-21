import { N3kNgGridPage } from './app.po';

describe('n3k-ng-grid App', () => {
  let page: N3kNgGridPage;

  beforeEach(() => {
    page = new N3kNgGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
