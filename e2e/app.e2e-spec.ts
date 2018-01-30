import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('angular-workshop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should contain angular application', async () => {
    expect(await page.getAppRoot()).toBeTruthy();
  });

  it('should multiply 3 by 3 correctly', async () => {
    await page.setOperator('*');
    await page.setFirstInput(3);
    await page.setSecondInput(3);
    await page.assertResult(9);
  });

  it('should read "DEVELOP ACROSS ALL PLATFORMS" as title for the first section on angular.io', async () => {
    await browser.get('https://angular.io');
     //TODO: implement
  });
});
