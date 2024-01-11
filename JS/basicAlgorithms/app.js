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

let concatenate = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`;
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

/* EJERCICIOS DE BASIC ALGORITHMS DE JAVASCRIPT
Iteracion 4: Arrays*/

/*------------------------------------------------------------------------------------------------------------
//? 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
------------------------------------------------------------------------------------------------------------*/

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avenger1 = avengers[0];
console.log("🚀 ~ avenger1:", avenger1);

/*------------------------------------------------------------------------------------------------------------
//? 4.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
------------------------------------------------------------------------------------------------------------*/

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
/* CREO UNA CONST NUEVA PARA QUE NO HAGA CONFLICTO CON LA DEL EJERCICIO ANTERIOR.
SÉ QUE TAMBIÉN SE PODRÍA CAMBIAR DIRECTAMENTE SOBRE LA QUE YA ESTABA, PERO ES PARA QUE ESTE EJERCICIO SE MUESTRE CON CLARIDAD. */

avengers2[0] = "IRONMAN";
console.log("🚀 ~ avengers2:", avengers2);

/*------------------------------------------------------------------------------------------------------------
//? 4.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
------------------------------------------------------------------------------------------------------------*/

const numberofavengers = avengers.length;
console.log("🚀 ~ numberofavengers:", numberofavengers);

/*------------------------------------------------------------------------------------------------------------
//? 4.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
------------------------------------------------------------------------------------------------------------*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log("🚀 ~ rickAndMortyCharacters:", rickAndMortyCharacters[4]);

/*------------------------------------------------------------------------------------------------------------
//? 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
------------------------------------------------------------------------------------------------------------*/

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
rickAndMortyCharacters2.shift();
console.log("🚀 ~ rickAndMortyCharacters2:", rickAndMortyCharacters2[0], rickAndMortyCharacters2[3]);

/*------------------------------------------------------------------------------------------------------------
//? 4.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
------------------------------------------------------------------------------------------------------------*/

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1,1);
console.log("🚀 ~ rickAndMortyCharacters3:", rickAndMortyCharacters3);

/* EJERCICIOS DE BASIC ALGORITHMS DE JAVASCRIPT
Iteracion 5: Condicionales*/

/*------------------------------------------------------------------------------------------------------------
//?const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

------------------------------------------------------------------------------------------------------------ */

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 === 2) {
	console.log("number2 dividido entre number1 es igual a 2");
  };

if (number1!==number2) {
	console.log("number1 es estrictamente distinto a number2");
  };

if (number3!=number1) {
	console.log("number3 es distinto number1");
  };

if (number3*5==number1) {
	console.log("number3 por 5 es igual a number1");
  };

if (number3*5==number1 && number1*2==number2) {
	console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  };

/* EJERCICIOS DE BASIC ALGORITHMS DE JAVASCRIPT
Iteracion 6: Bucles*/

/*------------------------------------------------------------------------------------------------------------
//? 6.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
------------------------------------------------------------------------------------------------------------*/

for (let cuentaadelante = 0; cuentaadelante <=9; cuentaadelante++) {
	console.log(cuentaadelante);
};

/*------------------------------------------------------------------------------------------------------------
//? 6.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
------------------------------------------------------------------------------------------------------------*/

for (let cuentaadelanteresto = 0; cuentaadelanteresto <=9; cuentaadelanteresto++) {
	if (cuentaadelanteresto%2==0) {console.log(cuentaadelanteresto)};
};

/*------------------------------------------------------------------------------------------------------------
//? 6.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.
------------------------------------------------------------------------------------------------------------*/
let ovejas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (ovejas[0]; ovejas[0] <=10; ovejas++) {
	if (ovejas[0]<=9) {console.log("Intentando dormir 🐑")};
	if (ovejas[0]=10) {console.log("Dormido!")}
};

//EJERCICIO 6.3. PENDIENTE DE COMPLETAR CUANDO VEAMOS LOS BUCLES.


