import React, { useEffect } from "react";

function CartoonsPage(props) {
  const boardValid = [
    [1, 4, 7, 0, 0, 0, 0, 0, 3],
    [2, 5, 0, 0, 0, 1, 0, 0, 0],
    [3, 0, 9, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 2, 0, 0, 0, 4],
    [0, 0, 0, 4, 1, 0, 0, 2, 0],
    [9, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 9],
    [4, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 1, 0, 0, 8, 0, 0, 7],
  ];
  // var func = function func() {
  //   console.log(func === func);
  // };
  // func();
  var number = 28;
  const hh = (number) => {
    // console.log(number);
    var all: any = [];
    for (let i = 0; i <= number; i++) {
      if (Number.isInteger(number / i)) {
        if (i && i !== number) {
          all.push(i);
        }
      }
    }
    const sum =
      all.length !== 1 && all.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == number) {
      return "YES";
    } else if (sum !== false) {
      return "NO";
    }
  };
  console.log(hh(3));
  // const hh = (number) => {
  //   var all: any = [];
  //   var array: any = [];
  //   number.map((num) => {
  //     for (let i = 0; i < num; i++) {
  //       if (Number.isInteger(num / i)) {
  //         if (i && i !== num) {
  //           all.push(i);
  //           console.log(all);
  //         }
  //       }
  //     }
  //   });
  //   const sum = all.reduce((partialSum, a) => partialSum + a, 0);
  //   if (sum == number) {
  //     array.push("YES");
  //   } else {
  //     array.push("NO");
  //   }
  //   return array;
  // };

  const jj = (number) => {
    number.map((num) => {
      console.log(hh(num));
    });
  };
  jj([3, 6, 5, 28]);
  // jj([
  //   100, 782, 721, 781, 904, 906, 848, 538, 799, 540, 891, 909, 611, 743, 711,
  //   573, 780, 765, 549, 600, 514, 706, 524, 839, 530, 927, 604, 702, 954, 601,
  //   572, 873, 977, 732, 730, 919, 982, 807, 911, 593, 559, 817, 563, 887, 798,
  //   668, 887, 987, 584, 525, 823, 648, 960, 886, 748, 889, 834, 578, 755, 863,
  //   601, 785, 546, 524, 616, 604, 894, 942, 651, 947, 705, 863, 570, 767, 768,
  //   922, 819, 505, 829, 836, 889, 950, 802, 711, 744, 712, 694, 973, 728, 834,
  //   666, 537, 639, 764, 834, 840, 660, 653, 883, 6, 28,
  // ]);

  const checkValidity = (board) => {
    board.map((row) => {
      row.map((number) => {
        if (number < 1 && number > 9) {
          return false;
        } else if (row.indexOf(number) === -1) {
          return false;
        }
      });
    });
  };

  // console.log(checkValidity(boardValid));
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
export default CartoonsPage;
// /*
// // Sample code to perform I/O:

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
// }

// // Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
// */

// // Write your code here

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     process.stdout.write( jj(input));       // Writing output to STDOUT
//    // jj(input)
// }

// //  var T ;

//  const hh = (number) => {
//     var all = [];
//     for (let i = 0; i <= parseInt(number); i++) {

//       if (Number.isInteger(parseInt(number) / i)) {

//         if (i && i !== parseInt(number)) {
//           console.log(i)
//           all.push(i);
//         }
//       }
//     }
//     console.log(all)
//     const sum =
//     all.reduce((partialSum, a) => partialSum + a, 0);
//     if (sum == parseInt(number)) {
//      return "YES";
//    // process.stdout.write("Hi, " + input + ".\n");
//     } else if (sum !== false) {
//   return "NO";
//     //  process.stdout.write("Hi, " + input + ".\n");
//     }
//   };

// const jj = (input) => {
//   var kk=[]
//     var data = input.split('\n');
//   console.log(input)
// kk.push(data)
//   console.log(data)
//    // hh(input);
//   };
