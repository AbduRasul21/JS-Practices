// JavaScript basic [150 exercises with solution]

// ----------------------------------------------------------------#1
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;

//   case 1:
//     day = "Monday";
//     break;

//   case 2:
//     day = "Tuesday";
//     break;

//   case 3:
//     day = "Wednesday";
//     break;

//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;

//   default:
//     break;
// }

// var currentDay = document.getElementById("currentDay");
// var currentTime = document.getElementById("currentTime");
// const d = new Date();
// const time = d.toLocaleTimeString();
// currentDay.innerHTML = "Today is: " + day;
// currentTime.innerHTML = "Current time is:" + time;

// ----------------------------------------------------------------#2

// function print_current_window() {
//   window.print();
// }

// ----------------------------------------------------------------#3

// const d = new Date();
// var dd = d.getDate();
// var mm = d.getMonth() + 1;
// var yy = d.getFullYear();

// if (dd < 10) {
//   dd = "0" + dd;
// }

// if (mm < 10) {
//   mm = "0" + mm;
// }

// console.log(mm + "-" + dd + "-" + yy);
// console.log(mm + "/" + dd + "/" + yy);

// ----------------------------------------------------------------#4

// var x = 5;
// var y = 6;
// var z = 7;
// var p= (x+y+z)/2
// var s = Math.sqrt(p * (p - x) * (p - y) * (p - z));

// console.log(s);

// ----------------------------------------------------------------#5

// ----------------------------------------------------------------#6

// var x = parseInt(prompt("Please enter a year", ""));
// var txt ="";
// var currentDay = document.getElementById("currentDay");
// function isLeapYear(x) {
//   if (x % 100 == 0) {
//     if (x % 400 == 0) {
//       txt = "Leap year";
//     } else {
//       txt = "Not Leap year";
//     }
//   } else {
//     if (x % 4 == 0) {
//       txt = "Leap year";
//     } else {
//       txt = "Not Leap year";
//     }
//   }
// }

// isLeapYear(x);
// currentDay.innerHTML= txt;

// ----------------------------------------------------------------#7

// for (let year = 2014; year <= 2050; year++) {
//   const d = new Date(year, 0, 1);
//   var day = d.getDay();
//   if (day == 0) {
//     console.log("1st January is being a Sunday  " + year);
//   }
// }

// ----------------------------------------------------------------#8

// var x = parseInt(prompt("Enter Number between 1 10", ""));
// var y = Math.round((Math.random() * 10));

// if (x == y) {
//   console.log("Good Work");
// } else {
//   console.log("Not Matched");
// }

// console.log(y);


// ----------------------------------------------------------------#9


