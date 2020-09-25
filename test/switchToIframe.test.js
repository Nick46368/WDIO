const { assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe('Switch to the iFrame', function(){
    it('Should switch to the IFrame', () => {
        browser.url(`${browser.options.baseUrl}/iframe`)
        internetPage.h3Header.waitForDisplayed()
        internetPage.iFrame.waitForDisplayed()
        browser.switchToFrame(internetPage.iFrame)
        internetPage.sendTextToBody('This is the text in the Iframe Body azazaz')
        assert.equal('This is the text in the Iframe Body azazaz', internetPage.iFrameBody.getText())
    })
})