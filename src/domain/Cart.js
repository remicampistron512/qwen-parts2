class Cart {
    id;
    createdAt;
    updatedAt;
    cartItems = [];
    constructor() {
        this.id = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    addItem(cartItem) {
        this.cartItems.push(cartItem);
    }
}