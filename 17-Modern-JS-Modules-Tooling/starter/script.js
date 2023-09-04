import { addToCart, totalPrice, totalQuantity } from './shoppingCard.js'

console.log('Importing Module');
addToCart('Banana', 5)
console.log(totalPrice, totalQuantity);


// const response = await fetch('https://jsonplaceholder.org/posts')
// const data = await response.json()
// console.log(data);

const getLastPost = async () => {
  const response = await fetch('https://jsonplaceholder.org/posts')
  const data = await response.json()

  return { title: data.at(-1).title, text: data.at(-1).content }
}

const lastPost = await getLastPost()
console.log(lastPost);
