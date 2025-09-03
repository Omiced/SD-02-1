// Refer to Task 4 in your Instructions to complete this task

// Tarea 4: Agregar múltiplos de 7 → "Woof"
for (let d = 1; d <= 105; d++) {
  let salida = "";

  if (d % 3 === 0) salida += "Fizz";
  if (d % 5 === 0) salida += "Buzz";
  if (d % 7 === 0) salida += "Woof";

  console.log(salida || d);
}
