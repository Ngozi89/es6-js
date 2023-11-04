/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
    //LEARN: Code bloock is everything inside the curly braces
    // return a + b;

// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    //LEARN: Code bloock is everything inside the curly braces
    return a + b;

}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => a + b; also valid
const addTwoNumbers2 = (a, b) => a + b; // Put in a single line
let sum2 = addTwoNumbers2(6, 4)
console.log(sum2)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('hello'); // Use the parentheses () to tell javascript you are declearing something
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline sring!
    </p>` //To return multiple lines of code you have to wrap whatever comes after the return keyword in parentheses.
)
console.log(returnMultipleLines());
