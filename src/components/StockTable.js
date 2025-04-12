import FetchButton from "./FetchButton";

export default function StockTable({ id }) {
  return <div>
    <table className="stock-table" id="{ id }">
      <thead>
        <tr>
          <th>Column header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Column data</td>
        </tr>
      </tbody>
    </table>
    <FetchButton tableId="{ id }" />
  </div>;
}
