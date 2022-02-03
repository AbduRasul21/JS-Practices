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

// function checkStr(str) {
//   if (str.substr(4) == "Script") {
//     return str.substring(0, 4);
//   } else {
//     return str;
//   }
// }

// console.log(checkStr("EcmaScript"));

// ----------------------------------------------------------------#31

// function largestInteger(a, b, c) {
//   if (a > b) {
//     if (a > c) {
//       return "the largest integer is " + a;
//     } else {
//       return "the largest integer is " + c;
//     }
//   } else {
//     if (b > c) {
//       return "the largest integer is " + b;
//     } else {
//       return "the largest integer is " + c;
//     }
//   }
// }

// console.log(largestInteger(5, 8, 9));

// console.log(largestInteger(10, 8, 9));

// console.log(largestInteger(10, -11, 9));

// ----------------------------------------------------------------#32

// function nearestToHundred(a, b) {
//   var differ_1 = Math.abs(100 - a);
//   var differ_2 = Math.abs(100 - b);

//   if (differ_1 > differ_2) {
//     return b;
//   } else {
//     return a;
//   }
// }

// console.log(nearestToHundred(15, 20));

// console.log(nearestToHundred(130, 120));

// console.log(nearestToHundred(1, 0));

// ----------------------------------------------------------------#35       --------------------------------------------------------

// var str = "JavaScript";

// function isSpecChar(strRef) {
//   if (str.substring(2, 4) == strRef) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// console.log(isSpecChar("aSc"));
// console.log(isSpecChar("va"));

// console.log(str.substring(2, 4));

// ----------------------------------------------------------------#36

// function lastDigit(x, y, z) {
//   if (x % 10 == y % 10 && x % 10 == z % 10 && z % 10 == y % 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lastDigit(501, 501, 501));

// ----------------------------------------------------------------#37

// function threeChar(str) {
//   if (str.length < 3) {
//     return str.toUpperCase();
//   } else {
//     var firstThreeChar = str.substring(0, 3).toLowerCase();
//     var lastChar = str.substring(3, str.length);
//     return firstThreeChar + lastChar;
//   }
// }

// console.log(threeChar("DDDDD"));

// ----------------------------------------------------------------#40

// function check_8(x, y) {
//   if (x == 8 || y == 8) {
//     return true;
//   }
//   if (x + y == 8 || Math.abs(x - y) == 8) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(check_8(10, 1));

// ----------------------------------------------------------------#41

// function equalTesting(x, y, z) {
//   if (x == y && y == z) {
//     return 30;
//   } else if (x == y || y == z || x == z) {
//     return 40;
//   } else {
//     return 20;
//   }
// }

// console.log(equalTesting(5, 5, 5));
// console.log(equalTesting(5, 4, 5));
// console.log(equalTesting(5, 4, 23));

// ----------------------------------------------------------------#42

// function strictSoftMode(x, y, z) {
//   if (z > y && y > x) {
//     return "Strict Mode";
//   } else if (z > y) {
//     return "Soft Mode";
//   } else {
//     return "undefined";
//   }
// }

// console.log(strictSoftMode(4, 5, 6));

// console.log(strictSoftMode(5, 5, 6));

// ----------------------------------------------------------------#43

// function rightMostDigit(x, y, z) {
//   if (x % 10 == y % 10 || x % 10 == z % 10 || y % 10 == z % 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(rightMostDigit(20, 20, 20));
// console.log(rightMostDigit(20, 31, 20));
// console.log(rightMostDigit(22, 31, 20));

// ----------------------------------------------------------------#46

// function multiplyBY(x, y) {
//   if (!(x % 7 == 0 || x % 11 == 0) && (y % 7 == 0 || y % 11 == 0)) {
//     return x % 7 == 0 || x % 11 == 0 || y % 7 == 0 || y % 11 == 0;
//   } else {
//     return false;
//   }
// }

// console.log(multiplyBY(7, 11));

// ----------------------------------------------------------------#48

// function reverseWord(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseWord("Python"));

// ----------------------------------------------------------------#49 ------------------------------------------------------

// ----------------------------------------------------------------#50

// function capitalize(str) {
//   myArray = str.split(" ");

//   for (let i = 0; i < myArray.length; i++) {
//     myArray[i] = myArray[i][0].toUpperCase() + myArray[i].substr(1);
//   }

//   return myArray.join(" ");
// }

// console.log(
//   capitalize("assalom deganda ochiladi gul assalom deganda sayraydi bul bul")
// );

// ----------------------------------------------------------------#51

// function numberToTime(x) {
//   t = Math.trunc(x / 60);
//   m = x % 60;

//   return t + " hrs " + m + " min";
// }

// console.log(numberToTime(450));

// console.log(numberToTime(585));

// ----------------------------------------------------------------#52

// function alphabetSort(str) {
//   return str.split("").sort().join("");
// }

// console.log(alphabetSort("Python"));

// ----------------------------------------------------------------#53 --------------------------------------------

// ----------------------------------------------------------------#54

// var n = 0;
// function countVowels(str) {
//   for (let i = 0; i < str.length; i++) {
//     str = str.toLowerCase();
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       n++;
//     }
//   }
//   console.log(n);
// }

// countVowels("PythOni");

// ----------------------------------------------------------------#57

// function strRepeat(str, n) {
//   if (str.length <= 0) {
//     return false;
//   } else {
//     return str.repeat(n);
//   }
// }

