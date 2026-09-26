// Banco de flashcards de IHC (Interação Humano-Computador). Diferente do
// QUIZ_BANK (múltipla escolha), aqui cada card é um par frente/verso simples —
// termo ou definição — pensado para revisão rápida das 5 aulas.
// Ids prefixados com "f-ihc-" para não colidir com o namespace do simulado
// (ihc-*), embora o progresso de flashcards já use uma chave de localStorage
// separada.

export const FLASHCARD_BANK = [
  // ---------------- AULA 1: INTRODUÇÃO À IHC ----------------
  {
    id: "f-ihc-intro-1",
    topico: "Introdução à IHC",
    frente: "O que estuda a Interação Humano-Computador (IHC)?",
    verso:
      "O estudo analítico e prático de como as pessoas interagem com dispositivos computacionais — deslocando o foco do desenvolvimento do \"sistema\" para o \"humano\".",
  },
  {
    id: "f-ihc-intro-2",
    topico: "Introdução à IHC",
    frente: "O que significam as siglas HCI e CHI?",
    verso: "HCI = Human-Computer Interaction; CHI = Computer-Human Interface. São sinônimos de IHC.",
  },
  {
    id: "f-ihc-intro-3",
    topico: "Introdução à IHC",
    frente: "Quais são as quatro áreas que compõem a natureza multidisciplinar da IHC?",
    verso: "Ergonomia, Psicologia Cognitiva, Design e Estética, e Semiótica e Etnografia.",
  },
  {
    id: "f-ihc-intro-4",
    topico: "Introdução à IHC",
    frente: "Qual a diferença entre interface e interação?",
    verso:
      "Interface (UI) é o ponto de contato visível e tangível do sistema (botões, campos). Interação é o processo dinâmico de diálogo entre humano e máquina — um ciclo de ação e interpretação.",
  },
  {
    id: "f-ihc-intro-5",
    topico: "Introdução à IHC",
    frente: "Qual a diferença entre a abordagem convencional \"dentro para fora\" e a abordagem IHC \"fora para dentro\"?",
    verso:
      "\"Dentro para fora\": o projeto começa pelo banco de dados e arquitetura, e a interface vem por último. \"Fora para dentro\": o usuário e seu contexto dominam o processo desde o início.",
  },
  {
    id: "f-ihc-intro-6",
    topico: "Introdução à IHC",
    frente: "Qual é o lema fundamental do Design Centrado no Usuário (DCU)?",
    verso: "\"A culpa nunca é do usuário\" — se ocorre uma falha, a responsabilidade é do projeto da interface.",
  },

  // ---------------- AULA 2: USABILIDADE E ACESSIBILIDADE ----------------
  {
    id: "f-ihc-usab-1",
    topico: "Usabilidade e Acessibilidade",
    frente: "Como a norma ISO 9241-11 define usabilidade?",
    verso:
      "\"A medida na qual um produto pode ser usado por usuários específicos para alcançar objetivos específicos com eficácia, eficiência e satisfação em um contexto de uso específico.\"",
  },
  {
    id: "f-ihc-usab-2",
    topico: "Usabilidade e Acessibilidade",
    frente: "Quais são os três pilares da usabilidade (ISO 9241-11)?",
    verso: "Eficácia, eficiência e satisfação.",
  },
  {
    id: "f-ihc-usab-3",
    topico: "Usabilidade e Acessibilidade",
    frente: "O que mede o pilar da eficácia, e como costuma ser medido?",
    verso:
      "A precisão e completude com que os usuários atingem as metas — medida por taxa de sucesso na tarefa, número de erros não corrigidos e acurácia dos dados.",
  },
  {
    id: "f-ihc-usab-4",
    topico: "Usabilidade e Acessibilidade",
    frente: "O que mede o pilar da eficiência, e como costuma ser medido?",
    verso:
      "A quantidade de recursos (tempo e esforço mental/físico) gastos para atingir o objetivo — medida por tempo de execução, número de cliques e curva de aprendizado.",
  },
  {
    id: "f-ihc-usab-5",
    topico: "Usabilidade e Acessibilidade",
    frente: "O que mede o pilar da satisfação, e com quais escalas?",
    verso: "A resposta emocional, aceitabilidade e conforto do usuário — medida por SUS, CSAT e NPS.",
  },
  {
    id: "f-ihc-usab-6",
    topico: "Usabilidade e Acessibilidade",
    frente: "O que é aprendizabilidade (learnability)?",
    verso: "A facilidade com que usuários novatos realizam tarefas básicas na primeira tentativa, sem treinamento.",
  },
  {
    id: "f-ihc-usab-7",
    topico: "Usabilidade e Acessibilidade",
    frente: "O que é memorabilidade (memorability)?",
    verso: "A facilidade em restabelecer a proficiência com uma interface após um período sem utilizá-la.",
  },
  {
    id: "f-ihc-usab-8",
    topico: "Usabilidade e Acessibilidade",
    frente: "O que garante a acessibilidade em um sistema, e por que ela costuma trazer benefício universal?",
    verso:
      "Garante que pessoas com diferentes capacidades (temporárias ou permanentes) usem o sistema — ex.: leitores de tela, alto contraste. Um recurso de acessibilidade, como áudio em um ATM, também ajuda quem não tem deficiência (ex.: sob luz solar intensa).",
  },

  // ---------------- AULA 3: AS 10 HEURÍSTICAS DE NIELSEN ----------------
  {
    id: "f-ihc-heur-1",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H1 — Visibilidade do Status: qual o princípio, e um exemplo?",
    verso:
      "Manter o usuário informado sobre o estado do sistema em tempo razoável. Ex.: barra de progresso em uploads; \"Digitando...\".",
  },
  {
    id: "f-ihc-heur-2",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H2 — Correspondência com o Mundo Real: qual o princípio, e um exemplo?",
    verso:
      "Falar a linguagem do usuário, evitando termos técnicos do código. Ex.: remover mensagens \"Erro 404\"; usar ícones como a Lixeira.",
  },
  {
    id: "f-ihc-heur-3",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H3 — Controle e Liberdade: qual o princípio, e um exemplo?",
    verso:
      "Oferecer \"saídas de emergência\" claras em ações acidentais. Ex.: botão Desfazer (Ctrl+Z) e cancelamento de formulários.",
  },
  {
    id: "f-ihc-heur-4",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H4 — Consistência e Padrões: qual o princípio, e um exemplo?",
    verso:
      "Manter convenções visuais e operacionais em toda a aplicação. Ex.: carrinho sempre no topo direito; engrenagem para configurações.",
  },
  {
    id: "f-ihc-heur-5",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H5 — Prevenção de Erros: qual o princípio, e um exemplo?",
    verso:
      "Projetar a interface para impedir o erro antes que ele ocorra. Ex.: desabilitar botão de envio enquanto faltar campo obrigatório; restringir datas passadas.",
  },
  {
    id: "f-ihc-heur-6",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H6 — Reconhecimento vs. Evocação: qual o princípio, e um exemplo?",
    verso:
      "Tornar objetos e opções visíveis sem exigir memorização do usuário. Ex.: seções de \"Vistos recentemente\" e histórico de buscas.",
  },
  {
    id: "f-ihc-heur-7",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H7 — Flexibilidade e Eficiência: qual o princípio, e um exemplo?",
    verso:
      "Incorporar aceleradores para agilizar o fluxo de usuários experientes. Ex.: atalhos de teclado (Ctrl+C, Ctrl+V) e automação de rotinas.",
  },
  {
    id: "f-ihc-heur-8",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H8 — Design Estético e Minimalista: qual o princípio, e um exemplo?",
    verso:
      "Eliminar informações irrelevantes que competem pela atenção do usuário. Ex.: página inicial do Google Search, foco absoluto no campo de busca.",
  },
  {
    id: "f-ihc-heur-9",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H9 — Diagnóstico e Recuperação de Erros: qual o princípio, e um exemplo?",
    verso:
      "Exibir mensagens claras em linguagem natural, com sugestão de solução. Ex.: \"Senha incorreta. Deseja recuperar?\" em vez de código binário.",
  },
  {
    id: "f-ihc-heur-10",
    topico: "As 10 Heurísticas de Nielsen",
    frente: "Heurística H10 — Ajuda e Documentação: qual o princípio, e um exemplo?",
    verso:
      "Fornecer documentação contextual, focada em tarefas e fácil de buscar. Ex.: tooltips flutuantes, assistentes virtuais, FAQ interativa.",
  },

  // ---------------- AULA 4: FATORES HUMANOS E PSICOLOGIA COGNITIVA ----------------
  {
    id: "f-ihc-fh-1",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "Quem desenvolveu o Model Human Processor (MHP), e o que ele faz?",
    verso:
      "Stuart Card, Thomas Moran e Allen Newell (1983). Traça uma analogia entre a arquitetura da mente humana e a de um computador, dividida em três subsistemas.",
  },
  {
    id: "f-ihc-fh-2",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "Quais são os três subsistemas do MHP?",
    verso: "Subsistema Perceptivo, Subsistema Cognitivo e Subsistema Motor — formam um loop contínuo de processamento.",
  },
  {
    id: "f-ihc-fh-3",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "O que faz o Subsistema Perceptivo do MHP?",
    verso:
      "Capta estímulos do ambiente pelos órgãos sensoriais (visão, audição) e os armazena temporariamente nos registros sensoriais (~100 ms).",
  },
  {
    id: "f-ihc-fh-4",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "O que faz o Subsistema Cognitivo do MHP?",
    verso:
      "Atua como a CPU mental: busca dados nos registros sensoriais, cruza com a Memória de Longo Prazo e decide a resposta usando a Memória de Trabalho (~70 ms).",
  },
  {
    id: "f-ihc-fh-5",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "O que diz a Lei de Miller (7 ± 2)?",
    verso:
      "Um ser humano médio retém apenas 7 ± 2 elementos isolados simultaneamente na memória de curto prazo — em interfaces, prefere-se focar no limite inferior (4 a 5 blocos, técnica de chunking).",
  },
  {
    id: "f-ihc-fh-6",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "O que é carga cognitiva?",
    verso:
      "A quantidade total de esforço mental exigido da memória de trabalho. Interfaces poluídas ou com nomenclaturas ambíguas causam sobrecarga cognitiva.",
  },
  {
    id: "f-ihc-fh-7",
    topico: "Fatores Humanos e Psicologia Cognitiva",
    frente: "Qual é a regra de ouro entre reconhecimento e evocação?",
    verso:
      "Reconhecer é mais fácil do que lembrar — é mais fácil reconhecer um ícone visível (ex.: lixeira) do que evocar um comando de memória (ex.: digitar um comando de texto).",
  },

  // ---------------- AULA 5: ERGONOMIA E CRITÉRIOS DE SCAPIN & BASTIEN ----------------
  {
    id: "f-ihc-erg-1",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "Quais são os três pilares da ergonomia?",
    verso: "Ergonomia Cognitiva, Ergonomia Física e Ergonomia Organizacional.",
  },
  {
    id: "f-ihc-erg-2",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que avalia o critério de Condução (Guidance) de Scapin e Bastien?",
    verso:
      "A capacidade do sistema de guiar e orientar o usuário — mensagens de status claras, dicas contextuais, barras de progresso.",
  },
  {
    id: "f-ihc-erg-3",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que avalia o critério de Carga Mental de Scapin e Bastien?",
    verso: "O quanto a interface minimiza o esforço de leitura e memorização do usuário, com telas limpas e focadas.",
  },
  {
    id: "f-ihc-erg-4",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que avalia o critério de Controle Explícito de Scapin e Bastien?",
    verso:
      "Se o usuário sente que está no comando: o sistema não deve tomar ações automáticas inesperadas e deve oferecer saídas fáceis (Cancelar, Desfazer).",
  },
  {
    id: "f-ihc-erg-5",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que avalia o critério de Adaptabilidade de Scapin e Bastien?",
    verso:
      "A capacidade da interface de se ajustar a diferentes perfis de usuário — de um \"Modo Básico\" para iniciantes a atalhos/\"Modo Expert\" para profissionais.",
  },
  {
    id: "f-ihc-erg-6",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "Quais são as três camadas do tratamento de erros?",
    verso: "Prevenção, Tolerância e Feedback Humanizado.",
  },
  {
    id: "f-ihc-erg-7",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que é a camada de Prevenção no tratamento de erros? Dê um exemplo.",
    verso:
      "Bloquear a falha antes que ela aconteça. Ex.: deixar o botão \"Enviar\" desabilitado enquanto um campo obrigatório não for preenchido.",
  },
  {
    id: "f-ihc-erg-8",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que é a camada de Tolerância no tratamento de erros? Dê um exemplo.",
    verso:
      "Absorver o impacto caso o erro ocorra. Ex.: Ctrl+Z (Desfazer) para recuperar um arquivo deletado por acidente.",
  },
  {
    id: "f-ihc-erg-9",
    topico: "Ergonomia e Critérios de Scapin & Bastien",
    frente: "O que é a camada de Feedback Humanizado no tratamento de erros?",
    verso:
      "Mensagens de erro claras, neutras e resolutivas — nunca técnicas ou robóticas como \"Erro Órfão 404\".",
  },
];
