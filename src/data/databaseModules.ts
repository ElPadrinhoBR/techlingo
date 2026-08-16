import { Module } from '../types';

export const databaseModulesData: Module[] = [
  // ==========================================
  // UNIDADE 1: MODELAGEM & CONCEITOS RELACIONAIS (INICIANTE)
  // ==========================================
  {
    id: 'db-module-1',
    trackId: 'database',
    unitNumber: 1,
    levelTag: 'Iniciante',
    title: 'Modelagem de Dados, Tabelas & Chaves',
    subtitle: 'Relational vs NoSQL, Primary Key, Foreign Key & Schema',
    description: 'Aprenda como os bancos de dados corporativos organizam informações, estruturam tabelas e garantem integridade relacional.',
    themeColor: '#0ea5e9', // Sky Blue
    accentColor: '#0284c7',
    icon: 'Database',
    lessons: [
      {
        id: 'db-lesson-1-1',
        title: 'Bancos Relacionais & Chaves (PK / FK)',
        subtitle: 'Relational DB, Table, Primary Key, Foreign Key & Schema',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-db-relational-keys',
            term: 'Primary Key (PK) & Foreign Key (FK)',
            phonetic: '/ˈpraɪ.mər.i kiː/ & /ˈfɒr.ən kiː/',
            category: 'Banco de Dados & SQL',
            translation: 'Chave Primária & Chave Estrangeira',
            itExplanation: 'A "Primary Key" é o identificador único e exclusivo de cada linha em uma tabela (ex: `user_id` ou CPF). A "Foreign Key" é o campo que aponta para a chave primária de outra tabela para criar um relacionamento formal (ex: associar um pedido ao cliente).',
            whyItMatters: 'Chaves estrangeiras garantem a integridade referencial, impedindo que existam pedidos órfãos sem um cliente cadastrado.',
            exampleSentenceEn: 'The order table uses customer_id as a foreign key referencing the primary key in customers.',
            exampleSentencePt: 'A tabela de pedidos usa customer_id como chave estrangeira referenciando a chave primária em clientes.',
            keyTakeaway: 'Primary Key = Identificador exclusivo da linha; Foreign Key = Ponte de relacionamento entre tabelas.',
            codeSnippet: 'CREATE TABLE Customers (\n    customer_id INT PRIMARY KEY,\n    name VARCHAR(100)\n);\n\nCREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT FOREIGN KEY REFERENCES Customers(customer_id)\n);'
          },
          {
            id: 'cp-db-rel-nosql',
            term: 'Relational (SQL) vs. NoSQL',
            phonetic: '/rɪˈleɪ.ʃən.əl/ vs /ˈnoʊ.es.kjuː.el/',
            category: 'Banco de Dados & SQL',
            translation: 'Bancos Relacionais vs. Bancos Não-Relacionais',
            itExplanation: 'Bancos Relacionais (PostgreSQL, MySQL, Oracle, SQL Server) guardam dados estruturados em tabelas com colunas e esquemas rígidos. Bancos NoSQL (MongoDB, DynamoDB, Redis) guardam documentos flexíveis em JSON, chave-valor ou grafos.',
            whyItMatters: 'Gestores de TI escolhem bancos SQL para sistemas financeiros e de ERP (alta consistência) e NoSQL para catálogos com esquemas dinâmicos e big data.',
            exampleSentenceEn: 'Financial transactions require ACID-compliant relational databases.',
            exampleSentencePt: 'Transações financeiras exigem bancos de dados relacionais compatíveis com ACID.',
            keyTakeaway: 'SQL = Tabelas estruturadas e rígidas; NoSQL = Documentos flexíveis em JSON.'
          }
        ],
        exercises: [
          {
            id: 'ex-db-1-1-1',
            type: 'multiple_choice',
            prompt: 'O que garante que cada linha de uma tabela no banco de dados tenha uma identificação única exclusiva?',
            conceptTerm: 'Primary Key',
            audioPronunciation: 'Primary key in database',
            options: [
              'Primary Key (Chave Primária)',
              'Foreign Key (Chave Estrangeira)',
              'Downtime Log',
              'HTML Tag'
            ],
            correctIndex: 0,
            explanation: 'A Chave Primária (Primary Key) identifica de forma única e exclusiva cada registro em uma tabela.'
          },
          {
            id: 'ex-db-1-1-2',
            type: 'match_pairs',
            prompt: 'Associe os conceitos de banco de dados:',
            pairs: [
              { id: 'p1', english: 'Primary Key (PK)', portuguese: 'Identificador único do registro' },
              { id: 'p2', english: 'Foreign Key (FK)', portuguese: 'Chave que conecta duas tabelas' },
              { id: 'p3', english: 'Schema', portuguese: 'Estrutura formal do banco de dados' },
              { id: 'p4', english: 'NoSQL', portuguese: 'Banco não-relacional flexível (JSON)' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 2: CONSULTAS SQL & FILTROS (INICIANTE)
  // ==========================================
  {
    id: 'db-module-2',
    trackId: 'database',
    unitNumber: 2,
    levelTag: 'Iniciante',
    title: 'Consultas SQL & Filtros (DQL)',
    subtitle: 'SELECT, WHERE, ORDER BY, LIMIT & LIKE',
    description: 'Aprenda a linguagem universal dos dados (SQL): faça consultas, filtre chamados críticos e ordene resultados.',
    themeColor: '#6366f1', // Indigo
    accentColor: '#4338ca',
    icon: 'Terminal',
    lessons: [
      {
        id: 'db-lesson-2-1',
        title: 'Consultas SQL Básicas & Filtros',
        subtitle: 'SELECT, FROM, WHERE, ORDER BY & LIMIT',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-db-crud-select',
            term: 'SELECT, WHERE & ORDER BY',
            phonetic: '/sɪˈlekt/ & /weər/',
            category: 'Banco de Dados & SQL',
            translation: 'Selecionar, Onde (Filtro) & Ordenar Por',
            itExplanation: 'O comando `SELECT` extrai dados de uma tabela, `FROM` indica de qual tabela buscar, `WHERE` filtra as condições (ex: `status = "Open"`) e `ORDER BY` ordena os resultados.',
            whyItMatters: 'Gestores de TI usam queries SQL para extrair relatórios de faturamento, chamados pendentes e auditoria de logs.',
            exampleSentenceEn: 'Execute a SELECT query to list all unresolved Sev-1 support tickets.',
            exampleSentencePt: 'Execute uma consulta SELECT para listar todos os chamados de suporte Sev-1 não resolvidos.',
            keyTakeaway: 'SELECT = O que buscar; FROM = De onde; WHERE = Filtro de condição.',
            codeSnippet: 'SELECT ticket_id, priority, created_at \nFROM SupportTickets \nWHERE priority = "High" AND status = "Open" \nORDER BY created_at DESC;'
          }
        ],
        exercises: [
          {
            id: 'ex-db-2-1-1',
            type: 'fill_blank',
            prompt: 'Complete a consulta SQL para buscar chamados abertos:',
            sentenceBefore: '',
            sentenceAfter: '* FROM Tickets WHERE status = "Open";',
            options: ['SELECT', 'CREATE', 'DROP', 'INSERT'],
            correctAnswer: 'SELECT',
            translation: 'Selecionar todos os campos da tabela Tickets onde o status for Open.',
            explanation: 'O comando `SELECT` é a instrução padrão de consulta e recuperação de dados em SQL.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 3: MANIPULAÇÃO DE DADOS - DML (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'db-module-3',
    trackId: 'database',
    unitNumber: 3,
    levelTag: 'Intermediário',
    title: 'Manipulação de Dados (DML)',
    subtitle: 'INSERT INTO, UPDATE, DELETE & TRUNCATE',
    description: 'Aprenda a inserir novos registros corporativos, atualizar dados com segurança e gerenciar remoções sem afetar a integridade.',
    themeColor: '#10b981', // Emerald
    accentColor: '#047857',
    icon: 'Terminal',
    lessons: [
      {
        id: 'db-lesson-3-1',
        title: 'Inserção e Atualização de Registros',
        subtitle: 'INSERT INTO, UPDATE, SET, DELETE & WHERE safety',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-db-dml-ops',
            term: 'INSERT, UPDATE & DELETE with WHERE clause',
            phonetic: '/ɪnˈsɜːt/ /ʌpˈdeɪt/ /dɪˈliːt/',
            category: 'Banco de Dados & SQL',
            translation: 'Inserir, Atualizar & Deletar com Cláusula WHERE',
            itExplanation: '`INSERT INTO` cria novas linhas. `UPDATE ... SET` altera valores existentes. `DELETE FROM` remove registros. **Cuidado vital em TI:** Nunca execute um `UPDATE` ou `DELETE` sem a cláusula `WHERE`, caso contrário toda a tabela da empresa será alterada ou apagada!',
            whyItMatters: 'Compreender o perigo do `UPDATE sem WHERE` é o maior mandamento de segurança de dados de qualquer analista de TI.',
            exampleSentenceEn: 'Always execute a SELECT check before running an UPDATE with a WHERE condition in production.',
            exampleSentencePt: 'Sempre execute uma checagem com SELECT antes de rodar um UPDATE com condição WHERE em produção.',
            keyTakeaway: 'INSERT = Criar; UPDATE = Alterar; DELETE = Remover. SEMPRE use WHERE!'
          }
        ],
        exercises: [
          {
            id: 'ex-db-3-1-1',
            type: 'multiple_choice',
            prompt: 'O que acontece se você executar o comando `DELETE FROM Customers;` sem colocar a cláusula `WHERE`?',
            conceptTerm: 'DELETE without WHERE',
            audioPronunciation: 'Delete statement without where clause',
            options: [
              'Todos os registros de todos os clientes da tabela serão apagados permanentemente!',
              'Apenas o primeiro cliente será apagado',
              'O banco de dados pedirá uma senha de confirmação',
              'O computador do usuário será reiniciado'
            ],
            correctIndex: 0,
            explanation: 'Sem a cláusula `WHERE`, o comando DELETE afeta e apaga todas as linhas da tabela incondicionalmente.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 4: CRUZAMENTO DE TABELAS (JOINS - INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'db-module-4',
    trackId: 'database',
    unitNumber: 4,
    levelTag: 'Intermediário',
    title: 'Cruzamento de Tabelas com JOINs',
    subtitle: 'INNER JOIN, LEFT JOIN, RIGHT JOIN & Aliases',
    description: 'Cruze dados de clientes, compras, chamados e servidores corporativos com junções relacionais em SQL.',
    themeColor: '#8b5cf6', // Violet
    accentColor: '#6d28d9',
    icon: 'Layers',
    lessons: [
      {
        id: 'db-lesson-4-1',
        title: 'INNER JOIN vs. LEFT JOIN',
        subtitle: 'INNER JOIN, LEFT JOIN & Relacionamentos',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-db-joins',
            term: 'INNER JOIN vs. LEFT JOIN',
            phonetic: '/ˈɪn.ər dʒɔɪn/ vs /ˈleft dʒɔɪn/',
            category: 'Banco de Dados & SQL',
            translation: 'Junção Interna vs. Junção à Esquerda',
            itExplanation: '`INNER JOIN` retorna apenas as linhas que possuem correspondência exata em ambas as tabelas. `LEFT JOIN` retorna todas as linhas da tabela da esquerda, mesmo que não haja correspondência na tabela da direita.',
            whyItMatters: 'Fundamental para cruzar relatórios complexos, como relacionar nomes de clientes com suas respectivas compras e chamados.',
            exampleSentenceEn: 'Use an INNER JOIN to correlate employee names with their department IDs.',
            exampleSentencePt: 'Use um INNER JOIN para correlacionar nomes de colaboradores com os IDs de seus departamentos.',
            keyTakeaway: 'INNER JOIN = Apenas onde há match nos dois lados; LEFT JOIN = Todos da esquerda + matches da direita.',
            codeSnippet: 'SELECT Orders.order_id, Customers.name, Orders.total_amount\nFROM Orders\nINNER JOIN Customers ON Orders.customer_id = Customers.customer_id;'
          }
        ],
        exercises: [
          {
            id: 'ex-db-4-1-1',
            type: 'multiple_choice',
            prompt: 'Qual tipo de JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas?',
            conceptTerm: 'INNER JOIN',
            audioPronunciation: 'Inner join in SQL',
            options: [
              'INNER JOIN',
              'FULL OUTER JOIN',
              'CROSS JOIN',
              'DROP TABLE'
            ],
            correctIndex: 0,
            explanation: '`INNER JOIN` filtra a interseção exata de registros comuns em ambas as tabelas.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 5: FUNÇÕES AGREGADAS & GROUP BY (INTERMEDIÁRIO/AVANÇADO)
  // ==========================================
  {
    id: 'db-module-5',
    trackId: 'database',
    unitNumber: 5,
    levelTag: 'Intermediário',
    title: 'Funções Agregadas & GROUP BY',
    subtitle: 'COUNT, SUM, AVG, GROUP BY & HAVING para Relatórios',
    description: 'Transforme dados brutos em inteligência gerencial: calcule médias de SLA, conte chamados por categoria e totalize faturamento.',
    themeColor: '#f59e0b', // Amber / Gold
    accentColor: '#d97706',
    icon: 'TrendingUp',
    lessons: [
      {
        id: 'db-lesson-5-1',
        title: 'Agrupamentos & Métricas com GROUP BY',
        subtitle: 'COUNT(), AVG(), SUM(), GROUP BY & HAVING',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-db-aggregations',
            term: 'GROUP BY & Aggregation Functions',
            phonetic: '/ɡruːp baɪ/ & /ˌæɡ.rɪˈɡeɪ.ʃən/',
            category: 'Banco de Dados & SQL',
            translation: 'Agrupar Por & Funções de Agregação (Contagem, Média, Soma)',
            itExplanation: 'Funções de agregação (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) calculam totais sobre um conjunto de linhas. O comando `GROUP BY` agrupa esses cálculos por categorias (ex: total de chamados por analista). O `HAVING` filtra os grupos calculados.',
            whyItMatters: 'É a base dos relatórios executivos de BI e dashboards de SLA que a diretoria analisa mensalmente.',
            exampleSentenceEn: 'The IT manager used GROUP BY to calculate average resolution time per support tier.',
            exampleSentencePt: 'O gestor de TI usou GROUP BY para calcular o tempo médio de resolução por nível de suporte.',
            keyTakeaway: 'GROUP BY = Condensa linhas em grupos de resumo; COUNT() = Conta registros; AVG() = Calcula média.',
            codeSnippet: 'SELECT department, COUNT(ticket_id) AS total_tickets, AVG(resolution_hours) AS avg_time\nFROM SupportTickets\nGROUP BY department\nHAVING COUNT(ticket_id) > 10;'
          }
        ],
        exercises: [
          {
            id: 'ex-db-5-1-1',
            type: 'multiple_choice',
            prompt: 'Qual cláusula SQL é usada para filtrar dados APÓS a execução de um agrupamento com GROUP BY?',
            conceptTerm: 'HAVING',
            audioPronunciation: 'HAVING clause in SQL',
            options: [
              'HAVING',
              'WHERE',
              'LIKE',
              'ORDER BY'
            ],
            correctIndex: 0,
            explanation: '`HAVING` é a cláusula de filtro aplicada aos grupos agregados (enquanto `WHERE` filtra linhas antes do agrupamento).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 6: TRANSAÇÕES, ACID & CONCORRÊNCIA (AVANÇADO)
  // ==========================================
  {
    id: 'db-module-6',
    trackId: 'database',
    unitNumber: 6,
    levelTag: 'Avançado',
    title: 'Transações, Propriedades ACID & Concorrência',
    subtitle: 'ACID Properties, Transactions, COMMIT, ROLLBACK & Locks',
    description: 'Compreenda os pilares de segurança: transações bancárias no padrão tudo-ou-nada, isolamento e controle de concorrência.',
    themeColor: '#ef4444', // Red
    accentColor: '#b91c1c',
    icon: 'ShieldCheck',
    lessons: [
      {
        id: 'db-lesson-6-1',
        title: 'Propriedades ACID & Transações',
        subtitle: 'Atomicity, Consistency, Isolation, Durability, COMMIT & ROLLBACK',
        xpReward: 35,
        conceptPills: [
          {
            id: 'cp-db-acid',
            term: 'ACID Properties & Transactions',
            phonetic: '/ˈæs.ɪd ˈprɒp.ə.tiz/',
            category: 'Banco de Dados & SQL',
            translation: 'Propriedades ACID (Atomicidade, Consistência, Isolamento, Durabilidade)',
            itExplanation: 'Conjunto de 4 garantias que tornam transações bancárias e corporativas 100% confiáveis: ou tudo é executado com sucesso (COMMIT), ou tudo é desfeito se der erro (ROLLBACK).',
            whyItMatters: 'Se a energia cair no meio de uma transferência de dinheiro, o banco de dados desfaz a operação para que o dinheiro não desapareça.',
            exampleSentenceEn: 'ACID properties ensure financial databases never record incomplete transactions.',
            exampleSentencePt: 'As propriedades ACID garantem que bancos de dados financeiros nunca gravem transações incompletas.',
            keyTakeaway: 'Atomicidade = Tudo ou nada; Durabilidade = Dados salvos permanentemente.',
            codeSnippet: 'BEGIN TRANSACTION;\nUPDATE Accounts SET balance = balance - 100 WHERE account_id = 1;\nUPDATE Accounts SET balance = balance + 100 WHERE account_id = 2;\nCOMMIT;'
          }
        ],
        exercises: [
          {
            id: 'ex-db-6-1-1',
            type: 'multiple_choice',
            prompt: 'O que significa a "Atomicidade" (o "A" do ACID) em transações de banco de dados?',
            conceptTerm: 'Atomicity',
            audioPronunciation: 'Atomicity in ACID properties',
            options: [
              'A transação é indivisível: todas as etapas são concluídas com sucesso, ou tudo é revertido (tudo ou nada)',
              'O banco de dados usa energia nuclear para processar dados',
              'Os dados são apagados após 24 horas',
              'O banco de dados roda apenas em computadores portáteis'
            ],
            correctIndex: 0,
            explanation: 'Atomicidade garante que a transação opere no modelo "tudo ou nada": se uma instrução falhar, todas as anteriores são desfeitas.'
          },
          {
            id: 'ex-db-6-1-2',
            type: 'match_pairs',
            prompt: 'Conecte as letras da sigla ACID com seus significados:',
            pairs: [
              { id: 'p1', english: 'Atomicity (Atomicidade)', portuguese: 'Tudo ou nada na transação' },
              { id: 'p2', english: 'Consistency (Consistência)', portuguese: 'Respeita todas as regras e chaves' },
              { id: 'p3', english: 'Isolation (Isolamento)', portuguese: 'Transações concorrentes não se misturam' },
              { id: 'p4', english: 'Durability (Durabilidade)', portuguese: 'Dados gravados persistem mesmo se faltar luz' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 7: PERFORMANCE, ÍNDICES & OTIMIZAÇÃO (AVANÇADO)
  // ==========================================
  {
    id: 'db-module-7',
    trackId: 'database',
    unitNumber: 7,
    levelTag: 'Avançado',
    title: 'Performance, Índices & Otimização (EXPLAIN)',
    subtitle: 'B-Tree Indexes, EXPLAIN PLAN, Query Tuning & Replication',
    description: 'Otimize bancos corporativos: reduza o tempo de consultas de minutos para milissegundos com índices e planos de execução.',
    themeColor: '#38bdf8', // Sky Blue
    accentColor: '#0284c7',
    icon: 'Zap',
    lessons: [
      {
        id: 'db-lesson-7-1',
        title: 'Indexação B-Tree & Otimização com EXPLAIN',
        subtitle: 'B-Tree Index, Full Table Scan, EXPLAIN PLAN & Query Tuning',
        xpReward: 40,
        conceptPills: [
          {
            id: 'cp-db-indexes',
            term: 'Database Indexing & EXPLAIN PLAN',
            phonetic: '/ˈdeɪ.tə.beɪs ˈɪn.deks.ɪŋ/ & /ɪkˈspleɪn plæn/',
            category: 'Banco de Dados & SQL',
            translation: 'Indexação de Banco de Dados & Plano de Execução',
            itExplanation: 'Índices (estruturas em árvore B-Tree) permitem encontrar linhas instantaneamente sem varrer a tabela inteira (Full Table Scan). O comando `EXPLAIN` detalha o custo de CPU e tempo estimado para rodar a query.',
            whyItMatters: 'Criar índices corretos reduz o tempo de relatórios de 10 minutos para 2 milissegundos em tabelas com 50 milhões de registros.',
            exampleSentenceEn: 'The DBA used EXPLAIN PLAN to identify that a missing index caused the high CPU load.',
            exampleSentencePt: 'O DBA usou o EXPLAIN PLAN para identificar que a falta de um índice causava a alta carga de CPU.',
            keyTakeaway: 'Índice = Acha dados em O(log n); EXPLAIN = Diagnóstico de velocidade da consulta.'
          }
        ],
        exercises: [
          {
            id: 'ex-db-7-1-1',
            type: 'multiple_choice',
            prompt: 'Como se chama a operação lenta e perigosa em que o banco de dados é forçado a ler todas as páginas do disco por falta de índice?',
            conceptTerm: 'Full Table Scan',
            audioPronunciation: 'Full table scan in database',
            options: [
              'Full Table Scan (Varredura Completa de Tabela)',
              'Quick Sort',
              'Binary Search',
              'Atomic Commit'
            ],
            correctIndex: 0,
            explanation: 'Full Table Scan ocorre quando não há índice apropriado e o banco precisa ler todas as linhas do disco, causando lentidão.'
          }
        ]
      }
    ]
  }
];
