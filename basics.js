var _this = this;
function sayHello(person) {
    return "Hello, " + person;
}
var user = "you";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNum, state, zipCode, occupation, hourlyWage, hours) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.hours = hours;
    }
    Employee.prototype.fullName = function () {
        return "My name is " + this.firstName + " " + this.lastName;
    };
    Employee.prototype.nameAndNum = function () {
        return ("My name is " +
            this.firstName +
            " " +
            this.lastName +
            ", and my number is " +
            this.phoneNum);
    };
    Employee.prototype.nameAndAddress = function () {
        return ("My name is " +
            this.firstName +
            " " +
            this.lastName +
            ", and I live in the " +
            this.zipCode +
            " area of " +
            this.state);
    };
    Employee.prototype.nameAndEd = function () {
        return ("My name is " +
            this.firstName +
            " " +
            this.lastName +
            ", and have achieve the following education: " +
            this.educationList);
    };
    Employee.prototype.wageCalc = function () {
        if (this.hours) {
            this.hours = this.hours;
        }
        else {
            this.hours = 40;
        }
        var weeklyWage = this.hourlyWage * this.hours;
        return ("My name is " + this.firstName + ", and I make $" + weeklyWage + " weekly");
    };
    return Employee;
}());
var emp = {
    firstName: "Hal",
    lastName: "Dee",
    age: 40,
    sayHi: function () {
        return "Hello " + _this.firstName;
    }
};
document.getElementById("personEmp").innerHTML = emp.sayHi();
var joy = new Employee("Joy", "Full");
var leroy = new Employee("Leroy", "Pendejo", null, 1234567890);
var tom = new Employee("Thomas", "Cat", null, null, "NC", 28216);
var stacks = new Employee("Tall", "Stacks", null, null, null, null, null, 500);
var smarty = new Employee("Sally", "Smart");
// smarty.addCerts("MBA");
// smarty.addCerts("BS");
// console.log(smarty.addCerts);
document.getElementById("personName").innerHTML = joy.fullName();
document.getElementById("personNameNum").innerHTML = leroy.nameAndNum();
document.getElementById("personNameAddress").innerHTML = tom.nameAndAddress();
document.getElementById("personWage").innerHTML = stacks.wageCalc();
// document.getElementById("personEd").innerHTML = smarty.nameAndEd;
