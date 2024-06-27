import { Icons } from "./icons";

export default function Details({ children, className, title, aria }) {
  return (
    <details className={`group ${className}`}>
      <summary
        className="-m-2 flex cursor-pointer list-none items-center justify-between p-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:focus-visible:ring-green-300"
        aria-expanded="false"
        aria-controls={aria}
      >
        <h3 className="max-w-3xl font-semibold text-gray-800 dark:text-gray-50">
          {title}
        </h3>
        <span className="sr-only">Expand</span>
        <Icons.Accordian />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
