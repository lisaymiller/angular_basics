function sayHello(person) {
  return "Hello, " + person;
}
var user = "you";
document.getElementById("para").innerHTML = sayHello(user);

class Employee {
  firstName: string;
  lastName: string;
  age: number;
  phoneNum: number;
  state: string;
  zipCode: number;
  occupation: string;
  hourlyWage: number;
  hours: number;
  educationList: Array<string>;

  constructor(
    firstName: string,
    lastName: string,
    age?: number,
    phoneNum?: number,
    state?: string,
    zipCode?: number,
    occupation?: string,
    hourlyWage?: number,
    hours?: number
  ) {
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

  fullName(): string {
    return "My name is " + this.firstName + " " + this.lastName;
  }

  nameAndNum(): string {
    return (
      "My name is " +
      this.firstName +
      " " +
      this.lastName +
      ", and my number is " +
      this.phoneNum
    );
  }

  nameAndAddress(): string {
    return (
      "My name is " +
      this.firstName +
      " " +
      this.lastName +
      ", and I live in the " +
      this.zipCode +
      " area of " +
      this.state
    );
  }

  nameAndEd(): string {
    return (
      "My name is " +
      this.firstName +
      " " +
      this.lastName +
      ", and have achieve the following education: " +
      this.educationList
    );
  }

  wageCalc(): string {
    if (this.hours) {
      this.hours = this.hours;
    } else {
      this.hours = 40;
    }
    let weeklyWage = this.hourlyWage * this.hours;

    return (
      "My name is " + this.firstName + ", and I make $" + weeklyWage + " weekly"
    );
  }

  //   addCerts(cert: string) {
  //     for (let cert of this.educationList) {
  //       this.educationList.push(cert);
  //     }
  //   }
}

interface EmployeeOptions {
  firstName: string;
  lastName: string;
  age?: number;
  sayHi: () => string;
}

let emp: EmployeeOptions = {
  firstName: "Hal",
  lastName: "Dee",
  age: 40,
  sayHi: (): string => {
    return "Hello " + this.firstName;
  },
};

document.getElementById("personEmp").innerHTML = emp.sayHi();

let joy = new Employee("Joy", "Full");

let leroy = new Employee("Leroy", "Pendejo", null, 1234567890);

let tom = new Employee("Thomas", "Cat", null, null, "NC", 28216);

let stacks = new Employee("Tall", "Stacks", null, null, null, null, null, 500);

let smarty = new Employee("Sally", "Smart");

// smarty.addCerts("MBA");
// smarty.addCerts("BS");
// console.log(smarty.addCerts);

document.getElementById("personName").innerHTML = joy.fullName();
document.getElementById("personNameNum").innerHTML = leroy.nameAndNum();
document.getElementById("personNameAddress").innerHTML = tom.nameAndAddress();
document.getElementById("personWage").innerHTML = stacks.wageCalc();
// document.getElementById("personEd").innerHTML = smarty.nameAndEd;
