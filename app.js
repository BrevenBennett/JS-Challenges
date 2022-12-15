//              ~~~~~~~~~~BEGINNER CHALLENGES~~~~~~~~~~
// Q1 Return the sum of two numbers
// function addition(num1, num2) {
//     return num1 + num2
// }

// console.log(addition(3, 2))

// Q2 Convert hours into seconds
// function hoursIntoSeconds(hours) {
//     return hours * 3600
// }

// console.log(hoursIntoSeconds(10))

// Q3 Calculate the perimeter of a rectangle
// function calcPerimeter(width, length) {
//     return 2 * (width + length)
// }

// console.log(calcPerimeter(20, 10))

// Q4 Calculate the area of a triangle
// function calcArea(base, height) {
//     return 0.5 * base * height
// }

// console.log(calcArea(10, 10))

// Q5 Extend a string
// function appendFrontend(str) {
//     return str + 'Frontend'
// }

// console.log(appendFrontend('Apple'))
// console.log(appendFrontend('Banana'))

// Q6 Greater than 100?
// function sumGreaterThan100(num1, num2) {
//   return num1 + num2 > 100;
// }

// console.log(sumGreaterThan100(50, 60));
// console.log(sumGreaterThan100(100, -50));

// Q7 Less than or equal to zero
// function lessThanOrEqualToZero(num) {
//     return num <= 0
// }

// console.log(lessThanOrEqualToZero(3))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))

// Q8 Opposite boolean
// function oppositeBoolean(bool) {
//     return !bool
// }

// console.log(oppositeBoolean(true))
// console.log(oppositeBoolean(false))

// Q9 Is not the number 0
// function isNotZero(elem) {
//     return elem !== 0
// }

// console.log(isNotZero(5))
// console.log(isNotZero(0))
// console.log(isNotZero(-10))

// Q10 Calculate the remainder of two numbers
// function calcRemainder(num1, num2) {
//     return num1 % num2
// }

// console.log(calcRemainder(4, 2))
// console.log(calcRemainder(7, 8))
// console.log(calcRemainder(9, 8))

// Q11 Is the number odd?
// function isOdd(num) {
//   return num % 2 !== 0;
// }

// console.log(isOdd(1));
// console.log(isOdd(2));
// console.log(isOdd(3));

// Q12 If a number is even, return 1, otherwise return -1
// function booleanInteger(num) {
//   return num % 2 === 0 ? 1 : -1;
// }

// console.log(booleanInteger(1));
// console.log(booleanInteger(2));
// console.log(booleanInteger(5));

// Q13 Check if a user is logged in AND subscribed
// function isLoggedInAndSubscribed(str1, str2) {
//     return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED'
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))

// Q14 Check if a user is logged in OR subscribed
// function isLoggedInOrSubscribed(str1, str2) {
//     return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED'
// }

// console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
// console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))

//              ~~~~~~~~~~MEDIUM CHALLENGES~~~~~~~~~~
// Q1 Falsy or Truthy?
// function falsyOrTruthy(val1, val2) {
//     return (!val1) ? val1 : val2
// }

// console.log(falsyOrTruthy(0, 500))
// console.log(falsyOrTruthy(false, 100))
// console.log(falsyOrTruthy(true, 'Dog'))

// Q2 Return the length of any given array
// function arrLength(arr) {
//     return arr.length
// }

// console.log(arrLength([1, 2, 3]))
// console.log(arrLength([5, 0, -4, 1]))
// console.log(arrLength([]))

// Q3 Get the last element in an array
// function lastElem(arr) {
//     return arr[arr.length-1]
// }

// console.log(lastElem([3, 2, 0, 6, 2]))
// console.log(lastElem(['dog', 'cat', 'ball']))
// console.log(lastElem([null, 5, false]))

// Q4 Find the sum of an array
// function arrSum(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(arrSum([2, 2, 2]));
// console.log(arrSum([100, 200, 500]));
// console.log(arrSum([0, -5, -10]));

// Q5 Add up the numbers from a single number
// function progressiveSum(num) {
//   let sum = 0;
//   for (i = 1; i <= num; ++i) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(progressiveSum(3));
// console.log(progressiveSum(4));
// console.log(progressiveSum(600));

// Q6 Calculate the time
// function calcTime(seconds) {
//   let timerMinutes = Math.floor(seconds / 60);
//   let timerSeconds = seconds % 60;

//   if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes
//   }

//   if (seconds >= 60 && seconds <= 69) {
//     timerSeconds = '0' + timerSeconds
//   }

//   return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(66));
// console.log(calcTime(50));
// console.log(calcTime(700));

// Q7 Find the largest number
// function getMax(arr) {
//   let max = arr[0];
//   for (i = 0; i < arr.length; ++i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getMax([5, 100, 0]));
// console.log(getMax([12, 10, -20]));
// console.log(getMax([-300, -100, -200]));

// Q8 Reverse a String
// function reverseString(str) {
// 3 Methods

// 1. Incrementing Loop
// let reversedString = ''
// for (i = 0; i < str.length; ++i) {
//     reversedString = str[i] + reversedString
// }
// return reversedString

// 2. Decrementing Loop
// let reversedString = ''
// for (i = str.length - 1; i >= 0; --i) {
//     reversedString += str[i]
// }
// return reversedString

// 3. Array Reverse Property
// return str.split('').reverse().join('')
// }

// console.log(reverseString('abc'))
// console.log(reverseString('David'))
// console.log(reverseString('This is cool'))

// Q9 Turn every element in an array to 0
// function convertToZeros(arr) {
// 3 Methods
// 1. For Loop
// let newArr = []
// for (i = 0; i < arr.length; ++i) {
//     newArr[i] = 0
// }
// return newArr

// 2. Array Fill
// return new Array(arr.length).fill(0)

// 3. Array Map
// return arr.map(elem => 0)
// }

// console.log(convertToZeros([5, 100, 10]))
// console.log(convertToZeros([12]))
// console.log(convertToZeros([1, 2, 3, 4, 5]))

// Q10 Filter out all the 'Apples'
// function noApples(arr) {
// 2 Methods
// 1. For Loop
// let noApples = []
// for (i = 0; i < arr.length; ++i) {
//     if (arr[i] !== 'Apple') {
//         noApples.push(arr[i])
//     }
// }
// return noApples

// 2. Array Filter
//     return arr.filter(elem => elem !== 'Apple')
// }

// console.log(noApples(['Banana', 'Apple', 'Orange', 'Apple']))
// console.log(noApples(['Tomato', 'Orange', 'Banana']))
// console.log(noApples(['Banana', 'Orange', 'Apple']))

// Q11 Filter out falsy values
// function filterOutFalsy(arr) {
//     // 2 Methods
//     // 1. For Loop
//     let noFalsy = []
//     for (i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             noFalsy.push(arr[i])
//         }
//     }
//     return noFalsy
//     // 2. Array Filter
//     // return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
// console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))

// Q12 Truthy to true, Falsy to false
// function convertToBoolean(arr) {
  // 2 Methods
  // 1. For Loop
  // let newArr = []
  // for (i = 0; i < arr.length; ++i) {
  //     if (!!arr[i] === true) {
  //         newArr.push(true)
  //     }
  //     else if (!!arr[i] === false) {
  //         newArr.push(false)
  //     }
  // }
  // return newArr

  // 2. Array Map
//   return arr.map((elem) => !!elem)
// }

// console.log(convertToBoolean([500, 0, "David", "", []]));
