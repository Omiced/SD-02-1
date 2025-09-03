// Refer to Task 7 in your Instructions to complete this task


const result = [];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 105; i++) {
  let output = "";
  if (isPrime(i) && i % 2 !== 0) {
    output = "Prime"; // Puedes cambiar esto por la palabra que quieras
  } else {
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    if (i % 7 === 0) {
      output += "Woof";
    }
  }

  if (output === "") {
    result.push(i);
  } else {
    result.push(output);
  }
}

console.log(result);