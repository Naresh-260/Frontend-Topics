function Operation(a, b, func) {
    return func(a, b);
}
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

let result1 = Operation(10, 5, add);
console.log(result1); // Output: 15

let result2 = Operation(10, 5, subtract);
console.log(result2); // Output: 5