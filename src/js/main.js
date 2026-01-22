// Import our custom CSS
import '../scss/styles.scss'
import {Cart} from '../domain/cart';
import {CartItem} from '../domain/cartitem';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'


let cart = new Cart();
let item = new CartItem(2, 100, 1, 1);
let item2 = new CartItem(2, 100, 1, 1);
let item3 = new CartItem(2, 100, 1, 1);
cart.addItem(item);
cart.addItem(item2);
cart.addItem(item3);
let total = cart.totalPriceCents();
console.log(total);