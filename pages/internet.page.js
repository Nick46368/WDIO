class Internet {
    get pageHeader() { return $('h1.heading')}
    get subHeading() { return $('h2')}
    get h3Header() { return $('h3')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get childElements() { return this.parent.$$('li')}
    specificChildElement(index) {
        return this.parent.$(`li:nth-child(${index})`)};
    
    get firstLink() { return $('ul li:nth-child(1) a')}
    link(index) { return $(`ul li:nth-child(${index}) a`)}

    checkboxes(index) {return $(`#checkboxes input:nth-child(${index})`)}

    get username() { return $('#username')}
    get password() { return $('#password')}

    figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
    figureDetails(index) {return $(`.example .figure:nth-child(${index}) .figcaption h5`) }

    get target() { return $('.example #target')}
    get result() { return $('.example #result')}

    get hereLink() { return $('.example a')}

    get iFrameBody() {return $('#tinymce')}
    get iFrame() { return $('#mceu_27 #mce_0_ifr')}

    get columnA() { return $('#column-a')}
    get columnB() { return $('#column-b')}

    get columnAHeader() { return $('#column-a header')}
    get columnBHeader() { return $('#column-b header')}

    get draggable() { return $('#draggable')}
    get droppable() { return $('#droppable')}
    get droppableParagraph() { return $('#droppable p')} 

    get dropdownMenu() { return $('#dropdown')}
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)')}
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)')}

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`)}

    /**
     * Click the specified JS alert button
     * @param {Number} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }

    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }

    /**
     * Drag and Drop
     */
    dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)
    }

    /**
     * Drag box A to the box B
     */
    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }

    /**
     * Enter text in the iframe
     * @param {String} text text that need to be entered
     */
    sendTextToBody(text){
        this.iFrameBody.waitForDisplayed()
        this.iFrameBody.clearValue()
        this.iFrameBody.click()
        this.iFrameBody.keys(text)
    }

    /**
     * Click the "click here" link
     */
    clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }

    /**
     * scrolls to the page footer
     */
    scrollToPageFooter() {
        this.pageFooter.scrollIntoView()
    }

    /**
     * Clicks the target input field
     */
    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }

    /**
     * Send keybord keys to Target
     * @param {String} text The keybord text to enter
     */
    sendKeysToTarget(text) {
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    /**
     * return the text of the returned element
     */
    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }

    /**
     * Hover over the specified image
     * @param {String} index the specific image of the i,age
     */
    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1, 1)
    }

    /**
     * Return the text of the figured details
     * @param {Number} index the index ogf the element
     */
    getFigureDetailsText(index) {
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
    enterUserName(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

        /**
     * Enter the password into the field
     * @param {String} text password to be entered
     */
    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    /**
     * Clicks on the link based on the provided index
     * @param {Number} index the index of the element
     */
    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()

    }
    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()
    }

    clickOnLink() {
        if (this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed()
    }

}
module.exports = new Internet()