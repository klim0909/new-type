import Cart from './Cart';
const cart = new Cart;

cart.add({
    year: 2012,
    country: "США",
    slogan: "LET'S GO",
    genre: "Ужасы, боевик,",
    time: "103 мин / 02:17",
});

console.log(cart.items);