 class Cart {

    elements = {
        productName: () => cy.get(".success")
    }


    getProductName(product) {
        this.elements.productName().should("contain", product)
    }
}

module.exports = new Cart();