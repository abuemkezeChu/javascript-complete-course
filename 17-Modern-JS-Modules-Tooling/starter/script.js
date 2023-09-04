import { addToCart, totalPrice, totalQuantity } from './shoppingCard.js'

console.log('Importing Module');
addToCart('Banana', 5)
console.log(totalPrice, totalQuantity);


// const response = await fetch('https://jsonplaceholder.org/posts')
// const data = await response.json()
// console.log(data);

// const getLastPost = async () => {
//   const response = await fetch('https://jsonplaceholder.org/posts')
//   const data = await response.json()

//   return { title: data.at(-1).title, text: data.at(-1).content }
// }

// const lastPost = await getLastPost()
// console.log(lastPost);

const shoppingCard2 = (function () {
  const cart = []
  const shippingCost = 10
  const totalPrice = 237
  const totalQuantity = 23

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`);
  }

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return { addToCart, cart, totalPrice, totalQuantity }

})()

shoppingCard2.addToCart('apple', 4)
console.log(shoppingCard2);
console.log(shoppingCard2.shippingCost);

