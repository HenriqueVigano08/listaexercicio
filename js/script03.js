function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    let faixaEtaria = "";

    if (idade >= 0 && idade <= 12) {
        faixaEtaria = "Criança";
    } else if (idade >= 13 && idade <= 17) {
        faixaEtaria = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        faixaEtaria = "Adulto";
    } else if (idade >= 60) {
        faixaEtaria = "Idoso";
    } else {
        faixaEtaria = "Idade inválida";
    }

    resultado.innerHTML = `Você é: ${faixaEtaria}`;
}
