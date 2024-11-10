const allQuestions = [
  {
    question:
      'Quando estamos com saúde, temos disposição para comer, nadar, brincar, estudar e realizar muitas atividades. A energia de que precisamos para essas tarefas conseguimos adquirir com:',
    options: [
      'Refrigerantes.',
      'A água que mata a sede.',
      'Uma alimentação bem equilibrada.',
      'As vacinas que tomamos.',
    ],
    correctAnswer: 2,
    explanation:
      'Porque uma alimentação equilibrada nos fornece a energia necessária para realizar nossas atividades.',
  },
  {
    question:
      'Quando jogo meu pião no chão e ele roda em torno dele mesmo, faz lembrar o movimento que a Terra faz em volta dela mesma. Este movimento permite a ocorrência dos dias e das noites. Conhecemos este movimento como:',
    options: ['Eclipse.', 'Acomodação.', 'Rotação.', 'Órbita.'],
    correctAnswer: 2,
    explanation:
      'A rotação é o movimento que a Terra faz ao girar em torno de si mesma, causando o dia e a noite.',
  },
  {
    question:
      'Uma fonte de energia é de onde uma energia surge. Atualmente, o ser humano explora diferentes fontes de energia, como o sol, o vento e a água. As energias produzidas pelo sol e pelo vento são chamadas:',
    options: [
      'Energia nuclear e energia eólica.',
      'Energia hidroelétrica e energia atômica.',
      'Energia solar e energia eólica.',
      'Energia eólica e energia hidroelétrica.',
    ],
    correctAnswer: 2,
    explanation:
      'A energia produzida pelo sol é chamada de energia solar, e a produzida pelo vento é chamada de energia eólica.',
  },
  {
    question:
      'A biosfera inclui todos os ecossistemas que estão presentes desde as altas montanhas até o fundo do mar. As três principais camadas que compõem a biosfera são:',
    options: [
      'Geosfera, criosfera e exosfera.',
      'Endosfera, astenosfera e litosfera.',
      'Ecosfera, hidrosfera e geosfera.',
      'Litosfera, atmosfera e hidrosfera.',
    ],
    correctAnswer: 3,
    explanation:
      'A biosfera é composta pela litosfera (terra), hidrosfera (água) e atmosfera (ar).',
  },
  {
    question:
      'A biosfera apresenta uma natureza dinâmica em sua composição, com todos os seus elementos interagindo e modificando-se mutuamente. Um exemplo dessa dinâmica é:',
    options: [
      'O deslocamento das massas de ar, provocando as chuvas.',
      'O choque entre placas tectônicas, gerando terremotos.',
      'A ação das chuvas, interferindo no relevo e na vegetação.',
      'O escoamento dos rios, que deságuam nas áreas oceânicas.',
    ],
    correctAnswer: 2,
    explanation:
      'As chuvas podem modificar o relevo e afetar as plantas, mostrando como os elementos da biosfera interagem.',
  },
  {
    question:
      'A estrutura interna do nosso planeta é dividida em partes. No manto há um material muito quente e pastoso formado por rochas derretidas que recebe o nome de:',
    options: ['Magma.', 'Lava.', 'Crosta terrestre.', 'Ferro.'],
    correctAnswer: 0,
    explanation:
      'O magma é o material derretido e quente que fica no manto da Terra.',
  },
  {
    question:
      'Há vários vulcões no nosso planeta, e quando eles entram em erupção liberam gases, cinzas e um material viscoso e quente chamado de:',
    options: ['Magma.', 'Núcleo.', 'Crosta terrestre.', 'Lava.'],
    correctAnswer: 3,
    explanation: 'Quando o magma sai do vulcão, chamamos de lava.',
  },
  {
    question:
      'Sobre os recursos naturais renováveis e não-renováveis, marque a alternativa correta. São recursos naturais renováveis:',
    options: [
      'Água, solo, ouro e vegetais.',
      'Água, solo, ar e petróleo.',
      'Ouro, ferro, solo e petróleo.',
      'Vegetais, solo, ar e água.',
    ],
    correctAnswer: 3,
    explanation:
      'Vegetais, solo, ar e água são recursos que podem ser renovados se usados corretamente.',
  },
  {
    question:
      'Os recursos naturais renováveis podem se esgotar se forem usados de forma predatória. Assinale a alternativa que indica uma medida de preservação e manutenção desses recursos:',
    options: [
      'Ampliação das áreas de cultivo do solo.',
      'Implantação de sistemas de irrigação sem controle.',
      'Uso de agrotóxicos e fertilizantes com muita intensidade nas lavouras.',
      'Diminuição do consumo e reaproveitamento dos materiais recicláveis.',
    ],
    correctAnswer: 3,
    explanation:
      'Diminuir o consumo e reciclar ajuda a preservar os recursos naturais renováveis.',
  },
  {
    question: 'Qual é o astro que é o centro do nosso sistema solar?',
    options: ['A Lua.', 'O Sol.', 'A Terra.', 'Marte.'],
    correctAnswer: 1,
    explanation: 'O Sol é a estrela no centro do nosso sistema solar.',
  },
  {
    question:
      'Qual é o gás essencial para a respiração humana encontrado na atmosfera?',
    options: ['Hidrogênio.', 'Gás carbônico.', 'Oxigênio.', 'Nitrogênio.'],
    correctAnswer: 2,
    explanation: 'O oxigênio é o gás que precisamos para respirar.',
  },
  {
    question: 'Qual dos seguintes é um animal mamífero?',
    options: ['Sapo.', 'Águia.', 'Cachorro.', 'Cobra.'],
    correctAnswer: 2,
    explanation:
      'O cachorro é um mamífero, pois tem pelos e alimenta seus filhotes com leite.',
  },
  {
    question:
      'A água muda de estado físico quando aquecida ou resfriada. Quando a água passa do estado líquido para o gasoso, isso é chamado de:',
    options: ['Fusão.', 'Solidificação.', 'Evaporação.', 'Condensação.'],
    correctAnswer: 2,
    explanation: 'A evaporação é quando a água líquida se transforma em vapor.',
  },
  {
    question: 'Qual é o maior órgão do corpo humano?',
    options: ['Coração.', 'Pulmão.', 'Pele.', 'Fígado.'],
    correctAnswer: 2,
    explanation:
      'A pele é o maior órgão do nosso corpo, cobrindo toda a superfície.',
  },
  {
    question: 'Qual destes é um planeta do sistema solar?',
    options: ['Plutão.', 'Estrela Polar.', 'Saturno.', 'Lua.'],
    correctAnswer: 2,
    explanation: 'Saturno é um planeta conhecido por seus anéis.',
  },
  {
    question:
      'O ciclo da água envolve vários processos. A queda de água em forma de chuva é chamada de:',
    options: ['Evaporação.', 'Precipitação.', 'Infiltração.', 'Transpiração.'],
    correctAnswer: 1,
    explanation:
      'A precipitação é quando a água cai das nuvens em forma de chuva.',
  },
  {
    question: 'Qual é a função das raízes nas plantas?',
    options: [
      'Realizar a fotossíntese.',
      'Absorver água e nutrientes do solo.',
      'Produzir sementes.',
      'Atrair polinizadores.',
    ],
    correctAnswer: 1,
    explanation: 'As raízes absorvem água e nutrientes para a planta.',
  },
  {
    question: 'Qual destes é um exemplo de fonte de energia não renovável?',
    options: [
      'Petróleo.',
      'Energia solar.',
      'Energia eólica.',
      'Energia hidrelétrica.',
    ],
    correctAnswer: 0,
    explanation:
      'O petróleo é um recurso que pode acabar um dia e não se renova rapidamente.',
  },
  {
    question:
      'Qual é o processo pelo qual as plantas utilizam luz solar para produzir alimento?',
    options: ['Respiração.', 'Fotossíntese.', 'Transpiração.', 'Digestão.'],
    correctAnswer: 1,
    explanation:
      'A fotossíntese é o processo pelo qual as plantas produzem seu próprio alimento.',
  },
  {
    question: 'Os animais que se alimentam somente de plantas são chamados de:',
    options: ['Carnívoros.', 'Onívoros.', 'Herbívoros.', 'Decompositores.'],
    correctAnswer: 2,
    explanation: 'Herbívoros são animais que comem apenas plantas.',
  },
];
var questions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 8);
