// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return 'Hello';
};

const area = (w, h) => {
  // should return the area
  return w && h > 0 ? w * h : null;
};

const perimeter = (w, h) => {
  // should return the perimeter
  return w && h > 0 ? 2 * w + 2 * h : null;
};

const circleArea = (r) => {
  // should return the area of the circle
  //console.log(typeof (Math.PI * r ** 2));
  return r > 0 ? Math.PI * r ** 2 : null;
};

//circleArea(2);
// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = [];

const clearCart = () => {
  shoppingCart.length = 0;
};

const createItem = (name, price, quantity = 1) => {
  return { name, price, quantity };
};

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
};

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item);
};

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  // let shoppingCart = ['banana', 'cat'];
  // console.log(shoppingCart.length);
  return shoppingCart.length;
};

// getNumItemsInCart();

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  // shoppingCart.pop(item);
  const index = shoppingCart.findIndex((cartItem) => cartItem === item);
  if (index > -1) {
    shoppingCart.splice(index, 1);
  }
};

const getTotalCost = () => {
  // return total cost of all items in the cart
  return shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  getTotalCost,
};
