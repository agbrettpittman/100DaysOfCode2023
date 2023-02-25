import Puppeteer from "puppeteer";

describe("App.js", () => {

    let browser;
    let page;

    beforeAll(async () => {
        try{
            browser = await Puppeteer.launch();
            page = await browser.newPage();
        } catch(error) {
            console.log(error)
        }
    });

    it("navigates to the about page", async () => {
        await page.goto("http://localhost:5000");
        await page.waitForSelector(".App-welcome-text");
        await page.click("#about-page-link");
        await page.waitForSelector(".App-welcome-text");
        const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
        expect(text).toContain("This is the about page.");
    });
    
    afterAll(async () => browser.close());
});