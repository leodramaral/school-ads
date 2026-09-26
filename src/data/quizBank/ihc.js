// Banco de questões do simulado de IHC (Interação Humano-Computador).
// Baseado no "Guia Integral de Estudos de IHC" (resumo de aula), cobrindo
// as 5 aulas: Introdução, Usabilidade, Heurísticas de Nielsen, Fatores
// Humanos e Ergonomia. Ids prefixados com "ihc-" para não colidir com o
// namespace de Matemática (m*/d*) no localStorage de repetição espaçada.

export const QUIZ_BANK = [
  // ---------------- AULA 1: INTRODUÇÃO À IHC ----------------
  {
    id: "ihc-intro-1",
    topico: "Introdução à IHC",
    enunciado: "As siglas HCI e CHI, usadas como sinônimos de IHC, significam respectivamente:",
    opcoes: [
      { texto: "Human-Computer Interaction e Computer-Human Interface", correta: true },
      { texto: "Human Cognitive Interface e Computer Human Index" },
      { texto: "Human Control Interaction e Cognitive Human Interface" },
      { texto: "High Computer Interaction e Cognitive Human Interface" },
    ],
    explicacao:
      "IHC também é referenciada como HCI (Human-Computer Interaction) ou CHI (Computer-Human Interface) — os dois termos descrevem o mesmo campo de estudo.",
  },
  {
    id: "ihc-intro-2",
    topico: "Introdução à IHC",
    enunciado:
      "Das áreas que compõem a natureza multidisciplinar da IHC, qual delas foca nas restrições físicas e biomecânicas do corpo humano?",
    opcoes: [
      { texto: "Ergonomia", correta: true },
      { texto: "Semiótica" },
      { texto: "Psicologia Cognitiva" },
      { texto: "Design e Estética" },
    ],
    explicacao:
      "A Ergonomia foca nas restrições físicas e biomecânicas do corpo humano. Psicologia Cognitiva analisa memória/atenção/aprendizado; Design e Estética cuida da hierarquia visual; Semiótica e Etnografia estuda signos e fatores socioculturais.",
  },
  {
    id: "ihc-intro-3",
    topico: "Introdução à IHC",
    enunciado: "Qual das alternativas descreve corretamente a diferença entre Interface e Interação?",
    opcoes: [
      {
        texto:
          "Interface é a camada visível e tangível de contato; Interação é o ciclo dinâmico de ação e interpretação entre humano e máquina",
        correta: true,
      },
      { texto: "Interface e Interação são sinônimos, ambos descrevem a tela do sistema" },
      { texto: "Interação é o botão físico; Interface é apenas o código por trás dele" },
      { texto: "Interface só existe em sistemas com tela; Interação só existe em sistemas sem tela" },
    ],
    explicacao:
      "Interface (UI) é o ponto de contato — botões e campos visíveis. Interação é o processo dinâmico: o usuário age e o sistema interpreta e responde, em ciclo contínuo.",
  },
  {
    id: "ihc-intro-4",
    topico: "Introdução à IHC",
    enunciado:
      "Na abordagem de Design Centrado no Usuário ('Fora para Dentro'), o que domina o processo de desenvolvimento?",
    opcoes: [
      { texto: "O usuário e seu contexto", correta: true },
      { texto: "A modelagem do banco de dados" },
      { texto: "A arquitetura de código do sistema" },
      { texto: "Os vícios técnicos do desenvolvedor" },
    ],
    explicacao:
      "Na abordagem IHC ('Fora para Dentro'), o usuário e seu contexto dominam o processo — o oposto da abordagem convencional ('Dentro para Fora'), que parte do banco de dados e da arquitetura de código.",
  },
  {
    id: "ihc-intro-5",
    topico: "Introdução à IHC",
    enunciado: "O lema 'a culpa nunca é do usuário', associado ao Design Centrado no Usuário, significa que:",
    opcoes: [
      {
        texto: "Se ocorre uma falha ou dificuldade operacional, a responsabilidade é do projeto da interface",
        correta: true,
      },
      { texto: "O usuário nunca deve ser consultado durante o design do sistema" },
      { texto: "Erros de digitação do usuário devem ser ignorados pelo sistema" },
      { texto: "O sistema deve esconder mensagens de erro do usuário" },
    ],
    explicacao:
      "O lema resume o paradigma 'Fora para Dentro': quando o usuário erra ou tem dificuldade, isso é sinal de falha no projeto da interface, não do usuário.",
  },

  // ---------------- AULA 2: USABILIDADE E ACESSIBILIDADE ----------------
  {
    id: "ihc-usab-1",
    topico: "Usabilidade e Acessibilidade",
    enunciado: "Segundo a norma ISO 9241-11, usabilidade é medida por três critérios centrais. Quais são eles?",
    opcoes: [
      { texto: "Eficácia, eficiência e satisfação", correta: true },
      { texto: "Velocidade, custo e estética" },
      { texto: "Acessibilidade, portabilidade e segurança" },
      { texto: "Aprendizabilidade, memorabilidade e gestão de erros" },
    ],
    explicacao:
      "A ISO 9241-11 define usabilidade como a medida na qual um produto é usado com eficácia, eficiência e satisfação em um contexto específico. As demais opções da última alternativa são métricas complementares, não os três pilares normativos.",
  },
  {
    id: "ihc-usab-2",
    topico: "Usabilidade e Acessibilidade",
    enunciado:
      "Um sistema é avaliado pelo tempo de execução das tarefas, número de cliques e curva de aprendizado. Qual pilar da usabilidade está sendo medido?",
    opcoes: [
      { texto: "Eficiência", correta: true },
      { texto: "Eficácia" },
      { texto: "Satisfação" },
      { texto: "Acessibilidade" },
    ],
    explicacao:
      "Eficiência mede a quantidade de recursos (tempo e esforço) gastos para atingir o objetivo — tempo de execução, cliques e curva de aprendizado são exatamente essas medidas.",
  },
  {
    id: "ihc-usab-3",
    topico: "Usabilidade e Acessibilidade",
    enunciado:
      "A facilidade com que um usuário restabelece a proficiência em um sistema após um período sem utilizá-lo é chamada de:",
    opcoes: [
      { texto: "Memorabilidade", correta: true },
      { texto: "Aprendizabilidade" },
      { texto: "Gestão de erros" },
      { texto: "Carga cognitiva" },
    ],
    explicacao:
      "Memorabilidade (Memorability) é justamente essa facilidade de retomar a proficiência após um tempo sem usar a interface. Aprendizabilidade é sobre usuários novatos na primeira tentativa.",
  },
  {
    id: "ihc-usab-4",
    topico: "Usabilidade e Acessibilidade",
    enunciado: "Saídas de áudio em caixas eletrônicos (ATMs) são um recurso de acessibilidade que também beneficia:",
    opcoes: [
      { texto: "Pessoas sob luz solar intensa, que têm dificuldade de ler a tela", correta: true },
      { texto: "Apenas usuários com deficiência visual" },
      { texto: "Apenas usuários que não sabem ler" },
      { texto: "Nenhum outro grupo além do público-alvo original" },
    ],
    explicacao:
      "O investimento em acessibilidade gera benefícios universais: saídas de áudio em ATMs auxiliam não apenas deficientes visuais, mas também pessoas sob luz solar intensa que não conseguem enxergar bem a tela.",
  },
  {
    id: "ihc-usab-5",
    topico: "Usabilidade e Acessibilidade",
    enunciado: "A facilidade com que usuários novatos realizam tarefas básicas na primeira tentativa, sem treinamento prévio, é:",
    opcoes: [
      { texto: "Aprendizabilidade (Learnability)", correta: true },
      { texto: "Memorabilidade (Memorability)" },
      { texto: "Gestão de erros" },
      { texto: "Eficácia" },
    ],
    explicacao:
      "Aprendizabilidade é sobre a primeira tentativa de usuários novatos, sem treinamento — diferente de memorabilidade, que é sobre retomar o uso após um tempo afastado.",
  },

  // ---------------- AULA 3: HEURÍSTICAS DE NIELSEN ----------------
  {
    id: "ihc-heur-1",
    topico: "Heurísticas de Nielsen",
    enunciado: "Uma barra de progresso durante um upload, ou a sinalização 'Digitando...' em um chat, são exemplos de qual heurística de Nielsen?",
    opcoes: [
      { texto: "H1: Visibilidade do Status", correta: true },
      { texto: "H4: Consistência e Padrões" },
      { texto: "H7: Flexibilidade e Eficiência" },
      { texto: "H10: Ajuda e Documentação" },
    ],
    explicacao:
      "H1 (Visibilidade do Status) diz que o sistema deve manter o usuário informado sobre o que está acontecendo em tempo razoável — exatamente o papel de barras de progresso e indicadores de digitação.",
  },
  {
    id: "ihc-heur-2",
    topico: "Heurísticas de Nielsen",
    enunciado: "Substituir uma mensagem técnica como 'Erro 404' por um ícone de lixeira reconhecível para excluir um item aplica qual heurística?",
    opcoes: [
      { texto: "H2: Correspondência com o Mundo Real", correta: true },
      { texto: "H5: Prevenção de Erros" },
      { texto: "H6: Reconhecimento vs. Evocação" },
      { texto: "H8: Design Estético e Minimalista" },
    ],
    explicacao:
      "H2 pede para falar a linguagem do usuário, evitando termos técnicos do código — substituir jargão de erro por ícones e linguagem cotidiana é aplicação direta dessa heurística.",
  },
  {
    id: "ihc-heur-3",
    topico: "Heurísticas de Nielsen",
    enunciado: "O botão Desfazer (Ctrl+Z) e o cancelamento de formulários são exemplos clássicos de qual heurística?",
    opcoes: [
      { texto: "H3: Controle e Liberdade", correta: true },
      { texto: "H1: Visibilidade do Status" },
      { texto: "H9: Diagnóstico e Recuperação de Erros" },
      { texto: "H4: Consistência e Padrões" },
    ],
    explicacao:
      "H3 (Controle e Liberdade) trata de oferecer 'saídas de emergência' claras para ações acidentais — Desfazer e cancelamento de formulário são exatamente isso.",
  },
  {
    id: "ihc-heur-4",
    topico: "Heurísticas de Nielsen",
    enunciado: "Desabilitar o botão 'Enviar' enquanto um campo obrigatório está vazio é uma aplicação de qual heurística?",
    opcoes: [
      { texto: "H5: Prevenção de Erros", correta: true },
      { texto: "H3: Controle e Liberdade" },
      { texto: "H6: Reconhecimento vs. Evocação" },
      { texto: "H9: Diagnóstico e Recuperação de Erros" },
    ],
    explicacao:
      "H5 (Prevenção de Erros) projeta a interface para impedir o erro antes que ele ocorra — desabilitar um botão até que os campos obrigatórios estejam preenchidos é prevenção, não recuperação.",
  },
  {
    id: "ihc-heur-5",
    topico: "Heurísticas de Nielsen",
    enunciado: "Seções de 'Vistos recentemente' e histórico de buscas evitam que o usuário precise memorizar opções, aplicando qual heurística?",
    opcoes: [
      { texto: "H6: Reconhecimento vs. Evocação", correta: true },
      { texto: "H2: Correspondência com o Mundo Real" },
      { texto: "H7: Flexibilidade e Eficiência" },
      { texto: "H8: Design Estético e Minimalista" },
    ],
    explicacao:
      "H6 pede para tornar objetos e opções visíveis sem exigir memorização — 'Vistos recentemente' e histórico de busca tornam a informação reconhecível em vez de exigir que o usuário a evoque de memória.",
  },
  {
    id: "ihc-heur-6",
    topico: "Heurísticas de Nielsen",
    enunciado: "Exibir 'Senha incorreta. Deseja recuperar?' em vez de um código de erro binário é um exemplo de qual heurística?",
    opcoes: [
      { texto: "H9: Diagnóstico e Recuperação de Erros", correta: true },
      { texto: "H5: Prevenção de Erros" },
      { texto: "H1: Visibilidade do Status" },
      { texto: "H4: Consistência e Padrões" },
    ],
    explicacao:
      "H9 exige mensagens claras em linguagem natural, com sugestão de solução — diferente de H5, que previne o erro antes que ele aconteça; aqui o erro já ocorreu e precisa ser bem comunicado.",
  },

  // ---------------- AULA 4: FATORES HUMANOS ----------------
  {
    id: "ihc-fh-1",
    topico: "Fatores Humanos",
    enunciado: "No Modelo do Processador Humano (MHP) de Card, Moran e Newell, qual subsistema é responsável por captar estímulos do ambiente através dos órgãos sensoriais?",
    opcoes: [
      { texto: "Subsistema Perceptivo", correta: true },
      { texto: "Subsistema Cognitivo" },
      { texto: "Subsistema Motor" },
      { texto: "Subsistema de Memória de Longo Prazo" },
    ],
    explicacao:
      "O Subsistema Perceptivo capta estímulos do ambiente (visão, audição) e os armazena temporariamente nos registros sensoriais, com ciclo estimado de ~100 ms.",
  },
  {
    id: "ihc-fh-2",
    topico: "Fatores Humanos",
    enunciado: "O subsistema do MHP que funciona como a 'CPU mental', cruzando dados percebidos com a Memória de Longo Prazo, é o:",
    opcoes: [
      { texto: "Subsistema Cognitivo", correta: true },
      { texto: "Subsistema Perceptivo" },
      { texto: "Subsistema Motor" },
      { texto: "Subsistema Ergonômico" },
    ],
    explicacao:
      "O Subsistema Cognitivo busca dados nos registros sensoriais, cruza com a Memória de Longo Prazo e decide uma resposta usando a Memória de Trabalho — ciclo básico de ~70 ms.",
  },
  {
    id: "ihc-fh-3",
    topico: "Fatores Humanos",
    enunciado: "De acordo com a Lei de Miller, quantos elementos isolados um ser humano médio consegue reter simultaneamente na memória de curto prazo?",
    opcoes: [
      { texto: "7 ± 2 elementos", correta: true },
      { texto: "3 ± 1 elementos" },
      { texto: "12 ± 4 elementos" },
      { texto: "Um número ilimitado, se bem organizado" },
    ],
    explicacao:
      "A Lei de Miller diz que a memória de curto prazo retém entre 5 e 9 elementos isolados (7 ± 2). Interfaces modernas preferem o limite inferior (4-5 blocos) via chunking.",
  },
  {
    id: "ihc-fh-4",
    topico: "Fatores Humanos",
    enunciado: "Por que projetar interfaces que priorizam 'reconhecimento' sobre 'evocação' (ex: um ícone de lixeira em vez de digitar um comando de texto) é considerado uma boa prática?",
    opcoes: [
      { texto: "Porque é mais fácil para o cérebro reconhecer um estímulo visual do que evocar/lembrar um comando de memória", correta: true },
      { texto: "Porque comandos de texto são sempre mais lentos de executar tecnicamente" },
      { texto: "Porque ícones ocupam menos espaço em disco do que comandos de texto" },
      { texto: "Porque evocação não é possível em interfaces gráficas" },
    ],
    explicacao:
      "A regra de ouro dos Fatores Humanos é: reconhecer é mais fácil do que lembrar. Um ícone visível reduz a carga sobre a memória de trabalho, enquanto evocar um comando de texto (como 'rm -rf') exige lembrá-lo de memória.",
  },
  {
    id: "ihc-fh-5",
    topico: "Fatores Humanos",
    enunciado: "Quebrar um código de autenticação por SMS em blocos visuais (ex: 452 - 891) em vez de exibi-lo colado (452891) é uma aplicação de qual técnica?",
    opcoes: [
      { texto: "Chunking, para reduzir a carga sobre a memória de trabalho", correta: true },
      { texto: "Prevenção de erros, para impedir que o código seja copiado" },
      { texto: "Controle explícito, para dar ao usuário mais opções" },
      { texto: "Consistência, para padronizar todos os campos de senha" },
    ],
    explicacao:
      "Dividir o número em blocos visuais é a técnica de chunking, ligada à Lei de Miller: blocos menores reduzem a perda de dados durante o trajeto entre ler a mensagem e digitar no app.",
  },

  // ---------------- AULA 5: ERGONOMIA ----------------
  {
    id: "ihc-erg-1",
    topico: "Ergonomia",
    enunciado: "Quais são os três pilares da ergonomia aplicados à IHC?",
    opcoes: [
      { texto: "Ergonomia Cognitiva, Física e Organizacional", correta: true },
      { texto: "Ergonomia Visual, Sonora e Tátil" },
      { texto: "Ergonomia de Software, Hardware e Rede" },
      { texto: "Ergonomia Individual, Coletiva e Digital" },
    ],
    explicacao:
      "Os três pilares são: Ergonomia Cognitiva (processos mentais), Ergonomia Física (adaptação anatômica e postural) e Ergonomia Organizacional (sistemas sociotécnicos e fluxos institucionais).",
  },
  {
    id: "ihc-erg-2",
    topico: "Ergonomia",
    enunciado: "Nos critérios de Scapin e Bastien, qual critério trata de mensagens de status claras, dicas contextuais e barras de progresso?",
    opcoes: [
      { texto: "Condução (Guidance)", correta: true },
      { texto: "Carga Mental" },
      { texto: "Controle Explícito" },
      { texto: "Adaptabilidade" },
    ],
    explicacao:
      "Condução (Guidance) é a capacidade do sistema de guiar e orientar o usuário — mensagens de status, dicas contextuais e barras de progresso são exemplos diretos.",
  },
  {
    id: "ihc-erg-3",
    topico: "Ergonomia",
    enunciado: "Um sistema que oferece um 'Modo Básico' para iniciantes e atalhos/'Modo Expert' para usuários avançados está aplicando qual critério de Scapin e Bastien?",
    opcoes: [
      { texto: "Adaptabilidade", correta: true },
      { texto: "Condução" },
      { texto: "Carga Mental" },
      { texto: "Controle Explícito" },
    ],
    explicacao:
      "Adaptabilidade é a capacidade da interface de se ajustar a diferentes perfis de usuário, de iniciantes a avançados — exatamente o que 'Modo Básico' vs. 'Modo Expert' oferece.",
  },
  {
    id: "ihc-erg-4",
    topico: "Ergonomia",
    enunciado: "Deixar o botão 'Enviar' desabilitado até que o campo de e-mail obrigatório seja preenchido é um exemplo de qual camada de tratamento de erros?",
    opcoes: [
      { texto: "Prevenção", correta: true },
      { texto: "Tolerância" },
      { texto: "Feedback Humanizado" },
      { texto: "Controle Explícito" },
    ],
    explicacao:
      "Prevenção bloqueia a falha antes que ela aconteça. Tolerância absorve o impacto depois do erro (ex: Ctrl+Z); Feedback Humanizado trata da clareza da mensagem quando o erro já ocorreu.",
  },
  {
    id: "ihc-erg-5",
    topico: "Ergonomia",
    enunciado: "Um terminal bancário antigo que obriga o funcionário a decorar códigos de comando complexos para fechar o caixa é um exemplo de:",
    opcoes: [
      { texto: "Sobrecarga da memória de trabalho (carga mental elevada)", correta: true },
      { texto: "Boa aplicação do critério de Condução" },
      { texto: "Ergonomia física bem aplicada" },
      { texto: "Prevenção de erros eficaz" },
    ],
    explicacao:
      "Decorar comandos complexos é exemplo de carga elevada/erro de recall, que sobrecarrega a memória de trabalho — o oposto de interfaces modernas com ícones e menus visuais, que exigem apenas reconhecimento.",
  },
];
