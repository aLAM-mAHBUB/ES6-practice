class Parent {
    constructor() {
        this.surName = "Sarker";
    }
}

class Child extends Parent {
    constructor(fname, age) {
        super();
        this.firstName = fname;
        this.childAge = age;
    }
    getFullName() {
        return this.firstName + " " + this.surName;
    }
}

const child1 = new Child("Mahabub", 26);
const child2 = new Child("Masud", 30);
const child3 = new Child("Masuma", 35);

console.log(child1, child2, child3);
console.log(child1.getFullName(), child2.getFullName(), child3.getFullName());
