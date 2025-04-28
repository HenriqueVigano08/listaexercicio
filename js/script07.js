function mostrarPrimos() {
    const inicial = parseInt(document.getElementById('inicial').value);
    const final = parseInt(document.getElementById('final').value);
    let primos = [];

    for (let num = inicial; num <= final; num++) {
        if (ehPrimo(num)) {
            primos.push(num);
        }
    }

    document.getElementById('resultado').innerHTML = `Números primos entre ${inicial} e ${final}: ${primos.join(", ")}`;
}

function ehPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
