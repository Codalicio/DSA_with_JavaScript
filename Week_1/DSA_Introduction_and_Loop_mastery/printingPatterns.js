// Print the below pattern :

// *
// * *
// * * *
// * * * *
// * * * * *

// * Process : Take a outer loop that changes rows after every execution of the loop, take an inner loop, then the inner loop will print the number of stars in a row based on the inner loop.

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

// ------------------------------------------

// Print the below pattern :

//     *
//    ***
//   *****
//  *******
// *********

// * Logic : Create a outermost for loop with number of rows = 5, then create an innerloop with, spaces = 4 - number of row(s) ; then create an innermost loop with, star(s) = ((numbers of rows * 2) + 1); and also just before the execution of every outermost loop, after the execution of the inner loops give a line break.

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

// -------------------------------------------------------

// Print the pattern given below :

// *   *
// *   *
// *****
// *   *
// *   *

// Logic : Take i as number of row(S) and j as number of column(s). Then run the outer loop for the number of row(s) times and inside the inner loop(j), check for the condition(s) for printing the star(*) and if the condition satisfies, then it will print a star(*) and otherwise(else) print a space.

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j === 0 || j === 4 || i === 2) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  process.stdout.write("\n");
}

// ------------------------------------------------------------------

// Print the below pattern :

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Logic : Create outermost loop that will define the number of row(s), then inside it create an another loop that will define the column(s). Then, print the number based on the value of (j) in an iteration.

let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j} `);
  }
  process.stdout.write("\n");
}
