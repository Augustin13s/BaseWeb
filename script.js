// . Encotrar os elementos no HTML usando os seus IDs 
const botao = document.getElementById('botao-mudar-texto');
const paragrafo = document.getElementById('paragrafo-dinamico')

// 2. Definir o que acontecer quando o botão é clicado (a função)
function mudarTexto(){
    // A propriedade .textContent muda o texto interno do elemento 
    paragrafo.textContent = "UAU! O Javascript está a funcionar! Esta é a interatividade do seu site!";

    // Opcional: Desativar o botão para que não se possa clicar novamente
    botao.disabled = true;
    botao.textContent = "Magia Feita!";
}

// 3. Adicionar um "ouvinte" de eventos ao botão
// Quando o evento 'click' ocorre, a função 'mudarTexto' é executada
botao.addEventListener('click', mudarTexto);

// SEÇÃO DO MODO ESCURO E LOCAL STORAGE

// 1. Selecionamos o botão e o elemento BODY inteiro
const modoEscuroBotao = document.getElementById('toggle-dark-mode');
const corpoDocumento = document.body; 

function atualizarTextoBotao() {
    // Função auxiliar para manter o texto do botão correto
    if (corpoDocumento.classList.contains('dark-mode')) {
        modoEscuroBotao.textContent = "Modo Claro";
        // 4. Salvar a prefência do utilizador como 'enabled'
        localStorage.setItem('darkModeStatus', 'enabled');
    } else {
        modoEscuroBotao.textContent = "Modo Escuro";
        // 5. Salvar a preferência do utilizador como 'disabled'
        localStorage.setItem('darkModeStatus', 'disabled');
    }
}

function alternarModoEscuro() {
    // 2. Alternar a classe 'dark-mode' (como antes)
    corpoDocumento.classList.toggle('dark-mode');

    // 3. Chama a função para salvar a nova preferência 
    atualizarTextoBotao();
}

modoEscuroBotao.addEventListener('click', alternarModoEscuro);

// 2. Definimos a funcão que será executada no clique
function alternarModoEscuro() {
    // .classList.toggle('dark-mode') é o comando mágico:
    // Se a class 'dark-mode' estiver no body, ele a remove.
    // Se a class 'dark-mode' não estiver lá, ele a adiciona.
    corpoDocumento.classList.toggle('dark-mode');



    // Opcional: Mudar o texto do botão
    if (corpoDocumento.classList.contains ('dark-mode')) {
        modoEscuroBotao.textContent = "Modo Claro";
    } else {
        modoEscuroBotao.textContent = "Modo Claro";
    }
}

// 3. Adicionamos o ouvinte de evento
modoEscuroBotao.addEventListener('click', alternarModoEscuro);

// LÓGICA DE CARREGAMENTO: VERIFICAR O LOCAL STORAGE

function carregarPreferenciaModoEscuro() {
    // 1. Tentar buscar o valor guardado no navegador
    const modoGuardado = localStorage.getItem('darkModeStatus');

    // 2. Se o valor for 'enabled', aplica o modo escuro
    if (modoGuardado === 'enabled') {
        corpoDocumento.classList.add('dark-mode');
    }

    // 3. Atualizar o texto do botão para corresponder ao modo atual 
    atualizarTextoBotao();

}

// 4. CHAMA a função assim que o script é executado (quando a página carrega)
carregarPreferenciaModoEscuro();