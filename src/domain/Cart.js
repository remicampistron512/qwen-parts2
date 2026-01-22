export class Cart {
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
    totalPriceCents() {
        return this.cartItems.reduce((acc, item) => acc + item.unitPriceCents * item.quantity, 0);
    }
}