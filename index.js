var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function price() {
    return parseInt(Math.random() * 100)
}

// the question is, how do I create an object?
function addToCart(item) {
  var obj = {itemName: item, itemPrice: price()}
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let newCart = []
  let x = cart.length - 1
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
      for (let i = 0; i < x; i++) {
          newCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
        } newCart.push(` and ${cart[x].itemName} at $${cart[x].itemPrice}`);
  } return `In your cart, you have${newCart.join()}.`
}

function total() {
    function add(a, b) {
        return a + b;
    }
	let wallet = [];
    for (let i = 0; i < cart.length; i++) {
        wallet.push(cart[i].itemPrice);
    } return wallet.reduce(add);
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  } return "That item is not in your cart."
}

function placeOrder(number) {
 let x = []
 if (number > 0) {
   x.push(total());
   cart.splice(0, cart.length)
   return `Your total cost is $${x}, which will be charged to the card ${number}.`
 }
 return "Sorry, we don't have a credit card on file for you."
}

