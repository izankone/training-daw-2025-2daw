function maximo(lista) {
    let max = -999999; 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

console.log(maximo([-10, -3, -50])); // Esperado: -3