// 1.- Crear una función que encuentre el número más repetido en un array.

const numeros = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];

function numeroMasRepetido(arr) {
  const conteo = {};
  let maxNum = null;
  let maxCount = 0;

  arr.forEach((num) => {
    conteo[num] = (conteo[num] || 0) + 1;
    if (conteo[num] > maxCount) {
      maxCount = conteo[num];
      maxNum = num;
    }
  });
  return maxNum;
}
const numeroRepetido = numeroMasRepetido(numeros);
console.log(numeroRepetido);
/////////////////////------------------------////////////////////////

// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.

let numerosYletras = [8, "e", 7, 2, "a", "d", "f", 2, 3, 1, 4, 3];

function justLetters(arr) {
  return arr.filter((item) => {
    return typeof item === "string";
  });
}

console.log(justLetters(numerosYletras));

//////////////////////------------------------///////////////////////

/* 
3.- Crear una función que busque el número más grande en un arreglo.
Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12
*/

const numeros3 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];

function numeroMasAlto(arr) {
  let maximo = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximo) {
      maximo = arr[i];
    }
  }
  return maximo;
}

console.log(numeroMasAlto(numeros3));

//////////////------------------///////////////////////////

/* 4.- Crear una función que busque el número más pequeño en el arreglo.
Ejemplo input - > [1,4,5,-1,-7,2,3,9]
Salida -> -7
*/

const numeros4 = [1, 4, 5, -1, -7, 2, 3, 9];

function numeroMasChico(arr) {
  let minimo = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimo) {
      minimo = arr[i];
    }
  }
  return minimo;
}

console.log(numeroMasChico(numeros4));

/////////////////////-----------------------------/////////////////////////

/*5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
Nombre
Apellidos
Teléfono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
Agregar un contacto.
Buscar un contacto por nombre.
*/

class Contacto {
  constructor(nombre, apellidos, telefono) {
    this.name = nombre;
    this.lastName = apellidos;
    this.phoneNumber = telefono;
  }
}

class ListaContactos {
  constructor() {
    this.contactos = [];
  }
  agregarContacto(contacto) {
    this.contactos.push(contacto);
  }
  buscarPorNombre(nombre) {
    return this.contactos.filter((contacto) => contacto.name === nombre);
  }
}

const juan = new Contacto("Juan", "Perez Vazquez", 8125448654);

const pepe = new Contacto("Pepe", "Martinez Estrada", 8114556623);

const listaDeContactos = new ListaContactos();

listaDeContactos.agregarContacto(pepe);
listaDeContactos.agregarContacto(juan);

console.log(listaDeContactos);
const contactoEncontrado = listaDeContactos.buscarPorNombre("Pepe");
console.log(contactoEncontrado);

///////////////////////--------------------------////////////////////////////
