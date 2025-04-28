function somarPares() {
    const limite = parseInt(document.getElementById('limite').value);
    let soma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    document.getElementById('resultado').innerHTML = `A soma dos números pares de 1 até ${limite} é: ${soma}`;
}
