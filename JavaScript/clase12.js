let numero = 10;

numero = numero + 1;

numero++;

numero--;

numero += 10;

//OPERADOR TERNARIO
//Condicion ? casoTrue : casoFalse
if (20 > 10) {
    alert('Se cumple');
}else{
    alert("No se cumple");
}

20 > 10 ? alert('Se cumple') : alert("No se cumple");


let edad2  = 15;

let puede_votar =  edad2 >= 18 ? true : false;

puede_votar ? alert("Puede votar") : alert("No puede votar");

// OPERADORES LOGICOS //

console.log(50 && 20);
console.log(100 && false && "jose");
//AND RETORNAR EL PIRMER VALOR FALSY O EL ULTIMO VERDADESO

//OR(O)
console.log(  100 || NaN || "Pepe" );


let edad_usuario = parseInt("Jose") || parent(prompt("Ingrese su edad")) || "No se puede cargar el nombre";

let usaurio =  document.getElementById("usuario") || {nombre:"pepe", apellido:"Lopez"};
console.log(object);

//DESTRUCTURACI0ON DE OBJ
let clienteUno =  {
    nombre:"Juan",
    apellido:"Lopez",
    edad:30
};

let clienteDos =  {
    nombre:"Juan",
    apellido:"Lopez",
    edad:30
};

// let nombreCliente = clienteUno.nombre;
// let apellidoCliente = clienteUno.apellido;
// let edadCliente = clienteUno.edad;

let { nombre, apellido, edad } = clienteUno;
let { nombre:nombreClient, apellido:lastName, edad:age } = clienteDos;

// DESESTRUCTURACION DE ARREGLOS

let listaAlumnos = [ "Ramon", "Felpe","Maritza","Tomas"];

// let alumnoUno = listaAlumnos[0];
// let alumnoDos = listaAlumnos[0];

let [ alumnoUno, alumnoDos, alumnoTres, alumnoCuatro ] = listaAlumnos;

console.log(alumnoDos);

// ...SPREAD

let otroArreglo = [];
console.log(listaAlumnos);
console.log(...listaAlumnos);

//Pasar valores de un arreglo a otro
otroArreglo.push(...listaAlumnos);

// REST PARAM ...

function saludarAlumnos( ...alumnos ) {
    console.log(alumnos);
    for (let alumno of alumnos) {
        console.log("Hola: ", alumno);
        
    }
    
}

saludarAlumnos("Pedro", "Laura");
saludarAlumnos("Marcela", "Julian", "Felipe", "Mari");
