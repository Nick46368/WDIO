const { expect, assert } = require("chai")
const loginData = require("../data/loginData.js")
const internetPage = require("../pages/internet.page.js")

describe(' Test element  actions', function () {
    it('Should click on the element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })
    it('Should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('Should click on the checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })
    it('Should uncheck checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })
    it('Should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUserName(loginData.userName)
        assert.equal(loginData.userName, internetPage.username.getValue())
    })
    it('Should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword(loginData.password)
        assert.equal(loginData.password, internetPage.password.getValue())
    })

    it('Should clear Value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })

})