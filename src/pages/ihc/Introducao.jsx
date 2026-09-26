import Callout from "../../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function Introducao() {
  return (
    <>
      <p className="eyebrow">Aula 1</p>
      <h1>Introdução à IHC</h1>
      <p className="lede mt-0">
        A Interação Humano-Computador (IHC) é uma disciplina multidisciplinar situada na
        intersecção entre a Ciência da Computação, Design e Ciências Sociais/Comportamentais. Seu
        objetivo central é deslocar o foco do desenvolvimento do "sistema" para o "humano",
        garantindo interações eficazes, seguras e agradáveis. Negligenciar os princípios de IHC
        acarreta altos custos de suporte, refatoração de software e exclusão digital, enquanto sua
        aplicação bem-sucedida maximiza a produtividade, a acessibilidade e a fidelização do
        usuário.
      </p>

      <h2 id="o-que-e-ihc">O que é IHC</h2>
      <p>
        A Interação Humano-Computador — também referenciada pelas siglas <strong>HCI</strong>{" "}
        (Human-Computer Interaction) ou <strong>CHI</strong> (Computer-Human Interface) — dedica-se
        ao estudo analítico e prático de como as pessoas interagem com dispositivos
        computacionais.
      </p>
      <ul>
        <li>
          <strong>Abrangência tecnológica:</strong> o escopo estende-se muito além dos desktops e
          smartphones, englobando caixas eletrônicos (ATMs), computadores de bordo veiculares,
          tablets, dispositivos vestíveis (wearables) e eletrodomésticos inteligentes.
        </li>
        <li>
          <strong>Natureza multidisciplinar:</strong> requer a integração sinérgica de diversas
          áreas do conhecimento:
          <ul>
            <li>
              <strong>Ergonomia:</strong> foca nas restrições físicas e biomecânicas do corpo
              humano.
            </li>
            <li>
              <strong>Psicologia Cognitiva:</strong> analisa a memória de trabalho, atenção,
              processos de aprendizado e percepção.
            </li>
            <li>
              <strong>Design e Estética:</strong> garante a correta combinação visual, alinhamentos
              e hierarquia da informação.
            </li>
            <li>
              <strong>Semiótica e Etnografia:</strong> estuda a comunicação baseada em signos e a
              influência de fatores socioculturais na interpretação de interfaces.
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="interface-vs-interacao">Interface vs. interação</h2>
      <p>É importante não confundir os dois termos:</p>
      <table>
        <thead>
          <tr>
            <th>Conceito</th>
            <th>Descrição e função</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interface (UI)</td>
            <td>
              Ponto de contato físico, perceptivo e conceitual do sistema. É a camada visível e
              tangível onde o usuário insere comandos e visualiza as respostas (ex: botões e
              campos de um site).
            </td>
          </tr>
          <tr>
            <td>Interação</td>
            <td>
              Processo dinâmico de diálogo entre o humano e a máquina. Envolve um ciclo iterativo
              contínuo de Ação (entrada do usuário) e Interpretação (resposta do sistema coerente
              com a meta do usuário).
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="design-centrado-usuario">Design Centrado no Usuário (DCU)</h2>
      <p>
        O desenvolvimento moderno de software exige a transição do modelo tradicional para o
        modelo centrado no ser humano:
      </p>
      <ul>
        <li>
          <strong>Abordagem convencional ("Dentro para Fora"):</strong> o projeto inicia-se na
          modelagem do banco de dados e arquitetura de código. A interface é concebida por último
          e modelada com base nos vícios técnicos do desenvolvedor.
        </li>
        <li>
          <strong>Abordagem IHC ("Fora para Dentro"):</strong> o usuário e seu contexto dominam o
          processo.
        </li>
      </ul>

      <Callout kind="def" title="Lema fundamental do DCU">
        <p className="mt-0">
          "A culpa nunca é do usuário." Se ocorre uma falha ou dificuldade operacional, a
          responsabilidade é do projeto da interface.
        </p>
      </Callout>

      <div className="next-prev">
        <span />
        <Link to="/ihc/usabilidade">
          <small>Próxima aula</small>
          Usabilidade e Acessibilidade →
        </Link>
      </div>
    </>
  );
}
