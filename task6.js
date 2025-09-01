// Refer to Task 6 in your Instructions to complete this task

// Tarea Extra 6: Guardar resultados en un array
let resultados = [];

for (let e = 1; e <= 105; e++) {
  let salida = "";

  if (e % 3 === 0) salida += "Fizz";
  if (e % 5 === 0) salida += "Buzz";
  if (e % 7 === 0) salida += "Woof";

  resultados.push(salida || e);
}

console.log(resultados);