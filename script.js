let intervalId; // Variável para armazenar o ID do intervalo do cronômetro
let cronometroAtivo = false; // Variável para controlar se o cronômetro está ativo

// Lista de temas disponíveis
let temas = [
  "Times de futebol",
  "Times de basquete",
  "Filmes",
  "Séries",
  "Animes",
  "Cantores",
  "Bandas",
  "Animais",
  "Animais marinhos",
  "Frutas",
  "Cidades",
  "Países",
  "Marcas",
  "Carros",
  "Jogadores",
  "Jogos da nintendo",
  "Jogos"
];

// Função para sortear um tema aleatório
function sortearTema() {
    pararCronometro(); // Parar o cronômetro quando um novo tema for sorteado
    limparPrenda(); // Limpar a sugestão de prenda quando um novo tema for sorteado
    reiniciarCronometro(); // Reiniciar o cronômetro ao sortear um novo tema

    // Verifica se já foram sorteados todos os temas
    if (temas.length === 0) {
        reiniciarTemas();
    }

    // Sorteia um índice aleatório dentro do tamanho da lista de temas
    const indiceSorteado = Math.floor(Math.random() * temas.length);

    // Obtém o tema sorteado e o remove da lista para que não se repita
    const temaSorteado = temas.splice(indiceSorteado, 1)[0];

    // Exibe o tema sorteado na página
    document.getElementById('temaSelecionado').textContent = "Tema selecionado: " + temaSorteado;

    // Habilita o botão "Iniciar Cronômetro" após o sorteio do tema
    document.getElementById('iniciarCronometroButton').disabled = false;
}

// Função para reiniciar os temas quando todos foram sorteados
function reiniciarTemas() {
    temas = [
        "Times de futebol",
        "Times de basquete",
        "Filmes",
        "Séries",
        "Animes",
        "Cantores",
        "Bandas",
        "Animais",
        "Animais marinhos",
        "Frutas",
        "Cidades",
        "Países",
        "Marcas",
        "Carros",
        "Jogadores",
        "Jogos da nintendo",
        "Jogos"
    ];
}

function iniciarCronometro() {
    cronometroAtivo = true;
    document.getElementById('iniciarCronometroButton').textContent = 'Parar Cronômetro';
    document.getElementById('iniciarCronometroButton').style.backgroundColor = 'red';

    let segundos = 5; // Definido novamente para 30 segundos
    const cronometroElement = document.getElementById('cronometro');
    cronometroElement.textContent = segundos;

    intervalId = setInterval(() => {
        segundos--;
        if (segundos < 0) {
            clearInterval(intervalId);
            cronometroElement.textContent = "Tempo esgotado!";
            mostrarPrendaAleatoria();
        } else {
            cronometroElement.textContent = segundos;
        }
    }, 1000);
}

function pararCronometro() {
    cronometroAtivo = false;
    clearInterval(intervalId);
    document.getElementById('iniciarCronometroButton').textContent = 'Iniciar Cronômetro';
    document.getElementById('iniciarCronometroButton').style.backgroundColor = '';
}

function limparPrenda() {
    const prendaElement = document.getElementById('prenda');
    if (prendaElement) {
        prendaElement.remove();
    }
}

function mostrarPrendaAleatoria() {
    const prendas = [
        "Cantar uma música em público.",
        "Contar uma piada engraçada.",
        "Dançar por 1 minuto sem parar.",
        "Fazer uma imitação de um animal.",
        "Fazer 10 flexões.",
        "Fazer uma declaração de amor para a pessoa mais próxima.",
        "Contar uma história engraçada.",
        "Fazer uma careta por 10 segundos.",
        "Recitar um poema.",
        "Fazer uma performance de air guitar."
    ];

    const indicePrenda = Math.floor(Math.random() * prendas.length);
    const prendaSelecionada = prendas[indicePrenda];

    const prendaElement = document.createElement('p');
    prendaElement.id = 'prenda';
    prendaElement.textContent = "Prenda sugerida: " + prendaSelecionada;
    document.getElementById('cronometro').insertAdjacentElement('afterend', prendaElement);
}

// Função para reiniciar o cronômetro ao status inicial
function reiniciarCronometro() {
    const cronometroElement = document.getElementById('cronometro');
    cronometroElement.textContent = '';
}

// Adiciona um evento de clique ao botão "Parar Cronômetro"
document.getElementById('iniciarCronometroButton').addEventListener('click', function() {
    if (cronometroAtivo) {
        pararCronometro();
    } else {
        iniciarCronometro();
    }
});

// Adiciona um evento de clique ao botão "Sortear Tema"
document.getElementById('sortearTemaButton').addEventListener('click', sortearTema);

// Desabilita o botão "Iniciar Cronômetro" inicialmente
document.getElementById('iniciarCronometroButton').disabled = true;

// Adiciona um evento de clique ao botão "Voltar"
document.getElementById('voltarButton').addEventListener('click', function() {
    // Redireciona o usuário para a tela inicial
    window.location.href = "index.html";
});
