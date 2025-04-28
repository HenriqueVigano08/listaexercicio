function validarCPF() {
    let cpf = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');

    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        resultado.innerHTML = "CPF inválido.";
        return;
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
        resultado.innerHTML = "CPF inválido.";
        return;
    }

    // Validação do segundo dígito
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
        resultado.innerHTML = "CPF inválido.";
        return;
    }

    resultado.innerHTML = "CPF válido!";
}
