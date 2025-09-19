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
    
    
    document.getElementById('area').value = '';
    document.getElementById('consumoSemente').value = '';
    document.getElementById('pesoSacoSemente').value = '';
    document.getElementById('precoSacoSemente').value = '';
    document.getElementById('consumoFert').value = '';
    document.getElementById('pesoSacoFert').value = '';
    document.getElementById('precoSacoFert').value = '';

}