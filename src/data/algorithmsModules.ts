import { Module } from '../types';

export const algorithmsModulesData: Module[] = [
  // ==========================================
  // UNIDADE 1: PENSAMENTO COMPUTACIONAL & LÓGICA (INICIANTE)
  // ==========================================
  {
    id: 'algo-module-1',
    trackId: 'algorithms',
    unitNumber: 1,
    levelTag: 'Iniciante',
    title: 'Pensamento Computacional & Lógica',
    subtitle: 'Decomposition, Pattern Recognition, Abstraction & Algorithms',
    description: 'Domine os 4 pilares do raciocínio lógico que todo gestor e arquiteto de TI utiliza para resolver problemas complexos.',
    themeColor: '#a855f7', // Purple / Violet
    accentColor: '#7e22ce',
    icon: 'Brain',
    lessons: [
      {
        id: 'algo-lesson-1-1',
        title: 'Os 4 Pilares Fundamentais',
        subtitle: 'Decomposition, Pattern Recognition, Abstraction & Algorithm Design',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-algo-decomp-pattern',
            term: 'Decomposition & Pattern Recognition',
            phonetic: '/ˌdiː.kɒm.pəˈzɪʃ.ən/ & /ˈpæt.ən ˌrek.əɡˈnɪʃ.ən/',
            category: 'Algoritmos & Lógica',
            translation: 'Decomposição & Reconhecimento de Padrões',
            itExplanation: 'Decomposição é quebrar um problema gigante em partes menores e gerenciáveis. Reconhecimento de padrões é identificar semelhanças e tendências em problemas passados para aplicar soluções comprovadas.',
            whyItMatters: 'Gestores de TI usam decomposição para planejar projetos complexos de software e reconhecimento de padrões para mapear causas de incidentes recorrentes.',
            exampleSentenceEn: 'Decomposition allows the team to break down a complex system outage into isolated components.',
            exampleSentencePt: 'A decomposição permite que a equipe divida uma queda de sistema complexa em componentes isolados.',
            keyTakeaway: 'Decomposição = Dividir para conquistar; Padrões = Encontrar similaridades.'
          },
          {
            id: 'cp-algo-abstr-algodesign',
            term: 'Abstraction & Algorithm Design',
            phonetic: '/æbˈstræk.ʃən/ & /ˈæl.ɡə.rɪ.ðəm dɪˈzaɪn/',
            category: 'Algoritmos & Lógica',
            translation: 'Abstração & Projeto de Algoritmos',
            itExplanation: 'Abstração é focar no que é essencial e ignorar detalhes irrelevantes no momento. Algorithm Design é criar uma sequência ordenada e finita de passos lógicos para resolver o problema.',
            whyItMatters: 'A abstração permite criar arquiteturas de alto nível sem se perder nos detalhes técnicos de implementação.',
            exampleSentenceEn: 'Abstraction filters out unnecessary details so developers can design the core algorithm.',
            exampleSentencePt: 'A abstração filtra detalhes desnecessários para que desenvolvedores possam projetar o algoritmo central.',
            keyTakeaway: 'Abstração = Focar no essencial; Algoritmo = Sequência de passos lógicos.'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-1-1-1',
            type: 'multiple_choice',
            prompt: 'Qual pilar do pensamento computacional consiste em quebrar um problema gigante de TI em pequenas partes menores?',
            conceptTerm: 'Decomposition',
            audioPronunciation: 'Decomposition in computational thinking',
            options: [
              'Decomposition (Decomposição)',
              'Abstraction (Abstração)',
              'Pattern Recognition (Reconhecimento de Padrões)',
              'Hard Stop (Parada rígida)'
            ],
            correctIndex: 0,
            explanation: 'Decomposição é a habilidade de quebrar problemas complexos em partes menores e mais fáceis de resolver.'
          },
          {
            id: 'ex-algo-1-1-2',
            type: 'match_pairs',
            prompt: 'Associe os 4 pilares do pensamento computacional aos seus conceitos:',
            pairs: [
              { id: 'p1', english: 'Decomposition', portuguese: 'Dividir o problema em partes menores' },
              { id: 'p2', english: 'Pattern Recognition', portuguese: 'Identificar similaridades e repetições' },
              { id: 'p3', english: 'Abstraction', portuguese: 'Focar no essencial e ignorar detalhes' },
              { id: 'p4', english: 'Algorithm Design', portuguese: 'Criar passos lógicos sequenciais' }
            ]
          }
        ]
      },
      {
        id: 'algo-lesson-1-2',
        title: 'Pseudocódigo & Fluxogramas',
        subtitle: 'Pseudocode, Flowcharts, Inputs, Outputs & Decision Branching',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-algo-pseudocode',
            term: 'Pseudocode & Flowcharts',
            phonetic: '/ˈsjuː.dəʊ.koʊd/ & /ˈfloʊ.tʃɑːts/',
            category: 'Algoritmos & Lógica',
            translation: 'Pseudocódigo & Fluxogramas de Processos',
            itExplanation: 'Pseudocódigo é uma descrição informal da lógica em linguagem humana (sem sintaxe rígida de programação). Fluxogramas são diagramas visuais com caixas e setas que mapeiam decisões e fluxos.',
            whyItMatters: 'Gestores de TI usam fluxogramas (BPMN) para mapear processos de atendimento e desenhar regras de negócios antes de contratar desenvolvedores.',
            exampleSentenceEn: 'Drafting pseudocode helps validate business logic before writing actual Python code.',
            exampleSentencePt: 'Rascunhar pseudocódigo ajuda a validar a lógica de negócios antes de escrever código Python real.',
            keyTakeaway: 'Pseudocódigo = Lógica em texto simples; Fluxograma = Mapeamento visual de decisões.'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-1-2-1',
            type: 'multiple_choice',
            prompt: 'O que é "Pseudocódigo" no planejamento de sistemas de TI?',
            conceptTerm: 'Pseudocode',
            audioPronunciation: 'Pseudocode',
            options: [
              'Uma escrita estruturada em linguagem humana que descreve os passos do algoritmo antes da programação',
              'Um vírus que rouba senhas de computadores',
              'Um cabo de rede que conecta servidores',
              'Uma mensagem de erro de compilação'
            ],
            correctIndex: 0,
            explanation: 'Pseudocódigo é a representação textual legível da lógica do algoritmo.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 2: ESTRUTURAS DE DADOS LINEARES (INICIANTE)
  // ==========================================
  {
    id: 'algo-module-2',
    trackId: 'algorithms',
    unitNumber: 2,
    levelTag: 'Iniciante',
    title: 'Estruturas de Dados Lineares',
    subtitle: 'Arrays, Stacks (LIFO), Queues (FIFO) & Linked Lists',
    description: 'Aprenda como a memória organiza dados: vetores contínuos, pilhas (LIFO), filas de mensagens (FIFO) e listas encadeadas.',
    themeColor: '#3b82f6', // Blue
    accentColor: '#1d4ed8',
    icon: 'Package',
    lessons: [
      {
        id: 'algo-lesson-2-1',
        title: 'Pilhas (Stacks) & Filas (Queues)',
        subtitle: 'Stack (LIFO), Queue (FIFO), Push, Pop, Enqueue & Dequeue',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-algo-stack-queue',
            term: 'Stack (LIFO) vs. Queue (FIFO)',
            phonetic: '/stæk/ vs /kjuː/',
            category: 'Algoritmos & Lógica',
            translation: 'Pilha (Último a entrar, primeiro a sair) vs. Fila (Primeiro a entrar, primeiro a sair)',
            itExplanation: 'Em uma **Stack (Pilha / LIFO)**, o último elemento adicionado é o primeiro a ser removido (`Push`/`Pop`). Em uma **Queue (Fila / FIFO)**, o primeiro elemento que entra é o primeiro a ser processado (`Enqueue`/`Dequeue`).',
            whyItMatters: 'Filas de mensageria (como RabbitMQ e AWS SQS) gerenciam chamados de suporte e e-mails de clientes com lógica FIFO.',
            exampleSentenceEn: 'The IT support ticket system processes customer requests using a FIFO queue structure.',
            exampleSentencePt: 'O sistema de chamados de suporte de TI processa as requisições dos clientes usando uma estrutura de fila FIFO.',
            keyTakeaway: 'Stack = LIFO (Pilha de pratos); Queue = FIFO (Fila de atendimento).'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-2-1-1',
            type: 'multiple_choice',
            prompt: 'Qual estrutura de dados processa os itens no formato FIFO (First In, First Out), onde o primeiro a entrar é o primeiro a ser atendido?',
            conceptTerm: 'Queue',
            audioPronunciation: 'Queue FIFO structure',
            options: [
              'Queue (Fila)',
              'Stack (Pilha)',
              'Recursion',
              'Binary Tree'
            ],
            correctIndex: 0,
            explanation: 'Queue (Fila) opera no modelo FIFO, idêntico a uma fila de banco ou fila de chamados de TI.'
          },
          {
            id: 'ex-algo-2-1-2',
            type: 'match_pairs',
            prompt: 'Associe as estruturas de dados e suas operações:',
            pairs: [
              { id: 'p1', english: 'Stack (LIFO)', portuguese: 'Pilha: Último a entrar, primeiro a sair' },
              { id: 'p2', english: 'Queue (FIFO)', portuguese: 'Fila: Primeiro a chegar, primeiro a sair' },
              { id: 'p3', english: 'Push & Pop', portuguese: 'Operações de empilhar e desempilhar' },
              { id: 'p4', english: 'Enqueue & Dequeue', portuguese: 'Operações de enfileirar e desenfileirar' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 3: ÁRVORES & GRAFOS (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'algo-module-3',
    trackId: 'algorithms',
    unitNumber: 3,
    levelTag: 'Intermediário',
    title: 'Árvores Binárias & Grafos',
    subtitle: 'Binary Trees, BST, Root, Nodes, Edges & Graph Traversal',
    description: 'Compreenda estruturas hierárquicas e redes: Árvores de busca binária (BST), nós, arestas e navegação em redes corporativas.',
    themeColor: '#06b6d4', // Cyan
    accentColor: '#0891b2',
    icon: 'Layers',
    lessons: [
      {
        id: 'algo-lesson-3-1',
        title: 'Árvores de Busca Binária (BST)',
        subtitle: 'Root, Parent, Child, Binary Search Tree & Traversal',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-algo-trees',
            term: 'Binary Search Tree (BST)',
            phonetic: '/ˈbaɪ.nər.i sɜːtʃ triː/',
            category: 'Algoritmos & Lógica',
            translation: 'Árvore de Busca Binária',
            itExplanation: 'Estrutura hierárquica onde cada nó possui no máximo 2 filhos: valores menores vão para a esquerda e valores maiores vão para a direita. O elemento do topo é a raiz (Root).',
            whyItMatters: 'Bancos de dados e sistemas de arquivos utilizam árvores (B-Trees) para indexar e localizar arquivos em milissegundos.',
            exampleSentenceEn: 'Database indexes use tree structures to locate customer records in O(log n) time.',
            exampleSentencePt: 'Índices de bancos de dados usam estruturas de árvore para localizar registros de clientes em tempo O(log n).',
            keyTakeaway: 'BST = Menores à esquerda, maiores à direita; busca logarítmica ultrarrápida.'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-3-1-1',
            type: 'multiple_choice',
            prompt: 'Em uma Árvore de Busca Binária (BST), onde ficam posicionados os valores menores que o nó atual?',
            conceptTerm: 'Binary Search Tree',
            audioPronunciation: 'Binary search tree node',
            options: [
              'No filho da esquerda (Left child)',
              'No filho da direita (Right child)',
              'Na lixeira do sistema operacional',
              'Fora da memória RAM'
            ],
            correctIndex: 0,
            explanation: 'Na regra clássica da BST, todos os valores menores ficam no ramo esquerdo e os maiores no ramo direito.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 4: EFICIÊNCIA, COMPLEXIDADE & BIG-O (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'algo-module-4',
    trackId: 'algorithms',
    unitNumber: 4,
    levelTag: 'Intermediário',
    title: 'Eficiência de Algoritmos & Big-O',
    subtitle: 'Big-O Notation, Time Complexity, Linear & Binary Search',
    description: 'Entenda como medir a velocidade e consumo de memória de softwares para tomar decisões de escala e infraestrutura.',
    themeColor: '#ec4899', // Pink / Rose
    accentColor: '#be185d',
    icon: 'TrendingUp',
    lessons: [
      {
        id: 'algo-lesson-4-1',
        title: 'Notação Big-O & Busca Binária',
        subtitle: 'Big-O Notation, O(1), O(n), O(log n) & Binary Search',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-algo-big-o',
            term: 'Big-O Notation & Time Complexity',
            phonetic: '/bɪɡ oʊ noʊˈteɪ.ʃən/',
            category: 'Algoritmos & Lógica',
            translation: 'Notação Big-O & Complexidade de Tempo',
            itExplanation: 'Big-O mede como o tempo de execução de um algoritmo cresce conforme o volume de dados aumenta. `O(1)` é instantâneo. `O(log n)` é ultra eficiente (Busca Binária). `O(n)` é linear (busca um por um). `O(n²)` fica lento com muitos dados.',
            whyItMatters: 'Um algoritmo mal projetado `O(n²)` derruba servidores quando a empresa atinge 1 milhão de clientes. O gestor precisa exigir algoritmos escaláveis.',
            exampleSentenceEn: 'Binary search operates in O(log n) time complexity, making it ideal for massive datasets.',
            exampleSentencePt: 'A busca binária opera com complexidade de tempo O(log n), tornando-a ideal para volumes massivos de dados.',
            keyTakeaway: 'Big-O = A métrica de eficiência e escala do algoritmo.'
          },
          {
            id: 'cp-algo-binary-search',
            term: 'Linear Search vs. Binary Search',
            phonetic: '/ˈlɪn.i.ər sɜːtʃ/ vs /ˈbaɪ.nər.i sɜːtʃ/',
            category: 'Algoritmos & Lógica',
            translation: 'Busca Linear vs. Busca Binária',
            itExplanation: 'A Busca Linear olha item por item do início ao fim (lenta). A Busca Binária exige que a lista esteja ordenada e corta a lista pela metade a cada tentativa (muito mais rápida).',
            whyItMatters: 'Em 1 bilhão de registros, a busca linear faz até 1 bilhão de comparações; a busca binária faz no máximo 30 comparações!',
            exampleSentenceEn: 'Binary search divides the sorted search space in half at each iteration.',
            exampleSentencePt: 'A busca binária divide o espaço de busca ordenado pela metade a cada iteração.',
            keyTakeaway: 'Busca Linear = Um por um; Busca Binária = Corta pela metade a cada passo.'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-4-1-1',
            type: 'multiple_choice',
            prompt: 'Qual a principal vantagem da Busca Binária (Binary Search) em relação à busca linear em listas ordenadas?',
            conceptTerm: 'Binary Search',
            audioPronunciation: 'Binary search complexity',
            options: [
              'Ela divide a lista pela metade a cada comparação, encontrando dados muito mais rápido com complexidade O(log n)',
              'Ela consome toda a memória do servidor',
              'Ela funciona apenas com listas desordenadas',
              'Ela apaga os dados duplicados automaticamente'
            ],
            correctIndex: 0,
            explanation: 'A busca binária divide o espaço de busca ordenado pela metade sucessivamente, sendo exponencialmente mais veloz.'
          },
          {
            id: 'ex-algo-4-1-2',
            type: 'match_pairs',
            prompt: 'Associe as complexidades Big-O ao seu desempenho:',
            pairs: [
              { id: 'p1', english: 'O(1) - Constant Time', portuguese: 'Tempo constante e instantâneo' },
              { id: 'p2', english: 'O(log n) - Logarithmic', portuguese: 'Alta eficiência (Busca Binária)' },
              { id: 'p3', english: 'O(n) - Linear Time', portuguese: 'Tempo cresce proporcional aos dados' },
              { id: 'p4', english: 'O(n²) - Quadratic Time', portuguese: 'Lento e perigoso para grandes volumes' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 5: ORDENAÇÃO & RECURSÃO (AVANÇADO)
  // ==========================================
  {
    id: 'algo-module-5',
    trackId: 'algorithms',
    unitNumber: 5,
    levelTag: 'Avançado',
    title: 'Algoritmos de Ordenação & Recursão',
    subtitle: 'Divide and Conquer, Merge Sort, Quick Sort & Base Case',
    description: 'Descubra a técnica de Divisão e Conquista: como o Merge Sort e Quick Sort ordenam terabytes e como a recursão opera na memória.',
    themeColor: '#10b981', // Emerald Green
    accentColor: '#047857',
    icon: 'Zap',
    lessons: [
      {
        id: 'algo-lesson-5-1',
        title: 'Recursão & Divisão e Conquista',
        subtitle: 'Recursion, Base Case, Merge Sort & Quick Sort',
        xpReward: 35,
        conceptPills: [
          {
            id: 'cp-algo-recursion-sort',
            term: 'Recursion & Base Case',
            phonetic: '/rɪˈkɜː.ʃən/ & /beɪs keɪs/',
            category: 'Algoritmos & Lógica',
            translation: 'Recursão & Condição de Parada (Caso Base)',
            itExplanation: 'Recursão é quando uma função chama a si mesma para resolver subproblemas menores. O **Base Case (Caso Base)** é a condição obrigatória que encerra a recursão para não estourar a memória (Stack Overflow).',
            whyItMatters: 'Processamento de diretórios de arquivos no servidor e navegação em árvores de permissões usam funções recursivas.',
            exampleSentenceEn: 'A recursive function must always include a base case to prevent a stack overflow error.',
            exampleSentencePt: 'Uma função recursiva deve sempre incluir um caso base para evitar um erro de estouro de pilha.',
            keyTakeaway: 'Recursão = Função que chama a si mesma; Caso Base = Condição de parada obrigatória.'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-5-1-1',
            type: 'multiple_choice',
            prompt: 'O que acontece se uma função recursiva não possuir um Caso Base (Base Case) de parada?',
            conceptTerm: 'Stack Overflow',
            audioPronunciation: 'Stack overflow in recursion',
            options: [
              'Ela entrará em loop infinito até causar um erro de estouro de pilha (Stack Overflow)',
              'O código ficará 100% mais rápido',
              'O servidor fará backup automático',
              'A tela do computador ficará azul imediatamente'
            ],
            correctIndex: 0,
            explanation: 'Sem um caso base, as chamadas recursivas continuam infinitamente até esgotar a memória da pilha de execução (Stack Overflow).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 6: PROGRAMAÇÃO DINÂMICA & GRAFOS (AVANÇADO)
  // ==========================================
  {
    id: 'algo-module-6',
    trackId: 'algorithms',
    unitNumber: 6,
    levelTag: 'Avançado',
    title: 'Programação Dinâmica & Otimização',
    subtitle: 'Dynamic Programming, Memoization, Greedy Algorithms & Dijkstra',
    description: 'O topo da ciência da computação: aprenda memoization (cache de resultados), algoritmos gulosos e roteamento de redes com Dijkstra.',
    themeColor: '#f59e0b', // Amber / Gold
    accentColor: '#d97706',
    icon: 'TrendingUp',
    lessons: [
      {
        id: 'algo-lesson-6-1',
        title: 'Memoization & Algoritmos de Roteamento',
        subtitle: 'Dynamic Programming, Memoization (Cache) & Dijkstra Shortest Path',
        xpReward: 40,
        conceptPills: [
          {
            id: 'cp-algo-dp-memo',
            term: 'Dynamic Programming & Memoization',
            phonetic: '/daɪˈnæm.ɪk ˈproʊ.ɡræm.ɪŋ/ & /ˌmem.oʊ.aɪˈzeɪ.ʃən/',
            category: 'Algoritmos & Lógica',
            translation: 'Programação Dinâmica & Memorização (Cache)',
            itExplanation: 'Técnica de otimização que armazena os resultados de operações caras em cache (Memoization) para nunca precisar recalcular a mesma resposta duas vezes.',
            whyItMatters: 'Roteadores de internet (como BGP e OSPF) e algoritmos de entrega de tráfego usam caminhos mais curtos (Dijkstra) e memoization para alta velocidade.',
            exampleSentenceEn: 'Memoization caches API calculation responses to deliver sub-millisecond latency.',
            exampleSentencePt: 'A memorização armazena respostas de cálculos de API em cache para entregar latência inferior a milissegundos.',
            keyTakeaway: 'Memoization = Guardar o resultado calculado para reuso instantâneo.'
          }
        ],
        exercises: [
          {
            id: 'ex-algo-6-1-1',
            type: 'multiple_choice',
            prompt: 'O que é a técnica de "Memoization" em algoritmos de alta performance?',
            conceptTerm: 'Memoization',
            audioPronunciation: 'Memoization in algorithms',
            options: [
              'Guardar os resultados de funções pesadas em memória cache para evitar recálculos desnecessários',
              'Apagar a memória RAM a cada 10 segundos',
              'Desligar o servidor de banco de dados',
              'Criar arquivos de texto vazios no disco'
            ],
            correctIndex: 0,
            explanation: 'Memoization armazena os resultados de cálculos prévios em cache para devolução instantânea.'
          }
        ]
      }
    ]
  }
];
