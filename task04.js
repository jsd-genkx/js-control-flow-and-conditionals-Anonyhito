"use strict";

const num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");
}