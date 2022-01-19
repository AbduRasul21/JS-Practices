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

// ----------------------------------------------------------------#5-------------------------------------------

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

// ----------------------------------------------------------------#9---------------------------------------

// ----------------------------------------------------------------#10

// function multiplyBy() {
//   firstNumber = document.getElementById("firstNumber").value;
//   secondNumber = document.getElementById("secondNumber").value;
//   document.getElementById("result").innerHTML = firstNumber * secondNumber;
// }

// function divideBy() {
//   firstNumber = document.getElementById("firstNumber").value;
//   secondNumber = document.getElementById("secondNumber").value;
//   document.getElementById("result").innerHTML = firstNumber / secondNumber;
// }

// ----------------------------------------------------------------#11

// ----------------------------------------------------------------#12

// console.log(document.URL);

// ----------------------------------------------------------------#14

// var fileName = "file.php";

// var x = fileName.split(".");

// console.log(x.pop());

// ----------------------------------------------------------------#21

// var x = "";

// if (x.startsWith("Py")) {

// } else {
//   x = 'Py'+x;
// }

// x.startsWith("Py") ? (x = x) : (x = "Py" + x);

// console.log(x);

// ----------------------------------------------------------------#22

// var str = "Python";
// var position = 1;
// var part1;
// var part2;
// var newName;

// function pushItem(str, position) {
//   part1 = str.substring(0, position);
//   part2 = str.substring(position + 1, str.length);
//   return (part1 + part2);
// }

// console.log(pushItem(str, position));

// ----------------------------------------------------------------#23

// var str = "8";

// function replaceChar(str) {
//   if (str.length <= 1) {
//     return str;
//   } else {
//     midChar = str.substring(1, str.length - 1);
//     return str.charAt(str.length - 1) + midChar + str.charAt(0);
//   }
// }

// console.log(replaceChar(str));

// ----------------------------------------------------------------#24

// var str = "8";

// function replaceChar(str) {
//   if (str.length <= 1) {
//     return str;
//   } else {
//         return str.charAt(0) + str + str.charAt(0);
//   }
// }

// console.log(replaceChar("89"));

// ----------------------------------------------------------------#25

// function multiplyBy(x) {
//   if (x % 3 == 0 || x % 7 == 0) {
//     return "3ga hamda 7ga bo`linadi";
//   } else {
//     return "3ga ham 7ga bo`linmaydi";
//   }
// }

// console.log(multiplyBy(7));
// console.log(multiplyBy(18));

// ----------------------------------------------------------------#27

// function startJava(str) {
//   if (str.startsWith('Java')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(startJava("Java"));

// console.log(startJava("Ja"));

// ----------------------------------------------------------------#28

// function integerRange(x, y) {
//   if ((50 < x && x <= 99) || (50 < y && y <= 99)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(integerRange(55, 9));

// ----------------------------------------------------------------#30

function checkStr(str) {
  if (str.substr(4) == "Script") {
    return str.substring(0, 4);
  } else {
    return str;
  }
}

console.log(checkStr("EcmaScript"));

// ----------------------------------------------------------------#31
