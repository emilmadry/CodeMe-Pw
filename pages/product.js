class Product {
    constructor(page) {
       this.page = page;
       this.pageUrl = '/product/';
       this.productName = page.locator('.card-content .title');
    }

    async navigateToProductByProductId(productId) {
        await this.page.goto(`${this.pageUrl}${productId}`)
    }

 
}

module.exports = { Product };