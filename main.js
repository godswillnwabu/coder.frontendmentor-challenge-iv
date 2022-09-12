//Declaring constant//
const form = document.querySelector(".form");

const letters = /^[a-zA-Z]+$/;
const cardName = document.getElementById("name");
const cardNumber = document.getElementById("number");
const MM = document.getElementById("month");
const YY = document.getElementById("year");
const cvc = document.getElementById("cvc");

const cardNameError = document.querySelector(".nameError");
const cardNumberError = document.querySelector(".numberError");
const carddateError = document.querySelector(".dateError");
const cardcvcError = document.querySelector(".cvcError");

function myFunction() {
    // submitting all inputs []//
    queryInput();
    confirmed();
}

function queryInput() {
    if (!cardName.value) {
        cardNameError.style.display = "block";
        queryInput();
    }
    if (cardNumber.value.match(letters)) {
        cardNumberError.style.display = "block";
        queryInput();
    } 
    if (!MM.value || !YY.value) {
        carddateError.style.display = "block";
        queryInput();
    } 
    if (!cvc.value) {
        cardcvcError.style.display = "block";
        queryInput();
    }
    return;
}   

function confirmed() {
    document.getElementById("container").style.display = "none";
    document.getElementById("confirmed").style.display = "block";
}
