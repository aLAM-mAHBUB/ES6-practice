class Student {
    constructor(sId, sName, sAddress) {
        this.id = sId;
        this.name = sName;
        this.address = sAddress;
        this.school = "Rais Nagar High School";
    }
}

const student1 = new Student(1, "Mahabub Alam", "45 South Jonotabag");
const student2 = new Student(
    2,
    "Kamruzzaman Talukdar",
    "60 Mohammadbag Chourasta",
);
const student3 = new Student(3, "Omar Ali", "110 Meraj Nagar Road");
console.log(student1, student2, student3);
console.log(student1.name, student1.address);
