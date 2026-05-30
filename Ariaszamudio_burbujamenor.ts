export function burbujaMenor(A: number[]): number[] {
  //Guardamos el tamaño total de la lista de números
  const N = A.length;

  //Controla cuántas veces vamos a revisar la lista completa
  for (let i = 0; i < N - 1; i++) {
    
    //Va recorriendo los números de uno en uno para compararlos
    // El i es para no volver a revisar los números que ya se acomodaron al final
    for (let j = 0; j < N - 1 - i; j++) {
      
      //Si el actual es más grande que el que tiene a la derecha
      if (A[j] > A[j + 1]) {
        
        //Guardamos el número actual en una variable caja vacía (temp) para que no se borre
        let temp = A[j];
        
        //Movemos el número más chico a la izquierda (donde estaba el grande)
        A[j] = A[j + 1];
        
        //Ponemos el número grande que guardamos en la caja al lado derecho
        A[j + 1] = temp;
      }
    }
  }

  console.log("Arreglo en este punto:", [...A]);
  // Devolvemos la lista ya acomodada de menor a mayor
  return A;
}