let arrayDeFrutas = ["Kiwi", "Frutilla", "Mandarinas", "Sandia"];

arrayDeFrutas.map((fruta) => {
  console.log(fruta, fruta.length);
});

/**Podemos hacer lo mismo pero con una funcion
 * es mas optimo crear la funcion cuando la vas a utilizar
 * mas de 10 veces
 */
function imprimirFruta(fruta) {
  console.log(fruta, fruta.length);
}

/**Funcion que recibe un CallBack como parametro */
let arrayDeNumeros = [2, 3, 4, 5, 6, 7, 9];

function sumarMayoresPromedio(arr) {
  //   let mayores = arr.sort((a,b) => a + b); //Se organiza de menor a mayor
  let mayores = arr.sort((a, b) => b - a); //Se organiza de mayor a menor

  let result = promedio(mayores);

  return result;
}

function promedio(arr) {
  let suma = arr[0] + arr[1];
  let result = suma / 2;
  return result;
}


console.log("Resultado de promedio:",sumarMayoresPromedio(arrayDeNumeros));
