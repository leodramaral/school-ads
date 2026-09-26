import Callout from "../../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function Ergonomia() {
  return (
    <>
      <p className="eyebrow">Aula 5</p>
      <h1>Ergonomia, Carga de Trabalho e os Critérios de Scapin &amp; Bastien</h1>
      <p className="lede mt-0">
        Interfaces ergonômicas funcionam como uma rede de segurança para proteger o usuário de
        falhas, reduzindo o esforço mental exigido para operar o sistema.
      </p>

      <h2 id="pilares-ergonomia">Os três pilares da ergonomia</h2>
      <ul>
        <li>
          <strong>Ergonomia Cognitiva:</strong> foco nos processos mentais, percepção, atenção e
          capacidade de raciocínio.
        </li>
        <li>
          <strong>Ergonomia Física:</strong> adaptação anatômica, postural e biomecânica às
          ferramentas de trabalho.
        </li>
        <li>
          <strong>Ergonomia Organizacional:</strong> otimização dos sistemas sociotécnicos, ritmos
          de trabalho e fluxos institucionais.
        </li>
      </ul>

      <h2 id="criterios-scapin-bastien">Critérios de Scapin e Bastien</h2>
      <p>São diretrizes usadas para diagnosticar se uma interface é saudável ergonomicamente:</p>
      <ul>
        <li>
          <strong>Condução (Guidance):</strong> capacidade do sistema de guiar e orientar o
          usuário. Inclui mensagens de status claras, dicas contextuais de preenchimento e barras
          de progresso, para que a pessoa saiba exatamente o que está acontecendo.
        </li>
        <li>
          <strong>Carga Mental:</strong> o quanto a interface se esforça para minimizar o esforço
          de leitura e memorização do usuário, apresentando telas limpas, focadas e com sínteses
          claras.
        </li>
        <li>
          <strong>Controle Explícito:</strong> o usuário deve sentir que está no comando absoluto.
          O sistema não deve tomar ações automáticas inesperadas, e deve sempre oferecer saídas
          fáceis (como botões de "Cancelar" ou "Desfazer").
        </li>
        <li>
          <strong>Adaptabilidade:</strong> capacidade da interface de se ajustar a diferentes
          perfis de usuário — de um "Modo Básico" para iniciantes a atalhos/"Modo Expert" para
          profissionais.
        </li>
      </ul>

      <h2 id="carga-trabalho-mental">Carga de trabalho mental</h2>
      <p>
        Refere-se ao nível de esforço intelectual exigido do usuário para realizar uma tarefa. A
        regra de ouro aqui é: <strong>reconhecer é mais fácil do que lembrar.</strong>
      </p>
      <Callout kind="warn" title="Sobrecarga (erro de recall)">
        <p className="mt-0">
          Um sistema antigo de terminal de banco que obriga o funcionário a decorar códigos de
          comandos complexos (ex: digitar <code>&gt;L 102_B</code>) para fechar o caixa sobrecarrega
          a memória de trabalho.
        </p>
      </Callout>
      <Callout kind="def" title="Carga otimizada (reconhecimento)">
        <p className="mt-0">
          Interfaces modernas que usam pastas, ícones e menus visuais: o usuário não decora nada,
          apenas olha para a tela, reconhece o botão correspondente e clica.
        </p>
      </Callout>

      <h2 id="tratamento-erros">Tratamento de erros</h2>
      <p>O tratamento de erros ocorre em três camadas:</p>
      <ol className="steps">
        <li>
          <strong>Prevenção:</strong> bloquear a falha antes que ela aconteça. Exemplo: deixar o
          botão "Enviar" cinza e desabilitado enquanto o usuário não preencher o campo obrigatório
          de e-mail.
        </li>
        <li>
          <strong>Tolerância:</strong> absorver o impacto caso o erro ocorra. Exemplo:
          disponibilizar o comando Ctrl + Z (Desfazer) para que um arquivo deletado por acidente
          seja recuperado instantaneamente.
        </li>
        <li>
          <strong>Feedback Humanizado:</strong> mensagens de erro nunca devem ser técnicas ou
          robóticas como "Erro Órfão 404". Elas devem ser claras, neutras e resolutivas, explicando
          didaticamente o que houve e como corrigir.
        </li>
      </ol>

      <h2 id="consistencia-padronizacao">Consistência e padronização ergonômica</h2>
      <p>
        Manter convenções visuais e operacionais consistentes em toda a aplicação serve para
        reduzir drasticamente o tempo que uma pessoa leva para aprender a mexer em um sistema.
      </p>

      <div className="next-prev">
        <Link to="/ihc/fatores-humanos">
          <small>Aula anterior</small>← Fatores Humanos e Psicologia Cognitiva
        </Link>
        <Link to="/ihc/npc1">
          <small>Próxima página</small>
          Prova NPC1 →
        </Link>
      </div>
    </>
  );
}
