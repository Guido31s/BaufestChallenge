 class ProductPage {
    elements = {

        productName: () =>  cy.get(".name"),
        addToCartButton: () => cy.get(".col-sm-12 > .btn")
    }

    getProductName(product) {
        this.elements.productName().should("have.text", product)
    }
    getAddToCartButton() {
        this.elements.addToCartButton().click()
    }
}


module.exports = new ProductPage()