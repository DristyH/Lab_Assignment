//Slide-3:Task-1;
// let gradeCalculator=function(score){
//     let letterGrade=' ';
//     if(score>=80){
//         letterGrade='A+';
//     }
//     else if(score>=70 && score<=79){
//         letterGrade='A';
//     }
//     else if (score>=60 && score<=69){
//         letterGrade='A-';
//     }
//     else if(score>=50 && score<=59){
//         letterGrade='B';
//     }
//     else if(score>=40 && score<=49){
//         letterGrade='C';
//     }
//     else if(score>=33 && score<=39){
//         letterGrade='D';
//     }
//     else if (score<=32){
//         letterGrade='F';
//     }
//     return letterGrade;
// }
// let marks=prompt("Enter the marks");
// let result = gradeCalculator(marks);
// document.write("You have got"+ " "+result+"<br>");


//task-2
//using for loop
// let table = function(num){ 
//     for(let i=1;i<=10;i++){

//         document.write( num +" * " +i+"  = "+num*i+"<br>");
//     }
// }

// let x = window.prompt("Enter the number that will create multiplication table:");
// table(x);

//using while loop

// let table = function(num){ 
//     let i=1;
//     while(i<=10){
//         document.write( num +" * " +i+"  = "+num*i+"<br>");
//         i++;
//     }
// }

// let x = window.prompt("Enter the number that will create multiplication table:");
// table(x);

//using do while loop

// let table = function(num){ 
//     let i=1;
//     do{

//         document.write( num +" * " +i+"  = "+num*i+"<br>");
//         i++;
//     }
//     while(i<=10)
// }

// let x = window.prompt("Enter the number that will create multiplication table:");
// table(x);
let display=function(first,second,third){
    let Summation = Number(first)+Number(second)+Number(third);
    let Subtraction = first-second-third;
    let multiplication = first*second*third;
    document.write("Summation = "+ Summation +"<br>");
    document.write("Subtraction = "+ Subtraction+"<br>");
    document.write("Multiplication = "+multiplication+"<br>");
}
let x= window.prompt("Enter the first Number: ");
let y= window.prompt("Enter the second Number: ");
let z= window.prompt("Enter the third Number: ");
display(x,y,z);