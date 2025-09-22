// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos


function doCalculation(array) {
let suma = 0;
let max = array [0]
let min = array[0]

    for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    suma += array[i];

    if (array[1] > max){
        max = array[1]

        if (array[1] > min){
            min = array[1]
    }
    }
    console.log(`Suma del array ${suma}`);
    console.log(`Media del array ${suma / array.lenght}`)
    console.log(`Maximo del array ${max}`);
    console.log(`Minimo del array ${min}`);

    }
}

doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])