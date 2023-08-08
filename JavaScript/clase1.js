// Precio producto con iva
var Precio  = 250;
var iva = 21;
var precioTotal = Precio + ( Precio*iva/100 );
console.log("El precio total es: "+precioTotal);

// Area y perimetro de cuadro
let lado = 40;
let area = lado*lado;
let perimetro = lado*4;
console.log("El area es: "+area);
console.log("El perimetro es: "+perimetro);

// Saludar usuario
let nombre = prompt("Escribe tu nombre")
let msg = "Hola " + nombre;
console.log( msg );

// Ingreso de numeros enteros y presentar el valor medio
let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let num3 = parseInt(prompt("Ingresa el tercer número"));
let media = ( num1 + num2 + num3 )/3;
console.log("La media de los números es " + media);
