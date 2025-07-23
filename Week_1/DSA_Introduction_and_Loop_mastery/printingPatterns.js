// *
// * *
// * * *
// * * * *
// * * * * *

// * Process : Take a loop as that changes rows after every complete execution of the loop, then inside that iteration print number of stars you want.

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
