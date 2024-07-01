export default function Row({ title, value, id }) {
  return (
    <tr key={id} className="tou sba">
      <td className="ftd dih okp cti rui auk elp">
        {title}
      </td>
      <td className="ftd dih okp cti rui elp">
        {value}
      </td>
    </tr>
  );
}
