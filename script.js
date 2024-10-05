// QUESTION1
let Array = [[], [], []];

// QUESTION 2

// let Arrmatrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//  ]

// for (let i = 0; i < Arrmatrix.length; i++) {
//     document.write(Arrmatrix[i].join(' ') + '<br>');
// }

// QUESTION 3
// for (let i = 1; i <= 10; i++) {
//     document.write(i + '<br>'); 
// }


// QUESTION 4

// let num = parseInt(prompt('Enter a Number to show its Multiplication table: '));
// let range = parseInt(prompt('Enter a Length: '));
// document.write("Multiplication Table of: " + num + '<br>');
// document.write("Length: " + range + '<br><br>');

// for (let i = 1; i <= range; i++) {
//     const result = i * num; 
//     document.write(`${num} * ${i} = ${result} <br>`); 
// }


// QUESTION 5

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write(fruits.join("<br>") + "<br><br>");
// for (let i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// QUESTION 6
document.write("<h2>Counting:</h2>");
for (let i = 1; i <= 15; i++) {
    document.write(i);
    if (i < 15) document.write(", ");
}
document.write("<br><br>");


document.write("<h2>Reverse Counting:</h2>");
for (let i = 10; i >= 1; i--) {
    document.write(i);
     document.write(", ");
}
document.write("<br><br>");
document.write("<h2>Even:</h2>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i);
     document.write(", ");
}
document.write("<br><br>");
document.write("<h2>Odd:</h2>");
for (let i = 1; i < 20; i += 2) {
    document.write(i);
     document.write(", ");
}
document.write("<br><br>");
document.write("<h2>Series:</h2>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k");
     document.write(", ");
}
document.write("<br><br>");

// QUESTION 7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// let index = A.indexOf(userInput);
// if (index >= 0){
    
//     document.write(userInput + " is <b>available</b> at index " + index + " in our bakery.");
// } else {
  
//     document.write("We are sorry, " + userInput + " is <b>not available</b> in our bakery.");
// }

// QUESTION 8
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("Array items: " + A  +  "<br>")
// document.write("The largest number in the array is: " + largest);


// QUESTION 9
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];
// for (let i = 1; i < A.length; i++) { 
//     if (A[i] < smallest) { 
//         smallest = A[i]; 
//     }
// }
// document.write("Array items: " + A  +  "<br>")
// document.write("The smallest number in the array is: " + smallest);

// QUESTION  10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i); 
// document.write(", ");

//     }
// }
//  document.write("<br><br>");
