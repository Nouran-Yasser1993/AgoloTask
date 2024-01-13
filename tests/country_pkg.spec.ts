import { test, expect } from '@playwright/test';
import { assert  } from 'console';

test.describe('New Todo', () => {

test('testEgypt', async ({ page }) => {
  await page.goto('https://subscribe.jawwy.tv/eg-en');
  

  //Lite Package assertions
  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-lite"]')).toHaveText('Lite');
  await expect (page.locator('(//div[@class="price"]/b)[1]')).toHaveText('0.25');
  await expect (page.locator('(//div[@class="price"]/i)[1]')).toHaveText("USD/month");

  //Classic package assertions

  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-classic"]')).toHaveText('Classic');
  await expect (page.locator('(//div[@class="price"]/b)[2]')).toHaveText('0.5');
  await expect (page.locator('(//div[@class="price"]/i)[2]')).toHaveText("USD/month");

  //Premium package assertions

  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-premium"]')).toHaveText('Premium');
  await expect (page.locator('(//div[@class="price"]/b)[3]')).toHaveText('1');
  await expect (page.locator('(//div[@class="price"]/i)[3]')).toHaveText("USD/month");

 
  
});


test('testUAE', async ({ page }) => {
  await page.goto('https://subscribe.jawwy.tv/ae-en');
 

  //Lite Package assertions
  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-lite"]')).toHaveText('Lite');
  await expect (page.locator('(//div[@class="price"]/b)[1]')).toHaveText('5.4');
  await expect (page.locator('(//div[@class="price"]/i)[1]')).toHaveText("USD/month");

  //Classic package assertions

  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-classic"]')).toHaveText('Classic');
  await expect (page.locator('(//div[@class="price"]/b)[2]')).toHaveText('10.9');
  await expect (page.locator('(//div[@class="price"]/i)[2]')).toHaveText("USD/month");

  //Premium package assertions

  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-premium"]')).toHaveText('Premium');
  await expect (page.locator('(//div[@class="price"]/b)[3]')).toHaveText('16.3');
  await expect (page.locator('(//div[@class="price"]/i)[3]')).toHaveText("USD/month");

 
  
});

test('testALgeria', async ({ page }) => {
  await page.goto('https://subscribe.jawwy.tv/dz-en');
 
  //Lite Package assertions
  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-lite"]')).toHaveText('Lite');
  await expect (page.locator('(//div[@class="price"]/b)[1]')).toHaveText('2.7');
  await expect (page.locator('(//div[@class="price"]/i)[1]')).toHaveText("USD/month");

  //Classic package assertions

  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-classic"]')).toHaveText('Classic');
  await expect (page.locator('(//div[@class="price"]/b)[2]')).toHaveText('5.3');
  await expect (page.locator('(//div[@class="price"]/i)[2]')).toHaveText("USD/month");

  //Premium package assertions

  await expect (page.locator('(//div[@class="plan-names"])[1]//strong[@id="name-premium"]')).toHaveText('Premium');
  await expect (page.locator('(//div[@class="price"]/b)[3]')).toHaveText('8');
  await expect (page.locator('(//div[@class="price"]/i)[3]')).toHaveText("USD/month");

 
  
});

});
