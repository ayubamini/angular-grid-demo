import { AngularGridPage } from './app.po';

describe('angular-grid App', () => {
  let page: AngularGridPage;

  beforeEach(() => {
    page = new AngularGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
