class MainPage {
    constructor(page) {
        this.page = page;
        this.pageUrl = '/';
        this.linkKursy = page.locator('#main-nav').getByRole('link', { name: 'Kursy' });
        this.linkEventy = page.locator('#menu-item-916').getByRole('link', { name: 'Eventy' });
        this.linkDlaKursanta = page.getByRole('link', { name: 'Dla kursanta' });
        this.orderButton = page.locator('#order');
        this.metodyFinansowania = page.locator('#main-nav').getByRole('link', { name: 'Metody finansowania kursów' })
    }

    async fillCreditCardData(number, cvc, date) {
        await this.fillCreditCardNumber(number)
        await this.fillCreditCardCVC(cvc)
        await this.fillCreditCardDate(date);

    }

    async clickOrderButton() {
        await this.orderButton.click();
    }


    async fillCreditCardNumber(cNumber) {
        await this.creditCardField.click();
        await this.creditCardField.fill(cNumber);
    }

    async fillCreditCardCVC(cCCVC) {
        await this.creditCardCvcField.click();
        await this.creditCardCvcField.fill(cCCVC);
    }

    async fillCreditCardDate(cDate) {
        await this.creditCardDateField.click();
        await this.creditCardDateField.fill(cDate);
    }

}

module.exports = { MainPage };