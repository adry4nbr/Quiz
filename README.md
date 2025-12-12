Projeto: Quiz sobre a Tramontina

Este projeto é um quiz interativo feito com HTML, CSS e JavaScript. Ele apresenta perguntas sobre a empresa Tramontina, controla tempo, pontuação e exibe um resultado final ao término do quiz.

A interface foi dividida em duas páginas:

Home (index.html) -> Tela inicial com apresentação e botão para iniciar
Quiz (quiz.html) -> Onde acontecem as perguntas, timer, alternativas e resultado

1. index.html — Tela inicial

A página index.html funciona como menu principal.
Nela encontramos:

Logo da empresa
Texto de apresentação do quiz
Breve introdução sobre a história da Tramontina
Botão para iniciar o quiz

Essa página utiliza o arquivo de estilo:

-- CSS/style_index.css

2. style_index.css — Estilo da página inicial

Define:

Layout centralizado

Container com sombras e bordas arredondadas

Gradiente azul como fundo

Estilização da logo, textos e botão

Animação de hover no botão Iniciar Quiz

3. quiz.html — Página do quiz

Essa é a tela onde o usuário:

Visualiza o timer

Vê em qual questão está

Observa uma imagem (ainda não configurada no JS)

Responde alternativas

Recebe o resultado final

Usa o CSS:

-- CSS/style_quiz.css

4. style_quiz.css — Estilo da página do quiz

Define:

Layout do container principal

Timer e contagem de perguntas

Área da imagem

Pergunta e alternativas

Estilos de:

Alternativa correta (verde)

Alternativa errada (vermelho)

Destaque da alternativa certa quando o usuário erra

O CSS também deixa margens e espaçamentos consistentes.

5. script.js — Lógica do Quiz


Aqui está toda a lógica do funcionamento do quiz.

Principais funções:

  iniciarPergunta()

*Mostra a pergunta atual, cria os botões, reinicia o timer e atualiza a contagem.


  iniciarTimer()

*Controla a contagem regressiva.
Se o tempo zerar:

*Passa para a próxima questão automaticamente.


  responder()

*Executada quando o usuário clica em uma alternativa:

*Desabilita todos os botões

*Destaca a alternativa escolhida

*Marca resposta correta/errada

*Aguarda 2 segundos e avança para a próxima pergunta


  mostrarResultado()

*Substitui todo o conteúdo mostrando:

*Pontuação total

*Número de perguntas respondidas



Como executar o projeto:


*Baixe todos os arquivos

*Mantenha as pastas exatamente como estão

*Abra o arquivo index.html no navegador

*Clique em "Iniciar Quiz"

*Responda as perguntas!

Não é necessário instalar nada.
