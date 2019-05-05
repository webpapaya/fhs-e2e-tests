const {Builder, By, Key, until} = require('selenium-webdriver');

it('test something interesting', async () => {
  const driver = await new Builder().forBrowser(process.env.SELENIUM_DRIVER).build();
  await driver.get('https://compup.agilesoftware.dev');

  await driver.quit();
});