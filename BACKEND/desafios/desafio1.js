const products = [
  {
    id: 1,
    code: 23,
    product: "Laptop",
    brand: "Apple",
  },
  {
    id: 2,
    code: 24,
    product: "Iphone 14",
    brand: "Apple",
  },
  {
    id: 3,
    code: 34,
    product: "Airpods",
    brand: "Apple",
  },
];

// function addProduct(code, product, brand) {
function addProduct(code, product, brand) {
  let lastId = products[products.length - 1].id; //Se obtiene el mayor registro
  let cod = parseInt(code);

  const findElement = (array, searchCode) => {
    return array.find((element) => element.code === searchCode) ?? -1;
  };

  let existCode = findElement(products, cod);

  if (existCode === -1) {
    //No existe el código
    if (isNaN(cod) || product === "" || brand === "") {
      console.log("Debe de ingresar todos los parametros de entrada");
    } else {
      lastId = lastId + 1;
      //Se agrega el producto
      products.push({
        id: lastId,
        code: cod,
        product: product,
        brand: brand,
      });
      console.log(
        `Se crea el código: ${cod}, producto: ${product} de la marca: ${brand}.`
      );
    }
  } else {
    console.log(`El código ${cod} ingresado ya se encuentra registrado`);
  }
}

function getProducts() {
  let product = products.map(function (element) {
    return element;
  });
  console.log(product);
}

function getProductById(searchId) {
  let resul =
    products.find((element) => element.id === searchId) ?? "Not found.";
  if (resul === "") {
   console.log(`Id: ${searchId} encontrado.`, resul);
  } else {
    console.log(`Id: ${searchId}`, resul);
  }
}

addProduct(3, "WebCam", "Logitech");
addProduct(4, "WebCam", "Logitech");
addProduct(4, "WebCam", "Logitech");
getProducts();
getProductById(2);
getProductById(5);
