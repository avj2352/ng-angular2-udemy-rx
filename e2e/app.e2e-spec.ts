import { NgReduxUdemyPage } from './app.po';

describe('ng-redux-udemy App', () => {
  let page: NgReduxUdemyPage;

  beforeEach(() => {
    page = new NgReduxUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
