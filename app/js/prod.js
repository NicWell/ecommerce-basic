function cadastro(){
    let valida = false;
    let nome = String(document.getElementById('nome').value);
    let ncm = String(document.getElementById('ncm').value).split('');
    let custo = parseFloat(document.getElementById('preco_custo').value);
    let venda = parseFloat(document.getElementById('preco_venda').value);
    let minimo = parseFloat(document.getElementById('preco_min').value);
    let marca = String(document.getElementById('marca').value);
    let categoria = String(document.getElementById('categoria').value);
    let barras = String(document.getElementById('barras').value);
    let estoque = parseInt(document.getElementById('estoque').value);
    if(nome.split("").length < 5 || nome ===''){
        document.getElementById('nome').focus();
        alert("preencha o nome do produto corretamente");
    } else if(ncm ==='' || ncm.length < 8 || parseInt(document.getElementById('ncm').value) === isNaN){
        document.getElementById('ncm').focus();
        alert("preencha o ncm somente com números e até 8 digitos");
    } else if (isNaN(custo) || custo < 0){
        document.getElementById('preco_custo').focus();
        alert("Insira o preço de custo do produto");
    } else if (isNaN(venda) || venda < 0){
        document.getElementById('preco_venda').focus();
        alert("Insira o preço de venda do produto");
    } else if (isNaN(minimo) || minimo < 0){
        document.getElementById('preco_min').value=0;
    } else if(marca.split("").length < 3 || marca ===''){
        document.getElementById('marca').focus();
        alert("preencha a Marca do produto corretamente");
    } else if(categoria.split("").length < 3 || categoria ===''){
        document.getElementById('categoria').focus();
        alert("preencha a categoria do produto corretamente");
    } else if(barras.split("").length < 13 || barras ===''){
        document.getElementById('barras').focus();
        alert("preencha o CEAN do produto corretamente");
    } else if (isNaN(estoque) || estoque < 0){
        document.getElementById('estoque').value=0;
    } else {
        valida = true;
        console.log(valida);
    }
    if(valida){
        formCard.submit();
    }
}