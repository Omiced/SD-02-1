// Refer to Task 7 in your Instructions to complete this task

// Tarea Extra 7: Reemplazar números primos impares con una palabra
function esPrimo(n) {
  if (n < 2) return false;
  for (let f = 2; f <= Math.sqrt(n); f++) {
    if (n % f === 0) return false;
  }
  return true;
}

let resultados = [];

for (let f = 1; f <= 105; f++) { 
  let salida = "";

  if (esPrimo(f) && f % 2 !== 0) {
    salida = "Reemplazo xD";
  } else {
    if (f % 3 === 0) salida += "Fizz";
    if (f % 5 === 0) salida += "Buzz";
    if (f % 7 === 0) salida += "Woof";
  }

  resultados.push(salida || f);
}

resultados.forEach(item => console.log(item)); // Esto lo pongo para que node pueda mostrar todos los elementos del array ya que son muchos :D
