//Callback of Calculator

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function calculator(a, b, cb) {
  return cb(a, b);
}

console.log("Resultado de suma:", calculator(2, 2, sumar));

//PROMESAS

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a)) {
      reject("Ingrese un parametro valido");
    } else if (isNaN(b)) {
      reject("Ingrese un parametro valido");
    } else {
      resolve(a + b);
    }
  });
}

function cal(a, b) {
  sumar(a, b)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

console.log("La suma es:", sum(4, 4));

//ASYNC / AWAIT
async function cal2(a, b) {
  try {
    let suma =   sumar(a, b);
    let division =   dividir(a, b);
    let restar =   restar(a, b);
    let multiplicar =   multiplicar(a, b);

    Promise.all([suma, division, restar, multiplicar])

  } catch (err) {
    console.log(err);
  }
}
