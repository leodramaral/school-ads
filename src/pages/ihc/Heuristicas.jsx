import { Link } from "react-router-dom";

const HEURISTICAS = [
  {
    n: "H1",
    nome: "Visibilidade do Status",
    principio: "Manter o usuário informado sobre o estado do sistema em tempo razoável.",
    exemplo: "Barra de progresso em uploads; sinalização \"Digitando...\".",
  },
  {
    n: "H2",
    nome: "Correspondência com o Mundo Real",
    principio: "Falar a linguagem do usuário, evitando termos técnicos do código.",
    exemplo: "Remover mensagens \"Erro 404\"; usar ícones como a Lixeira.",
  },
  {
    n: "H3",
    nome: "Controle e Liberdade",
    principio: "Oferecer \"saídas de emergência\" claras em ações acidentais.",
    exemplo: "Botão Desfazer (Ctrl+Z) e cancelamento de formulários.",
  },
  {
    n: "H4",
    nome: "Consistência e Padrões",
    principio: "Manter convenções visuais e operacionais em toda a aplicação.",
    exemplo: "Manter o carrinho no topo direito e ícone de engrenagem para configurações.",
  },
  {
    n: "H5",
    nome: "Prevenção de Erros",
    principio: "Projetar a interface para impedir o erro antes que ele ocorra.",
    exemplo:
      "Desabilitar botões enquanto campos obrigatórios estiverem vazios; restrição de datas passadas.",
  },
  {
    n: "H6",
    nome: "Reconhecimento vs. Evocação",
    principio: "Tornar objetos e opções visíveis sem exigir memorização pelo usuário.",
    exemplo: "Seções de \"Vistos recentemente\" e histórico de buscas.",
  },
  {
    n: "H7",
    nome: "Flexibilidade e Eficiência",
    principio: "Incorporar aceleradores para agilizar o fluxo de usuários experientes.",
    exemplo: "Atalhos de teclado (Ctrl+C, Ctrl+V) e automação de rotinas.",
  },
  {
    n: "H8",
    nome: "Design Estético e Minimalista",
    principio: "Eliminar informações irrelevantes que competem pela atenção do usuário.",
    exemplo: "Página inicial do Google Search (foco absoluto no campo de busca).",
  },
  {
    n: "H9",
    nome: "Diagnóstico e Recuperação de Erros",
    principio: "Exibir mensagens claras em linguagem natural com sugestão de solução.",
    exemplo: "Em vez de códigos binários, exibir \"Senha incorreta. Deseja recuperar?\".",
  },
  {
    n: "H10",
    nome: "Ajuda e Documentação",
    principio: "Fornecer documentação contextual, focada em tarefas e fácil de buscar.",
    exemplo: "Tooltips flutuantes, assistentes virtuais e seções de FAQ interativas.",
  },
];

export default function Heuristicas() {
  return (
    <>
      <p className="eyebrow">Aula 3</p>
      <h1>As 10 Heurísticas de Jakob Nielsen</h1>
      <p className="lede mt-0">
        As heurísticas são "regras de bolso" formuladas por Jakob Nielsen que auxiliam na
        identificação de mais de 80% dos problemas de usabilidade antes da fase de testes formais
        com usuários.
      </p>

      <h2 id="heuristicas-nielsen">As 10 heurísticas</h2>
      <table>
        <thead>
          <tr>
            <th>Heurística</th>
            <th>Princípio diretor</th>
            <th>Exemplo prático</th>
          </tr>
        </thead>
        <tbody>
          {HEURISTICAS.map((h) => (
            <tr key={h.n}>
              <td>
                <strong>
                  {h.n}: {h.nome}
                </strong>
              </td>
              <td>{h.principio}</td>
              <td>{h.exemplo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="next-prev">
        <Link to="/ihc/usabilidade">
          <small>Aula anterior</small>← Usabilidade e Acessibilidade
        </Link>
        <Link to="/ihc/fatores-humanos">
          <small>Próxima aula</small>
          Fatores Humanos e Psicologia Cognitiva →
        </Link>
      </div>
    </>
  );
}
