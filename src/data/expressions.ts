import { MemorizationExpression } from '../types';

export const expressionsData: MemorizationExpression[] = [
  // ==========================================
  // 1. REUNIÕES & NEGÓCIOS DE TI (MEETING IDIOMS)
  // ==========================================
  {
    id: 'exp-loop',
    expression: 'Keep me in the loop',
    phonetic: '/kiːp miː ɪn ðə luːp/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Mantenha-me no laço / circuito',
    realItMeaning: 'Mantenha-me informado sobre o andamento e decisões do projeto (me coloque em cópia nos e-mails e Slack).',
    mnemonicTrigger: '🧠 Pense em um "Loop" de repetição: você quer estar dentro desse circuito contínuo de atualizações para não ficar de fora.',
    exampleEn: 'Please keep me in the loop regarding the cloud migration timeline.',
    examplePt: 'Por favor, mantenha-me informado sobre o cronograma da migração para a nuvem.'
  },
  {
    id: 'exp-touch-base',
    expression: 'Touch base',
    phonetic: '/tʌtʃ beɪs/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Tocar a base',
    realItMeaning: 'Fazer um alinhamento rápido, entrar em contato ou atualizar o status com alguém brevemente.',
    mnemonicTrigger: '🧠 Vem do Baseball: o corredor precisa pisar na base para garantir segurança. Na TI, você "toca a base" com o cliente para garantir alinhamento.',
    exampleEn: 'Let’s touch base tomorrow morning before the client presentation.',
    examplePt: 'Vamos fazer um alinhamento rápido amanhã de manhã antes da apresentação ao cliente.'
  },
  {
    id: 'exp-bandwidth',
    expression: 'I do not have the bandwidth for this',
    phonetic: '/aɪ duː nɒt hæv ðə ˈbænd.wɪdθ fɔːr ðɪs/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Eu não tenho largura de banda para isso',
    realItMeaning: 'Estou sobrecarregado, sem tempo, capacidade mental ou braço disponível no momento para assumir mais tarefas.',
    mnemonicTrigger: '🧠 Assim como uma internet com pouca banda não consegue baixar arquivos pesados, sua agenda está no limite máximo de capacidade.',
    exampleEn: 'Our team does not have the bandwidth to take on a new project this sprint.',
    examplePt: 'Nossa equipe não tem disponibilidade para assumir um novo projeto nesta sprint.'
  },
  {
    id: 'exp-deep-dive',
    expression: 'Deep dive',
    phonetic: '/diːp daɪv/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Mergulho profundo',
    realItMeaning: 'Fazer uma análise minuciosa, técnica e detalhada sobre um problema, arquitetura ou métrica de TI.',
    mnemonicTrigger: '🧠 Pense em um mergulhador que vai até o fundo do oceano para examinar corais: você vai descer a fundo no código ou no log para achar a raiz.',
    exampleEn: 'We need to do a deep dive into the server logs to find the root cause.',
    examplePt: 'Precisamos fazer uma análise profunda nos logs do servidor para encontrar a causa raiz.'
  },
  {
    id: 'exp-out-of-the-box',
    expression: 'Out of the box (OOTB)',
    phonetic: '/aʊt əv ðə bɒks/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Direto fora da caixa',
    realItMeaning: 'Funcionalidade pronta que já vem funcionando de fábrica no software sem precisar de programação ou customização extra.',
    mnemonicTrigger: '🧠 Você tira o produto da caixa, liga na tomada e já funciona imediatamente sem precisar montar ou codificar nada.',
    exampleEn: 'This cloud CRM software provides automated reports out of the box.',
    examplePt: 'Este software CRM em nuvem fornece relatórios automatizados prontos de fábrica.'
  },
  {
    id: 'exp-down-the-road',
    expression: 'Down the road',
    phonetic: '/daʊn ðə roʊd/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Mais adiante na estrada',
    realItMeaning: 'No futuro, em uma etapa posterior do roadmap ou em fases futuras do projeto.',
    mnemonicTrigger: '🧠 Olhe para a estrada à frente: a curva está distante, logo essa melhoria será feita mais para a frente.',
    exampleEn: 'We can add multi-language support down the road in version 2.0.',
    examplePt: 'Podemos adicionar suporte a múltiplos idiomas mais para a frente na versão 2.0.'
  },
  {
    id: 'exp-take-offline',
    expression: 'Let’s take this offline',
    phonetic: '/lets teɪk ðɪs ˈɒf.laɪn/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Vamos levar isso para fora da linha',
    realItMeaning: 'Vamos discutir esse assunto específico em particular depois da reunião para não tomar o tempo de todo o grupo.',
    mnemonicTrigger: '🧠 Desconectar o assunto da chamada principal e levar para uma conversa particular de 1 para 1.',
    exampleEn: 'That database detail is very specific—let’s take this offline after the standup.',
    examplePt: 'Esse detalhe do banco de dados é muito específico — vamos discutir isso em particular após a daily.'
  },
  {
    id: 'exp-circle-back',
    expression: 'Circle back',
    phonetic: '/ˈsɜː.kəl bæk/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Dar uma volta e voltar',
    realItMeaning: 'Retomar um assunto pendente mais tarde após coletar mais informações ou dados.',
    mnemonicTrigger: '🧠 Pense em um avião dando uma volta sobre a pista até ter autorização para pousar: voltamos ao tema quando tivermos respostas.',
    exampleEn: 'I will check with the security team and circle back to you by 3 PM.',
    examplePt: 'Vou checar com a equipe de segurança e volto a falar com você até as 15h.'
  },
  {
    id: 'exp-on-radar',
    expression: 'It is on my radar',
    phonetic: '/ɪt ɪz ɒn maɪ ˈreɪ.dɑːr/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Está no meu radar',
    realItMeaning: 'Estou ciente disso, estou acompanhando a situação e cuidarei no momento apropriado.',
    mnemonicTrigger: '🧠 Como um radar de navio que detecta um ponto no horizonte: o gestor já viu a demanda e está monitorando.',
    exampleEn: 'The server license renewal is on my radar for next month.',
    examplePt: 'A renovação das licenças do servidor já está no meu radar para o próximo mês.'
  },
  {
    id: 'exp-move-needle',
    expression: 'Move the needle',
    phonetic: '/muːv ðə ˈniː.dəl/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Mover a agulha',
    realItMeaning: 'Gerar um impacto mensurável significativo e perceptível nos resultados do negócio ou nos KPIs de TI.',
    mnemonicTrigger: '🧠 Pense no ponteiro do velocímetro ou manômetro: uma ação irrelevante não mexe o ponteiro; uma ação importante move a agulha!',
    exampleEn: 'Automating password resets will really move the needle on our support resolution time.',
    examplePt: 'Automatizar o reset de senhas vai realmente gerar um grande impacto no nosso tempo de resolução de suporte.'
  },
  {
    id: 'exp-pain-point',
    expression: 'Pain point',
    phonetic: '/peɪn pɔɪnt/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Ponto de dor',
    realItMeaning: 'O problema central, frustração ou gargalo que mais incomoda os usuários ou clientes.',
    mnemonicTrigger: '🧠 O lugar onde "dói" no cliente: o foco do gestor de TI é criar softwares que curem essa dor.',
    exampleEn: 'Slow checkout loading time is the main customer pain point.',
    examplePt: 'A lentidão no carregamento do checkout é a principal dor dos clientes.'
  },
  {
    id: 'exp-hard-stop',
    expression: 'I have a hard stop at 3 PM',
    phonetic: '/aɪ hæv ə hɑːd stɒp æt θriː piː em/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Eu tenho uma parada dura às 15h',
    realItMeaning: 'Preciso impreterivelmente sair da reunião no horário exato por ter outro compromisso inadiável.',
    mnemonicTrigger: '🧠 Uma parede de concreto às 15h: a reunião não pode se estender nem 1 minuto a mais.',
    exampleEn: 'I have a hard stop at 2 PM, so let’s focus on the critical decisions first.',
    examplePt: 'Tenho que sair pontualmente às 14h, então vamos focar primeiro nas decisões críticas.'
  },
  {
    id: 'exp-buy-in',
    expression: 'Get buy-in from stakeholders',
    phonetic: '/ɡet baɪ ɪn frəm ˈsteɪkˌhoʊl.dərz/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Conseguir compra interna das partes interessadas',
    realItMeaning: 'Obter a concordância, apoio e aprovação formal da diretoria e dos envolvidos para uma proposta de TI.',
    mnemonicTrigger: '🧠 Fazer a diretoria "comprar a sua ideia": sem o buy-in dos executivos, o projeto de tecnologia não recebe verba.',
    exampleEn: 'We must get buy-in from the CFO before signing the cloud contract.',
    examplePt: 'Devemos obter a aprovação do CFO antes de assinar o contrato de nuvem.'
  },
  {
    id: 'exp-ballpark',
    expression: 'Ballpark estimate / figure',
    phonetic: '/ˈbɔːl.pɑːk ˈes.tɪ.mət/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Estimativa no campo de beisebol',
    realItMeaning: 'Uma estimativa aproximada por alto (uma ordem de grandeza aproximada de custo ou prazo).',
    mnemonicTrigger: '🧠 O campo de beisebol é grande: a estimativa não é no milímetro, mas está dentro do estádio correto.',
    exampleEn: 'Can you give me a ballpark estimate for the data center migration cost?',
    examplePt: 'Você pode me dar uma estimativa aproximada do custo da migração do data center?'
  },
  {
    id: 'exp-action-item',
    expression: 'Action item',
    phonetic: '/ˈæk.ʃən ˈaɪ.təm/',
    category: 'Reuniões & Negócios',
    literalTranslation: 'Item de ação',
    realItMeaning: 'Tarefa específica e prática designada a um responsável com prazo definido ao final de uma reunião.',
    mnemonicTrigger: '🧠 Reunião produtiva termina com uma lista de "Action Items" (quem faz o quê e até quando).',
    exampleEn: 'Our main action item is to configure database backups by Friday.',
    examplePt: 'Nossa principal tarefa de ação é configurar os backups do banco de dados até sexta-feira.'
  },

  // ==========================================
  // 2. GESTÃO DE CRISE & SUPORTE (CRISIS & OPS)
  // ==========================================
  {
    id: 'exp-firefighting',
    expression: 'Firefighting mode',
    phonetic: '/ˈfaɪəˌfaɪ.tɪŋ moʊd/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Modo combate a incêndio',
    realItMeaning: 'Trabalhar apenas apagando urgências e consertando problemas graves que explodem, sem conseguir planejar estrategicamente.',
    mnemonicTrigger: '🧠 Bombeiros correndo desesperados para apagar chamas: é quando a TI passa o dia todo resolvendo chamados urgentes e não consegue inovar.',
    exampleEn: 'We must improve code quality to stop working in firefighting mode every week.',
    examplePt: 'Devemos melhorar a qualidade do código para parar de trabalhar no modo apagar incêndio toda semana.'
  },
  {
    id: 'exp-spof',
    expression: 'Single Point of Failure (SPOF)',
    phonetic: '/ˈsɪŋ.ɡəl pɔɪnt əv ˈfeɪ.ljər/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Ponto único de falha',
    realItMeaning: 'Componente ou pessoa essencial que, se falhar ou faltar, paralisa todo o sistema ou departamento.',
    mnemonicTrigger: '🧠 Pense em uma ponte sustentada por uma única corda: se aquela corda arrebentar, a ponte inteira cai. Na TI, precisamos de redundância!',
    exampleEn: 'Having only one database server is a dangerous single point of failure.',
    examplePt: 'Ter apenas um servidor de banco de dados é um ponto único de falha perigoso.'
  },
  {
    id: 'exp-sanity-check',
    expression: 'Sanity check',
    phonetic: '/ˈsæn.ə.ti tʃek/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Checagem de sanidade',
    realItMeaning: 'Teste rápido e básico para garantir que o sistema não está completamente quebrado antes de testes complexos.',
    mnemonicTrigger: '🧠 Teste para ver se o sistema "está são da cabeça": verificar se a página inicial abre antes de testar funções avançadas.',
    exampleEn: 'Run a quick sanity check on the staging environment after the deploy.',
    examplePt: 'Execute uma checagem básica no ambiente de testes após a implantação.'
  },
  {
    id: 'exp-smoke-test',
    expression: 'Smoke test',
    phonetic: '/smoʊk test/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Teste de fumaça',
    realItMeaning: 'Teste preliminar rápido para verificar se os serviços essenciais ligam sem "sair fumaça" da máquina.',
    mnemonicTrigger: '🧠 Na eletrônica antiga, ligava-se o aparelho na tomada: se não saísse fumaça, estava pronto para testes detalhados.',
    exampleEn: 'The automated smoke test confirmed the login API is responsive.',
    examplePt: 'O teste de fumaça automatizado confirmou que a API de login está respondendo.'
  },
  {
    id: 'exp-push-to-prod',
    expression: 'Push to prod',
    phonetic: '/pʊʃ tuː prɒd/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Empurrar para a produção',
    realItMeaning: 'Publicar a versão final do código no ambiente real de servidores acessível aos clientes.',
    mnemonicTrigger: '🧠 "Push" = empurrar; "Prod" = Produção. É o momento solene onde o software vai para o ar para o mundo real!',
    exampleEn: 'Never push to prod on a Friday evening without an on-call team.',
    examplePt: 'Nunca faça deploy em produção na sexta-feira à noite sem uma equipe de plantão.'
  },
  {
    id: 'exp-workaround',
    expression: 'Workaround / Quick fix',
    phonetic: '/ˈwɜːk.ə.raʊnd/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Trabalho ao redor / Desvio',
    realItMeaning: 'Solução de contorno provisória que contorna o defeito para o cliente voltar a operar enquanto o conserto definitivo é desenvolvido.',
    mnemonicTrigger: '🧠 Pense em uma pedra bloqueando a estrada: você não remove a pedra agora, mas desvia pela lateral para o carro continuar andando.',
    exampleEn: 'We provided a temporary workaround while developers fix the core database bug.',
    examplePt: 'Fornecemos uma solução de contorno provisória enquanto os desenvolvedores corrigem o bug central no banco de dados.'
  },
  {
    id: 'exp-war-room',
    expression: 'War room',
    phonetic: '/wɔːr ruːm/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Sala de guerra',
    realItMeaning: 'Canal de comunicação urgente (físico ou virtual no Teams/Zoom) onde líderes e engenheiros se reúnem para resolver uma crise grave (Sev-1).',
    mnemonicTrigger: '🧠 Como generais reunidos em torno do mapa na guerra: todos os especialistas juntos até a estabilização do sistema.',
    exampleEn: 'The incident commander opened a war room to resolve the payment outage.',
    examplePt: 'O comandante de incidentes abriu uma sala de guerra para resolver a queda nos pagamentos.'
  },
  {
    id: 'exp-post-mortem',
    expression: 'Blameless Post-mortem',
    phonetic: '/ˈbleɪm.ləs ˌpoʊstˈmɔːr.təm/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Autópsia sem culpados',
    realItMeaning: 'Reunião pós-incidente focada em descobrir por que os processos/sistemas falharam e como prevenir, sem apontar dedos para pessoas.',
    mnemonicTrigger: '🧠 "Blameless" = Sem culpa individual. O objetivo é consertar a falha do sistema, não punir o desenvolvedor que digitou o comando errado.',
    exampleEn: 'The team conducted a blameless post-mortem to document root cause lessons.',
    examplePt: 'A equipe conduziu uma autópsia sem culpados para documentar as lições da causa raiz.'
  },
  {
    id: 'exp-dogfooding',
    expression: 'Dogfooding ("Eating your own dog food")',
    phonetic: '/ˈdɒɡ.fuː.dɪŋ/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Comer a própria ração de cachorro',
    realItMeaning: 'Prática de uma empresa usar internamente o próprio software que vende para clientes, encontrando bugs antes do público.',
    mnemonicTrigger: '🧠 Se o fabricante de ração canina confia no produto, ele mesmo come a ração: usar o próprio produto na rotina.',
    exampleEn: 'Microsoft engineers practice dogfooding by using beta versions of Windows daily.',
    examplePt: 'Engenheiros da Microsoft praticam o dogfooding usando versões beta do Windows diariamente.'
  },
  {
    id: 'exp-kill-switch',
    expression: 'Kill switch',
    phonetic: '/kɪl swɪtʃ/',
    category: 'Gestão de Crise & Suporte',
    literalTranslation: 'Interruptor de matar',
    realItMeaning: 'Mecanismo de emergência que desativa instantaneamente uma funcionalidade defeituosa sem precisar derrubar todo o sistema.',
    mnemonicTrigger: '🧠 O botão vermelho de emergência de uma fábrica: aperta e corta a função que está falhando.',
    exampleEn: 'We activated the feature kill switch when the payment API started returning errors.',
    examplePt: 'Ativamos o interruptor de emergência da funcionalidade quando a API de pagamentos começou a retornar erros.'
  },

  // ==========================================
  // 3. METODOLOGIAS ÁGEIS & PROJETOS
  // ==========================================
  {
    id: 'exp-on-the-same-page',
    expression: 'On the same page',
    phonetic: '/ɒn ðə seɪm peɪdʒ/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Na mesma página',
    realItMeaning: 'Em total alinhamento e concordância sobre os objetivos, escopo e prazos do projeto.',
    mnemonicTrigger: '🧠 Como duas pessoas lendo exatamente a mesma página do mesmo livro: ninguém está adiantado ou atrasado na história.',
    exampleEn: 'The sprint planning ensures developers and stakeholders are on the same page.',
    examplePt: 'O planejamento da sprint garante que desenvolvedores e partes interessadas estejam alinhados na mesma página.'
  },
  {
    id: 'exp-low-hanging-fruit',
    expression: 'Low-hanging fruit',
    phonetic: '/loʊ ˈhæŋ.ɪŋ fruːt/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Fruta pendurada baixa',
    realItMeaning: 'Tarefas de baixo esforço que entregam resultado ou ganho financeiro rápido (vitórias fáceis no backlog).',
    mnemonicTrigger: '🧠 Em uma árvore de maçãs, as frutas mais baixas são as mais fáceis de colher sem precisar de escada.',
    exampleEn: 'Let’s fix the login button styling first—it is a low-hanging fruit.',
    examplePt: 'Vamos corrigir o estilo do botão de login primeiro — é uma tarefa fácil com ganho rápido.'
  },
  {
    id: 'exp-bottleneck',
    expression: 'Bottleneck',
    phonetic: '/ˈbɒt.əl.nek/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Gargalo de garrafa',
    realItMeaning: 'Ponto de estrangulamento no processo onde o fluxo de trabalho fica retido e atrasa todo o restante do time.',
    mnemonicTrigger: '🧠 O gargalo estreito de uma garrafa impede que toda a água saia de uma vez: é o setor ou etapa que trava a entrega.',
    exampleEn: 'Manual code reviews became a serious bottleneck in our sprint delivery.',
    examplePt: 'As revisões manuais de código se tornaram um sério gargalo na entrega da nossa sprint.'
  },
  {
    id: 'exp-tech-debt',
    expression: 'Technical Debt (Tech debt)',
    phonetic: '/ˈtek.nɪ.kəl det/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Dívida técnica',
    realItMeaning: 'O custo futuro acumulado por ter escolhido soluções rápidas e mal feitas hoje no código em vez de fazer da forma correta.',
    mnemonicTrigger: '🧠 Assim como uma dívida no cartão de crédito cobra juros no futuro, código mal feito cobra juros com bugs e lentidão depois.',
    exampleEn: 'We need a dedicated sprint to refactor legacy code and pay down our technical debt.',
    examplePt: 'Precisamos de uma sprint dedicada para refatorar código legado e quitar nossa dívida técnica.'
  },
  {
    id: 'exp-dod',
    expression: 'Definition of Done (DoD)',
    phonetic: '/ˌdef.ɪˈnɪʃ.ən əv dʌn/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Definição de Concluído',
    realItMeaning: 'Critérios rígidos e combinados que uma tarefa deve cumprir para ser considerada 100% pronta (testes, documentação, deploy).',
    mnemonicTrigger: '🧠 A lista de verificação antes de decolar: não basta o desenvolvedor dizer "terminei", precisa passar na DoD.',
    exampleEn: 'Writing automated unit tests is mandatory under our team Definition of Done.',
    examplePt: 'Escrever testes unitários automatizados é obrigatório conforme a Definição de Pronto da nossa equipe.'
  },
  {
    id: 'exp-parking-lot',
    expression: 'Parking lot item',
    phonetic: '/ˈpɑː.kɪŋ lɒt ˈaɪ.təm/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Item do estacionamento',
    realItMeaning: 'Ideia ou assunto interessante levantado em uma reunião, mas que foi "estacionado" para ser discutido em outro momento.',
    mnemonicTrigger: '🧠 Estacione o carro para não atrapalhar o trânsito da reunião atual; depois voltamos para pegá-lo.',
    exampleEn: 'That is a great suggestion, let’s put it in the parking lot for next week.',
    examplePt: 'Essa é uma ótima sugestão, vamos colocá-la no estacionamento de ideias para a próxima semana.'
  },
  {
    id: 'exp-timeboxing',
    expression: 'Timeboxing',
    phonetic: '/ˈtaɪm.bɒk.sɪŋ/',
    category: 'Metodologias Ágeis',
    literalTranslation: 'Encaixotar o tempo',
    realItMeaning: 'Técnica de produtividade onde se estipula um limite fixo e inegociável de tempo para concluir uma atividade (ex: Daily em 15 min).',
    mnemonicTrigger: '🧠 Colocar o tempo dentro de uma caixa rígida com tampa: quando o alarme toca, a reunião encerra!',
    exampleEn: 'We timebox the sprint retrospective to exactly 45 minutes.',
    examplePt: 'Nós limitamos a retrospectiva da sprint a exatamente 45 minutos.'
  },

  // ==========================================
  // 4. PYTHON, CÓDIGO & ARQUITETURA
  // ==========================================
  {
    id: 'exp-syntax-sugar',
    expression: 'Syntactic sugar',
    phonetic: '/sɪnˈtæk.tɪk ˈʃʊɡ.ər/',
    category: 'Python & Lógica',
    literalTranslation: 'Açúcar sintático',
    realItMeaning: 'Recurso da linguagem criado para deixar o código mais doce, legível e agradável de escrever (ex: List Comprehensions em Python).',
    mnemonicTrigger: '🧠 O açúcar deixa o café mais gostoso: a sintaxe açucarada deixa o código Python muito mais gostoso e limpo de ler!',
    exampleEn: 'List comprehensions in Python are syntactic sugar for traditional for-loops.',
    examplePt: 'As compreensões de lista no Python são açúcar sintático para os loops for tradicionais.'
  },
  {
    id: 'exp-dry',
    expression: 'DRY Principle (Don’t Repeat Yourself)',
    phonetic: '/draɪ/',
    category: 'Python & Lógica',
    literalTranslation: 'Princípio SECO (Não se repita)',
    realItMeaning: 'Boas práticas de programação que ditam que você nunca deve duplicar blocos de código idênticos: transforme em funções!',
    mnemonicTrigger: '🧠 Código "molhado" (WET = Write Everything Twice) é feio; código "seco" (DRY) é elegante, reutilizável e modular.',
    exampleEn: 'We refactored the script into modular functions to follow the DRY principle.',
    examplePt: 'Refatoramos o script em funções modulares para seguir o princípio DRY (Não se repita).'
  },
  {
    id: 'exp-kiss',
    expression: 'KISS Principle (Keep It Simple, Stupid)',
    phonetic: '/kɪs/',
    category: 'Python & Lógica',
    literalTranslation: 'Mantenha Simples, Estúpido',
    realItMeaning: 'Princípio de engenharia que dita que a maioria dos sistemas funciona melhor se mantidos simples em vez de complicados.',
    mnemonicTrigger: '🧠 Não crie arquiteturas de ficção científica para resolver problemas simples: a simplicidade reduz bugs.',
    exampleEn: 'Follow the KISS principle: do not use microservices for a simple internal tool.',
    examplePt: 'Siga o princípio KISS: não use microsserviços para uma ferramenta interna simples.'
  },
  {
    id: 'exp-boilerplate',
    expression: 'Boilerplate code',
    phonetic: '/ˈbɔɪ.lə.pleɪt koʊd/',
    category: 'Python & Lógica',
    literalTranslation: 'Código de placa de caldeira',
    realItMeaning: 'Código repetitivo e padronizado que precisa ser incluído em muitos lugares com pouca ou nenhuma alteração.',
    mnemonicTrigger: '🧠 Placas de ferro fundidas em série de caldeiras antigas: modelos prontos que você copia e cola para começar o projeto.',
    exampleEn: 'Modern Python frameworks reduce boilerplate code significantly.',
    examplePt: 'Frameworks modernos de Python reduzem significativamente o código repetitivo padrão.'
  },
  {
    id: 'exp-idempotent',
    expression: 'Idempotency / Idempotent',
    phonetic: '/ˌaɪ.dɪmˈpoʊ.tənsi/',
    category: 'Python & Lógica',
    literalTranslation: 'Idempotência',
    realItMeaning: 'Propriedade onde executar a mesma operação 1 vez ou 100 vezes produz exatamente o mesmo resultado final sem efeitos colaterais.',
    mnemonicTrigger: '🧠 O botão de "Ligar" do ar condicionado: se você apertar quando já está ligado, ele continua ligado. Requisições seguras de TI são idempotentes.',
    exampleEn: 'Ansible playbooks and HTTP GET requests are designed to be idempotent.',
    examplePt: 'Playbooks do Ansible e requisições HTTP GET são projetadas para serem idempotentes.'
  },
  {
    id: 'exp-edge-case',
    expression: 'Edge case / Corner case',
    phonetic: '/edʒ keɪs/',
    category: 'Python & Lógica',
    literalTranslation: 'Caso de borda / quina',
    realItMeaning: 'Situação rara, extrema ou incomum que ocorre nos limites operacionais do sistema e que pode quebrar o software.',
    mnemonicTrigger: '🧠 Andar na beirada do precipício (na borda): o que acontece se o usuário digitar uma senha com 5000 caracteres ou valor negativo?',
    exampleEn: 'Our QA engineer found an edge case where leap years break date calculations.',
    examplePt: 'Nosso engenheiro de testes encontrou um caso de borda onde anos bissextos quebram o cálculo de datas.'
  },

  // ==========================================
  // 5. MNEMÔNICOS DE GOVERNANÇA, NUVEM & INFRA
  // ==========================================
  {
    id: 'exp-sla-slo-sli-mnem',
    expression: 'Mnemônico: SLA vs SLO vs SLI',
    phonetic: '/ˌes.elˈeɪ/ /ˌes.elˈoʊ/ /ˌes.elˈaɪ/',
    category: 'Infra & Cloud',
    literalTranslation: 'Agreement (Acordo) -> Objective (Objetivo) -> Indicator (Indicador)',
    realItMeaning: 'A hierarquia de governança de TI para nunca mais esquecer a diferença entre as 3 siglas.',
    mnemonicTrigger: '🧠 Lembre-se: **I**ndicator = O que mede na máquina (**I**ndica o dado real); **O**bjective = O que a equipe de TI mira internamente (**O**bjetivo da equipe); **A**greement = O que o cliente assina no contrato (**A**cordo formal).',
    exampleEn: 'SLI measures real telemetry, SLO sets the internal target, and SLA is the customer contract.',
    examplePt: 'SLI mede a telemetria real, SLO define a meta interna, e SLA é o contrato com o cliente.'
  },
  {
    id: 'exp-capex-opex-mnem',
    expression: 'Mnemônico: CapEx vs OpEx',
    phonetic: '/ˈkæp.eks/ vs /ˈɒp.eks/',
    category: 'Infra & Cloud',
    literalTranslation: 'Capital Expense vs Operating Expense',
    realItMeaning: 'Como memorizar a diferença financeira entre compra física e serviço em nuvem.',
    mnemonicTrigger: '🧠 **Cap**Ex = **C**omprar **Ap**arelhos e máquinas físicas próprias (servidores). **Op**Ex = **Op**eração do dia a dia sob demanda (assinatura mensal de nuvem).',
    exampleEn: 'CapEx buys servers; OpEx rents cloud capacity monthly.',
    examplePt: 'CapEx compra servidores; OpEx aluga capacidade de nuvem mensalmente.'
  },
  {
    id: 'exp-iaas-paas-saas-mnem',
    expression: 'Mnemônico: IaaS vs PaaS vs SaaS (A Analogia da Pizza)',
    phonetic: '/ˌaɪ.æz/ /pæz/ /sæs/',
    category: 'Infra & Cloud',
    literalTranslation: 'Infraestrutura -> Plataforma -> Software',
    realItMeaning: 'A clássica analogia da "Pizza as a Service" para dominar os 3 modelos de computação em nuvem.',
    mnemonicTrigger: '🧠 **IaaS** = Você compra a massa crua e assa no seu forno (você gerencia o SO). **PaaS** = A pizzaria entrega a pizza pronta na sua casa (você só come/programa). **SaaS** = Você vai ao restaurante comendo tudo pronto e eles lavam os pratos (você só usa o software pronto).',
    exampleEn: 'IaaS gives raw infrastructure; PaaS gives the runtime platform; SaaS gives the finished software.',
    examplePt: 'IaaS fornece infraestrutura bruta; PaaS fornece a plataforma de execução; SaaS fornece o software pronto.'
  },
  {
    id: 'exp-rto-rpo-mnem',
    expression: 'Mnemônico: RTO vs RPO (Disaster Recovery)',
    phonetic: '/ˌɑːr.tiːˈoʊ/ vs /ˌɑːr.piːˈoʊ/',
    category: 'Infra & Cloud',
    literalTranslation: 'Recovery Time Objective vs Recovery Point Objective',
    realItMeaning: 'Como memorizar os dois limites fundamentais de um plano de contingência e recuperação de desastres.',
    mnemonicTrigger: '🧠 **RTO** (**T**ime) = Quanto **T**empo a empresa aguenta ficar com o sistema fora do ar (ex: 2 horas). **RPO** (**P**oint) = A quantos **P**ontos no passado podemos perder dados (ex: backup de até 15 minutos atrás).',
    exampleEn: 'Our disaster recovery plan targets an RTO of 1 hour and an RPO of 15 minutes.',
    examplePt: 'Nosso plano de recuperação de desastres mira um RTO de 1 hora e um RPO de 15 minutos.'
  },
  {
    id: 'exp-scaling-horiz-vert-mnem',
    expression: 'Mnemônico: Scale Up vs Scale Out',
    phonetic: '/skeɪl ʌp/ vs /skeɪl aʊt/',
    category: 'Infra & Cloud',
    literalTranslation: 'Escalar para Cima vs Escalar para Fora',
    realItMeaning: 'A diferença entre escalabilidade vertical e horizontal de servidores.',
    mnemonicTrigger: '🧠 **Scale UP (Vertical)** = Colocar mais músculos no mesmo robô (mais memória/CPU no mesmo servidor). **Scale OUT (Horizontal)** = Contratar um exército de robôs trabalhando juntos (adicionar 10 servidores em cluster).',
    exampleEn: 'Cloud auto-scaling prefers scaling out horizontally across multiple smaller instances.',
    examplePt: 'O auto-escalonamento em nuvem prefere a escala horizontal entre múltiplas instâncias menores.'
  },
  {
    id: 'exp-zero-day-mnem',
    expression: 'Zero-day vulnerability / exploit',
    phonetic: '/ˈzɪə.roʊ deɪ/',
    category: 'Infra & Cloud',
    literalTranslation: 'Vulnerabilidade de dia zero',
    realItMeaning: 'Falha de segurança desconhecida pelo fabricante, onde a equipe tem "zero dias" de preparação antes do ataque.',
    mnemonicTrigger: '🧠 "Zero dias": o relógio está em 0 porque o fabricante descobriu a falha no mesmo dia em que os hackers começaram a atacar!',
    exampleEn: 'The security team applied an emergency hotfix to mitigate a critical zero-day vulnerability.',
    examplePt: 'A equipe de segurança aplicou uma correção emergencial para mitigar uma vulnerabilidade crítica de dia zero.'
  }
];
