//first book
const bookOne = document.querySelector('#cart-item1');
const alertOne = document.querySelector('#alert-message1');
const closeOne = document.querySelector('#close1');
const undoOne = document.querySelector('#alert-link1');
const qntBookOne = document.querySelector('#quantity-box-1');
const incrementBookOne = document.querySelector('#increment1');
const decrementBookOne = document.querySelector('#decrement1');
const rmvBookOne = document.querySelector('#rvm-btn1');
const priceBookOne = document.querySelector('#price1');
const cartTotal = document.querySelector('#cart-total');

//secone book

const bookTwo = document.querySelector('#cart-item2');
const alertTwo = document.querySelector('#alert-message2');
const closeTwo = document.querySelector('#close2');
const undoTwo = document.querySelector('#alert-link2');
const qntBookTwo = document.querySelector('#quantity-box-2');
const incrementBookTwo = document.querySelector('#increment2');
const decrementBookTwo = document.querySelector('#decrement2');
const rmvBookTwo = document.querySelector('#rvm-btn2');
const priceBookTwo = document.querySelector('#price2');


//functionality for book one
rmvBookOne.addEventListener('click', function() {
    bookOne.remove();
    // bookOne.style.display = 'none';
    // alertOne.style.display = 'block';
    // alertTwo.style.display = 'none';

});
undoOne.addEventListener('click', function() {
    bookOne.style.display = 'block';
    alertOne.style.display = 'none'
});
closeOne.addEventListener('click', function() {
    alertOne.style.display = 'none';
});
incrementBookOne.addEventListener('click', function() {
    let itemPrice = 204;
    qntBookOne.value = Number(qntBookOne.value) + 1;

    priceBookOne.innerText = itemPrice * Number(qntBookOne.value);
    cartTotal.innerText = Number(priceBookTwo.innerText) + Number(priceBookOne.innerText);
    subTotal.innerText = Number(cartTotal.innerText) + "TK.";
    total.innerText = (Number(cartTotal.innerText) + 50) + "TK.";
    payable.innerText = (Number(cartTotal.innerText) + 50) + "TK.";
})

decrementBookOne.addEventListener('click', function() {
    if (Number(qntBookOne.value) > 1) {
        let itemPrice = priceBookOne.innerText;
        qntBookOne.value = Number(qntBookOne.value) - 1;
        console.log(qntBookOne.value), "thisssss";
        priceBookOne.innerText = itemPrice - 204;
        cartTotal.innerText = Number(cartTotal.innerText) - 204;
        subTotal.innerText = Number(cartTotal.innerText) + "TK.";
        total.innerText = (Number(cartTotal.innerText) + 50) + "TK.";
        payable.innerText = (Number(cartTotal.innerText) + 50) + "TK.";
    } else {
        alert('You need to atleast have 1 copy in your cart!');
    }
});

//functionality of book 2
rmvBookTwo.addEventListener('click', function() {
    bookTwo.style.display = 'none';
    alertOne.style.display = 'block';
    alertTwo.style.display = 'none';

});
undoOne.addEventListener('click', function() {
    bookOne.style.display = 'block';
    alertOne.style.display = 'none'
});
closeTwo.addEventListener('click', function() {
    alertTwo.style.display = 'none';
});

incrementBookTwo.addEventListener('click', function() {
    let itemPrice = 128;
    qntBookTwo.value = Number(qntBookTwo.value) + 1;
    priceBookTwo.innerText = itemPrice * Number(qntBookTwo.value);
    cartTotal.innerText = Number(priceBookTwo.innerText) + Number(priceBookOne.innerText);
    subTotal.innerText = Number(cartTotal.innerText) + "TK.";
    total.innerText = (Number(cartTotal.innerText) + 50) + "TK.";
    payable.innerText = (Number(cartTotal.innerText) + 50) + "TK.";

})

decrementBookTwo.addEventListener('click', function() {
    if (Number(qntBookTwo.value) > 1) {
        let itemPrice = priceBookTwo.innerText;
        qntBookTwo.value = Number(qntBookTwo.value) - 1;
        priceBookTwo.innerText = itemPrice - 128;
        cartTotal.innerText = Number(cartTotal.innerText) - 128;
        subTotal.innerText = Number(cartTotal.innerText) + "TK.";
        total.innerText = (Number(cartTotal.innerText) + 50) + "TK.";
        payable.innerText = (Number(cartTotal.innerText) + 50) + "TK.";

    } else {
        alert('You need to atleast have 1 copy in your cart!');
    }
});

//displayFunctionalities

const subTotal = document.querySelector('#subtotal');
const shippingCost = document.querySelector('#shipping');
const total = document.querySelector('#total');
const payable = document.querySelector('#payable');
const shippingBtn = document.querySelector('#shippingButton');

shippingBtn.addEventListener('click', function() {
    const subTotalValue = Number(priceBookOne.innerText) + Number(priceBookTwo.innerText);
    subTotal.innerText = subTotalValue + "TK";
    const laa = subTotalValue + shippingCost;
    console.log(laa, "laaaaaa");


})