export default function Feature({ icon, title, description }) {
  return (
    <div>
      <h3 className="flex items-center gap-x-3 font-semibold text-gray-800 dark:text-gray-50">
        {icon} {title}
      </h3>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
