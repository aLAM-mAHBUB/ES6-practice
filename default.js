function addNum(num1, num2) {
    return num1 + num2;
}

const result = addNum(15, 20);
console.log(result);

// first way
function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 10;
    }
    return num1 + num2;
}

const resultTwo = add(15);
console.log(resultTwo);

// second way
function addingNum(num1, num2) {
    num2 = num2 || 15;
    return num2 + num1;
}

const resultThree = addingNum(15);
console.log(resultThree);

// ES6 way
function addingNumber(num1, num2 = 20) {
    return num1 + num2;
}
const resultFour = addingNumber(25);
console.log(resultFour);
