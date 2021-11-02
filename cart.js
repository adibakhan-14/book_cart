//first book
const bookOne = document.querySelector('#cart-item1');
const alertOne = document.querySelector('#alert-message1');
const closeOne = document.querySelector('#close1');
const undoOne = document.querySelector('#aalert-link1');
const qntBookOne = document.querySelector('#quantity-box-1');
const decrementBookOne = document.querySelector('#decrement1');
const rmvBookOne = document.querySelector('#rvm-btn2');
const priceBookOne = document.querySelector('#price2'); //secone book
const bookTwo = document.querySelector('#cart-item2');
const alertTwo = document.querySelector('#alert-message2');
const closeTwo = document.querySelector('#close2');
const undoTwo = document.querySelector('#aalert-link2');
const qntBookTwo = document.querySelector('#quantity-box-2');
const decrementBookTwo = document.querySelector('#decrement2');
const rmvBookTwo = document.querySelector('#rvm-btn2');
const priceBookTwo = document.querySelector('#price2');

//rest of the elements
const cartTotal = document.querySelector('#cart-total');
const subTotal = document.querySelector('#subTotal');
const total = document.querySelector('#total');
const payable = document.querySelector('#payable');

//functionality for book one
rmvBookOne.addEventListener('click', function() {
    bookOne.style.display = 'none';
    alertOne.style.display = 'block';
    alertTwo.style.display = 'none';

});
undoOne.addEventListener('click', function() {
    bookOne.style.display = 'block';
    alertOne.style.display = 'none'
});
closeOne.addEventListener('click', function() {
    alertOne.style.display = 'none';
})