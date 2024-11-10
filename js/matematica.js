const allQuestions = [
  {
    question:
      'A população de Corumbá, no Mato Grosso do Sul, é de 112 058 habitantes. O número de pessoas que moram em Corumbá escrito por extenso é:',
    options: [
      'Onze mil e cinquenta e oito habitantes.',
      'Cento e doze mil e cinquenta e oito habitantes.',
      'Cento e doze mil e oito habitantes.',
      'Cento e doze mil e cinquenta habitantes.',
    ],
    correctAnswer: 1,
    explanation:
      'Porque 112.058 é lido como cento e doze mil e cinquenta e oito habitantes.',
  },
  {
    question:
      'Estou lendo o capítulo LVII de um livro. Usando os números arábicos/naturais, o número correspondente ao capítulo que estou lendo é:',
    options: ['53', '57', '67', '77'],
    correctAnswer: 1,
    explanation: 'LVII em números romanos equivale a 57.',
  },
  {
    question:
      'O Sr. Francisco é considerado o rei do gado da região de Araguacema. Em uma de suas negociações ele comprou uma fazenda com 34 500 bois. Logo após a compra ele comprou mais 27 500 bois e depois vendeu 9 700 deles. Quantos bois esse fazendeiro tem hoje nessa fazenda?',
    options: ['71 700 bois.', '16 700 bois.', '52 300 bois.', '53 200 bois.'],
    correctAnswer: 2,
    explanation:
      'Ele tinha 34.500 + 27.500 = 62.000 bois. Depois vendeu 9.700, então 62.000 - 9.700 = 52.300 bois.',
  },
  {
    question:
      'Gustavo sempre joga bolinha de gude com seus amigos. Na última semana, ele tinha 2 294 bolinhas de gude. Depois de perder algumas jogadas durante a semana, ele ficou com 1 387 bolinhas de gude. Quantas bolinhas de gude ele perdeu nessa semana?',
    options: [
      '787 bolinhas de gude.',
      '907 bolinhas de gude.',
      '1 681 bolinhas de gude.',
      '3 681 bolinhas de gude.',
    ],
    correctAnswer: 1,
    explanation: 'Ele perdeu 2.294 - 1.387 = 907 bolinhas de gude.',
  },
  {
    question:
      'Bete vai efetuar a operação: 1284 / 2. Acertando a operação, o resultado que ela vai obter será:',
    options: ['602', '642', '604', '624'],
    correctAnswer: 1,
    explanation: '1.284 dividido por 2 é igual a 642.',
  },
  {
    question:
      'Júlia realizou a seguinte multiplicação: 5486 * 3. Qual foi o resultado encontrado por Júlia?',
    options: ['15 448', '15 458', '16 258', '16 458'],
    correctAnswer: 3,
    explanation: '5.486 multiplicado por 3 é igual a 16.458.',
  },
  {
    question:
      'Comprei uma mochila por R$ 43,00. Paguei com a seguinte nota: R$ 50,00. Quanto recebi de troco?',
    options: ['R$ 10,00', 'R$ 9,00', 'R$ 7,00', 'R$ 6,00'],
    correctAnswer: 2,
    explanation: '50 reais menos 43 reais é igual a 7 reais de troco.',
  },
  {
    question: 'A leitura por extenso do numeral 295 988 é:',
    options: [
      'duzentos e cinco mil, novecentos e oitenta e oito.',
      'duzentos e noventa e cinco mil, novecentos e oitenta e oito',
      'duzentos e cinquenta e nove mil, oitocentos e oitenta e nove.',
    ],
    correctAnswer: 1,
    explanation:
      '295.988 é lido como duzentos e noventa e cinco mil, novecentos e oitenta e oito.',
  },
  {
    question: 'Qual o valor relativo do algarismo 8 na 2ª ordem?',
    options: ['800', '8', '80', '8 000'],
    correctAnswer: 2,
    explanation: 'Na segunda ordem (dezenas), o algarismo 8 vale 80.',
  },
  {
    question:
      'Marcos nasceu pesando 3,125 kg. Um mês depois Marcos já estava pesando 1,934 kg a mais. Qual o peso de Marcos um mês depois do seu nascimento?',
    options: ['5,959 kg', '4,059 kg', '1,195 kg', '5,059 kg'],
    correctAnswer: 3,
    explanation:
      '3,125 kg + 1,934 kg = 5,059 kg. Esse é o peso de Marcos após um mês.',
  },
  {
    question:
      'Em sua fazenda o senhor Rodrigues colheu no ano de 2018, 1 234 sacas de soja e no ano de 2019 ele colheu 1 896 sacas de soja. Quantas sacas ele colheu nos dois anos?',
    options: ['2 678 sacas.', '3 130 sacas.', '3 189 sacas.', '4 130 sacas.'],
    correctAnswer: 1,
    explanation: '1.234 sacas + 1.896 sacas = 3.130 sacas nos dois anos.',
  },
  {
    question:
      'A família do meu amigo Jorge é formada pelo pai, a mãe e por ele. Eles pesaram juntos e o ponteiro da balança demonstrava que o peso total era de 193,600 kg. Sabendo que Jorge tem 43,130 kg e sua mãe tem 68,150 kg. Quanto pesa mãe e filho juntos?',
    options: ['101,280 kg', '25,280 kg', '111,280 kg', '304,880 kg'],
    correctAnswer: 2,
    explanation:
      'Jorge e sua mãe juntos pesam 43,130 kg + 68,150 kg = 111,280 kg.',
  },
  {
    question:
      'Paulo quer comprar uma bicicleta que custa R$ 1 359,00. O seu avô lhe deu R$ 805,00. Quanto falta para Paulo conseguir comprar a bicicleta?',
    options: ['R$ 554,00', 'R$ 2 164,00', 'R$ 504,00', 'R$ 1 554,00'],
    correctAnswer: 0,
    explanation:
      '1.359,00 - 805,00 = 554,00. Falta R$ 554,00 para Paulo comprar a bicicleta.',
  },
  {
    question:
      'Dona Maricota foi ao mercado semana passada e fez uma compra de R$ 415,80, essa semana foi novamente, e comprando exatamente os mesmos produtos, pagou R$ 208,56 a mais. Qual foi o valor da compra de Dona Maricota?',
    options: ['R$ 524,54', 'R$ 623,66', 'R$ 624,36', 'R$ 566,20'],
    correctAnswer: 2,
    explanation:
      '415,80 + 208,56 = 624,36. O valor total da compra foi R$ 624,36.',
  },
  {
    question: '580 + ______ = 700',
    options: ['90', '110', '100', '120'],
    correctAnswer: 3,
    explanation: '700 - 580 = 120. Então, 580 + 120 = 700.',
  },
  {
    question:
      'A soma dos dois números é igual a 4.690. Se um número é 1.592, qual é o outro?',
    options: ['5 182', '3 102', '4 078', '3 098'],
    correctAnswer: 3,
    explanation: '4.690 - 1.592 = 3.098. O outro número é 3.098.',
  },
  {
    question:
      'Na adição 825 + 308 + _________ = 1.500, a 1ª parcela é 825, a 2ª parcela 308. Qual é a 3ª parcela?',
    options: ['567', '907', '367', '257'],
    correctAnswer: 2,
    explanation:
      '825 + 308 = 1.133. 1.500 - 1.133 = 367. A terceira parcela é 367.',
  },
  {
    question: 'Qual é o resultado de 9 x 7?',
    options: ['56', '63', '72', '79'],
    correctAnswer: 1,
    explanation: '9 vezes 7 é igual a 63.',
  },
  {
    question:
      'Se Ana tem 45 balas e divide igualmente entre 5 amigos, quantas balas cada um receberá?',
    options: ['5 balas', '9 balas', '8 balas', '7 balas'],
    correctAnswer: 1,
    explanation: '45 dividido por 5 é igual a 9 balas para cada amigo.',
  },
  {
    question: 'Qual é o número que completa a sequência: 2, 4, 6, ___, 10?',
    options: ['7', '8', '9', '12'],
    correctAnswer: 1,
    explanation: 'A sequência aumenta de 2 em 2, então depois do 6 vem o 8.',
  },
  {
    question:
      'João tinha R$ 100,00. Ele gastou R$ 35,00 na padaria e R$ 25,00 no mercado. Quanto sobrou?',
    options: ['R$ 40,00', 'R$ 50,00', 'R$ 60,00', 'R$ 70,00'],
    correctAnswer: 0,
    explanation: '100 - 35 - 25 = 40 reais sobrando.',
  },
  {
    question: 'Qual é a fração que representa metade de um inteiro?',
    options: ['1/4', '1/3', '1/2', '2/3'],
    correctAnswer: 2,
    explanation: '1/2 significa metade de um inteiro.',
  },
];
var questions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 8);
