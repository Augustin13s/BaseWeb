// =======================================================================
// 1. CÓDIGO DO PRIMEIRO EXERCÍCIO (Mudar o texto ao clicar no botão)
// =======================================================================
const botao = document.getElementById('botao-mudar-texto');
const paragrafo = document.getElementById('paragrafo-dinamico');

function mudarTexto(){
    paragrafo.textContent = "UAU! O JavaScript está a funcionar! Esta é a interatividade do seu site!";
    botao.disabled = true;
    botao.textContent = "Magia Feita!";
}

if (botao) { // Adicionando uma verificação, por segurança
    botao.addEventListener('click', mudarTexto);
}

// =======================================================================
// 2. CÓDIGO DO MODO ESCURO E LOCAL STORAGE
// =======================================================================

const modoEscuroBotao = document.getElementById('toggle-dark-mode');
const corpoDocumento = document.body; 

// Função auxiliar para atualizar o texto do botão E salvar no Local Storage
function atualizarTextoBotao() {
    if (corpoDocumento.classList.contains('dark-mode')) {
        modoEscuroBotao.textContent = "Modo Claro";
        // Salva a preferência como 'enabled'
        localStorage.setItem('darkModeStatus', 'enabled');
    } else {
        modoEscuroBotao.textContent = "Modo Escuro";
        // Salva a preferência como 'disabled'
        localStorage.setItem('darkModeStatus', 'disabled');
    }
}

function alternarModoEscuro() {
    // 2. Alterna a classe 'dark-mode'
    corpoDocumento.classList.toggle('dark-mode');

    // 3. Chama a função para salvar a nova preferência 
    atualizarTextoBotao();
}

if (modoEscuroBotao) { // Adicionando uma verificação
    modoEscuroBotao.addEventListener('click', alternarModoEscuro);
}


// =======================================================================
// 3. LÓGICA DE CARREGAMENTO (Executada uma vez no início)
// =======================================================================

function carregarPreferenciaModoEscuro() {
    const modoGuardado = localStorage.getItem('darkModeStatus');

    if (modoGuardado === 'enabled') {
        corpoDocumento.classList.add('dark-mode');
    }

    // Atualiza o texto do botão para corresponder ao modo atual (Muito importante!)
    if (modoEscuroBotao) {
        atualizarTextoBotao();
    }
}

// CHAMA a função assim que o script é executado
carregarPreferenciaModoEscuro();