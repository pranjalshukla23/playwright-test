import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch()
   const page = await browser.newPage()
        
        //go to url 
        await page.goto('https://practice.automationbro.com/my-account')

        //save not signed in state to 'notLoggedInState.json'
        await page.context().storageState({
            path: 'notLoggedInState.json'
        })

        //fill username 
        await page.locator('#username').fill('practiceuser1')

        //fill password 
        await page.locator('#password').fill('PracticePass1')

        //click on log in 
        await page.locator('[value="Log in"]').click()

        //save signed in state to 'loggedInState.json'
        await page.context().storageState({
            path: 'loggedInState.json'
        })

        await browser.close()
}

export default globalSetup