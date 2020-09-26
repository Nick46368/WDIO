const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('JS alerts', function() {
    it('Should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert', browser.getAlertText())
    })
    it('Should accept alert', () => {
        browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', internetPage.getResultText())
    })
    it('Should dismiss alert', () => {
        internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPage.getResultText())
    })
    it('Should send text into the alert', () => {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('Baalus')
        browser.acceptAlert()
        assert.equal('You entered: Baalus', internetPage.getResultText())
    })
})