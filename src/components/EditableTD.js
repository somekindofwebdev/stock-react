import { useState } from "react";

export default function EditableTD({ value, rowId, columnId, datasource, filterTable }) {
  const [options, setOptions] = useState([]);

  function handleClick() {
    let td = document.getElementById(rowId + '|' + columnId);
    td.classList.add('editing');

    // let ftQuery = filterTable ? ('/' + filterTable) : '';
    if (datasource) {
      fetch('http://localhost:8000/options/' + datasource) // + ftQuery)
        .then(response => response.json())
        .then(json => setOptions(json.options))
    }
  }

  return (
    <td id={ rowId + '|' + columnId } className={ 'editable-td' + (value === '' ? 'editing' : '') } onClick={handleClick}>
      <span>{value}</span>
      {datasource && options
        ? <select>{ options.map((option, index) => (
          <option key={index} value={option[0]}>{option[1]}</option>
        )) }</select>
        : <input type="text" placeholder={value}></input> }
    </td>
  )
}
