// //lecture 2 task 1
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var addition = num1 + num2;
// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;
// document.write(num1 + " + " + num2 + " = " + addition + ";<br>");
// document.write(num1 + " - " + num2 + " = " + subtraction + ";<br>");
// document.write(num1 + " * " + num2 + " = " + multiplication + ";<br>");
// document.write(num1 + " / " + num2 + " = " + division.toFixed(2) + ";<br>");
// document.write(num1 + " % " + num2 + " = " + modulus + ";");




// //lecture 2 task 2
// function calculateCircleArea(radius) {
//     return Math.PI * radius * radius;
// }
// function calculateSquareArea(side) {
//     return side * side;
// }
// function calculateRectangleArea(length, width) {
//     return length * width;
// }
// function calculatePentagonArea(side, apothem) {
//     return (5 * side * apothem) / 2;
// }
// function calculateTriangleArea(base, height) {
//     return (base * height) / 2;
// }
// function calculateHexagonArea(side) {
//     return (3 * Math.sqrt(3) * side * side) / 2;
// }
// var shape = prompt("Which shape (circle, square, rectangle, pentagon, triangle, hexagon) ?");
// if (shape =="circle") {
//     var radius = parseFloat(prompt("Enter the radius:"));
//     var area = calculateCircleArea(radius);
// }
// if (shape == "square") {
//     var side = parseFloat(prompt("Enter the side length:"));
//     var area = calculateSquareArea(side);
// }
// if (shape == "rectangle") {
//     var length = parseFloat(prompt("Enter the length:"));
//     var width = parseFloat(prompt("Enter the width:"));
//     var area = calculateRectangleArea(length, width);
// }
// if (shape == "pentagon") {
//     var side = parseFloat(prompt("Enter the side length:"));
//     var apothem = parseFloat(prompt("Enter the apothem length:"));
//     var area = calculatePentagonArea(side, apothem);
// }
// if (shape == "triangle") {
//     var base = parseFloat(prompt("Enter the base length:"));
//     var height = parseFloat(prompt("Enter the height length:"));
//     var area = calculateTriangleArea(base, height);
// }
// if (shape == "hexagon") {
//     var side = parseFloat(prompt("Enter the side length:"));
//     var area = calculateHexagonArea(side);
// } 
// document.write("The area of the " + shape + " is: " + area.toFixed(2));







//lecture 2 task 3
// function convertToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function convertToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// function displayConversion() {
//     var choice = prompt("Enter Celsius or Farenheit");
//     var temperature;
//     var convertedTemperature;

// if (choice == "Celsius") {
//         temperature = parseFloat(prompt("Enter temperature in Celsius:"));
//         convertedTemperature = convertToFahrenheit(temperature);
//         document.write(temperature + "°C is equal to " + convertedTemperature.toFixed(2) + "°F.");
// }
// if (choice == "Farenheit") {
//         temperature = parseFloat(prompt("Enter temperature in Fahrenheit:"));
//         convertedTemperature = convertToCelsius(temperature);
//         document.write(temperature + "°F is equal to " + convertedTemperature.toFixed(2) + "°C.");
// } 
// }
// displayConversion();




//lecture 3 task 1
//using if else
// var score = parseFloat(prompt("Enter the score:"));
// if (score >= 90) {
//     document.write("Grade: A");
// } else if (score >= 80) {
//     document.write("Grade: B");
// } else if (score >= 70) {
//     document.write("Grade: C");
// } else if (score >= 60) {
//     document.write("Grade: D");
// } else {
//     document.write("Grade: F");
// }
//using switch
// var score = parseFloat(prompt("Enter the score:"));
// var grade;

// switch (true) {
    
//     case score >= 90:
//         grade = "A";
//         break;
//     case score >= 80:
//         grade = "B";
//         break;
//     case score >= 70:
//         grade = "C";
//         break;
//     case score >= 60:
//         grade = "D";
//         break;
//     default:
//         grade = "F";
// }
// document.write("Grade: " + grade);






