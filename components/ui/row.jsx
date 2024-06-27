export default function Row({ title, value, id }) {
  return (
    <tr key={id} className="even:bg-gray-50 dark:even:bg-gray-800">
      <td className="whitespace-nowrap p-4 font-inter text-sm text-gray-800 sm:w-48 dark:text-gray-50">
        {title}
      </td>
      <td className="whitespace-nowrap p-4 font-inter text-sm text-gray-800 dark:text-gray-50">
        {value}
      </td>
    </tr>
  );
}
