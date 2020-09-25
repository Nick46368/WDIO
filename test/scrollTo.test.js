const { assert } = require("chai");
const internetPage = require("../pages/internet.page.js");

describe('Scroll to the element', function() {
    it('Should scroll to the footer "IntoView command"', () => {
        browser.maximizeWindow()
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed()
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })
})