import { addToCart, totalPrice, totalQuantity } from './shoppingCard.js'

// console.log('Importing Module');
// addToCart('Banana', 5)
// console.log(totalPrice, totalQuantity);

/*
const response = await fetch('https://jsonplaceholder.org/posts')
const data = await response.json()
console.log(data);

const getLastPost = async () => {
  const response = await fetch('https://jsonplaceholder.org/posts')
  const data = await response.json()

  return { title: data.at(-1).title, text: data.at(-1).content }
}

const lastPost = await getLastPost()
console.log(lastPost);
*/

/*
const shoppingCard2 = (function () {
  const cart = []
  const shippingCost = 10
  const totalPrice = 237
  const totalQuantity = 23

  const  

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return { addToCart, cart, totalPrice, totalQuantity }

})()

shoppingCard2.addToCart('apple', 4)
console.log(shoppingCard2);
console.log(shoppingCard2.shippingCost);
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 }
  ],
  user: { loggedIn: true },
}

const stateClone = Object.assign({}, state)
const stateCloneDeep = cloneDeep(state)
state.user.loggedIn = false
console.log(stateClone);
console.log(stateCloneDeep);
