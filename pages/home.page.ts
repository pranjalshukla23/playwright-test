import {Page, Locator} from '@playwright/test'

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    navLinks: Locator;

    constructor(page:Page) {

        this.page = page;
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.getByText('Think different. Make different.')
        this.homeLink = page.locator('#primary-menu:has-text("Home")')
        this.navLinks = page.locator('#primary-menu li[id*=menu]')

    }

    async navigate() {
        await this.page.goto("/");
    }

}

export default HomePage;