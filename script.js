let historico = [];

function Calcular() {
    //===Entradas
    const area = parseFloat(document.getElementById('area').value);
    const consumoSemente = parseFloat(document.getElementById('consumoSemente').value);
    const pacoteSemente = parseFloat(document.getElementById('pesoSacoSemente').value);
    const precoPacoteSemente = parseFloat(document.getElementById('precoSacoSemente').value);

    const consumoFert = parseFloat(document.getElementById('consumoFert').value);
    const pacoteFert = parseFloat(document.getElementById('pesoSacoFert').value);
    const precoPacoteFert = parseFloat(document.getElementById('precoSacoFert').value);

    //===Saída
    const qtdSementes = document.querySelector('.qtd-sementes');
    const precoSementes = document.querySelector('.preco-sementes');
    const qtdFert = document.querySelector('.qtd-fert');
    const precoFert = document.querySelector('.preco-fert');
    const total = document.querySelector('.custo-total');

    //===Cálculos
    let consumoSementeTotal = Math.ceil(area * consumoSemente);
    let numberSacosSementTotal = Math.ceil(consumoSementeTotal / pacoteSemente);
    let precoSementeTotal = numberSacosSementTotal * precoPacoteSemente;

    let consumoFertTotal = Math.ceil(area * consumoFert);
    let numberSacosFertTotal = Math.ceil(consumoFertTotal / pacoteFert);
    let precoFertTotal = numberSacosFertTotal * precoPacoteFert;

    let totalConsumo = precoSementeTotal + precoFertTotal;

    //===Finalização
    qtdSementes.innerText = numberSacosSementTotal;
    precoSementes.innerText = precoSementeTotal.toFixed(2);
    qtdFert.innerText = numberSacosFertTotal;
    precoFert.innerText = precoFertTotal.toFixed(2);
    total.innerText = totalConsumo.toFixed(2);

    //=== Histórico ===
    const novoCalculo = `Área: ${area} ha | Sementes: ${numberSacosSementTotal} sacos (R$ ${precoSementeTotal.toFixed(2)}) | Fertilizantes: ${numberSacosFertTotal} sacos (R$ ${precoFertTotal.toFixed(2)}) | Total: R$ ${totalConsumo.toFixed(2)}`;
    
    historico.unshift(novoCalculo); // adiciona no início
    if (historico.length > 2) {
        historico.pop(); // remove o mais antigo se passar de 2
    }

    atualizarHistorico();
}

function atualizarHistorico() {
    const lista = document.querySelector('.lista-historico');
    lista.innerHTML = ''; // limpa lista antes de renderizar
    historico.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}

//=== Função Resetar ===
function Resetar() {
    document.getElementById('area').value = '';
    document.getElementById('consumoSemente').value = '';
    document.getElementById('pesoSacoSemente').value = '';
    document.getElementById('precoSacoSemente').value = '';
    document.getElementById('consumoFert').value = '';
    document.getElementById('pesoSacoFert').value = '';
    document.getElementById('precoSacoFert').value = '';

    document.querySelector('.qtd-sementes').innerText = '___';
    document.querySelector('.preco-sementes').innerText = '___';
    document.querySelector('.qtd-fert').innerText = '___';
    document.querySelector('.preco-fert').innerText = '___';
    document.querySelector('.custo-total').innerText = '___';
}