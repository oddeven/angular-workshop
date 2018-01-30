import { browser, by, element } from 'protractor';

export class AppPage {
  private container = 'calculator';

  async navigateTo() {
    await browser.get('/');
  }

  async getAppRoot() {
    return await element(by.css('app-root'));
  }

  async setFirstInput(value: number) {
    const input = await element(by.css(`${this.container} [data-test-selector="first-input"]`));    
    await input.sendKeys(value.toString());
  }

  async setSecondInput(value: number) {
    const input = await element(by.css(`${this.container} [data-test-selector="second-input"]`));
    await input.sendKeys(value.toString());
  }

  async setOperator(operator: string) {
    const select = await element(by.cssContainingText(`${this.container} option`, operator));
    await select.click();
  }

  async assertResult(value: number) {
    const result = await element(by.css(`${this.container} [data-test-selector="result"]`));
    expect(await result.getText()).toEqual(value.toString());
  }

  async assertAngularFirstSectionTitle() {
    const title = await element(by.css('.homepage-container .text-headline'));
    const text = await title.getText();
    expect(text).toEqual('DEVELOP ACROSS ALL PLATFORMS');
  }
}
