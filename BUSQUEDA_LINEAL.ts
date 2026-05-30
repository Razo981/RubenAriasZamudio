export function busquedaLineal(A: number[], objetivo: number): number {
    //recorremos el arreglo de valor por valor
    for (let i = 0; i < A.length; i++) {
        // Si se encuentra entonces indicamos su indice (es como la funcion cincidir de excel)
        if (A[i] === objetivo) {
            return i; 
        }
    }
    // ahora si es -1 es porque no se encuentra en la lista
    return -1; 
}
// Ejecutamos el codigo

// lista de numeros desordenados
const miLista = [10, 5, 64, 32, 1, 90, 4]; 
const numeroABuscar = 64;

//llamamos la funcion
const posicion = busquedaLineal(miLista, numeroABuscar);

// Mostramos la posicion
if (posicion !== -1) {
    console.log(`El numero ${numeroABuscar} esta en la posicion: ${posicion}`);
} else {
    console.log(`El numero a buscar  ${numeroABuscar} no se encontro`);
}