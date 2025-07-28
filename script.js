const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você acaba de assistir ao trailer de um filme inovador que promete revolucionar o cinema com efeitos especiais nunca vistos antes. Qual é a sua primeira reação?",
    alternativas: ["Estou muito animado para ver o filme!", "Estou cético sobre a qualidade do roteiro."]
  },
  {
    enunciado: "Após o lançamento, seu professor de artes decide fazer uma análise crítica do filme em sala de aula e pede que você prepare uma apresentação sobre ele. Como você aborda essa tarefa?",
    alternativas: [
      "Assisto ao filme várias vezes e leio análises de críticos especializados para ter uma visão mais profunda.",
      "Baseio minha apresentação nas opiniões dos meus amigos e nas minhas primeiras impressões após uma única sessão."
    ],
  },
  {
    enunciado: "Durante a apresentação, surge um debate sobre o impacto de filmes com alta tecnologia no futuro do cinema. Qual é o seu posicionamento?",
    alternativas: [
      "Defendo que a tecnologia pode abrir novas fronteiras artísticas e melhorar a experiência cinematográfica.",
      "Preocupo-me com a possibilidade de o cinema perder sua essência artística e se tornar apenas um espetáculo técnico."
    ],
  },
  {
    enunciado: "Para ilustrar sua apresentação, você precisa criar uma imagem que represente o tema do filme. Como você procede?",
    alternativas: [
      "Desenvolvo uma imagem utilizando ferramentas de design gráfico como Photoshop.",
      "Utilizo uma cena marcante diretamente do filme como referência para minha criação."
    ],
  },
  {
    enunciado: "Seu grupo de estudos está trabalhando em um projeto sobre a história do cinema. Um dos membros sugere usar trechos de um documentário feito sobre o tema para compor o trabalho. Como você lida com essa sugestão?",
    alternativas: [
      "Apoio a ideia, pois usar trechos de documentários é uma forma válida de contribuir com o trabalho.",
      "Alerto o grupo sobre a importância de verificar a autenticidade das informações e adicionar perspectivas pessoais para evitar plágio."
    ],
  }
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();