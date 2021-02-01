// Destructuring in Object
const person = {
    name: "Tom Cruise",
    age: 56,
    address: "New York",
    phone: 145798648,
    girlFriend: "Emma Watson",
    friends: [
        "Tom Hanks",
        "Tom Holand",
        "Connie Carter",
        "Leah Gotti",
        "Jennifer Lopez",
    ],
    job: "actor",
};

const { phone, age, address } = person;

console.log(person.girlFriend, phone, age, address);

// Nested Object

const complexObject = {
    name: "Mahbub Alam",
    info: {
        year: 27,
        Paddress: "Rayerbag",
        mobile: 4613466,
    },
};

const { year, mobile, Paddress } = complexObject.info;
console.log(Paddress, year, mobile);

// Destructuring in Array
const friendLists = [
    "Shakib Khan",
    "Salman Khan",
    "Aamir Khan",
    "Ranbir Kapoor",
    "Preity Zinta",
];

const [first, second, ...remainingFriends] = friendLists;
console.log(first, second, remainingFriends);
