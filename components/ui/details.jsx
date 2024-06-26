import { Icons } from "./icons";

export default function Details({ children, className, title, aria }) {
  return (
    <details className={`group ${className}`}>
      <summary
        className="flex justify-between items-center font-medium cursor-pointer p-2 -m-2 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:focus-visible:ring-green-300"
        aria-expanded="false"
        aria-controls={aria}
      >
        <h3 className="font-semibold text-gray-800 dark:text-gray-50 max-w-3xl">
          {title}
        </h3>
        <span className="sr-only">Expand</span>
        <Icons.Accordian />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
