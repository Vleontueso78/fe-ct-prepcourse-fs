/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   let resultado = cb(num1, num2);
   return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      suma += arrayOfNumbers[i];
   }
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      cb(array[i]);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let nuevoArreglo = []; // Creamos un nuevo arreglo vacío para almacenar los resultados
   for (let i = 0; i < array.length; i++) {
      const resultado = cb(array[i]); // Llamamos al callback con el elemento actual
      nuevoArreglo.push(resultado); // Agregamos el resultado al nuevo arreglo
   }

   return nuevoArreglo; // Retornamos el nuevo arreglo con los resultados
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoArreglo = []; // Creamos un nuevo arreglo vacío para almacenar los elementos que cumplan con el filtro
   for (let i = 0; i < arrayOfStrings.length; i++) {
      const elemento = arrayOfStrings[i]; // Tomamos el elemento actual del arreglo

      if (elemento.startsWith("a")) { // Verificamos si el elemento comienza con "a"
         nuevoArreglo.push(elemento); // Agregamos el elemento al nuevo arreglo
      }
   }
   return nuevoArreglo; // Retornamos el nuevo arreglo con los elementos que cumplen con el filtro
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
