// Refer to Task 5 in your Instructions to complete this task

// Tarea Extra 5: Pedir al usuario la cantidad de líneas
const prompt = require("prompt-sync")();

const peticion = parseInt(prompt("¿Cuántos números quieres generar?: "));

for (let e = 1; e <= peticion; e++) {
  let salida = "";

  if (e % 3 === 0) salida += "Fizz";
  if (e % 5 === 0) salida += "Buzz";
  if (e % 7 === 0) salida += "Woof";

  console.log(salida || e);10
  
}
