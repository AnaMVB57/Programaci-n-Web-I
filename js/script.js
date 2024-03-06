//alert("El archivo funciona");

//_________Tipos de datos_________
// (Declaración más usada) Let permite declarar variables con contexto local (Son diferentes en cierta porción de código. Ej: Una instrucción dentro de un if)
// (Declaración más viejita) Var permite declarar variables globales. Sin importar que la declares en cierto contexto, su valor será el mismo para todo el código. Excepto si es sobreescrito.
// Const permite declarar variables constantes. 

//_________Datos primitivos_________
//Number
//Undefined 
//String
//Booleanos
//Null -> Es tratado como un objeto. Indica que no existe contenido.


// JS es un lenguaje no tipado. El tipo de dato se conoce cuando asignamos un valor.  
//Ejemplo: 

let x = 5.76;

//El objeto document sirve para el desarrollo web. Hace referencia al documento HTML

//document.write("<b>Valor de x: </b> " + x); //Muestra el valor de la variable declarada, con estilos como si fuera CSS

// console.log("El tipo de x es: " + typeof x + "contenido = " + x);

if (true) {
    let x = 1000;
    // console.log(x);
}

// console.log(x);

let y = 10;
y = 15;
console.log(y);

for (let i = 1; i <= 5; i++) {
    // console.log(i);
}
// console.log(i);

//Se suele nombrar las constantes con screaming snake_case
const NOMBRE_PERSONA = "Zoé";

//No se puede redeclarar o reasignar un nuevo conjunto de valores a un array. Pero sí se pueden modificar los datos mediante índices.
const arr = ['Juan', 33];
arr[0] = -56
arr.push(70);

//Los objetos y los sets se declaran con {}
const obj = { "nombre": "pepe", "edad": 18 }
obj.nombre = "Juan";    // Los campos de los objetos están desprotegidos, se pueden cambiar.
obj.genero = "masculino";   //Se puede agregar  un campo directamente.

let disponible = false;

let nombre = "Eva Lua";
let edad = 39;

// console.log(nombre + " tiene " + edad + " años."); 

//Esto es un template string dentro de los ``. Se puede concatenar datos sin salirse de la cadena.
// console.log(`${nombre} tiene ${edad} años.`);

let p = 5 ** 2;

// console.log(Math.sqrt(p));

let n = null;
// console.log(typeof n);

//Acá comparamos el contenido de ambas variables (==)
//Al comparar el tipo de variable, se utiliza (===)
// console.log(5 === "5");

const arr2 = new Array(true, 4.5, "Ninguno");
console.log(arr2);

const datos = ["Joe", 45, false, [23, 49], 3.14];
datos[10] = ['Amarillo', "Verde", `Azul`];
datos.push("Empleado");
datos.unshift("Centro");

// for (let i = 0; i<datos.length; i++){
//     console.log(datos[i]);
// }


/* En el ciclo (for... of...) la variable i
toma el contenido de cada uno de los elementos
 de la colección*/

// for (let i of datos){ //Muestra sólo el contenido del arreglo
//     console.log(i);
// }

// for (let i in datos){ //Muestra los índices del arreglo nada más. No muestra elementos undefined
//     console.log(datos[i]);
//     console.log(`[${i}] = ${datos[i]}`); //Muestra los índices y contenido 
// }

let t = datos.pop(); //Quita elementos del final / Push añade elementos al final
let i = datos.shift(); //Añade elementos al inicio y lo retorna / Unshift añade al inicio y retorna la nueva longitud
console.log(i);

const obj2 = new Object();
obj2.campo = "Un dato";

//Ambas notaciones hacen lo mismo, llamar un dato
// console.log(obj2.campo);
// console.log(obj2['campo']);

const empleado = {
    nombre: "Joe Hurtado Plata",
    edad: 45,
    fechaIngreso: "2023/11/25",
    salario: 6700000,
    zonas: ["Sur", "Occidente"],
    activo: true,
    direccion: {calle: 55, carrera: 40, numero: 121, barrio: "Candelaria"},
    dependencia: "Ventas",
};

// console.log(empleado["zonas"][1]);

// Permite iterar la coleccion empleado y mostrar el contenido de sus campos
for (let emp in empleado){
    console.log(`[${emp}] = ${empleado[emp]}`);
}