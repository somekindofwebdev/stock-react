import { useState } from 'react';

export default function StockTable({ id }) {
  const [headers, setHeaders] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  async function update() {
    let newData = await fetch('http://localhost:8000/animals')
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          console.log(json.message);
          return;
        }
        return json;
      });
    setHeaders(newData.headers);
    setDataRows(newData.data);
  }

  return <>
    <table className="stock-table" id="{ id }">
      <thead>
        <tr>
          { headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { dataRows.map((row, index) => (
          <tr key={index}>
            {row.map((dataPoint, dpIndex) => (
              <td key={dpIndex}>{dataPoint}</td>
            ))}
          </tr>
        ))
        }
      </tbody>
    </table>
    <button onClick={update}>Update</button>
  </>;
}
