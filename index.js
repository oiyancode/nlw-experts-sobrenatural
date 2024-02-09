const perguntas = [
  {
    pergunta: "Qual é o nome dos irmãos protagonistas de Sobrenatural?",
    respostas: [
      "Dean e Sam",
      "John e Bobby",
      "Michael e Lucifer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do carro que os irmãos Winchester dirigem?",
    respostas: [
      "Camaro",
      "Impala",
      "Mustang"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do anjo que se torna um aliado importante dos irmãos?",
    respostas: [
      "Gabriel",
      "Castiel",
      "Uriel"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o apelido dado a Sam por outros caçadores?",
    respostas: [
      "Gigante Gentil",
      "Demoníaco",
      "Salvador"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a cidade natal dos irmãos Winchester?",
    respostas: [
      "Lawrence",
      "Springfield",
      "Boulder"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do pai dos irmãos Winchester?",
    respostas: [
      "Jack",
      "John",
      "Jeremy"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o principal vilão na quinta temporada de Sobrenatural?",
    respostas: [
      "Lúcifer",
      "Azazel",
      "Crowley"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a profissão dos irmãos Winchester?",
    respostas: [
      "Cientistas",
      "Caçadores de Demônios",
      "Advogados"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da mãe dos irmãos Winchester?",
    respostas: [
      "Mary",
      "Sarah",
      "Linda"
    ],
    correta: 0
  },
  {
    pergunta: "O que os irmãos Winchester caçam principalmente?",
    respostas: [
      "Fantasmas",
      "Vampiros",
      "Demônios"
    ],
    correta: 2
  }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laco de repeticao
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
 quiz.appendChild(quizItem)
}