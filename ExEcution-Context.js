console.log(a); // undefined
var a = 100;
console.log(a); // 100

// this is because of the concept of "hoisting" in JavaScript. 
// When the code is executed, variable declarations (using var) are hoisted to the top of their scope,
// but their assignments are not. 
// So, when console.log(a) is called before the assignment,
//  it returns undefined because the variable a has been declared but not yet assigned a value. 
// After the assignment, console.log(a) returns 100.

let b = 200;
console.log(b); // 200

// In contrast, variables declared with let and const are not hoisted in the same way as var.
// They are hoisted but not initialized, which means that they cannot be accessed before their declaration.
// this is beacause of Teemporal Dead Zone (TDZ) in JavaScript.

//similiar with const also
const c = 300;
console.log(c); // 300
