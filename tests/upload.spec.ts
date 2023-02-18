import {test, expect} from '@playwright/test'
import CartPage from '../pages/cart.page'
const path = require('path')

test.describe('Upload File', () => {

    let cartPage: CartPage

    const fileNames = ['coding.jpg', 'coding-1.jpg']

for(const name of fileNames) {
    test(`should upload a ${name} file`, async({page}) => {

        cartPage = new CartPage(page)

        //open url
        await page.goto('https://practice.automationbro.com/cart/')

        //store test file path
        const filePath = path.join(__dirname, `../data/${name}`)

        cartPage.uploadComponent().uploadFile(filePath)

        //assertion
        await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully',{ timeout: 40000 })
    })
}

    
    test('should upload a test file on a hidden input field', async({page}) => {


        //open url
        await page.goto('https://practice.automationbro.com/cart/')

        //store test file path
        const filePath = path.join(__dirname, '../data/coding.jpg')

        //dom maninupation 
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1')

            if(selector) {
                selector.className = ''
            }
            
        })

        //upload test file
        await page.setInputFiles('input#upfile_1', filePath)

        //click on submit button
        await page.locator('#upload_1').click()

        //assertion
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully', {
            timeout: 10000
        })
    })
})