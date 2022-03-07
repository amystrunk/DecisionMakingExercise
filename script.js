// 1a
let randomNum = Math.floor ((Math.random()*5));
randomNum++;
console.log(randomNum);
/* OR the long way
let randomNum = Math.floor ((Math.random()*5));
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++
console.log(randomNum);
*/

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum === 3 || randomNum === 2) {
    console.log("Equal to 2 or greater than or equal to 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum !== 3) {
    console.log("Not equal to 3");
}

// 1d
if (randomNum !==3 && randomNum !== 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum ===4) {
    console.log("Equal to 2 or equal to 4");
}

// Bonus
// 2
randomNum = (randomNum >= 4) ? "Greater than or equal to 4" : "Less than 4";
console.log(randomNum);

// 3
// Switch Statement takes a parameter/argument and returns something based on the CASE (or the match) that the parameter/argument goes with.
// In this example if randomNum is 1 it will display "One" in the terminal, if randomNum is 2 it will display "Two", etc.
switch (randomNum) {
    case 1:
        console.log("One");
        // Break keywords are needed between each case so that the code for the case that follows does NOT also run
    break;
    case 1:
        console.log("Two");
    break;
    case 1:
        console.log("Three");
    break;
    case 1:
        console.log("Four");
    break;
    case 1:
        console.log("Five");
    // There is no need for a BREAK at the end of a switch statement since there are no other cases.
}