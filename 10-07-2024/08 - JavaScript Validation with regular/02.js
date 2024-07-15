// Write a JavaScript program to check a credit card number

function isValidCreditCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
}

console.log(isValidCreditCardNumber("1234567890123456"));
console.log(isValidCreditCardNumber("1234-5678-9012-3456"));