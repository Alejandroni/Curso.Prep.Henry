// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayDos = []
  for(i = 0; i<array.length; i++){
    arrayDos [i] = array [i] + 1;
   }
   return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //nos pasan por parametros array [puede tener numeros] y un elemento que puede ser el 5
  //console.log(arrayContiene([20,2,34,5,80]), 5)
  for(var i = 0; i<array.length; i++){
    if(array[i] === elemento){
      return true;
    }else{
      return false;
    }
  }
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //suma todos los numeros de la matriz
  var suma = 0;
  for(var i = 0; i<numeros.length; i++){
    suma = suma + numeros[i]
  }
  return suma;
}
//console.log(agregarNumeros([1,2,3,4,5]))

function promedioResultadosTest(resultadosTest) {
  //promedio de la suma de todos los numeros de la matriz
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var acumulador = 0;
  for(var i = 0; i<resultadosTest.length; i++){
acumulador = acumulador + resultadosTest[i]
}
var promedio = acumulador/resultadosTest.length
return promedio
}
//console.log(promedioResultadosTest([5,2,5,2,5]))


function numeroMasGrande(numeros) {
  //saca el numero mas grande dentro de una matriz
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande = 0;
  for(var i = 0; i<numeros.length; i++){
    if(numeros[i]>grande){
      grande = numeros[i]
    }
  }
  return grande;
}
//console.log(numeroMasGrande([1,2,5,4,768,489,638,3,8]))


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumula = 1;
  if(arguments.length === 0){
    return 0;
  } else if( arguments.length === 1){
    return arguments [0]; //es 0 porque ese el primero .. ej: 0 1 2 
  } else {
for(var i = 0; i < arguments.length; i++){
  acumula *= arguments [i]
}
  }
  return acumula;
}
//multiplica lo que hay dentro 
//console.log(multiplicarArgumentos(0))

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí 
  //recorrer todo el array
  var contador = 0;
for(var i = 0; i<arreglo.length; i++){
  if(arreglo[i] > 18){
    contador = contador + 1
  }
}
return contador
}
//console.log(cuentoElementos([18,4,33,55,111])); saca los mayores a 18

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if( numeroDeDia === 7 || numeroDeDia === 1){
    return 'Es fin de semana'
  } else{
    return 'Es día Laboral'
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
   
 var str = n.toString();
 if(str[0] === "9"){
   return true;
 } else {
   return false;
 }
}
/*var n = 989;
n[0]

var str = n.toString();
str[1] //posicion del string = 8 del 9!8!9*/

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for( var i = 0; i<arreglo.length; i++){
    if(arreglo[0] !== arreglo[i]){
      return false
    }else {
      return true;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for( var i = 0; i<array.length; i++){ //recorrear array , basico
    if( array[i] === 'Enero' || array[i] === 'Noviembre' || array[i] === 'Marzo'){
 nuevoArray.push(array[i])
       }
  }
  if(nuevoArray.length<3){
return "no se encontraron los meses"
  }else{
  return nuevoArray;
  } 
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArrayD = []; // si es un nuevo array para guardar cosas se pone []
  for(var i = 0; i<array.length; i++){

   if(array[i] > 100){
     nuevoArrayD.push(array[i])
   }
  }
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var otroArray = [];
  var bucle = numero;
  for(var i = 0; i<10; i++) { //iteraciones
    suma = suma + 2;
    if(suma === i){
      break;
    } else{
      array.push(suma);
    }
    if(i < 10){
      return "se interrumpio la ejecucion"
    }else {
      return array
    }
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.... ESTO ES LO DEL PUSH   
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var masArray = [];
  var sumaD = numero;
  for(var i = 0; i<10; i++){
    if(i === 5){
      continue;
    } else {
      sumaD = sumaD + 2;
      array.push(suma); //se mete la quinta iteraccion
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
