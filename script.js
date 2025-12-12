// CONFIGURAÇÕES
let tempoPorPergunta = 10; // segundos

const quiz = [
  {
    pergunta: "Tramontina corte...?",
    alternativas: ["Rapido", "Ligeiro", "Certo", "Torto", "Macio"],
    correta: 0,
    pontos: 1
  },
  {
    pergunta: "A Tramontina é uma marca?",
    alternativas: ["Argentina", "Alemã", "Brasileira", "Francesa", "Holandesa"],
    correta: 2,
    pontos: 1
  },
  {
    pergunta: "Quando a Tramontina foi fundada?",
    alternativas: ["1991", "1911", "1981", "1811", "1891"],
    correta: 1,
    pontos: 1
  },
  {
    pergunta: "Quantos produtos tem a Tramontina?",
    alternativas: ["19 mil", "10 mil", "81 mil", "18 mil", "22 mil"],
    correta: 4,
    pontos: 1
  },
  {
    pergunta: "Em quantos paises ela está presente?",
    alternativas: ["23", "+ 120", "76", "120", "50"],
    correta: 1,
    pontos: 1
  },
  {
    pergunta: "A Tramontina começou como qual tipo de estabelecimento?",
    alternativas: ["Ferraria", "Mercado", "Padaria", "Marcenaria", "Shopping"],
    correta: 0,
    pontos: 1
  },
  {
    pergunta: "Qual foi o primeiro produto de destaque da Tramontina?",
    alternativas: ["Talheres de inox", "Facas", "Panela", "Canivete", "Martelos"],
    correta: 3,
    pontos: 1
  },
  {
    pergunta: "Qual é a principal área de atuação da Tramontina?",
    alternativas: ["Alimentação", "Utensílios domésticos e ferramentas", "Automoveis", "Roupas", "Perfumes"],
    correta: 1,
    pontos: 1
  },
  {
    pergunta: "Quem foi o fundador da Tramontina?",
    alternativas: ["Matteo Tramontini", "Adolfo Tramontini", "Geppeto Tramontoni", "Valentin Tramontina", "Mario Tramontoni"],
    correta: 3,
    pontos: 1
  },
  {
    pergunta: "Onde a Tramontina foi fundada?",
    alternativas: ["Rio Grande do Sul", "Pernambuco", "Rio de Janeiro", "Bahia", "São Paulo"],
    correta: 0,
    pontos: 1
  }
];

// IMAGENS DE FUNDO POR PERGUNTA / OBS: Não consegui colocar as imagens

const fundos = [
  "url('imagens/logoTramontina.jpeg')",
  "')",
  "')"
];

let indice = 0;
let pontuacao = 0;
let tempo;
let contador;

function iniciarPergunta() {
  //document.body.style.backgroundImage = fundos[indice] || 'none';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  if (indice >= quiz.length) {
    mostrarResultado();
    return;
  }

  const q = quiz[indice];
  document.getElementById("question-text").textContent = `${q.pergunta}`;
  const opcoesDiv = document.getElementById("options");
  opcoesDiv.innerHTML = "";

  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => responder(i, btn);
    opcoesDiv.appendChild(btn);
  });

  // ====
  const numQuestao = document.getElementById("N-question").textContent = `Pergunta ${indice+1} de ${quiz.length}` 
  numQuestao
 

  tempo = tempoPorPergunta;
  document.getElementById("time-left").textContent = tempo;
  iniciarTimer();
}

function iniciarTimer() {
  clearInterval(contador);
  contador = setInterval(() => {
    tempo--;
    document.getElementById("time-left").textContent = tempo;

    if (tempo <= 0) {
      clearInterval(contador);
      indice++;
      iniciarPergunta();
    }
  }, 1000);
}

async function responder(i, btnClicado) {
  clearInterval(contador)

  const botoes = document.getElementById("options").querySelectorAll('button')

  botoes.forEach(btn => {
    btn.disabled = true;
  })

  const q = quiz[indice];
  if (i === q.correta) {
    pontuacao += q.pontos;
    btnClicado.classList.add('resposta-correta');
  } else {
    btnClicado.classList.add('resposta-errada')

    botoes.forEach((btn, j) => {
      if (j === q.correta) {
        btn.classList.add('resposta-certa-destaque')
      }
    })
  }
  await sleep(2000)
  indice++;
  iniciarPergunta();
}

function mostrarResultado() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Resultado Final</h2>
    <p>Pontuação total: <strong>${pontuacao}</strong></p>
    <p>Você respondeu ${quiz.length} perguntas.</p>
  `;
  const voltar = document.createElement("button");
  voltar.textContent(alt)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

iniciarPergunta();