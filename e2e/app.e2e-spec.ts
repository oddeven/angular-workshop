import { AppPage } from './app.po';

describe('angular-workshop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain angular application', () => {
    page.navigateTo();
    expect(page.getAppRoot()).toBeTruthy();
  });
});
