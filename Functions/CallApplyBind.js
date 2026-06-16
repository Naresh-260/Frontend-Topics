let person = {
    name: "John",
    age: 30,
    greet: function(city,hobbies) {
        console.log("Hello, my name is " + this.name + " and I live in " + city);
        console.log("My hobbies are: " + hobbies.join(", "));
    }
};

person.greet("New York", ["reading", "swimming"]); // Output: Hello, my name is John and I live in New York
// Output: My hobbies are: reading, swimming
person.greet.call({ name: "Jane" }, "Los Angeles", ["cooking", "traveling"]); // Output: Hello, my name is Jane and I live in Los Angeles
// Output: My hobbies are: cooking, traveling
person.greet.apply({ name: "Mike" }, ["Chicago", ["hiking", "photography"]]); // Output: Hello, my name is Mike and I live in Chicago
// Output: My hobbies are: hiking, photography
let boundGreet = person.greet.bind({ name: "Sarah" }, "Miami", ["dancing", "painting"]);
boundGreet(); // Output: Hello, my name is Sarah and I live in Miami
// Output: My hobbies are: dancing, painting

// apply and call are used to invoke functions with a specific this value and arguments, while bind returns a new function with a specific this value and optional arguments.
// difference between apply and call is that apply takes an array of arguments, while call takes arguments separately.
// when to use apply, call, and bind depends on the specific use case. 
// Use call when you want to invoke a function with a specific this value and arguments passed separately. 
// Use apply when you want to invoke a function with a specific this value and arguments passed as an array. 
// Use bind when you want to create a new function with a specific this value and optional arguments that can be called later.

// real world example of using apply, call, and bind is when working with event listeners in JavaScript. 
// For example, you can use bind to ensure that the this value inside an event handler refers to the correct object, 
// or use call/apply to invoke a function with a specific context when handling events.