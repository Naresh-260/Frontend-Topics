let arr = [1,2,3,4,5,6]
arr = arr.map((ele) => ele * ele);
arr.forEach(ele =>console.log(ele));

arr2 = arr.filter((ele) => ele%2  !=0);
arr2.forEach(ele => console.log(ele));

arr3 = arr.reduce((acc,ele) => acc + ele,0);
console.log(arr3);
//how reduce works is it takes a callback function and an initial value, 
// the callback function takes two parameters, 
// the first one is the accumulator which stores the accumulated value and 
// the second one is the current element of the array. 
// The reduce method iterates through each element of the array and 
// applies the callback function to accumulate a single value. 
// In this case, it sums up all the elements of the array starting from an initial value of 0.
// (acc,ele) => acc + ele,0 why Zero is the initial value of the accumulator, and 
// acc + ele is the operation performed on each element of the array to accumulate the sum.

// another example of reduce is to find the maximum value in an array
let arr4 = [1, 5, 3, 9, 2];
let max = arr4.reduce((acc, ele) => {
    return (ele > acc) ? ele : acc;
}, arr4[0]); // initial value is the first element of the array
console.log(max); // Output: 9

const users =[
    {"firstName":"John","lastName":"Doe","age":25},
    {"firstName":"Jane","lastName":"Smith","age":30},
    {"firstName":"Bob","lastName":"Johnson","age":35},
    {"firstName":"Alice","lastName":"Williams","age":30}
];
// our thought is to caliculate the age frequency of the users in the array, so we can use reduce to do that
let output = users.reduce(function(acc,user){
    if(acc[user.age]){
        acc[user.age] += 1;
    }
    else{
        acc[user.age] = 1;
    }
    return acc;
},{});
console.log(output); // Output: { '25': 1, '30': 2, '35': 1 }

// now i want to first names of users whose age is less than 30

const youngUsers = users.filter( user => user.age <= 30).map(user => user.firstName);
console.log(youngUsers); // Output: [ 'John' ]