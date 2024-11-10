const allQuestions = [
  {
    question: 'Sobre o período da escravidão no Brasil é correto afirmar:',
    options: [
      'Os negros formavam suas comunidades isoladas.',
      'Os negros formavam suas comunidades nos engenhos de açúcar.',
      'Os negros formavam suas comunidades nos centros das cidades.',
      'Os negros formavam suas comunidades em espaços abertos.',
    ],
    correctAnswer: 0,
    explanation:
      'Durante a escravidão, os negros que fugiam formavam comunidades isoladas chamadas quilombos.',
  },
  {
    question:
      'Esses povos eram chamados de _____________________, palavra que se refere àqueles que não tinham moradia fixa e por isso se mudavam de acordo com a oferta de alimentos e com o clima de cada lugar.',
    options: ['Pré-história.', 'Sedentários.', 'Paleolítico.', 'Nômades.'],
    correctAnswer: 3,
    explanation:
      'Nômades são pessoas que não têm moradia fixa e se mudam de lugar em lugar.',
  },
  {
    question:
      'Quais eram os utensílios utilizados pelos primeiros grupos humanos?',
    options: [
      'Faca, rodas, pontas de lanças.',
      'Somente facas e espadas.',
      'Somente raspadores.',
      'Machados, facas e outros instrumentos pontiagudos.',
    ],
    correctAnswer: 3,
    explanation:
      'Os primeiros humanos usavam ferramentas simples como machados e facas para caçar e coletar.',
  },
  {
    question:
      'Para obter boas condições de vida, o homem neolítico procurava moradia próxima aos rios com a intenção de:',
    options: [
      'Utilizar a terra fértil para a agricultura.',
      'Porque eles acreditavam ser uma área fértil.',
      'Pescar com mais facilidade.',
      'Pegar água com mais facilidade para preparar os alimentos.',
    ],
    correctAnswer: 0,
    explanation:
      'Porque perto dos rios a terra é fértil, boa para plantar alimentos.',
  },
  {
    question:
      'A agricultura marcou o início da civilização, pois graças a ela os seres humanos deixaram de ser nômades e se tornaram sedentários. O crescimento da agricultura contribuiu para:',
    options: [
      'A criação de animais domésticos.',
      'A descoberta do fogo e o nomadismo dos seres humanos.',
      'O surgimento da prática do comércio, atividade diferenciada que ainda não existia.',
      'A mecanização do campo.',
    ],
    correctAnswer: 0,
    explanation:
      'Com a agricultura, as pessoas começaram a criar animais domésticos para ajudar e fornecer alimentos.',
  },
  {
    question:
      'Por que na pré-história os povos se instalavam nas margens dos rios?',
    options: [
      'Porque viviam em bandos e ajudavam uns aos outros na obtenção de alimentos.',
      'Para coletar frutos, raízes e ovos.',
      'Para fabricar machados, facas e outros instrumentos pontiagudos.',
      'Para desenvolver a agricultura.',
    ],
    correctAnswer: 3,
    explanation:
      'Porque perto dos rios podiam plantar e colher alimentos com mais facilidade.',
  },
  {
    question:
      'Qual foi o principal objetivo das Grandes Navegações no século XV?',
    options: [
      'Descobrir novas terras para colonizar.',
      'Encontrar uma rota marítima para as Índias.',
      'Espalhar a religião cristã pelo mundo.',
      'Provar que a Terra era redonda.',
    ],
    correctAnswer: 1,
    explanation:
      'Os europeus queriam chegar às Índias navegando para conseguir especiarias.',
  },
  {
    question: 'Quem foi o descobridor oficial do Brasil?',
    options: [
      'Pedro Álvares Cabral.',
      'Cristóvão Colombo.',
      'Vasco da Gama.',
      'Fernão de Magalhães.',
    ],
    correctAnswer: 0,
    explanation: 'Pedro Álvares Cabral chegou ao Brasil em 1500.',
  },
  {
    question:
      'Qual foi a principal atividade econômica no Brasil durante o período colonial?',
    options: [
      'A extração de pau-brasil.',
      'A mineração de ouro.',
      'O cultivo de cana-de-açúcar.',
      'A produção de café.',
    ],
    correctAnswer: 2,
    explanation: 'A cana-de-açúcar era cultivada e exportada para a Europa.',
  },
  {
    question: 'O que foi a Inconfidência Mineira?',
    options: [
      'Um movimento de independência no Rio de Janeiro.',
      'Uma revolta de escravos em São Paulo.',
      'Uma tentativa de independência em Minas Gerais.',
      'Uma festa popular em Minas Gerais.',
    ],
    correctAnswer: 2,
    explanation:
      'A Inconfidência Mineira foi um movimento que queria a independência de Minas Gerais do Brasil colonial.',
  },
  {
    question: 'Quem proclamou a independência do Brasil em 1822?',
    options: [
      'Dom Pedro I.',
      'Dom Pedro II.',
      'Tiradentes.',
      'Getúlio Vargas.',
    ],
    correctAnswer: 0,
    explanation:
      "Dom Pedro I proclamou a independência do Brasil com o 'Grito do Ipiranga'.",
  },
  {
    question: 'O que foi a Lei Áurea, assinada em 1888?',
    options: [
      'A lei que proibiu a imigração.',
      'A lei que aboliu a escravidão no Brasil.',
      'A lei que declarou a independência do Brasil.',
      'A lei que criou a primeira constituição brasileira.',
    ],
    correctAnswer: 1,
    explanation: 'A Lei Áurea acabou com a escravidão no Brasil.',
  },
  {
    question: 'Quem assinou a Lei Áurea?',
    options: [
      'Princesa Isabel.',
      'Dom Pedro I.',
      'Dom Pedro II.',
      'Getúlio Vargas.',
    ],
    correctAnswer: 0,
    explanation: 'A Princesa Isabel assinou a Lei Áurea em 1888.',
  },
  {
    question: 'Qual país europeu colonizou o Brasil?',
    options: ['Espanha.', 'Inglaterra.', 'Portugal.', 'França.'],
    correctAnswer: 2,
    explanation: 'Portugal foi o país que colonizou o Brasil.',
  },
  {
    question: 'O que os indígenas faziam antes da chegada dos europeus?',
    options: [
      'Viviam em cidades grandes.',
      'Praticavam agricultura e caça.',
      'Construíam estradas e pontes.',
      'Já usavam armas de fogo.',
    ],
    correctAnswer: 1,
    explanation: 'Os indígenas cultivavam plantas e caçavam para se alimentar.',
  },
  {
    question:
      'O que representou a chegada da família real portuguesa ao Brasil em 1808?',
    options: [
      'A transferência da capital para o Rio de Janeiro.',
      'A independência do Brasil.',
      'A abolição da escravidão.',
      'A descoberta do ouro em Minas Gerais.',
    ],
    correctAnswer: 0,
    explanation:
      'A família real mudou a capital para o Rio de Janeiro e trouxe mudanças importantes.',
  },
  {
    question: 'Quem foi Tiradentes?',
    options: [
      'Um líder da Inconfidência Mineira.',
      'O primeiro presidente do Brasil.',
      'Um explorador português.',
      'Um imperador do Brasil.',
    ],
    correctAnswer: 0,
    explanation: 'Tiradentes foi um dos líderes da Inconfidência Mineira.',
  },
  {
    question: 'Qual foi a primeira capital do Brasil?',
    options: ['Rio de Janeiro.', 'São Paulo.', 'Salvador.', 'Brasília.'],
    correctAnswer: 2,
    explanation: 'Salvador foi a primeira capital do Brasil.',
  },
  {
    question: 'O que foi o descobrimento do Brasil?',
    options: [
      'A chegada dos portugueses às terras que hoje são o Brasil.',
      'A construção de Brasília.',
      'A independência do Brasil.',
      'A abolição da escravidão.',
    ],
    correctAnswer: 0,
    explanation:
      'Em 1500, os portugueses chegaram ao território que hoje é o Brasil.',
  },
  {
    question: 'Em que ano o Brasil se tornou uma república?',
    options: ['1822.', '1888.', '1889.', '1500.'],
    correctAnswer: 2,
    explanation:
      'Em 1889, o Brasil deixou de ser um império e se tornou uma república.',
  },
  {
    question:
      'Quem foi o primeiro presidente do Brasil após a proclamação da república?',
    options: [
      'Getúlio Vargas.',
      'Marechal Deodoro da Fonseca.',
      'Dom Pedro II.',
      'Juscelino Kubitschek.',
    ],
    correctAnswer: 1,
    explanation:
      'Marechal Deodoro da Fonseca foi o primeiro presidente do Brasil após a proclamação da república em 1889.',
  },
];
var questions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 8);
