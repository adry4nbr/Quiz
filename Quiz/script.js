// CONFIGURAÇÕES
let tempoPorPergunta = 10; // segundos

const quiz = [
  {
    pergunta: "Qual a capital da França?",
    alternativas: ["Londres", "Paris", "Roma", "Berlim"],
    correta: 1,
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
  "url('https://picsum.photos/800/600?random=1')",
  "url('https://picsum.photos/800/600?random=2')",
  "url('https://picsum.photos/800/600?random=3')"
];

let indice = 0;
let pontuacao = 0;
let tempo;
let contador;

function iniciarPergunta() {
  document.body.style.backgroundImage = fundos[indice] || 'none';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  if (indice >= quiz.length) {
    mostrarResultado();
    return;
  }

  const q = quiz[indice];
//   document.getElementById("question-text").textContent = (${indice+1}) ${q.pergunta}; essa linha tava dando erro então transformei em comentario
  const opcoesDiv = document.getElementById("options");
  opcoesDiv.innerHTML = "";

  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => responder(i);
    opcoesDiv.appendChild(btn);
  });

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

function responder(i) {
  clearInterval(contador);
  const q = quiz[indice];
  if (i === q.correta) {
    pontuacao += q.pontos;
  }
  indice++;
  iniciarPergunta();
}

function mostrarResultado() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Resultado Final</h2>
    <p>Pontuação total: <strong>${pontuacao}</strong></p>
    <p>Você respondeu ${quiz.length} perguntas.</p>
  `;
}
iniciarPergunta();