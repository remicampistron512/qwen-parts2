// Import our custom CSS
import '/scss/styles.scss'
import {Cart} from '/domain/cart';
import {CartItem} from '/domain/cartitem';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import {PartDAO} from "/dao/PartDao";
import {CategoryDAO} from "./dao/CategoryDao";

// Display the cart in the console
let cart = new Cart();
let item = new CartItem(2, 100, 1, 1);
let item2 = new CartItem(2, 100, 1, 1);
let item3 = new CartItem(2, 100, 1, 1);
cart.addItem(item);
cart.addItem(item2);
cart.addItem(item3);

// Get the total price of the cart
let total = cart.totalPriceCents();
console.log(total);

// Display all parts and categories
let daoPart = new PartDAO()
daoPart.findAll().then(parts => console.log(parts))
let daoCategory = new CategoryDAO()
daoCategory.findAll().then(categories => console.log(categories))