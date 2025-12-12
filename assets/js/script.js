// CONFIGURAÇÕES
let tempoPorPergunta = 10; // segundos

const quiz = [
  {
    pergunta: "Tramontina corte...?",
    alternativas: ["Rapido", "Ligeiro", "Certo", "Torto"],
    correta: 0,
    pontos: 10
  },
  {
    pergunta: "Quanto é 5 + 7?",
    alternativas: ["10", "11", "12", "13"],
    correta: 2,
    pontos: 5
  },
  {
    pergunta: "Qual linguagem roda no navegador?",
    alternativas: ["Python", "C++", "JavaScript", "Java"],
    correta: 2,
    pontos: 10
  }
];

// IMAGENS DE FUNDO POR PERGUNTA
const fundos = [
  "url('')",
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
  //

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