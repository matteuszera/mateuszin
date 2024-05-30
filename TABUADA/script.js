document.getElementById('gerar').addEventListener('click', function() {
    const numeroInput = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');
    const erroDiv = document.getElementById('erro');

    resultadoDiv.innerHTML = '';
    erroDiv.innerHTML = '';

    const numero = parseInt(numeroInput);

    if (isNaN(numero)) {
        erroDiv.innerHTML = 'Por favor, insira um número inteiro válido.';
        return;
    }

    const lista = document.createElement('ul');
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.innerHTML = `${numero} x ${i} = ${numero * i}`;
        lista.appendChild(item);
    }
    resultadoDiv.appendChild(lista);
});
