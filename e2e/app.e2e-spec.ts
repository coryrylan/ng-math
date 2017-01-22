import { NgMathPage } from './app.po';

describe('ng-math App', function() {
  let page: NgMathPage;

  beforeEach(() => {
    page = new NgMathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