// console.log(strRepeat('Python "wefwe"', 5));

// ----------------------------------------------------------------#58

// function lastChar(str) {
//   if (str.length <= 3) {
//     return false;
//   } else {
//     return str.slice(-3).repeat(4);
//   }
// }

// console.log(lastChar("hon"));

// ----------------------------------------------------------------#59

// function divideHalf(str) {
//   if (str.length % 2 == 0) {
//     return str.substring(0, str.length / 2);
//   } else {
//     return false;
//   }
// }

// console.log(divideHalf("Python55"));

// ----------------------------------------------------------------#62

// function lastThreeToStart(str) {
//   if (str.length >= 3) {
//     return str.slice(-3) + str.slice(0, -3);
//   } else {
//     return false;
//   }
// }

// console.log(lastThreeToStart("Pythonc"));

// ----------------------------------------------------------------#63

// function middleThree(str) {
//   var midStr = Math.floor(str.length / 2);
//   console.log(midStr);
//   if (str.length >= 3 && str.length % 2 !== 0) {
//     return str.substring(midStr - 1, midStr + 2);
//   } else {
//     return str;
//   }
// }

// console.log(middleThree("dddddddd"));

// ----------------------------------------------------------------#67

// function removePChar(str) {
//   if (
//     str.toLowerCase().charAt(0) == "p" &&
//     str.toLowerCase().charAt(str.length - 1) == "p"
//   ) {
//     return str.slice(1, -1);
//   } else {
//     return str;
//   }
// }

// console.log(removePChar("Pythonr"));

// ----------------------------------------------------------------#68

// var str = "";
// var n = 0;

// function removeNChar(str, n) {
//   if (str.length >= n) {
//     // return str.slice(0 + n, str.length - 3)
//     return str.slice(0, 0 + n) + str.slice(str.length - 3, str.length);
//   } else {
//     return str;
//   }
// }

// console.log(removeNChar("Python88", 3));

// ----------------------------------------------------------------#69

// const arr = [2, 2, 6];
// var sum = 0;
// function sumArr(arr) {
//   for (var x of arr) {
//     sum = x + sum;
//   }
//   return sum;
// }

// console.log(sumArr(arr));

// ----------------------------------------------------------------#70

// const arr = [2, 2, 6];

// function rotateElementLeft(arr) {
//   for (var x of arr) {
//     sum = x + sum;
//   }
//   return sum;
// }

// console.log(sumArr(arr));

// ----------------------------------------------------------------#71

// const arr = [8, 2, 5];
// var arrLength = arr.length - 1;
// const revArr = [];

// function reverseArr(arr) {
//   for (var x of arr) {
//     revArr[arrLength - arr.indexOf(x)] = x;
//   }
//   return revArr;
// }

// console.log(reverseArr(arr));

// ----------------------------------------------------------------#72

// const arr = [8, 2, 5];
// // console.log(arr.length);
// function isOneFirstOrLast(arr) {
//   if (arr.length >= 3) {
//     return arr[0] == arr[arr.length - 1];
//   } else {
//     return false;
//   }
// }

// console.log(isOneFirstOrLast(arr));

// ----------------------------------------------------------------#73 ------------------------------

// const arr = [8, 2, 2, 3, 4];
// var arrLength = arr.length - 1;
// const revArr = [];

// function reverseArr(arr) {
//   for (var x of arr) {
//     revArr[arrLength - arr.indexOf(x)] = x;
//     console.log(x);
//   }
//   return revArr;
// }

// console.log(reverseArr(arr));

// ----------------------------------------------------------------#74

// const arr = [8, 2, 2, 3, 12];

// function largerItem(arr) {
//   if (arr[0] > arr[arr.length - 1]) {
//     arr.fill(arr[0]);
//   } else {
//     arr.fill(arr[arr.length - 1]);
//   }
//   return arr;
// }

// console.log(largerItem(arr));

// ----------------------------------------------------------------#77

// const arr = [5, 0, 1];
// function containsOneThree(arr) {
//   if (arr.indexOf(1) != -1 || arr.indexOf(3) != -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(containsOneThree(arr));

// ----------------------------------------------------------------#78

// const arr = [5, 0, 5];
// function containsOneThree(arr) {
//   if (!arr.includes(1) && !arr.includes(3)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(containsOneThree(arr));

// ----------------------------------------------------------------#81
// var x = 0;

// function addTwoDigits(x) {
//   return (x % 10) + Math.floor(x / 10);
// }

// console.log(addTwoDigits(25));

// ----------------------------------------------------------------#82 ----------------------------------------------

// ----------------------------------------------------------------#83

// const myArr = ["12345", "87654325551", "1234567"];

// var maxItem = "";

// function longestArray(myArr) {
//   for (const x of myArr) {
//     if (maxItem.length <= x.length) {
//       maxItem = x;
//     }
//   }
//   console.log(maxItem);
// }

// longestArray(myArr);

// ----------------------------------------------------------------#84

// var str = "hellz";
// var str2 = "";
// // console.log(str.charCodeAt(0));
// // console.log(String.fromCharCode(104));

// function toNextChar(str) {
//   for (const key in str) {
//     if (str[key] != "z") {
//       text = String.fromCharCode(str.charCodeAt(key) + 1);
//       str2 = str2 + text;
//     } else {
//       str2 = str2 + "a";
//     }
//   }
//   console.log(str2);
// }

// toNextChar(str);

// ----------------------------------------------------------------#85
