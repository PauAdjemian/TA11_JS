function contarDuplicados(array) {
    const vistos = new Set();
    const duplicados = new Set();

    for (const elemento of array) {
        if (vistos.has(elemento)) {
            duplicados.add(elemento);
        } else {
            vistos.add(elemento);
        }
    }

    console.log(duplicados.size)
}
const array = [1, 2, 2, 3, 4, 4, 4, 5] 
contarDuplicados(array)