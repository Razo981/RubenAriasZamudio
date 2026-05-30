export function quickSort(A: number[]): number[] {
  //Si la lista ya no tiene nada o solo un elemento no hay nadaque ordenar
  if (A.length <= 1) {
    return A;
  }

  //Elegimos un numero como pivote de referensia usando el ultimo de la lista
  const pivote = A[A.length - 1];
  //Creamos dos listas vacias una para los chicos y otra para los grandes
  const menores: number[] = [];
  const mayores: number[] = [];

  //Revisamos toda la lista menos el pivote para separar los nmeros
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < pivote) {
      menores.push(A[i]); //Si es mas chico que el pivote va a la lista de menores
    } else {
      mayores.push(A[i]); //Si es mas grande o igual va a la lista de mayores
    }
  }

  //Juntamos todo usando la recursion para pegar los menores el pivote y los mayores
  return [...quickSort(menores), pivote, ...quickSort(mayores)];
}