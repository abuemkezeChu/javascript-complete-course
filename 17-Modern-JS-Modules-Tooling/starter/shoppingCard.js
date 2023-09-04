// Exporting module
console.log('Exporting Module');

const shippingCost = 10
const cart = []

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity })
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237
const totalQuantity = 10

export { totalPrice, totalQuantity }
