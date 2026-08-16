import { Module } from '../types';

export const pythonModulesData: Module[] = [
  // ==========================================
  // PYTHON NÍVEL 1: FUNDAMENTOS & SINTAXE (INICIANTE)
  // ==========================================
  {
    id: 'py-module-1',
    trackId: 'python',
    unitNumber: 1,
    levelTag: 'Iniciante',
    title: 'Fundamentos & Sintaxe Python',
    subtitle: 'Variables, Data Types, Print & Indentation',
    description: 'Aprenda os blocos fundamentais da linguagem Python: variáveis, tipos de dados primitivos e a regra sagrada de indentação.',
    themeColor: '#38bdf8', // Light Blue / Python Cyan
    accentColor: '#0284c7',
    icon: 'Code',
    lessons: [
      {
        id: 'py-lesson-1-1',
        title: 'Variáveis & Tipos de Dados',
        subtitle: 'Variable, String, Integer, Float, Boolean & Print',
        xpReward: 20,
        conceptPills: [
          {
            id: 'cp-py-vars',
            term: 'Variable & Data Types',
            phonetic: '/ˈveə.ri.ə.bəl/ & /ˈdeɪ.tə taɪps/',
            category: 'Python & Código',
            translation: 'Variável & Tipos de Dados',
            itExplanation: 'Uma "Variable" é uma caixinha na memória com um nome onde guardamos um valor. Em Python, os tipos básicos são: `str` (texto), `int` (número inteiro), `float` (número decimal) e `bool` (True/False).',
            whyItMatters: 'Na automação de GTI, você guarda IPs de servidores, nomes de usuários e contadores de tickets em variáveis.',
            exampleSentenceEn: 'server_ip = "192.168.1.1" # string data type',
            exampleSentencePt: 'server_ip = "192.168.1.1" # tipo de dado texto (string)',
            keyTakeaway: 'String = Texto entre aspas; Int = Inteiro; Float = Decimal; Bool = Verdadeiro/Falso.',
            codeSnippet: 'server_name = "srv-production-01"\ncpu_cores = 8\nis_active = True\nprint(f"Server {server_name} has {cpu_cores} cores.")'
          },
          {
            id: 'cp-py-indentation',
            term: 'Indentation',
            phonetic: '/ˌɪn.denˈteɪ.ʃən/',
            category: 'Python & Código',
            translation: 'Indentação / Recuo de Código (4 espaços)',
            itExplanation: 'No Python, a indentação (espaço no início da linha) define quais comandos pertencem a um bloco (como dentro de um if ou função). Em outras linguagens usam-se chaves `{}`.',
            whyItMatters: 'Um erro comum de iniciantes é o "IndentationError". O padrão oficial do Python é usar 4 espaços.',
            exampleSentenceEn: 'Proper indentation is syntactically mandatory in Python.',
            exampleSentencePt: 'A indentação correta é sintaticamente obrigatória em Python.',
            keyTakeaway: 'Indentação = 4 espaços que organizam a hierarquia do código.',
            codeSnippet: 'if is_active:\n    print("Server is online") # 4 espaços de indentação'
          }
        ],
        exercises: [
          {
            id: 'ex-py-1-1-1',
            type: 'multiple_choice',
            prompt: 'Qual tipo de dado em Python representa o valor de status `True` ou `False` de um servidor?',
            conceptTerm: 'Boolean',
            audioPronunciation: 'Boolean data type',
            options: [
              'Boolean (bool)',
              'String (str)',
              'Integer (int)',
              'Float (float)'
            ],
            correctIndex: 0,
            explanation: 'Boolean (`bool`) representa valores lógicos binários: `True` (Verdadeiro) ou `False` (Falso).'
          },
          {
            id: 'ex-py-1-1-2',
            type: 'match_pairs',
            prompt: 'Combine cada tipo de dado Python com seu exemplo no mundo de TI:',
            pairs: [
              { id: 'p1', english: 'str (String)', portuguese: '"Database_Server_01"' },
              { id: 'p2', english: 'int (Integer)', portuguese: '404 (Código de Erro)' },
              { id: 'p3', english: 'float (Float)', portuguese: '99.95 (Percentual de Uptime)' },
              { id: 'p4', english: 'bool (Boolean)', portuguese: 'True (Status Ativo)' }
            ]
          },
          {
            id: 'ex-py-1-1-3',
            type: 'fill_blank',
            prompt: 'Complete o script Python para exibir o nome do servidor no terminal:',
            sentenceBefore: 'server_name = "Cloud-Host-1";',
            sentenceAfter: '(server_name)',
            options: ['print', 'input', 'return', 'def'],
            correctAnswer: 'print',
            translation: 'Exibir no console a variável server_name.',
            explanation: 'A função `print()` é usada para imprimir saídas e mensagens no terminal.'
          }
        ]
      },
      {
        id: 'py-lesson-1-2',
        title: 'Condicionais & Tomada de Decisão',
        subtitle: 'if, elif, else & Comparison Operators',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-py-conditionals',
            term: 'Conditionals (if, elif, else)',
            phonetic: '/kənˈdɪʃ.ən.əlz/',
            category: 'Python & Código',
            translation: 'Estruturas Condicionais (Se, Senão Se, Senão)',
            itExplanation: 'Permite que o programa tome decisões lógicas baseadas em comparações (`==`, `!=`, `>`, `<`, `>=`, `<=`). Se a condição for verdadeira, executa o bloco indentado.',
            whyItMatters: 'Scripts de monitoramento de TI usam condicionais para disparar alertas quando a CPU ultrapassa 90%.',
            exampleSentenceEn: 'If CPU usage exceeds 90%, send an alert to the IT administrator.',
            exampleSentencePt: 'Se o uso de CPU exceder 90%, envie um alerta para o administrador de TI.',
            keyTakeaway: 'if = Se; elif = Senão se; else = Caso contrário.',
            codeSnippet: 'cpu_usage = 92\nif cpu_usage > 90:\n    print("CRITICAL ALERT: High CPU!")\nelif cpu_usage > 75:\n    print("WARNING: Elevated load")\nelse:\n    print("Normal operation")'
          }
        ],
        exercises: [
          {
            id: 'ex-py-1-2-1',
            type: 'multiple_choice',
            prompt: 'Qual palavra-chave em Python é usada para verificar uma condição alternativa intermediária?',
            conceptTerm: 'elif',
            audioPronunciation: 'else if keyword in Python',
            options: [
              'elif',
              'else if',
              'otherwise',
              'then'
            ],
            correctIndex: 0,
            explanation: 'Python contrai a expressão "else if" na palavra-chave `elif`.'
          },
          {
            id: 'ex-py-1-2-2',
            type: 'sentence_builder',
            prompt: 'Ordene a instrução condicional em Python:',
            portugueseTranslation: 'Se o servidor estiver offline, reinicie o serviço.',
            scrambledWords: ['print("Restart")', 'if is_offline:', '    service()'],
            correctSentence: ['if is_offline:', '    print("Restart")', 'service()'],
            audioPronunciation: 'if is offline print restart service'
          }
        ]
      }
    ]
  },

  // ==========================================
  // PYTHON NÍVEL 2: COLEÇÕES & FUNÇÕES (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'py-module-2',
    trackId: 'python',
    unitNumber: 2,
    levelTag: 'Intermediário',
    title: 'Listas, Dicionários & Funções',
    subtitle: 'Lists, Dictionaries, Loops & Functions (def)',
    description: 'Aprenda a estruturar dados complexos com Listas e Dicionários, iterar com Loops e criar funções reutilizáveis modulares.',
    themeColor: '#10b981', // Emerald Green
    accentColor: '#047857',
    icon: 'Terminal',
    lessons: [
      {
        id: 'py-lesson-2-1',
        title: 'Listas, Dicionários & Loops',
        subtitle: 'List, Dict, for in, append() & key-value',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-py-lists-dicts',
            term: 'Lists & Dictionaries (Dict)',
            phonetic: '/lɪsts/ & /ˈdɪk.ʃən.ər.iz/',
            category: 'Python & Código',
            translation: 'Listas Ordenadas & Dicionários Chave-Valor',
            itExplanation: 'Uma `list` é uma sequência ordenada de itens entre colchetes `["web1", "web2"]`. Um `dict` armazena pares de chave e valor entre chaves `{"hostname": "srv1", "ip": "10.0.0.1"}`.',
            whyItMatters: 'APIs modernas e respostas em formato JSON se transformam diretamente em dicionários e listas no Python.',
            exampleSentenceEn: 'Iterate through the list of servers using a for loop.',
            exampleSentencePt: 'Percorra a lista de servidores utilizando um laço for.',
            keyTakeaway: 'List = Coleção ordenada [1, 2, 3]; Dict = Chave-valor {"chave": "valor"}.',
            codeSnippet: 'servers = ["srv-app", "srv-db", "srv-cache"]\nfor server in servers:\n    print(f"Checking health of {server}...")'
          }
        ],
        exercises: [
          {
            id: 'ex-py-2-1-1',
            type: 'multiple_choice',
            prompt: 'Como adicionamos um novo elemento ao final de uma lista em Python?',
            conceptTerm: 'append()',
            audioPronunciation: 'List append method',
            options: [
              'servers.append("srv-backup")',
              'servers.add("srv-backup")',
              'servers.push("srv-backup")',
              'servers.insert_end("srv-backup")'
            ],
            correctIndex: 0,
            explanation: 'O método `.append()` insere o novo item no final da lista em Python.'
          },
          {
            id: 'ex-py-2-1-2',
            type: 'match_pairs',
            prompt: 'Associe os métodos e tipos de coleções:',
            pairs: [
              { id: 'p1', english: 'servers.append("srv3")', portuguese: 'Adiciona item no fim da lista' },
              { id: 'p2', english: 'len(servers)', portuguese: 'Retorna a quantidade de itens' },
              { id: 'p3', english: 'dict["key"]', portuguese: 'Acessa o valor pela chave' },
              { id: 'p4', english: 'for item in list:', portuguese: 'Laço que percorre cada elemento' }
            ]
          }
        ]
      },
      {
        id: 'py-lesson-2-2',
        title: 'Funções & Reutilização de Código',
        subtitle: 'def, parameters, return & docstrings',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-py-functions',
            term: 'Function (def & return)',
            phonetic: '/ˈfʌŋk.ʃən/',
            category: 'Python & Código',
            translation: 'Função / Bloco Reutilizável',
            itExplanation: 'Uma função é definida com a palavra `def`. Ela recebe parâmetros de entrada, executa comandos e devolve uma resposta com a palavra `return`.',
            whyItMatters: 'Seguir o princípio DRY (Don\'t Repeat Yourself): escreva uma função de backup uma vez e use em 100 servidores diferentes.',
            exampleSentenceEn: 'Define a function to calculate SLA availability percentage.',
            exampleSentencePt: 'Defina uma função para calcular a porcentagem de disponibilidade do SLA.',
            keyTakeaway: 'def = Define a função; return = Devolve o resultado processado.',
            codeSnippet: 'def calculate_sla(uptime_hours, total_hours):\n    availability = (uptime_hours / total_hours) * 100\n    return round(availability, 2)\n\nprint(calculate_sla(718, 720)) # 99.72%'
          }
        ],
        exercises: [
          {
            id: 'ex-py-2-2-1',
            type: 'fill_blank',
            prompt: 'Complete a definição da função em Python:',
            sentenceBefore: '',
            sentenceAfter: 'check_server_status(ip_address):\n    return True',
            options: ['def', 'func', 'function', 'create'],
            correctAnswer: 'def',
            translation: 'Definir a função check_server_status.',
            explanation: 'A palavra-chave `def` (de *define*) é usada para criar funções em Python.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // PYTHON NÍVEL 3: ERROS, ARQUIVOS & MÓDULOS (INTERMEDIÁRIO/AVANÇADO)
  // ==========================================
  {
    id: 'py-module-3',
    trackId: 'python',
    unitNumber: 3,
    levelTag: 'Intermediário',
    title: 'Erros, Arquivos & Módulos',
    subtitle: 'try, except, open(), JSON, pip & venv',
    description: 'Construa scripts profissionais: trate falhas com elegância (try/except), manipule arquivos de log/JSON e gerencie pacotes com pip.',
    themeColor: '#8b5cf6', // Violet
    accentColor: '#6d28d9',
    icon: 'Package',
    lessons: [
      {
        id: 'py-lesson-3-1',
        title: 'Tratamento de Exceções & Falhas',
        subtitle: 'try, except, finally & raise',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-py-try-except',
            term: 'Exception Handling (try & except)',
            phonetic: '/ɪkˈsep.ʃən ˈhænd.lɪŋ/',
            category: 'Python & Código',
            translation: 'Tratamento de Erros e Exceções',
            itExplanation: 'O bloco `try` tenta executar um comando arriscado (como conectar a um banco ou baixar um arquivo). Se der erro, o bloco `except` captura a falha sem travar o programa.',
            whyItMatters: 'Scripts de GTI nunca podem travar silenciosamente. Usamos try/except para capturar falhas de rede e registrar em logs de auditoria.',
            exampleSentenceEn: 'Use try and except blocks to prevent connection crashes.',
            exampleSentencePt: 'Use blocos try e except para evitar quedas por falha de conexão.',
            keyTakeaway: 'try = Tenta executar; except = Trata o erro se falhar; finally = Executa sempre no final.',
            codeSnippet: 'try:\n    connect_to_database("db.internal")\nexcept ConnectionError as e:\n    print(f"Database offline! Logging incident: {e}")\nfinally:\n    print("Cleanup connections complete.")'
          }
        ],
        exercises: [
          {
            id: 'ex-py-3-1-1',
            type: 'multiple_choice',
            prompt: 'Qual bloco de código em Python sempre será executado ao final, mesmo que ocorra um erro?',
            conceptTerm: 'finally',
            audioPronunciation: 'finally block in Python',
            options: [
              'finally',
              'except',
              'catch',
              'always'
            ],
            correctIndex: 0,
            explanation: 'O bloco `finally` é executado incondicionalmente, ideal para fechar conexões e arquivos.'
          },
          {
            id: 'ex-py-3-1-2',
            type: 'match_pairs',
            prompt: 'Combine os blocos de tratamento de erros:',
            pairs: [
              { id: 'p1', english: 'try', portuguese: 'Tenta executar o código' },
              { id: 'p2', english: 'except Exception as e', portuguese: 'Captura e trata o erro' },
              { id: 'p3', english: 'finally', portuguese: 'Executa sempre no encerramento' },
              { id: 'p4', english: 'raise ValueError()', portuguese: 'Dispara um erro manualmente' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // PYTHON NÍVEL 4: AUTOMAÇÃO GTI & APIS (AVANÇADO)
  // ==========================================
  {
    id: 'py-module-4',
    trackId: 'python',
    unitNumber: 4,
    levelTag: 'Avançado',
    title: 'Automação para GTI, APIs & Pandas',
    subtitle: 'requests, HTTP REST, JSON & Data Analysis',
    description: 'O ápice da programação para GTI: consuma APIs de chamados (ServiceNow/Jira), automatize rotinas do sistema e processe relatórios com Pandas.',
    themeColor: '#f59e0b', // Amber / Gold
    accentColor: '#d97706',
    icon: 'Zap',
    lessons: [
      {
        id: 'py-lesson-4-1',
        title: 'Consumo de APIs REST & JSON',
        subtitle: 'requests.get(), status_code & response.json()',
        xpReward: 35,
        conceptPills: [
          {
            id: 'cp-py-requests-api',
            term: 'REST API & requests library',
            phonetic: '/ˌɑːr.iː.esˈtiː ˈeɪ.piːˈaɪ/ & /rɪˈkwests/',
            category: 'Python & Código',
            translation: 'API REST & Biblioteca de Requisições HTTP',
            itExplanation: 'A biblioteca `requests` permite que seu script Python envie requisições `GET` e `POST` para outros softwares (como Zabbix, Jira ou AWS) e receba dados em formato JSON.',
            whyItMatters: 'Automatiza abertura de chamados, consulta de alarmes e integração de sistemas em tempo real.',
            exampleSentenceEn: 'The Python script queries the ServiceNow API to list open tickets.',
            exampleSentencePt: 'O script Python consulta a API do ServiceNow para listar chamados abertos.',
            keyTakeaway: 'requests.get(url) = Busca dados; response.status_code == 200 = Sucesso; response.json() = Converte em dicionário.',
            codeSnippet: 'import requests\n\nresponse = requests.get("https://api.internal/tickets")\nif response.status_code == 200:\n    tickets = response.json()\n    print(f"Total open tickets: {len(tickets)}")'
          }
        ],
        exercises: [
          {
            id: 'ex-py-4-1-1',
            type: 'multiple_choice',
            prompt: 'Qual código de status HTTP retornado por uma API indica que a requisição foi atendida com SUCESSO?',
            conceptTerm: 'HTTP 200 OK',
            audioPronunciation: 'HTTP status 200 OK',
            options: [
              '200 (OK)',
              '404 (Not Found)',
              '500 (Internal Server Error)',
              '403 (Forbidden)'
            ],
            correctIndex: 0,
            explanation: 'O status `200 OK` é a resposta padrão universal de sucesso no protocolo HTTP.'
          },
          {
            id: 'ex-py-4-1-2',
            type: 'match_pairs',
            prompt: 'Conecte os conceitos de integração via API:',
            pairs: [
              { id: 'p1', english: 'HTTP GET', portuguese: 'Buscar / ler informações da API' },
              { id: 'p2', english: 'HTTP POST', portuguese: 'Criar / enviar novo registro ou chamado' },
              { id: 'p3', english: 'response.status_code', portuguese: 'Código de status da resposta (ex: 200)' },
              { id: 'p4', english: 'response.json()', portuguese: 'Converte JSON para dicionário Python' }
            ]
          },
          {
            id: 'ex-py-4-1-3',
            type: 'scenario',
            role: 'Analista de Automação de GTI',
            contextTitle: 'Script de Fechamento Automático de Chamados',
            situation: 'Seu script Python precisa consultar chamados de suporte inativos há 30 dias na API do Service Desk e atualizar o status para Fechado.',
            prompt: 'Qual a sequência lógica em Python para executar essa automação?',
            options: [
              {
                id: 's1',
                text: 'Execute requests.get() to fetch old tickets, iterate over the list, and send requests.post() to update each ticket status to Closed.',
                isCorrect: true,
                feedback: 'Perfeito! Você buscou os dados via GET, iterou na lista e atualizou cada chamado via POST.'
              },
              {
                id: 's2',
                text: 'Delete all servers and turn off the internet router.',
                isCorrect: false,
                feedback: 'Incorreto. Isso destruiria a infraestrutura.'
              }
            ]
          }
        ]
      }
    ]
  }
];
