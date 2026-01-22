export class CartItem {
    id;
    quantity;
    unitPriceCents;
    partId;
    cartId;

    constructor(quantity, unitPriceCents, partId, cartId) {
        this.quantity = quantity;
        this.unitPriceCents = unitPriceCents;
        this.partId = partId;
        this.cartId = cartId;
    }
}