const cores = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'cyan'];

function mudarCor() {
    const corFundo = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corFundo;

    const corBotao = cores[Math.floor(Math.random() * cores.length)];
    const botao = document.getElementById('botao-cor');
    botao.style.backgroundColor = corBotao;

    if(corBotao == 'yellow' || corBotao == 'cyan') {
        botao.style.color = 'black';
    } else {
        botao.style.color = 'white';
    }
}
