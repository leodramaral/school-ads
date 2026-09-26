import Callout from "../../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function Usabilidade() {
  return (
    <>
      <p className="eyebrow">Aula 2</p>
      <h1>Usabilidade, Acessibilidade e a Norma ISO 9241-11</h1>
      <p className="lede mt-0">
        A norma ISO 9241-11 converte a percepção subjetiva de um sistema "amigável" em uma métrica
        objetiva e mensurável.
      </p>

      <h2 id="norma-iso">A norma ISO 9241-11</h2>
      <Callout kind="def" title="Definição normativa (ISO 9241-11)">
        <p className="mt-0">
          Usabilidade é "a medida na qual um produto pode ser usado por usuários específicos para
          alcançar objetivos específicos com eficácia, eficiência e satisfação em um contexto de
          uso específico."
        </p>
      </Callout>

      <h2 id="tres-pilares">Os três pilares da usabilidade</h2>
      <ol className="steps">
        <li>
          <strong>Eficácia:</strong> precisão e completude com que os usuários atingem as metas
          (medida por taxa de sucesso na tarefa, número de erros não corrigidos e acurácia dos
          dados).
        </li>
        <li>
          <strong>Eficiência:</strong> quantidade de recursos (tempo e esforço mental/físico)
          despendidos para atingir o objetivo (medida por tempo de execução, número de cliques e
          curva de aprendizado).
        </li>
        <li>
          <strong>Satisfação:</strong> resposta emocional, aceitabilidade e conforto do usuário
          (medida por escalas padronizadas como SUS — System Usability Scale, CSAT e NPS).
        </li>
      </ol>

      <h2 id="metricas-complementares">Métricas complementares de usabilidade</h2>
      <ul>
        <li>
          <strong>Aprendizabilidade (Learnability):</strong> facilidade com que usuários novatos
          realizam tarefas básicas na primeira tentativa sem treinamento.
        </li>
        <li>
          <strong>Memorabilidade (Memorability):</strong> facilidade em restabelecer a proficiência
          após um período sem utilizar a interface.
        </li>
        <li>
          <strong>Gestão de erros:</strong> frequência, gravidade e capacidade de rápida
          recuperação diante de falhas operacionais.
        </li>
      </ul>

      <h2 id="acessibilidade">Acessibilidade: dever ético e legal</h2>
      <p>
        A acessibilidade garante que pessoas com diferentes capacidades (temporárias ou
        permanentes) utilizem o sistema. No Brasil, respaldada por legislação, exige recursos como
        leitores de tela (texto alternativo em imagens), alto contraste e redimensionamento de
        fontes.
      </p>
      <Callout kind="example" title="Benefício universal">
        <p className="mt-0">
          O investimento em acessibilidade gera benefícios universais — por exemplo, saídas de
          áudio em ATMs auxiliam não apenas deficientes visuais, mas pessoas sob luz solar intensa.
        </p>
      </Callout>

      <div className="next-prev">
        <Link to="/ihc/introducao">
          <small>Aula anterior</small>← Introdução à IHC
        </Link>
        <Link to="/ihc/heuristicas">
          <small>Próxima aula</small>
          As 10 Heurísticas de Nielsen →
        </Link>
      </div>
    </>
  );
}