//lecture 3 task 2 using for loop
// var tableNumber = parseInt(prompt("Input the table number starting from 1:"));
// document.write("Multiplication table from 1 to " + tableNumber + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(tableNumber + "x" + i + " = " + (tableNumber * i));
//     if (i !== 10) {
//         document.write(", ");
//     } else {
//         document.write("<br>");
//     }
// }
// using do while
// var tableNumber = parseInt(prompt("Input the table number starting from 1:"));
// var i = 1;
// document.write("Multiplication table from 1 to " + tableNumber + "<br>");
// do {
//     document.write(tableNumber + "x" + i + " = " + (tableNumber * i));
//     if (i !== 10) {
//         document.write(", ");
//     } else {
//         document.write("<br>");
//     }
//     i++;
// } while (i <= 10);
// using while 
// var tableNumber = parseInt(prompt("Input the table number starting from 1:"));
// var i = 1;
// document.write("Multiplication table from 1 to " + tableNumber + "<br>");
// while (i <= 10) {
//     document.write(tableNumber + "x" + i + " = " + (tableNumber * i));
//     if (i !== 10) {
//         document.write(", ");
//     } else {
//         document.write("<br>");
//     }
//     i++;
// }






// //lecture 3 task 3
    // var num1 = parseFloat(prompt("Enter the first number:"));
    // var num2 = parseFloat(prompt("Enter the second number:"));
    // var num3 = parseFloat(prompt("Enter the third number:"));
    // var addition = num1 + num2 + num3;
    // var subtraction = num3 - num2 - num1;
    // var multiplication = num1 * num2 * num3;
    // var division = (num3 / num2) / num1;
    // document.write(num1 + " + " + num2 + " + " + num3 + " = " + addition + "<br>");
    // document.write(num3 + " - " + num2 + " - " + num1 + " = " + subtraction + "<br>");
    // document.write(num1 + " * " + num2 + " * " + num3 + " = " + multiplication + "<br>");
    // document.write("(" + num3 + " / " + num2 + ") / " + num1 + " = " + division.toFixed(2));




//lecture 4
// function highest(scores){
//     var high = scores[0];
//     for(var i = 0; i < scores.length; i++){
//         if(high < scores[i])
//             high = scores[i];
//     }
//     return high;
// }
// var score1 = parseInt(prompt("Enter the first score:"));
// var score2 = parseInt(prompt("Enter the second score:"));
// var score3 = parseInt(prompt("Enter the third score:"));
// var score4 = parseInt(prompt("Enter the fourth score:"));
// var scores = [score1, score2, score3,score4];
// var highest = highest(scores);
// document.write("The highest score is: " + highest);




//lecture 5
// class Customer{
//     constructor(customerId, customerName, profession, items){
//         this.customerId = customerId;
//         this.customerName = customerName;
//         this.profession = profession;
//         this.items = items;
//     }
//     print(){   
//         document.write("The customer id is: " + customerId +"<br>" + "Customer Name: " 
//         + customerName +"<br>" + " Customer's Profession is: " + profession + "<br>" + "and I bought the items: ");
//         for(var i = 0; i< items.length; i++){
//             document.write(items[i] + " ");
//         }
//     }
// }
// let customerId = parseInt(prompt("Enter Customer Id"));
// let customerName = prompt("Enter Customer Name");
// let profession = prompt("Enter Customer's profession");
// let items =  new Array(4);
// for(let i = 0; i < items.length; i++){
//     items[i] = prompt("Enter" + i + " item's name");
// }
//  let customer1 = new Customer(customerId, customerName, profession, items);
//     customer1.print();




var person = {
    name: "John",
    today: new Date()
  };
  
  document.getElementById("demo").innerHTML = JSON.stringify(person);var person = {
    name: "John",
    tod: new Date()
  };
  
  document.getElementById("demo").innerHTML = JSON.stringify(person);