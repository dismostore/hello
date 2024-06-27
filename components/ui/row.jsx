export default function Row({ title, description }) {
  return (
    <tr className="even:bg-gray-50 dark:even:bg-gray-800">
      <td className="whitespace-nowrap p-4 text-gray-800 dark:text-gray-50 font-inter text-sm sm:w-48">
        {title}
      </td>
      <td className="whitespace-nowrap p-4 text-gray-800 dark:text-gray-50 font-inter text-sm ">
        {description}
      </td>
    </tr>
  );
}
