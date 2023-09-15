// // 1 to 100 number print using for loop

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// // Even number and odd number
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     console.log("odd Number", i);
//   }
// }

//** */ // using while lop
// var initialNumber = 1;
// while (initialNumber <= 10) {
//   console.log(initialNumber);
//   initialNumber++;
//* }

// var isTrue = true;
// while (isTrue) {
//   var random = Math.floor(Math.random() * 10 + 1);
//   if (random == 9) {
//     console.log("yes you are right person");
//     isTrue = false;
//   } else {
//     console.log(random);
//   }
// }
// var isTrue = false;
// do {
//   console.log("hello friends");
// } while (isTrue);

// Nested Loop

var n = 10;
for (var i = 1; i <= n; i++) {
  var result = "";
  for (var j = 1; j <= i; j++) {
    result += j + " ";
  }
  console.log(result);
}

//break Statement
while (true) {
  var random = Math.floor(Math.random() * 10 + 1);
  if (random === 9) {
    console.log("hey programmer how are you");
    break;
  } else {
    console.log(random);
  }
}

//Continue Loop
for (var i = 1; i <= 15; i++) {
  if (i == 7 || i == 10) {
    console.log("Skip this number", i);
    continue;
  } else {
    console.log(i);
  }
}
// Infinity For Loop in Javascript

for (;;) {
  var random = Math.floor(Math.random() * 10 + 1);
  if (random == 8) {
    console.log("You Win The Game,,!!!");
    break;
  } else {
    console.log(random);
  }
}
