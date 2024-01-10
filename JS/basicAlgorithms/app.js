/* EJERCICIOS DE BASIC ALGORITHMS DE JAVASCRIPT
Iteracion 1: Variables
*/

/*---------------------------------------------------------------------------
//? 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
---------------------------------------------------------------------------*/

let myFavoriteHero;
myFavoriteHero = "Hulk";

/*---------------------------------------------------------------------------
//? 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
-----------------------------------------------------------------------------*/

let x;
x = 50;

/*----------------------------------------------------------------------------
//? 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
-----------------------------------------------------------------------------*/

let h;
h = 5;

let y;
y = 10;

/*---------------------------------------------------------------------------
//? 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
----------------------------------------------------------------------------*/

let z;
z = h + y;

/* EJERCICIOS DE BASIC ALGORITHMS DE JAVASCRIPT
Iteracion 2: Variables avanzadas*/

/*!---------------------------------------------------------------------------
//? 2.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25. 
const character = {name: 'Jack Sparrow', age: 10};
-----------------------------------------------------------------------------*/

const character = {name: 'Jack Sparrow', age: 25};

/*---------------------------------------------------------------------------
//? 2.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
-----------------------------------------------------------------------------*/

let firstName = "Jon";
let lastName = "Snow";
let age = 24;

let concatenate = "Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.";
console.log(concatenate);

/*---------------------------------------------------------------------------
//? 2.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
-----------------------------------------------------------------------------*/

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let sumatoys = toy1.price + toy2.price;
console.log(sumatoys);

/*---------------------------------------------------------------------------
//? 2.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
-----------------------------------------------------------------------------*/

let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2);

/* EJERCICIOS DE BASIC ALGORITHMS DE JAVASCRIPT
Iteracion 3: Variables operadores*/

/*---------------------------------------------------------------------------
//? 3.1 Multiplica 10 por 5 y muestra el resultado mediante console.
-----------------------------------------------------------------------------*/

let Multiplica = 10;
Multiplica *=5;
console.log(Multiplica);

/*---------------------------------------------------------------------------
//? 3.2 Divide 10 por 2 y muestra el resultado en un console.
-----------------------------------------------------------------------------*/

let Divide = 10;
Divide /= 2;
console.log(Divide);

/*---------------------------------------------------------------------------
//? 3.3 Muestra mediante un console el resto de dividir 15 por 9.
-----------------------------------------------------------------------------*/

let resto = 15;
resto %=9;
console.log(resto);

/*------------------------------------------------------------------------------------------------------------
//? 3.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
------------------------------------------------------------------------------------------------------------*/

let p = 10;
let j = 5;
let o = p + j;
console.log(o);

/*------------------------------------------------------------------------------------------------------------
//? 3.5 Usa el correcto operador de asignación que resultará en i = 50,teniendo dos variables c = 10 y m = 5.
------------------------------------------------------------------------------------------------------------*/

let c = 10;
let m = 5;
let i = c*m;
console.log(i);