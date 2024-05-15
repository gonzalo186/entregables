
function convertirDolaresAEuros(dolares) {
    const tasaCambio = 0.92; 
    return dolares * tasaCambio;
}


function convertirEurosADolares(euros) {
    const tasaCambio = 1.08; 
    return euros * tasaCambio;
}


function convertirLibrasAEuros(libras) {
    const tasaCambio = 1.13; 
    return libras * tasaCambio;
}


function main() {
 
    const opcion = prompt("Seleccione una opción:\n1. Convertir de dólares a euros\n2. Convertir de euros a dólares\n3. Convertir de libras esterlinas a euros");

    
    const opcionSeleccionada = parseInt(opcion);

    
    switch (opcionSeleccionada) {
        case 1:
            const dolares = parseFloat(prompt("Ingrese la cantidad de dólares a convertir:"));
            const euros = convertirDolaresAEuros(dolares);
            alert(`${dolares} dólares son aproximadamente ${euros.toFixed(2)} euros.`);
            break;
        case 2:
            const euros2 = parseFloat(prompt("Ingrese la cantidad de euros a convertir:"));
            const dolares2 = convertirEurosADolares(euros2);
            alert(`${euros2} euros son aproximadamente ${dolares2.toFixed(2)} dólares.`);
            break;
        case 3:
            const libras = parseFloat(prompt("Ingrese la cantidad de libras esterlinas a convertir:"));
            const euros3 = convertirLibrasAEuros(libras);
            alert(`${libras} libras esterlinas son aproximadamente ${euros3.toFixed(2)} euros.`);
            break;
        default:
            alert("Opción no válida.");
    }
}


main();
