//! Interfaces

//? --> We can implement interfaces as class

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Manager implements Person {
     name: string;
     age: number;

     constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
     }
  
     greet(phrase: string): void {
         console.log("Hii there, sir", phrase);
     }

}



class Employee implements Person {
     name: string;
     age: number;

     constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
     }
  
     greet(phrase: string): void {
         console.log("Hat ***", phrase);
     }

}









// interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     age: number;
// }


// function isLegel(user: User): boolean {
//     if (user.age > 18) return true;
//     return false;
// }


// let user1: User = {
//     firstName: "Raj",
//     lastName: "Kumar",
//     email: "Rah@gmail.com",
//     age: 20
// }

// console.log(isLegel(user1));