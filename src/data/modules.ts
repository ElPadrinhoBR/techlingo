import { Module } from '../types';

export const gtiModulesData: Module[] = [
  // ==========================================
  // UNIDADE 1: INFRAESTRUTURA & REDES (BÁSICO / INICIANTE)
  // ==========================================
  {
    id: 'module-1',
    trackId: 'gti',
    unitNumber: 1,
    levelTag: 'Básico',
    title: 'Infraestrutura & Redes',
    subtitle: 'Cloud & Infrastructure Fundamentals',
    description: 'Aprenda os termos essenciais sobre servidores, conectividade e desempenho que todo gestor de TI discute diariamente.',
    themeColor: '#10b981', // Emerald green
    accentColor: '#059669',
    icon: 'Server',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Servidores & Conexões',
        subtitle: 'Server, Client, Latency, Bandwidth & Downtime',
        xpReward: 20,
        conceptPills: [
          {
            id: 'cp-server-client',
            term: 'Server vs. Client',
            phonetic: '/ˈsɜːrvər/ vs /ˈklaɪənt/',
            category: 'Infra & Cloud',
            translation: 'Servidor vs. Cliente',
            itExplanation: 'O "Server" é o computador central que processa e fornece dados ou serviços. O "Client" é o dispositivo ou aplicativo que solicita esses serviços (como o navegador do usuário).',
            whyItMatters: 'Na gestão de TI, você dimensiona servidores e gerencia acessos de clientes para garantir que o sistema não caia em picos de acesso.',
            exampleSentenceEn: 'The client sends an authentication request to the server.',
            exampleSentencePt: 'O cliente envia uma requisição de autenticação para o servidor.',
            keyTakeaway: 'Server fornece recursos; Client consome recursos.'
          },
          {
            id: 'cp-downtime',
            term: 'Downtime',
            phonetic: '/ˈdaʊn.taɪm/',
            category: 'Infra & Cloud',
            translation: 'Tempo de inatividade / Sistema fora do ar',
            itExplanation: 'É o período em que um sistema, servidor ou serviço fica indisponível para os usuários.',
            whyItMatters: 'Downtime custa dinheiro e reputação para a empresa. Reduzir o downtime é a meta #1 de qualquer gestor de infraestrutura de TI.',
            exampleSentenceEn: 'Unplanned downtime cost the company thousands of dollars.',
            exampleSentencePt: 'O tempo de inatividade não planejado custou milhares de dólares à empresa.',
            keyTakeaway: 'Downtime = Sistema fora do ar (indisponível).'
          },
          {
            id: 'cp-latency-bandwidth',
            term: 'Latency & Bandwidth',
            phonetic: '/ˈleɪtənsi/ & /ˈbændwɪdθ/',
            category: 'Infra & Cloud',
            translation: 'Latência & Largura de Banda',
            itExplanation: 'Latency é o tempo de atraso que um pacote de dados leva para ir de um ponto ao outro (o "lag"). Bandwidth é o volume total de dados que pode passar por segundo (a "largura da pista").',
            whyItMatters: 'Mesmo com alta largura de banda (internet rápida), se a latência for alta, sistemas corporativos como ERPs e chamadas de vídeo ficam lentos.',
            exampleSentenceEn: 'High latency causes delays in cloud applications.',
            exampleSentencePt: 'Alta latência causa lentidão em aplicações na nuvem.',
            keyTakeaway: 'Latency = Atraso/Tempo de resposta. Bandwidth = Capacidade da conexão.'
          }
        ],
        exercises: [
          {
            id: 'ex-1-1-1',
            type: 'multiple_choice',
            prompt: 'O que significa o termo técnico "Downtime" em uma reunião de infraestrutura?',
            conceptTerm: 'Downtime',
            audioPronunciation: 'Downtime',
            options: [
              'O tempo em que o sistema ficou indisponível ou fora do ar',
              'O tempo que os programadores levam para baixar o código',
              'A velocidade máxima de download da internet da empresa',
              'O desligamento programado dos computadores no fim do dia'
            ],
            correctIndex: 0,
            explanation: 'Downtime refere-se exatamente ao período em que servidores ou serviços estão fora do ar (indisponíveis).'
          },
          {
            id: 'ex-1-1-2',
            type: 'match_pairs',
            prompt: 'Combine cada termo em inglês com o seu respectivo significado em GTI:',
            pairs: [
              { id: 'p1', english: 'Server', portuguese: 'Servidor central' },
              { id: 'p2', english: 'Client', portuguese: 'Dispositivo solicitante' },
              { id: 'p3', english: 'Downtime', portuguese: 'Sistema fora do ar' },
              { id: 'p4', english: 'Latency', portuguese: 'Tempo de atraso (Lag)' }
            ]
          },
          {
            id: 'ex-1-1-3',
            type: 'fill_blank',
            prompt: 'Complete o relatório de incidentes com o termo correto em inglês:',
            sentenceBefore: 'Our cloud database had 2 hours of unplanned',
            sentenceAfter: 'yesterday due to power failure.',
            options: ['downtime', 'bandwidth', 'client', 'server'],
            correctAnswer: 'downtime',
            translation: 'Nosso banco de dados na nuvem teve 2 horas de inatividade não planejada ontem devido a queda de energia.',
            explanation: '"Unplanned downtime" é a expressão técnica padrão para paradas não programadas do sistema.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 2: METODOLOGIAS ÁGEIS & SCRUM (BÁSICO / INICIANTE)
  // ==========================================
  {
    id: 'module-2',
    trackId: 'gti',
    unitNumber: 2,
    levelTag: 'Básico',
    title: 'Metodologias Ágeis & Scrum',
    subtitle: 'Agile Frameworks & Sprint Delivery',
    description: 'Domine os ritos, papéis e vocabulário do framework Scrum usado por 90% das equipes modernas de desenvolvimento e TI.',
    themeColor: '#3b82f6', // Blue
    accentColor: '#1d4ed8',
    icon: 'Kanban',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Papéis & Cerimônias do Scrum',
        subtitle: 'Sprint, Backlog, Daily, PO & Scrum Master',
        xpReward: 20,
        conceptPills: [
          {
            id: 'cp-sprint-backlog',
            term: 'Sprint & Product Backlog',
            phonetic: '/sprɪnt/ & /ˈprɒd.ʌkt ˈbæk.lɒɡ/',
            category: 'Scrum & Ágil',
            translation: 'Sprint (Ciclo curto de entrega) & Backlog do Produto',
            itExplanation: 'Uma "Sprint" é um período fixo (geralmente de 2 semanas) no qual a equipe desenvolve e entrega funcionalidades. O "Product Backlog" é a lista priorizada de todas as tarefas pendentes.',
            whyItMatters: 'Gestores de TI lideram reuniões de planejamento de Sprint para garantir que o time entregue valor no prazo estipulado.',
            exampleSentenceEn: 'The team selected ten priority items from the backlog for this Sprint.',
            exampleSentencePt: 'A equipe selecionou dez itens prioritários do backlog para esta Sprint.',
            keyTakeaway: 'Sprint = Ciclo de trabalho; Backlog = Lista de pendências priorizadas.'
          },
          {
            id: 'cp-scrum-roles',
            term: 'Product Owner (PO) & Scrum Master',
            phonetic: '/ˈprɒd.ʌkt ˈoʊ.nər/ & /skrʌm ˈmæs.tər/',
            category: 'Scrum & Ágil',
            translation: 'Dono do Produto & Facilitador Ágil',
            itExplanation: 'O Product Owner define O QUE deve ser feito baseado nas necessidades do negócio. O Scrum Master garante COMO o time trabalha, removendo impedimentos.',
            whyItMatters: 'Entender a divisão de responsabilidades evita conflitos entre áreas de negócio e a equipe técnica.',
            exampleSentenceEn: 'The Product Owner prioritized the new security features.',
            exampleSentencePt: 'O Dono do Produto priorizou as novas funcionalidades de segurança.',
            keyTakeaway: 'PO = Foca no negócio e valor; Scrum Master = Foca no processo e pessoas.'
          }
        ],
        exercises: [
          {
            id: 'ex-2-1-1',
            type: 'multiple_choice',
            prompt: 'Quem no framework Scrum é o principal responsável por priorizar a lista de tarefas (Backlog) de acordo com o valor de negócio?',
            conceptTerm: 'Product Owner',
            audioPronunciation: 'Product Owner',
            options: [
              'Product Owner (PO)',
              'Scrum Master',
              'Estagiário de Redes',
              'Administrador de Banco de Dados'
            ],
            correctIndex: 0,
            explanation: 'O Product Owner é o guardião do backlog e o responsável pela visão de negócios do produto.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 3: GOVERNANÇA DE TI & ITIL 4 (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'module-3',
    trackId: 'gti',
    unitNumber: 3,
    levelTag: 'Intermediário',
    title: 'Governança de TI & ITIL 4',
    subtitle: 'Service Management, SLA, SLO & Incidents',
    description: 'Aprenda como estruturar a entrega de serviços de tecnologia com as melhores práticas mundiais do framework ITIL 4.',
    themeColor: '#f59e0b', // Amber / Gold
    accentColor: '#d97706',
    icon: 'ShieldCheck',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Acordos de Nível de Serviço & Incidentes',
        subtitle: 'SLA, SLO, SLI, Incident & Service Desk',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-sla-slo-sli',
            term: 'SLA vs. SLO vs. SLI',
            phonetic: '/ˌes.elˈeɪ/ vs /ˌes.elˈoʊ/ vs /ˌes.elˈaɪ/',
            category: 'Governança & ITIL',
            translation: 'Acordo de Serviço vs. Objetivo Interno vs. Indicador Real',
            itExplanation: 'O **SLA (Service Level Agreement)** é o contrato formal com o cliente (se quebrar, paga multa). O **SLO (Service Level Objective)** é a meta interna mais rigorosa da equipe. O **SLI (Service Level Indicator)** é a métrica real medida em tempo real.',
            whyItMatters: 'Descumprir SLAs gera prejuízos financeiros graves e processos contratuais para o setor de TI.',
            exampleSentenceEn: 'The cloud vendor guaranteed 99.9% uptime in their SLA.',
            exampleSentencePt: 'O fornecedor de nuvem garantiu 99,9% de disponibilidade em seu SLA.',
            keyTakeaway: 'SLA = Contrato com cliente; SLO = Meta da equipe; SLI = Métrica medida.'
          }
        ],
        exercises: [
          {
            id: 'ex-3-1-1',
            type: 'multiple_choice',
            prompt: 'O que representa o termo "SLA" (Service Level Agreement) em contratos de TI?',
            conceptTerm: 'Service Level Agreement',
            audioPronunciation: 'Service Level Agreement',
            options: [
              'O contrato formal que estipula o tempo de resposta e disponibilidade garantidos ao cliente',
              'Um antivírus instalado nos computadores',
              'A marca do switch de rede da empresa',
              'O salário dos analistas de suporte'
            ],
            correctIndex: 0,
            explanation: 'SLA é o Acordo de Nível de Serviço que formaliza juridicamente metas como uptime de 99.9% e tempo máximo de atendimento.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 4: CIBERSEGURANÇA & LGPD (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'module-4',
    trackId: 'gti',
    unitNumber: 4,
    levelTag: 'Intermediário',
    title: 'Cibersegurança & Conformidade (LGPD)',
    subtitle: 'Data Breach, Phishing, Ransomware & Zero Trust',
    description: 'Proteja os ativos da empresa contra invasões, sequestro de dados (ransomware) e esteja em conformidade com as leis de privacidade.',
    themeColor: '#ef4444', // Red
    accentColor: '#b91c1c',
    icon: 'ShieldCheck',
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Ameaças Cibernéticas & Defesas',
        subtitle: 'Data Breach, Phishing, Ransomware & Multi-Factor Auth (MFA)',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-sec-threats',
            term: 'Ransomware & Data Breach',
            phonetic: '/ˈræn.səm.weər/ & /ˈdeɪ.tə briːtʃ/',
            category: 'Segurança & LGPD',
            translation: 'Sequestro de Dados por Resgate & Vazamento de Dados',
            itExplanation: 'Ransomware é um malware que criptografa os servidores da empresa e exige resgate em criptomoeda. Data Breach é o vazamento não autorizado de dados confidenciais de clientes.',
            whyItMatters: 'Um vazamento de dados acarreta multas milionárias da ANPD/LGPD e pode falir uma organização.',
            exampleSentenceEn: 'The IT security team implemented MFA to prevent unauthorized data breaches.',
            exampleSentencePt: 'A equipe de segurança de TI implementou MFA para prevenir vazamentos de dados não autorizados.',
            keyTakeaway: 'Ransomware = Sequestro criptografado; Data Breach = Vazamento de dados.'
          }
        ],
        exercises: [
          {
            id: 'ex-4-1-1',
            type: 'multiple_choice',
            prompt: 'Como é chamado o ataque cibernético que bloqueia o acesso aos servidores da empresa e cobra um resgate financeiro?',
            conceptTerm: 'Ransomware',
            audioPronunciation: 'Ransomware',
            options: [
              'Ransomware',
              'SLA Breach',
              'Pull Request',
              'Scrum Master'
            ],
            correctIndex: 0,
            explanation: 'Ransomware é a categoria de código malicioso criada especificamente para extorsão financeira através do sequestro de dados.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 5: DEVOPS, CI/CD & ENGENHARIA DE CONFIABILIDADE (INTERMEDIÁRIO)
  // ==========================================
  {
    id: 'module-5',
    trackId: 'gti',
    unitNumber: 5,
    levelTag: 'Intermediário',
    title: 'DevOps & Engenharia de Confiabilidade (SRE)',
    subtitle: 'CI/CD Pipelines, Deploy, Rollback & Staging',
    description: 'Automatize entregas contínuas de software, diminua o tempo de lançamento no mercado e garanta alta estabilidade produtiva.',
    themeColor: '#8b5cf6', // Violet
    accentColor: '#6d28d9',
    icon: 'Rocket',
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Pipelines de CI/CD & Ambientes',
        subtitle: 'CI/CD, Deploy, Rollback, Staging & Production',
        xpReward: 25,
        conceptPills: [
          {
            id: 'cp-cicd-deploy',
            term: 'CI/CD & Rollback',
            phonetic: '/ˌsiː.aɪ ˌsiːˈdiː/ & /ˈroʊl.bæk/',
            category: 'DevOps & SRE',
            translation: 'Integração Contínua / Entrega Contínua & Reversão',
            itExplanation: 'CI/CD é a automação que testa e publica código automaticamente. "Rollback" é a reversão imediata para a versão estável anterior caso um deploy apresente erros graves.',
            whyItMatters: 'Ter um processo de Rollback automatizado salva a empresa de horas de prejuízo durante atualizações de sistemas.',
            exampleSentenceEn: 'The pipeline triggered an automated rollback after detecting a 500 error spike.',
            exampleSentencePt: 'O pipeline acionou um rollback automático após detectar um pico de erros 500.',
            keyTakeaway: 'CI/CD = Automação de testes e deploy; Rollback = Voltar à versão que funcionava.'
          }
        ],
        exercises: [
          {
            id: 'ex-5-1-1',
            type: 'multiple_choice',
            prompt: 'O que o time de DevOps faz quando uma nova atualização quebra o sistema em produção?',
            conceptTerm: 'Rollback',
            audioPronunciation: 'Rollback',
            options: [
              'Executa um Rollback para voltar à versão estável anterior imediatamente',
              'Desliga a internet do escritório inteiro',
              'Apaga o banco de dados da empresa',
              'Escreve uma nova linguagem de programação'
            ],
            correctIndex: 0,
            explanation: 'O Rollback reverte a aplicação para o estado anterior conhecido e seguro em poucos segundos.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 6: FINOPS & GESTÃO ORÇAMENTÁRIA (AVANÇADO)
  // ==========================================
  {
    id: 'module-6',
    trackId: 'gti',
    unitNumber: 6,
    levelTag: 'Avançado',
    title: 'FinOps & Orçamento Estratégico de TI',
    subtitle: 'CapEx vs. OpEx, TCO & Cloud Cost Optimization',
    description: 'Aprenda a linguagem da diretoria financeira: justifique investimentos em TI, reduza desperdício na nuvem e calcule o TCO.',
    themeColor: '#0ea5e9', // Sky blue
    accentColor: '#0284c7',
    icon: 'TrendingUp',
    lessons: [
      {
        id: 'lesson-6-1',
        title: 'Modelos Financeiros de TI',
        subtitle: 'CapEx, OpEx, Total Cost of Ownership (TCO) & Cloud ROI',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-capex-opex',
            term: 'CapEx vs. OpEx',
            phonetic: '/ˈkæp.eks/ vs /ˈɒp.eks/',
            category: 'FinOps & Custos',
            translation: 'Despesas de Capital (Investimento) vs. Despesas Operacionais',
            itExplanation: '**CapEx (Capital Expenditure)** é comprar equipamentos físicos (ex: comprar um servidor físico para a sala da empresa). **OpEx (Operational Expenditure)** é pagar pelo uso contínuo de serviços (ex: assinatura mensal de nuvem na AWS ou Azure).',
            whyItMatters: 'A migração para a nuvem transforma CapEx em OpEx, permitindo que a empresa pague apenas pelo que consome e deduza impostos.',
            exampleSentenceEn: 'Migrating infrastructure to AWS shifted our budget from CapEx to OpEx.',
            exampleSentencePt: 'Migrar a infraestrutura para a AWS transferiu nosso orçamento de CapEx para OpEx.',
            keyTakeaway: 'CapEx = Comprar o ativo; OpEx = Pagar pelo serviço conforme o uso.'
          }
        ],
        exercises: [
          {
            id: 'ex-6-1-1',
            type: 'multiple_choice',
            prompt: 'Pagar mensalidades pelo uso de servidores virtuais na nuvem (AWS/Azure) se enquadra em qual modelo financeiro?',
            conceptTerm: 'OpEx',
            audioPronunciation: 'Operational expenditure OpEx',
            options: [
              'OpEx (Operational Expenditure)',
              'CapEx (Capital Expenditure)',
              'Phishing',
              'Backlog'
            ],
            correctIndex: 0,
            explanation: 'Serviços sob demanda por assinatura são despesas operacionais contínuas (OpEx).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 7: GESTÃO DE FORNECEDORES & CONTRATOS (AVANÇADO)
  // ==========================================
  {
    id: 'module-7',
    trackId: 'gti',
    unitNumber: 7,
    levelTag: 'Avançado',
    title: 'Gestão de Fornecedores & RFPs',
    subtitle: 'Vendor Management, RFP, Lock-in & Penalties',
    description: 'Conduza concorrências técnicas de fornecedores, elabore RFPs profissionais e evite o aprisionamento tecnológico (Vendor Lock-in).',
    themeColor: '#ec4899', // Pink
    accentColor: '#be185d',
    icon: 'Layers',
    lessons: [
      {
        id: 'lesson-7-1',
        title: 'Seleção de Fornecedores & Riscos Contratuais',
        subtitle: 'Request for Proposal (RFP), Vendor Lock-in & SLA Penalties',
        xpReward: 30,
        conceptPills: [
          {
            id: 'cp-vendor-rfp',
            term: 'RFP & Vendor Lock-in',
            phonetic: '/ˌɑːr.efˈpiː/ & /ˈven.dər ˈlɒk.ɪn/',
            category: 'Fornecedores & Liderança',
            translation: 'Solicitação de Proposta & Aprisionamento Tecnológico',
            itExplanation: 'Uma **RFP (Request for Proposal)** é o documento formal enviado aos fornecedores detalhando os requisitos da empresa. **Vendor Lock-in** é a situação perigosa onde a empresa fica refém de um único fornecedor porque custa muito caro migrar.',
            whyItMatters: 'Gestores experientes usam tecnologias abertas (como Docker e Kubernetes) para evitar ficarem reféns de um único fornecedor de nuvem.',
            exampleSentenceEn: 'The CIO evaluated three vendor bids received from the ERP RFP.',
            exampleSentencePt: 'O CIO avaliou três propostas de fornecedores recebidas da RFP de ERP.',
            keyTakeaway: 'RFP = Concorrência formal; Lock-in = Ficar refém de um único fornecedor.'
          }
        ],
        exercises: [
          {
            id: 'ex-7-1-1',
            type: 'multiple_choice',
            prompt: 'O que significa o risco de "Vendor Lock-in" na contratação de soluções de TI?',
            conceptTerm: 'Vendor Lock-in',
            audioPronunciation: 'Vendor Lock in',
            options: [
              'A empresa ficar presa e dependente de um único fornecedor por ter um custo altíssimo de migração',
              'O fornecedor fechar as portas no dia seguinte',
              'O servidor esquentar demais na sala de TI',
              'Um erro de digitação no código fonte'
            ],
            correctIndex: 0,
            explanation: 'Vendor Lock-in ocorre quando a empresa adota tecnologias proprietárias que tornam a troca de fornecedor extremamente cara e inviável.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 8: BIG DATA, DATA LAKES & BI (AVANÇADO)
  // ==========================================
  {
    id: 'module-8',
    trackId: 'gti',
    unitNumber: 8,
    levelTag: 'Avançado',
    title: 'Big Data, Data Lakes & Analytics',
    subtitle: 'Data Lake, Data Warehouse, ETL & Business Intelligence',
    description: 'Estruture o pipeline de dados da organização para apoiar a diretoria na tomada de decisões baseada em dados reais.',
    themeColor: '#14b8a6', // Teal
    accentColor: '#0f766e',
    icon: 'Database',
    lessons: [
      {
        id: 'lesson-8-1',
        title: 'Arquitetura de Dados Corporativa',
        subtitle: 'Data Lake, Data Warehouse, ETL Pipelines & Dashboards',
        xpReward: 35,
        conceptPills: [
          {
            id: 'cp-lake-warehouse',
            term: 'Data Lake vs. Data Warehouse & ETL',
            phonetic: '/ˈdeɪ.tə leɪk/ vs /ˈdeɪ.tə ˈweə.haʊs/',
            category: 'Dados & BI',
            translation: 'Repositório de Dados Brutos vs. Armazém Estruturado & Extração/Transformação/Carga',
            itExplanation: 'Um **Data Lake** armazena dados brutos em seu formato original (JSON, logs, áudio, vídeos). Um **Data Warehouse** armazena dados limpos, modelados e estruturados para relatórios. **ETL** é o pipeline que extrai, transforma e carrega os dados.',
            whyItMatters: 'Gestores de TI lideram a integração de dados entre sistemas de vendas, RH e financeiro para criar dashboards de diretoria.',
            exampleSentenceEn: 'The ETL pipeline extracts raw transaction logs and loads structured metrics into the Data Warehouse.',
            exampleSentencePt: 'O pipeline de ETL extrai logs brutos de transações e carrega métricas estruturadas no Data Warehouse.',
            keyTakeaway: 'Lake = Dados brutos em estado natural; Warehouse = Dados limpos e prontos para BI.'
          }
        ],
        exercises: [
          {
            id: 'ex-8-1-1',
            type: 'multiple_choice',
            prompt: 'Qual componente é projetado para armazenar dados corporativos estruturados, limpos e prontos para relatórios de BI?',
            conceptTerm: 'Data Warehouse',
            audioPronunciation: 'Data Warehouse',
            options: [
              'Data Warehouse',
              'Data Lake (bruto)',
              'Pendrive do suporte',
              'Lixeira do Windows'
            ],
            correctIndex: 0,
            explanation: 'O Data Warehouse consolida dados estruturados e tratados para consultas analíticas e dashboards gerenciais.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 9: ARQUITETURA CORPORATIVA & GOVERNANÇA ESTRATÉGICA (AVANÇADO)
  // ==========================================
  {
    id: 'module-9',
    trackId: 'gti',
    unitNumber: 9,
    levelTag: 'Avançado',
    title: 'Arquitetura Corporativa (TOGAF & COBIT)',
    subtitle: 'Enterprise Architecture, TOGAF, COBIT & Compliance',
    description: 'Alinhe a tecnologia aos objetivos de negócios da corporação através dos padrões mundiais TOGAF e COBIT.',
    themeColor: '#6366f1', // Indigo
    accentColor: '#4338ca',
    icon: 'ShieldCheck',
    lessons: [
      {
        id: 'lesson-9-1',
        title: 'Frameworks Estratégicos Corporativos',
        subtitle: 'Enterprise Architecture, TOGAF ADM & COBIT Governance',
        xpReward: 35,
        conceptPills: [
          {
            id: 'cp-togaf-cobit',
            term: 'TOGAF & COBIT',
            phonetic: '/ˈtoʊ.ɡæf/ & /ˈkoʊ.bɪt/',
            category: 'Governança & Arquitetura',
            translation: 'Framework de Arquitetura Corporativa & Governança de TI',
            itExplanation: '**TOGAF** fornece o método padrão (ADM) para desenhar a arquitetura de negócios, dados e aplicações. **COBIT** fornece o framework para auditoria, controle interno e governança estratégica.',
            whyItMatters: 'O conhecimento em TOGAF e COBIT é o diferencial que leva o profissional de GTI a cargos de gerência sênior e diretoria.',
            exampleSentenceEn: 'Enterprise architects follow the TOGAF methodology to align IT investments with business goals.',
            exampleSentencePt: 'Arquitetos corporativos seguem a metodologia TOGAF para alinhar investimentos de TI com as metas de negócio.',
            keyTakeaway: 'TOGAF = Desenho da arquitetura tecnológica; COBIT = Controle, auditoria e governança.'
          }
        ],
        exercises: [
          {
            id: 'ex-9-1-1',
            type: 'multiple_choice',
            prompt: 'Qual framework mundial é a principal referência para o desenho de Arquitetura Corporativa em grandes empresas?',
            conceptTerm: 'TOGAF',
            audioPronunciation: 'TOGAF Enterprise Architecture',
            options: [
              'TOGAF (The Open Group Architecture Framework)',
              'HTML5',
              'CSS Grid',
              'Bluetooth'
            ],
            correctIndex: 0,
            explanation: 'O TOGAF é o framework mais respeitado e utilizado no mundo para estruturação de arquitetura corporativa de TI.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADE 10: LIDERANÇA ESTRATÉGICA & CARREIRA DO CIO (AVANÇADO)
  // ==========================================
  {
    id: 'module-10',
    trackId: 'gti',
    unitNumber: 10,
    levelTag: 'Avançado',
    title: 'Liderança Estratégica & Carreira do CIO',
    subtitle: 'Chief Information Officer (CIO), Stakeholders & Change Management',
    description: 'Aprenda como se comunicar no nível executivo C-Level, gerenciar stakeholders e liderar transformações digitais na organização.',
    themeColor: '#e11d48', // Rose / Ruby
    accentColor: '#9f1239',
    icon: 'Crown',
    lessons: [
      {
        id: 'lesson-10-1',
        title: 'Gestão Executiva & C-Level',
        subtitle: 'CIO, CTO, Stakeholders, Change Management & Digital Transformation',
        xpReward: 40,
        conceptPills: [
          {
            id: 'cp-cio-change',
            term: 'CIO & Change Management',
            phonetic: '/ˌsiː.aɪˈoʊ/ & /ˈtʃeɪndʒ ˌmæn.ɪdʒ.mənt/',
            category: 'Liderança & Estratégia',
            translation: 'Diretor de Tecnologia da Informação & Gestão de Mudanças Organizacionais',
            itExplanation: 'O **CIO (Chief Information Officer)** é o principal executivo de tecnologia da empresa, responsável por alinhar a estratégia de TI com a diretoria (CEO/CFO). **Change Management** é o processo de preparar, apoiar e treinar as pessoas para aceitarem novas tecnologias sem resistência.',
            whyItMatters: '70% das implantações de novos sistemas de TI falham não por problemas técnicos, mas por falta de Gestão de Mudança e engajamento humano.',
            exampleSentenceEn: 'Effective change management ensures company employees adopt the new cloud ERP smoothly.',
            exampleSentencePt: 'Uma gestão de mudanças eficaz garante que os colaboradores da empresa adotem o novo ERP em nuvem sem atritos.',
            keyTakeaway: 'CIO = Líder estratégico de TI; Change Management = Treinar e engajar pessoas na nova tecnologia.'
          }
        ],
        exercises: [
          {
            id: 'ex-10-1-1',
            type: 'multiple_choice',
            prompt: 'Por que a "Gestão de Mudanças" (Change Management) é essencial no lançamento de grandes projetos de GTI?',
            conceptTerm: 'Change Management',
            audioPronunciation: 'Change Management in IT',
            options: [
              'Porque ela prepara, capacita e reduz a resistência das pessoas ao novo sistema, garantindo o sucesso da implantação',
              'Porque ela apaga o histórico do computador dos funcionários',
              'Porque ela aumenta o preço da energia elétrica',
              'Porque ela troca os cabos de rede do escritório'
            ],
            correctIndex: 0,
            explanation: 'Change Management foca no fator humano da tecnologia, capacitando e engajando colaboradores para que o novo sistema seja adotado com êxito.'
          }
        ]
      }
    ]
  }
];
