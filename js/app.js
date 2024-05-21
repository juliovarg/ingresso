function comprar(){

    let tipoIngresso = document.getElementById('tipo-ingresso').value;      
    let quantidadeDisponivel = document.getElementById(`qtd-${tipoIngresso}`).textContent;
    let quantidadeDigitada = document.getElementById('qtd').value;
    if(quantidadeDigitada<=0){
        alert('Digite uma quantidade válida');
        document.getElementById('qtd').value='';  
        return;
    }
    if(quantidadeDigitada>quantidadeDisponivel){
        alert(`Quantidade indisponível para ${tipoIngresso}!`);
        return;
    }

    alert('Compra realizada com sucesso!');
    qtdAposCompra = quantidadeDisponivel-quantidadeDigitada;
    document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdAposCompra; 
    document.getElementById('qtd').value='';    
}