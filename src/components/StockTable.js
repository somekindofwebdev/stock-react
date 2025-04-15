import { useState } from 'react';
import EditableTD from './EditableTD';

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
    setHeaders(Object.keys(newData[0]));
    setDataRows(newData);
  }

  function addRow() {
    setDataRows([...dataRows, ['', '', '', '']]);
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
            {Object.values(row).map((dataPoint, dpIndex) => (
              <EditableTD rowId={index} columnId={dpIndex} datasource={headers[dpIndex]} key={dpIndex} value={dataPoint} />
            ))}
          </tr>
        ))
        }
      </tbody>
    </table>
    <button onClick={update}>Refresh</button>
    <button onClick={addRow}>Add Animal</button>
  </>;
}
