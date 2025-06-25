class Home {
  constructor(page) {
    this.page = page;
    this.pageUrl = '/home/';
    this.lokatorPlecaka = page.locator('.card').getByText('Fjallraven - Foldsack No. 1');
  }

  async kliknijPlecak() {
    await this.lokatorPlecaka.click();
  }
}

module.exports = { Home };
