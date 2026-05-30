function burbujaMenor(A: number[]): number[] {
  const N = A.length;
  
  // Paso 1: Repetir con I desde 2 hasta N (índice 1 hasta N-1)
  for (let I = 1; I < N; I++) {
    
    // Paso 1.1: Repetir con J desde N hasta I (de derecha a izquierda)
    for (let J = N - 1; J >= I; J--) {
      
      // Paso 1.1.1: Si A[J-1] > A[J], intercambiar
      if (A[J - 1] > A[J]) {
        let AUX = A[J - 1];
        A[J - 1] = A[J];
        A[J] = AUX;
      }
    }
  }
  
  return A;
}

// Ejemplo de uso
const arreglo = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", arreglo);
console.log("Ordenado:", burbujaMenor([...arreglo]));