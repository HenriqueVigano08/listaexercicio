function converterHoras() {
    const horas = parseFloat(document.getElementById('horas').value);
    const minutos = horas * 60;
    const segundos = horas * 3600;

    document.getElementById('resultado').innerHTML = `
        ${horas} hora(s) equivale(m) a ${minutos} minuto(s) ou ${segundos} segundo(s).
    `;
}
