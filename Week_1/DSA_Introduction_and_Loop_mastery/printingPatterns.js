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
