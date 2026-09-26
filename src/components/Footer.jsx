import { useLocation } from "react-router-dom";
import { getActiveSubject } from "../data/subjects.js";

export default function Footer() {
  const location = useLocation();
  const credit = getActiveSubject(location.pathname)?.credit;

  return (
    <footer className="border-t border-neutral-200 px-5 py-8 text-center text-[0.84rem] text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
      <p>
        Material de apoio para estudo, uso educacional e não oficial.
        {credit?.sourceNote && <> {credit.sourceNote}</>}
      </p>
      {credit?.pdfHref && (
        <p>
          <a href={credit.pdfHref} target="_blank" rel="noreferrer">
            {credit.pdfLabel}
          </a>
        </p>
      )}
    </footer>
  );
}
