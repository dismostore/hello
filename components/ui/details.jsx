import { Icons } from "./icons";

export default function Details({ children, className, title, aria }) {
  return (
    <details className={`group ${className}`}>
      <summary
        className="upa yez znp irx saf nmm mtg ygz elq jig cba"
        aria-expanded="false"
        aria-controls={aria}
      >
        <h3 className="rvj cbh rui elp">
          {title}
        </h3>
        <Icons.Accordian />
      </summary>
      <div className="uej">{children}</div>
    </details>
  );
}
