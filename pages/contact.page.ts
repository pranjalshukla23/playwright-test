import { Locator, Page } from "@playwright/test";



class ContactPage {
    private page: Page
    nameInput: Locator
    emailInput: Locator
    phoneInput: Locator
    messageInput: Locator
    successText: Locator
    submitBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.nameInput = this.page.getByLabel('Name')
        this.emailInput =  page.getByLabel('Email')
        this.phoneInput =  page.getByLabel('Phone *')
        this.messageInput =  page.getByLabel('Message')
        this.submitBtn =   page.locator('button[type=submit]')
        this.successText = page.getByRole('alert')
    }

    async navigate() {
        await this.page.goto('/contact')

    }

    async submitForm(name: string, email: string, phone: string, message: string) {
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.phoneInput.fill(phone)
        await this.messageInput.fill(message)

        await this.page.waitForTimeout(5000)
        await this.submitBtn.click()
    }

}

export default ContactPage