// more than one parameter with default value
const add = (x, y = 20) => x + y;
const result = add(10);
console.log(result);

// more than one parameter
const addNum = (x, y = 20) => x + y;
const resultTwo = add(10, 30);
console.log(resultTwo);

// single parameter
const multiply = (num) => num * 2;
const resultThree = multiply(50);
console.log(resultThree);

// No parameter
const giveFive = () => 5;
const resultFour = giveFive();
console.log(resultFour);

// multiple line function
const doMaths = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiply = sum * diff;
    return multiply;
};
const resultFive = doMaths(7, 5);
console.log(resultFive);
