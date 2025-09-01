// Refer to Task 3 in your Instructions to complete this task

// Tarea 3: Reemplazar múltiplos de 3 con "Fizz", de 5 con "Buzz", y ambos con "FizzBuzz"
for (let c = 1; c <= 105; c++) {
  if (c % 3 === 0 && c % 5 === 0) {
    console.log("FizzBuzz");
  } else if (c % 3 === 0) {
    console.log("Fizz");
  } else if (c % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(c);
  }
}
