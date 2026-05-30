export function busquedaBinaria(A: number[], objetivo: number): number {
    // Definimos el inicio y el final de nuestra lista para empezar a buscar
    let izquierda = 0;
    let derecha = A.length - 1;

    //Comienza el bucle para repetir mientras no se crucen las posiciones
    while (izquierda <= derecha) {
        // se buscara la mitad de la lista dividiendo entre 2 (divide y venceras)
        let mitad = Math.floor((izquierda + derecha) / 2);

        // Si el numero del medio es justo el que buscamos, devolvemos su posicion
        if (A[mitad] === objetivo) {
            return mitad;
        }

        // Si el numero es mas chico, nos olvidamos de la mitad de la derecha
        if (objetivo < A[mitad]) {
            derecha = mitad - 1;
        } 
        // Si el numero es mas grande, nos olvidamos de la mitad de la izquierda
        else {
            izquierda = mitad + 1;
        }
    }

    // Si termina todo el bucle y no se encontro nada, ponemos -1
    return -1;
}

// Ejecutamos el codigo

// Lista de numeros ordenada (es obligatorio que este ordenada de menor a mayor)
const miLista = [1, 4, 5, 10, 32, 64, 90]; 
const numeroABuscar = 64;

// llamamos la funcion
const posicion = busquedaBinaria(miLista, numeroABuscar);

// Mostramos la posicion
if (posicion !== -1) {
    console.log(`El numero ${numeroABuscar} esta en la posicion: ${posicion}`);
} else {
    console.log(`El numero a buscar ${numeroABuscar} no se encontro`);
}
