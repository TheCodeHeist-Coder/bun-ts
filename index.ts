//! types

//? ## Interfaces can be implemented by classes but types can not....
//? ## and types let's you do some extra things like unions, intersections etc.


// type Person = {
//     name: string;
//     age: number;
// }

// let p1:Person = {
//     name: "Rajkumar",
//     age: 20
// }


//? Unions in types
type Pincode = string | number;    //! called Unions in types in ts

let pincode: Pincode = "13add32"
pincode = 198424


//? Intersections
// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type Manager = {
//     name: string;
//     department: string;
// }

// type SuperManager = Employee & Manager;    

//        //! OR

// type SuperManager = {
//     name: string;
//     startDate: Date,
//     department: string
// }       


