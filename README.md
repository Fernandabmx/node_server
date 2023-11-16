¿Qué sucedió al usar async y await?

Al usar async y await, el código se ejecuta de forma asíncrona, pero de forma que se ve como si se ejecutara de forma sincrónica. Esto se debe a que las funciones async pueden contener expresiones await, que pausan la ejecución de la función hasta que la promesa que se pasa como argumento se resuelve.
¿Qué sucedió al usar el método then()?

El método then() se usa para manejar la resolución o el rechazo de una promesa. El método then() acepta dos funciones como argumentos:

Una función que se llama cuando la promesa se resuelve.
Una función que se llama cuando la promesa se rechaza.
¿Qué diferencias encontré entre async, await y el método then()?

La principal diferencia entre async, await y el método then() es la forma en que se maneja la ejecución asíncrona.

Async y await: async y await permiten que el código se ejecute de forma asíncrona de forma que se ve como si se ejecutara de forma sincrónica. Esto se debe a que las funciones async pueden contener expresiones await, que pausan la ejecución de la función hasta que la promesa que se pasa como argumento se resuelve.
El método then(): El método then() permite manejar la resolución o el rechazo de una promesa. El método then() acepta dos funciones como argumentos: una función que se llama cuando la promesa se resuelve y una función que se llama cuando la promesa se rechaza.
