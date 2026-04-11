// Parent Class

// 1) Template
// 2) Memory
// class Student {
//   constructor(name = "New Student", mark = 0) {
//     this.name = name;
//     this.mark = mark;
//   }
//   // Method
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
//   run() {
//     console.log(`${this.name} is running.`);
//   }
//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
//   setMark(newMark) {
//     this.mark = newMark;
//   }
//   getMark() {
//     return this.mark;
//   }
//   getName() {
//     return this.name;
//   }
// }

// // new Student('Mega');
// // // Child Class inheriting from Animal
// class Person extends Student {
//   constructor(name, hod) {
//     // super() calls the parent constructor
//     super(name); // Student
//     this.hod = hod;
//   }

//   // Method overriding
//   //   speak() {
//   //     console.log(`${this.name} barks!`);
//   //   }

//   getHOD() {
//     return this.hod;
//   }
// }

// const person1 = new Person("Shalin", "Hod 1"); //copy 1
// person1.setMark(95);
// console.log(
//   `\n ${person1.getName()} mark is : ${person1.getMark()} , HOD: ${person1.getHOD()}`,
// );

// const person2 = new Person("Vidhya", "Hod 1"); //copy 2
// person2.setMark(90);
// console.log(
//   `\n ${person2.getName()} mark is : ${person2.getMark()},  HOD: ${person2.getHOD()}`,
// );

// const myDog = new Dog("Rex", "German Shepherd");
// myDog.speak(); // Output: Rex barks!

// function userName(name = "New User") {
//   console.log("Your user name is", name);
// }

// userName(); // Default
// userName("Vidhya"); // New value
// userName("Mans"); // New value
// userName("Shalin"); // New value

// class Bird {
//   constructor() {}
//   run() {
//     console.log("Flying");
//   }
// }

// class Animal {
//   constructor() {}
//   run() {
//     console.log("Running");
//   }
// }

// class Parrot extends Bird {
//   constructor() {
//     super();
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super();
//   }
// }

// const p = new Parrot();
// const d = new Dog();

// p.run();
// d.run();

class Login {
  constructor(name, age = 21) {
    this.name = name;
    this.age = age;
  }
  setup() {
    console.log("Running setup;");
  }
  login() {
    console.log("\n Username and Password", this.name, this.age);
  }
  updateRecord() {
    console.log("Updating the record");
  }
}

class MultiLogin extends Login {
  constructor(name, age) {
    super(name, age); // creating super class
    super.setup();
  }
  updateRecord() {
    console.log("Disabled for this user");
  }
  login() {
    console.log("\n Feature not enabled!", this.name, this.age);
  }
  loginWithGmail() {
    console.log("\n Login using Gmail", this.name);
  }
  loginWithFB() {
    console.log("\n Login using FB");
  }
}

const mega = new MultiLogin("Mega");
mega.login();
// mega.loginWithGmail();
// mega.loginWithFB();

const shalin = new Login("Shalin", 20);
shalin.login();

class ShalinFeature extends MultiLogin {
  constructor(name, age) {
    super(name, age);
  }

  login() {
    console.log("\n Welcome");
  }
}

const s = new ShalinFeature("Shalin");
s.login();
s.loginWithGmail();

// Animal
// {name:'',food:''}
// run() livig with humans

// class Dog extends Animal // inheritance
// Dog // reuse run method
// Cat // reuse run method

// method overridng
// Lion
// isWildAnimal()
// run() living in the forest
