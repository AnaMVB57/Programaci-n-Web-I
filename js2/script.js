///alert("Funciona");

//Función que muestra qué número es mayor

// let mayor = function (num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

//Funciones flecha (arrow function)... expresiones lambda
// Sintaxis: () => {}

// Si la instrucción de la función es un return, no hace falta escribir el return, 
//sólo el valor que se va a mostrar

let mayor = (num1, num2) => (num1 > num2) ? num1 : num2;

const x = 500;
const y = 700;
const z = 250;

// console.log(`El mayor entre ${x}, ${y} y ${z} es ${mayor(x, mayor(y, z))}`);

const empleado = {
    nombre: "Joe Hurtado Plata",
    edad: 45,
    fechaIngreso: "2023/11/25",
    salario: 6700000,
    "zonas": ["Sur", "Occidente"],
    activo: true,
    direccion: { calle: 55, carrera: 40, numero: 121, barrio: "Candelaria" },
    dependencia: "Ventas",
    deduccion: function (porDed) {  //Variable tipo function
        return this.salario * (porDed / 100);
    }
};
let pd = 10;
// console.log(empleado.deduccion(pd));

const factura = {
    id: 1111,
    descripcion: 'Compra papelería oficina',
    cliente: { nombre: 'Oficina Desarrollo', correo: 'desarrollo@correo.org' },
    items: [
        {
            producto: 'Resma papel',
            precio: 13500,
            cantidad: 20
        },
        {
            producto: 'Caja lapicero negro',
            precio: 25600,
            cantidad: 6
        },
        {
            producto: 'Libreta anotaciones media carta',
            precio: 13450,
            cantidad: 10
        },
    ],
    total: function () {
        let tot = 0; //Declaramos la variable con tot porque va a cambiar
        for (let item of this.items) {    // En este ciclo, el iterador guarda el contenido del objeto y no su índice.
            tot += item.precio * item.cantidad;
        }
        return tot;
    }
}

// console.log(factura.total());

const valores = [15, -27, 720, -259, 87, 12];

let total = 0;

//Utilizamos una propiedad de los arrays para poder recorrerlo, mientras llamamos a 
// una función que sume los valores de su contenido.
valores.forEach((val) => {
    total += val;
});

// console.log(total);

let total2 = valores.reduce((acum, valor) => {
    return acum + valor;
}, 0); //Este 0 representa la inicialización de la variable acum.

// console.log(total2);

//No necesitamos más de 1 parámetro, por lo que no necesitamos los paréntesis.
let valores2 = valores.map(val => val * 2);

// console.log(valores2);

// let rta1 = confirm("¿Está seguro?");
// console.log(rta1);

// let rta2 = prompt("Su nombre", "Ninguno"); //Opción por defecto
// console.log(rta2);

const returnObj = function (x, y) {

    return { suma: x + y, resta: x - y, producto: x * y, division: (y == 0 ? 'Error: Div = 0 ' : x / y) };
}

let res = returnObj(5, 6);

// console.log(res);

//Crear una función que calcule y muestre el promedio de las calificaciones del arreglo asig


let asig = [
    { nom: 'Matemáticas', nota: 4.5 },
    { nom: 'Algoritmos', nota: 4.8 },
    { nom: 'Humanidades', nota: 2.3 },
    { nom: 'Idiomas', nota: 5.0 },
    { nom: 'Lenguaje Prog.', nota: 4.7 },
];

const promedio = function () {
    let acumNota = 0;
    for (let asignatura of asig) {
        acumNota += asignatura.nota
    }
    return acumNota / asig.length;
}

const notaMasAlta = function () {
    let notaAlta = asig[0];
    for (let i = 1; i < asig.length; i++) {
        if (asig[i].nota > notaAlta.nota) {
            notaAlta = asig[i];
        }
    }
    return notaAlta;
}

// return (num1 > num2) ? num1 : num2;

// function promedioNotas() {
//     let acumNota = 0;
//     let numMat = 0;
//     for (let i = 0; i < asig.length; i++) {

//     }
// }

// Puedes mostrar 2 decimales en el resultado.
// console.log(promedio().toFixed(2));

// console.log(notaMasAlta());


// Se pide al usuario el código de un vendedor por teclado. Ese código será pasado a una función
// que calcule el total de ventas de ese vendedor. 
//Debe retornar un objeto con el nombre, código y total de ventas del vendedor.

