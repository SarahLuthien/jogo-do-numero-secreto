let listaDeNumeroSorteados = []
let quantDeNumerosLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('h2','Ajude o famoso detetive a descobrir o número secreto.'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * quantDeNumerosLimite + 1);
    let quantidadeDeElementoDaLista = listaDeNumeroSorteados.length;

    
    if(quantidadeDeElementoDaLista == quantDeNumerosLimite){
        listaDeNumeroSorteados = [];
    }

    if  (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        (listaDeNumeroSorteados.push(numeroEscolhido));
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
    }

console.log(numeroSecreto);
 


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Muito bem, você acertou!');
        let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa'
        let mensagemTentativa = 'Você descobriu o número secreto com ' + tentativas + palavraTentativa;
        exibirTextoNaTela('h2', 'Você é um ótimo detetive! Não tão bom quanto eu, mas está quase lá.');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Por favor, tente novamente.');
            exibirTextoNaTela('h2','Você está quase lá!');
                exibirTextoNaTela('p', 'O número secreto é MENOR.');   
            } else {
            exibirTextoNaTela('h1', 'Por favor, tente novamente.');
                exibirTextoNaTela('h2','Você está quase lá!');
                exibirTextoNaTela('p', 'O número secreto é MAIOR.');
        }
        tentativas++
        limparCampo();
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
