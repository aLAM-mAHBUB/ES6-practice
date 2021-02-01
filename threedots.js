const ages = [15, 22, 24, 17];
const ages2 = [45, 50, 78, 65, 35];
const ages3 = [5, 7, 9, 4];
const allAges = ages.concat(ages2).concat([80]).concat(ages3);
const allAges2 = [ages, ages2, ages3];
const allAges3 = [...ages, ...ages2, 100, ...ages3];
console.log(allAges);
console.log(allAges2);
console.log(allAges3);

const business = 650;
const minister = 850;
const sochib = 350;
const largestAmount = [550, 650, 750];

const result = Math.max(business, minister, sochib);
console.log(result);

const result2 = Math.max(...largestAmount);
console.log(result2);
