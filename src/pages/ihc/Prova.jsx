import { Link } from "react-router-dom";

export default function Prova() {
  return (
    <>
      <p className="eyebrow">Foco na prova</p>
      <h1>Prova NPC1</h1>
      <p className="lede mt-0">
        Esta página reúne os conceitos das 5 aulas de IHC em um checklist de revisão, para você
        conferir o que já está sólido antes da prova.
      </p>

      <h2 id="como-estudar">Como usar esta revisão</h2>
      <p>
        Releia cada item do checklist abaixo e volte para o assunto correspondente sempre que
        tiver dúvida sobre algum conceito. Depois, treine no{" "}
        <Link to="/ihc/npc1/simulado">simulado</Link> — as questões cobrem as 5 aulas e usam
        repetição espaçada para priorizar o que você mais errou ou revisou há mais tempo.
      </p>

      <h2 id="checklist">Checklist antes da prova</h2>
      <ul className="checklist">
        <li>
          Sei explicar a diferença entre <strong>interface</strong> e <strong>interação</strong>, e
          o que muda entre a abordagem "Dentro para Fora" e o Design Centrado no Usuário ("Fora
          para Dentro").
        </li>
        <li>
          Sei a definição de usabilidade pela <strong>ISO 9241-11</strong> e cito os três pilares:
          eficácia, eficiência e satisfação.
        </li>
        <li>
          Sei distinguir aprendizabilidade, memorabilidade e gestão de erros como métricas
          complementares de usabilidade.
        </li>
        <li>
          Consigo listar as <strong>10 heurísticas de Nielsen</strong> e dar um exemplo prático de
          cada uma, não só o nome.
        </li>
        <li>
          Sei descrever os três subsistemas do <strong>Processador Humano de Informações (MHP)</strong>{" "}
          — perceptivo, cognitivo e motor — e seus tempos de ciclo aproximados.
        </li>
        <li>
          Sei explicar a <strong>Lei de Miller (7 ± 2 chunks)</strong> e por que interfaces
          modernas preferem o limite inferior (chunking).
        </li>
        <li>
          Sei diferenciar <strong>reconhecimento</strong> de <strong>evocação</strong>, e por que
          reconhecer é sempre preferível do ponto de vista de carga cognitiva.
        </li>
        <li>
          Sei os três pilares da ergonomia (cognitiva, física, organizacional) e os quatro{" "}
          <strong>critérios de Scapin e Bastien</strong> (condução, carga mental, controle
          explícito, adaptabilidade).
        </li>
        <li>
          Sei as três camadas de tratamento de erros: prevenção, tolerância e feedback humanizado
          — com um exemplo de cada.
        </li>
        <li>
          Fiz o <Link to="/ihc/npc1/simulado">simulado</Link> pelo menos três vezes seguidas, sem
          repetir erro.
        </li>
      </ul>

      <div className="center" style={{ marginTop: "2rem" }}>
        <Link to="/ihc/npc1/simulado" className="btn">
          Ir para o simulado
        </Link>
      </div>
    </>
  );
}
