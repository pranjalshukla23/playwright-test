import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import {faker} from '@faker-js/faker'

test.describe("Home", () => {

  let homePage:HomePage;
  test("Open HomePage and verify title", async ({ page }) => {
    
    //open url
    await homePage.navigate()

    //verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro");
  })
})

test.describe('About', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
      //open url
await  homePage.navigate()
    
  })
  

    test.skip("Open AboutPage and verify title", async({page}) => {
         //open url
    await page.goto("https://practice.automationbro.com/about/");

    //verify title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click get started button using css selector", async({page}) => {
   
  

//click the button
// await page.locator('#get-started').click()
await homePage.getStartedBtn.click()


//verify url has #get-started
await expect(page).toHaveURL(/.*#get-started/)
});

test("Verify heading text is visible using text selector", async({page}) => {

  


//find the text locator
// const headingText = await page.getByText('Think different. Make different.')
const headingText = await homePage.headingText

//verify heading text is visible
await expect(headingText).toBeVisible()

});

test("Verify home link is enabled using text and css selector", async({page}) => {
  
  


//find the home text
// const homeText = await page.locator('#primary-menu:has-text("Home")')
const homeText = await homePage.homeLink

//verify home text is enabled
await expect(homeText).toBeEnabled()

});

test("Verify the text for all nav links", async({page}) => {
  


//find all the nav links
// const navLinks = await page.locator('#primary-menu li[id*=menu]')
const navLinks = await homePage.navLinks

//find second nav link 
const link = await page.locator('#primary-menu li[id*=menu]').nth(1)

//verify nav links
await expect(navLinks).toHaveText(['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'])

//verify second nav link
await expect(link).toHaveText('About')

});
})
