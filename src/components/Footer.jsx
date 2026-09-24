export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-5 py-8 text-center text-[0.84rem] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <p>
        Material de apoio para estudo, baseado nas notas de aula de{" "}
        <em>Geometria Analítica I: Matrizes, Determinantes e Sistemas Lineares</em> (Profª
        Viviane Carla Fortulan). Uso educacional, não oficial.
      </p>
      <p>
        <a href="./apostila-geometria-analitica-i.pdf" target="_blank" rel="noreferrer">
          Baixar apostila original em PDF
        </a>
      </p>
    </footer>
  );
}
