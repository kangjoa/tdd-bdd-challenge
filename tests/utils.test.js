const mocha = require('mocha');
const chai = require('chai');
const utils = require('../utils');
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it('should say hello', function () {
  const hello = utils.sayHello();
  expect(hello).to.be.a('string');
  expect(hello).to.equal('Hello');
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it('should return the area', function () {
  const areaVal = utils.area(5, 5);
  expect(areaVal).to.be.a('number');
  expect(areaVal).to.equal(25);
});

it('should return the perimeter', function () {
  const perimeterVal = utils.perimeter(5, 5);
  expect(perimeterVal).to.be.a('number');
  expect(perimeterVal).to.equal(20);
});

it('should return the circle area', function () {
  const circleAreaVal = utils.circleArea(2);
  expect(circleAreaVal).to.be.a('number');
  expect(circleAreaVal).to.equal(12.566370614359172);
});

it('should return null if width is negative', function () {
  const areaVal = utils.area(5, -1);
  expect(areaVal).to.equal(null);
});

it('should return null if height is negative', function () {
  const perimeterVal = utils.perimeter(5, -2);
  expect(perimeterVal).to.equal(null);
});

it('should return null if radius is negative', function () {
  const circleAreaVal = utils.circleArea(-3);
  expect(circleAreaVal).to.equal(null);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart();
  done();
});

it('Should create a new (object) Item with name and price', function () {
  const item = utils.createItem('apple', 0.99);
  expect(item).to.be.a('object');
  expect(item).to.have.property('name', 'apple');
  expect(item).to.have.property('price', 0.99);
  expect(item).to.have.property('quantity', 1);
});

it('Should return an array containing all items in cart', function () {
  // Create items
  const item1 = utils.createItem('apple', 0.99);
  const item2 = utils.createItem('banana', 10);
  // Add items to cart
  utils.addItemToCart(item1);
  utils.addItemToCart(item2);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart).to.be.a('array');
  expect(shoppingCart).to.have.lengthOf(2);
  // Check for presence of items
  expect(shoppingCart).to.include(item1);
  expect(shoppingCart).to.include(item2);
  // Check the content of the items
  expect(shoppingCart).to.deep.include.members([item1, item2]);
});

it('Should add a new item to the shopping cart', function () {
  const item1 = utils.createItem('chips', 3);
  utils.addItemToCart(item1);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart).to.have.lengthOf(1);
  expect(shoppingCart).to.include(item1);
  expect(shoppingCart).to.deep.include.members([item1]);
});

it('Should return the number of items in the cart', function () {
  const item1 = utils.createItem('chips', 3);
  const item2 = utils.createItem('salsa', 5);
  const item3 = utils.createItem('avocado', 2);
  utils.addItemToCart(item1);
  utils.addItemToCart(item2);
  utils.addItemToCart(item3);
  const itemCount = utils.getNumItemsInCart();
  expect(itemCount).to.equal(3);
});

it('Should remove items from cart', function () {
  const item1 = utils.createItem('chips', 3);
  const item2 = utils.createItem('salsa', 5);
  const item3 = utils.createItem('avocado', 2);
  utils.addItemToCart(item1);
  utils.addItemToCart(item2);
  utils.addItemToCart(item3);
  utils.removeItemFromCart(item2);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart).to.have.lengthOf(2);
  expect(shoppingCart).to.not.include(item2);
  expect(shoppingCart).to.not.deep.include.members([item2]);
  expect(shoppingCart).to.deep.include.members([item1, item3]);
});
// ========================================================
// Stretch Challenges
// ========================================================

it('Should update the count of items in the cart', function () {
  const item1 = utils.createItem('chips', 3);
  const item2 = utils.createItem('salsa', 5);
  const item3 = utils.createItem('avocado', 2);
  utils.addItemToCart(item1);
  utils.addItemToCart(item2);
  utils.addItemToCart(item3);
  utils.removeItemFromCart(item2);
  const itemCount = utils.getNumItemsInCart();
  expect(itemCount).to.equal(2);
});

it('Should validate that an empty cart has 0 items', function () {
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart).to.be.a('array');
  expect(shoppingCart).to.have.lengthOf(0);
});

it('Should return the total cost of all items in the cart', function () {
  const item1 = utils.createItem('chips', 3, 2);
  const item2 = utils.createItem('salsa', 5, 2);
  const item3 = utils.createItem('avocado', 2, 2);
  utils.addItemToCart(item1);
  utils.addItemToCart(item2);
  utils.addItemToCart(item3);
  const totalCost = utils.getTotalCost();
  expect(totalCost).to.be.a('number');
  expect(totalCost).to.equal(20);
});
