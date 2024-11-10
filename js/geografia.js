const allQuestions = [
  {
    question:
      'A cidade brasileira que apresenta o maior número de habitantes é:',
    options: ['São Paulo.', 'Amazonas.', 'Maranhão.', 'Tocantins.'],
    correctAnswer: 0,
    explanation: 'São Paulo é a cidade mais populosa do Brasil.',
  },
  {
    question:
      'A cidade do Rio de Janeiro recebe todos os anos milhares de pessoas de diversas partes do país e do mundo. O estado atrai muitos visitantes por sua beleza natural, eventos como o carnaval, e sua importância histórica. Em que classificação se encaixa a cidade do Rio de Janeiro?',
    options: [
      'Cidade turística.',
      'Cidade comercial.',
      'Cidade industrial.',
      'Cidade religiosa.',
    ],
    correctAnswer: 0,
    explanation:
      'Porque o Rio de Janeiro atrai muitos turistas por suas belezas naturais e eventos como o carnaval.',
  },
  {
    question:
      'O _______________ é um dos principais problemas ambientais no Brasil que acontece desde a chegada dos portugueses em 1500. Das alternativas abaixo, a que preenche corretamente o espaço é:',
    options: ['Efeito estufa.', 'Desmatamento.', 'Poluição.', 'Assoreamento.'],
    correctAnswer: 1,
    explanation:
      'O desmatamento é o corte de árvores e a destruição de florestas, um problema que ocorre no Brasil desde 1500.',
  },
  {
    question:
      'Em 19 de agosto de 2019, moradores de São Paulo ficaram assustados com o final da tarde que escureceu grande parte da cidade. Esse fenômeno foi resultado das queimadas que aconteceram na região amazônica. Sobre as queimadas, é incorreto afirmar:',
    options: [
      'Uma das consequências das queimadas é a mudança da temperatura e umidade do solo.',
      'As queimadas somente acontecem de maneira intencional, ou seja, por pessoas que provocam os incêndios.',
      'As queimadas intensificam o efeito estufa e o aquecimento global.',
      'As queimadas trazem alguns benefícios tais como a limpeza e a fertilização do solo.',
    ],
    correctAnswer: 1,
    explanation:
      'Nem todas as queimadas são provocadas por pessoas; algumas acontecem naturalmente, como por raios.',
  },
  {
    question: 'O maior país da América do Sul em território é:',
    options: ['Argentina.', 'Brasil.', 'Colômbia.', 'Chile.'],
    correctAnswer: 1,
    explanation: 'O Brasil é o maior país da América do Sul em tamanho.',
  },
  {
    question: 'O Rio Amazonas é famoso por ser:',
    options: [
      'O rio mais poluído do mundo.',
      'O rio mais curto do mundo.',
      'O rio com maior volume de água do mundo.',
      'O rio mais profundo do mundo.',
    ],
    correctAnswer: 2,
    explanation:
      'O Rio Amazonas tem o maior volume de água de todos os rios do mundo.',
  },
  {
    question: 'A capital do Brasil é:',
    options: ['Rio de Janeiro.', 'São Paulo.', 'Brasília.', 'Salvador.'],
    correctAnswer: 2,
    explanation: 'Brasília é a capital do Brasil desde 1960.',
  },
  {
    question: 'O Pantanal é conhecido por ser:',
    options: [
      'Um grande deserto.',
      'A maior planície alagável do mundo.',
      'Uma grande cordilheira.',
      'Uma região de tundra.',
    ],
    correctAnswer: 1,
    explanation: 'O Pantanal é a maior área alagada contínua do planeta.',
  },
  {
    question: 'O que separa o continente africano do europeu é o:',
    options: [
      'Rio Nilo.',
      'Mar Mediterrâneo.',
      'Oceano Atlântico.',
      'Oceano Índico.',
    ],
    correctAnswer: 1,
    explanation: 'O Mar Mediterrâneo fica entre a África e a Europa.',
  },
  {
    question:
      'A Mata Atlântica é um tipo de floresta encontrada principalmente em:',
    options: [
      'Regiões costeiras do Brasil.',
      'Regiões desérticas do Brasil.',
      'Regiões geladas do Brasil.',
      'Regiões montanhosas da Europa.',
    ],
    correctAnswer: 0,
    explanation:
      'A Mata Atlântica é uma floresta que fica perto do litoral brasileiro.',
  },
  {
    question: 'O ponto mais alto do Brasil é:',
    options: [
      'Pico da Neblina.',
      'Monte Everest.',
      'Pico das Agulhas Negras.',
      'Morro do Pão de Açúcar.',
    ],
    correctAnswer: 0,
    explanation: 'O Pico da Neblina é a montanha mais alta do Brasil.',
  },
  {
    question: 'O principal bioma que predomina na região Norte do Brasil é:',
    options: ['Cerrado.', 'Mata Atlântica.', 'Amazônia.', 'Caatinga.'],
    correctAnswer: 2,
    explanation: 'A Amazônia é a floresta que predomina na região Norte.',
  },
  {
    question: 'Qual é o oceano que banha a costa leste do Brasil?',
    options: [
      'Oceano Pacífico.',
      'Oceano Atlântico.',
      'Oceano Índico.',
      'Oceano Ártico.',
    ],
    correctAnswer: 1,
    explanation: 'O Oceano Atlântico fica a leste do Brasil.',
  },
  {
    question: 'As estações do ano ocorrem devido:',
    options: [
      'À forma plana da Terra.',
      'Ao movimento de rotação da Terra.',
      'À inclinação do eixo da Terra e sua translação ao redor do Sol.',
      'À distância fixa entre a Terra e o Sol.',
    ],
    correctAnswer: 2,
    explanation:
      'A inclinação do eixo da Terra e sua volta ao redor do Sol causam as estações.',
  },
  {
    question: 'Qual destes países não faz fronteira com o Brasil?',
    options: ['Uruguai.', 'Paraguai.', 'Chile.', 'Peru.'],
    correctAnswer: 2,
    explanation:
      'O Chile não faz fronteira com o Brasil; fica do outro lado da Cordilheira dos Andes.',
  },
  {
    question:
      'A linha imaginária que divide a Terra em hemisfério norte e sul é chamada de:',
    options: [
      'Meridiano de Greenwich.',
      'Trópico de Câncer.',
      'Linha do Equador.',
      'Trópico de Capricórnio.',
    ],
    correctAnswer: 2,
    explanation: 'A Linha do Equador divide a Terra em norte e sul.',
  },
  {
    question: 'O que é uma ilha?',
    options: [
      'Um pedaço de terra cercado de água por todos os lados.',
      'Uma montanha muito alta.',
      'Um rio que deságua no mar.',
      'Uma região desértica sem vida.',
    ],
    correctAnswer: 0,
    explanation: 'Uma ilha é terra rodeada de água por todos os lados.',
  },
  {
    question: 'A maior floresta tropical do mundo é:',
    options: [
      'Floresta Amazônica.',
      'Floresta Negra.',
      'Floresta de Sherwood.',
      'Floresta da Tijuca.',
    ],
    correctAnswer: 0,
    explanation: 'A Floresta Amazônica é a maior floresta tropical do mundo.',
  },
  {
    question: 'Qual é a capital da França?',
    options: ['Londres.', 'Paris.', 'Roma.', 'Berlim.'],
    correctAnswer: 1,
    explanation: 'Paris é a capital da França.',
  },
  {
    question: 'O deserto mais seco do mundo é:',
    options: [
      'Deserto do Saara.',
      'Deserto de Gobi.',
      'Deserto da Antártica.',
      'Deserto do Atacama.',
    ],
    correctAnswer: 3,
    explanation: 'O Deserto do Atacama, no Chile, é o mais seco do mundo.',
  },
  {
    question: 'Qual fenômeno natural é responsável por tremer a terra?',
    options: ['Furacão.', 'Tsunami.', 'Terremoto.', 'Eclipse.'],
    correctAnswer: 2,
    explanation:
      'Um terremoto é quando o chão treme devido ao movimento das placas tectônicas.',
  },
];
var questions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 8);
