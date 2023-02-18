import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe('Blog Page', () => {

    let blogPage: BlogPage;

    test('Verify Recent Posts count and verify the length of each list item', async ({ page }) => {

        blogPage = new BlogPage(page)

        //go to blog page 
        await blogPage.navigate()

        //get the recent post lists elements
        const recentPostsList =  blogPage.recentPostList


        //assert the total length
        expect(await recentPostsList.count()).toEqual(5)

        
    })
    
})
