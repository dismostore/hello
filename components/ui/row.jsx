export default function Row({ title, value, id }) {
  return (
    <tr key={id} className="even:bg-gray-50 dark:even:bg-gray-800">
      <td className="whitespace-nowrap p-4 text-gray-800 dark:text-gray-50 font-inter text-sm sm:w-48">
        {title}
      </td>
      <td className="whitespace-nowrap p-4 text-gray-800 dark:text-gray-50 font-inter text-sm ">
        {value}
      </td>
    </tr>
  );
}
