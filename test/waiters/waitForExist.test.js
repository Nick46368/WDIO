const { assert } = require("chai");
const internetPage = require("../../pages/internet.page");

describe('Wait For Exist', function() {
    it('Should wait until the delete button will appear', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert.equal(true, internetPage.deleteButton(1).isExisting())
    })
    it('Should wait until the delete button disappear', () => {
        internetPage.clickDeleteButton(1)
        internetPage.deleteButton(1).waitForExist({timeout: 500, reverse: true})
        assert.equal(false, internetPage.deleteButton(1).isExisting())
    })
})