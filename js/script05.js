const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const resultado = document.getElementById('resultado');

    if (palpite === numeroSecreto) {
        resultado.innerHTML = "Parabéns! Você acertou!";
    } else if (palpite < numeroSecreto) {
        resultado.innerHTML = "Tente um número maior.";
    } else if (palpite > numeroSecreto) {
        resultado.innerHTML = "Tente um número menor.";
    } else {
        resultado.innerHTML = "Digite um número válido.";
    }
}
    