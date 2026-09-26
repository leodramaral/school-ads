import Callout from "../../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function FatoresHumanos() {
  return (
    <>
      <p className="eyebrow">Aula 4</p>
      <h1>Fatores Humanos e Psicologia Cognitiva em IHC</h1>
      <p className="lede mt-0">
        Em IHC, entender de computação sem compreender psicologia cognitiva é como projetar
        estradas sem saber como os carros funcionam. Fatores Humanos estuda as capacidades e
        limitações do ser humano aplicadas ao design de sistemas, garantindo que o software se
        ajuste à biologia e à mente do usuário, e não o contrário.
      </p>

      <h2 id="mhp">Processador Humano de Informações (MHP)</h2>
      <p>
        Desenvolvido por Stuart Card, Thomas Moran e Allen Newell (1983), o{" "}
        <strong>Model Human Processor</strong> traça uma analogia direta entre a arquitetura da
        mente humana e a de um computador. É dividido em três subsistemas interdependentes:
      </p>
      <ol className="steps">
        <li>
          <strong>Subsistema Perceptivo:</strong> capta estímulos do ambiente através dos órgãos
          sensoriais (visão, audição) e os armazena temporariamente nos registros sensoriais.
          Velocidade de ciclo estimada: ~100 ms.
        </li>
        <li>
          <strong>Subsistema Cognitivo:</strong> atua como a CPU mental. Busca dados nos registros
          sensoriais, cruza com o conhecimento guardado na Memória de Longo Prazo e decide uma
          resposta usando a Memória de Trabalho. Ciclo básico: ~70 ms.
        </li>
        <li>
          <strong>Subsistema Motor:</strong> executa a resposta física ordenada pela cognição (ex:
          mover a mão para clicar no mouse, pressionar uma tecla). Ciclo básico: ~70 ms.
        </li>
      </ol>
      <p>
        Esses três subsistemas formam um <strong>loop de processamento contínuo</strong>: o
        usuário percebe um estímulo na tela, o subsistema cognitivo decide o que fazer com base na
        memória de trabalho e de longo prazo, e o subsistema motor executa a ação — que gera novos
        estímulos, reiniciando o ciclo.
      </p>

      <h2 id="lei-de-miller">Lei de Miller e carga cognitiva</h2>
      <Callout kind="def" title="A Lei de Miller (7 ± 2 chunks)">
        <p className="mt-0">
          Formulada por George Miller, dita que um ser humano médio consegue reter apenas{" "}
          <strong>7 ± 2 elementos isolados</strong> simultaneamente na memória de curto prazo. Em
          interfaces modernas, prefere-se focar no limite inferior (4 a 5 blocos de informação —
          técnica de <em>chunking</em>) para evitar fadiga visual e mental.
        </p>
      </Callout>
      <p>
        <strong>Carga cognitiva</strong> é a quantidade total de esforço mental exigido da memória
        de trabalho. Interfaces poluídas, com nomenclaturas ambíguas ou que forçam o usuário a
        calcular taxas secretas ou decifrar ícones abstratos, causam sobrecarga cognitiva —
        culminando em desistência ou erro catastrófico.
      </p>

      <h2 id="reconhecimento-evocacao">Reconhecimento vs. evocação</h2>
      <p>
        É muito mais fácil para o cérebro <strong>reconhecer</strong> um comando visual explícito
        em uma tela (ex: um ícone de lixeira para excluir) do que <strong>evocar</strong>/lembrar
        da memória um comando de texto bruto (ex: digitar <code>rm -rf</code> no terminal).
        Projetar boas interfaces significa priorizar o reconhecimento sobre a evocação — a regra de
        ouro é: <em>reconhecer é mais fácil do que lembrar</em>.
      </p>

      <h2 id="exemplos-reais">Exemplos reais sob a ótica psicológica</h2>
      <div className="callout callout--example">
        <h4>Exemplo 1 (sucesso) — divisão de códigos de autenticação</h4>
        <p className="mt-0">
          Quando você vai digitar o código enviado por SMS para autenticar uma conta de banco,
          aplicativos bem projetados quebram o número em blocos visuais (ex: 452 - 891) ao invés de
          exibir tudo colado (452891). Isso aplica a técnica de <em>chunking</em>, reduzindo
          radicalmente a perda de dados durante o trajeto entre ler a mensagem e digitar no app.
        </p>
      </div>
      <div className="callout callout--example">
        <h4>Exemplo 2 (falha histórica) — painéis de controle de aeronaves e fábricas</h4>
        <p className="mt-0">
          Painéis de aviação antigos concentravam dezenas de ponteiros idênticos lado a lado. Se o
          piloto precisasse identificar uma falha no motor em segundos, o subsistema perceptivo
          falhava devido à falta de diferenciação visual (cegueira de atenção). Em IHC moderna,
          sistemas críticos usam cores e alertas dinâmicos baseados no MHP para quebrar a monotonia
          visual e direcionar o subsistema cognitivo instantaneamente ao problema.
        </p>
      </div>
      <div className="callout callout--example">
        <h4>Exemplo 3 (atrito diário) — mismatch de modelos mentais</h4>
        <p className="mt-0">
          Menus de configurações infinitos que exigem que o usuário decore onde está uma opção
          oculta geram enorme atrito. Aplicativos de e-commerce que escondem o carrinho de compras
          ou alteram o botão de avançar de lugar violam o modelo mental do usuário, forçando o
          processador cognitivo a gastar ciclos extras tentando reaprender o fluxo do app.
        </p>
      </div>

      <div className="next-prev">
        <Link to="/ihc/heuristicas">
          <small>Aula anterior</small>← As 10 Heurísticas de Nielsen
        </Link>
        <Link to="/ihc/ergonomia">
          <small>Próxima aula</small>
          Ergonomia e Critérios de Scapin & Bastien →
        </Link>
      </div>
    </>
  );
}