let ventas = [
    { "codigo": '7', "vendedor": 'Ana', "venta": 2768280 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 1087660 },
    { "codigo": '2', "vendedor": 'María', "venta": 2040850 },
    { "codigo": '3', "vendedor": 'Olga', "venta": 1838380 },
    { "codigo": '2', "vendedor": 'María', "venta": 1466250 },
    { "codigo": '1', "vendedor": 'Juan', "venta": 632570 },
    { "codigo": '2', "vendedor": 'María', "venta": 1290130 },
    { "codigo": '1', "vendedor": 'Juan', "venta": 1873400 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 1080520 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 2179230 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 2564280 },
    { "codigo": '3', "vendedor": 'Olga', "venta": 1923720 },
    { "codigo": '5', "vendedor": 'Luis', "venta": 1944970 },
    { "codigo": '2', "vendedor": 'María', "venta": 852210 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 470390 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 2712690 },
    { "codigo": '3', "vendedor": 'Olga', "venta": 2592330 },
    { "codigo": '5', "vendedor": 'Luis', "venta": 1921340 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 636480 },
    { "codigo": '4', "vendedor": 'Pedro', "venta": 1136280 },
    { "codigo": '1', "vendedor": 'Juan', "venta": 539580 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 2114630 },
    { "codigo": '2', "vendedor": 'María', "venta": 2738700 },
    { "codigo": '2', "vendedor": 'María', "venta": 1474070 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 2529260 },
    { "codigo": '4', "vendedor": 'Pedro', "venta": 553180 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 1848750 }
];

//También se puede hacer con .filter()
const filtroVendedor = function () {
    let sumVentas = 0;
    let vendedorElegido = {};
    let idVendedor = prompt("Ingrese un ID de vendedor: ");
    for (let i = 0; i < ventas.length; i++) {
        if (idVendedor == ventas[i].codigo) {
            vendedorElegido = ventas[i];
            sumVentas += vendedorElegido.venta;
        }
    }
    return {
        "codigo": vendedorElegido.codigo,
        "nombre": vendedorElegido.vendedor,
        "totalVentas": sumVentas
    };
}

//Los sets **no** aceptan valores duplicados
let set = new Set();

set.add(34);
set.add(ventas);

// console.log(set.has(35));

//  console.log(filtroVendedor());


let inventario = [
    { 'categoria': 'Almacenamiento', 'producto': 'Disco duro SSD Kinsgton', 'precio': 198000, 'existencia': 21 },
    { 'categoria': 'Audio', 'producto': 'Audífono Sony inalámbrico bluetoot', 'precio': 369000, 'existencia': 7 },
    { 'categoria': 'Video', 'producto': 'Televisor Sony 32 pulgadas LED', 'precio': 1188000, 'existencia': 10 },
    { 'categoria': 'Video', 'producto': 'Monitor Samsung 24 pulgadas', 'precio': 790000, 'existencia': 17 },
    { 'categoria': 'Audio', 'producto': 'JBL - Flip 6', 'precio': 599000, 'existencia': 25 },
    { 'categoria': 'Almacenamiento', 'producto': 'Memoria USB 3.2 128Gb', 'precio': 43000, 'existencia': 56 },
    { 'categoria': 'Audio', 'producto': 'Parlante Bose SoundLink', 'precio': 859000, 'existencia': 13 },
    { 'categoria': 'Almacenamiento', 'producto': 'Memoria USB 3.2 64Gb', 'precio': 35000, 'existencia': 29 },
    { 'categoria': 'Audio', 'producto': 'Parlante Sony XB100', 'precio': 220000, 'existencia': 18 },
];

// Elaborar una función que permita mostrar la valoración del inventario por categoría.
// Hay que mostrar el valor total de los productos que hay en categoría.
// Si hubieran más categorías, debería ser capaz de añadirlas. Retornar un array de objetos.

const inventarioPorCategoria = function () {
    let valoracionCat = 0;
    let resultadosInventario = [];
    let categorias = [{ 'categoria': 'Almacenamiento' }, { 'categoria': 'Audio' }, { 'categoria': 'Video' }];
    for (let j = 0; j < categorias.length; j++) {
        valoracionCat = 0;
        for (let i = 0; i < inventario.length; i++) {
            if (categorias[j].categoria == inventario[i].categoria) {
                existenciaTotal = inventario[i].precio * inventario[i].existencia;
                valoracionCat += existenciaTotal;
            }
        }
        resultadosInventario.push(
            {
            "categoria": categorias[j].categoria,
            "valoracionTotal": valoracionCat
        });
    }
    return resultadosInventario;
}

let prueba = new Set(inventario);
let prueba2 = [prueba];

console.log(prueba2);

const arrayConDuplicados = [1, 2, 3, 4, 2, 3, 5];
const setUnico = new Set(arrayConDuplicados);
const arrayUnico = [...setUnico]; // Convertir de nuevo a un array
// console.log(arrayUnico);
// console.log(inventarioPorCategoria());