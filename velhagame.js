//Função que irá armazenar o valor de 'X' ou 'O' no jogo
function escolha(id){
    var quadrado = document.getElementById(id);

    if(vencedor !== null){
        return;
    }
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    
    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor(vencedor);
}

//Funão para mudar o jogador que irá jogar
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

//Função para verificar quem ganhou
function checaVencedor(){
    var quadrado1 = document.getElementById('1')
    var quadrado2 = document.getElementById('2')
    var quadrado3 = document.getElementById('3')
    var quadrado4 = document.getElementById('4')
    var quadrado5 = document.getElementById('5')
    var quadrado6 = document.getElementById('6')
    var quadrado7 = document.getElementById('7')
    var quadrado8 = document.getElementById('8')
    var quadrado9 = document.getElementById('9')

    if(checagem(quadrado1, quadrado2, quadrado3)){
        mudaCor(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checagem(quadrado4, quadrado5, quadrado6)){
        mudaCor(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checagem(quadrado7, quadrado8, quadrado9)){
        mudaCor(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checagem(quadrado1, quadrado4, quadrado7)){
        mudaCor(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checagem(quadrado2, quadrado5, quadrado8)){
        mudaCor(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
    }
    if(checagem(quadrado3, quadrado6, quadrado9)){
        mudaCor(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(checagem(quadrado1, quadrado5, quadrado9)){
        mudaCor(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checagem(quadrado3, quadrado5, quadrado7)){
        mudaCor(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

//Função para auxiliar na checagem dos blocos "vencedores"
function checagem(quad1, quad2, quad3){
    var igual = false;

    if(quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        igual = true;
    }

    return igual;
}

//Função para mudar a cor dos "blocos" vencedores para verde
function mudaCor(quad1, quad2, quad3){
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';
}

//Função para alterar o placar do vencedor
function mudarVencedor(venc){
    vencedor = venc.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

//Função para reiniciar o jogo ao clicar no botão reiniciar
function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgb(210, 217, 217)';
        quadrado.style.color = 'rgb(210, 217, 217)';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}

//Variáveis utilizadas no jogo
let quadrados = document.getElementsByClassName('quadrado');
let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById(elementId = "player-sel");
mudarJogador('X');
let vencedorSelecionado = document.getElementById(elementId = "player-win");
mudarJogador('X');

