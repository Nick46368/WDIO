const { assert } = require("chai");
const internetPage = require("../../pages/internet.page");

describe('Should wait for enabled input field', function() {
    it('Should wait for the input field is enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled(4000)
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
    })
    it('Should wait until the input field is disabled', () => {
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({timeout: 4000, reverse: true})
        assert.equal(false, internetPage.inputEnabledField.isEnabled())
    })
})