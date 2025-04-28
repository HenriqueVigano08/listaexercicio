function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado = 1;

    if (numero < 0) {
        document.getElementById('resultado').innerHTML = "Não existe fatorial de número negativo.";
        return;
    }

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    document.getElementById('resultado').innerHTML = `O fatorial de ${numero} é: ${resultado}`;
}
