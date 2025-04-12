export default function FetchButton({ tableId }) {
  function handleClick() {
    fetch('http://localhost:8000/animals')
      .then(response => response.json())
      .then(json => {
        let data = JSON.parse(json);
        if (data.error) {
          console.log(json.message);
          return;
        }

        let table = document.getElementById(tableId);
        let thead = table.querySelector('thead tr');
        thead.innerHTML = '';
        data.headers.forEach(header => {
          let th = document.createElement('th');
          th.textContent = header;
          thead.append(th);
        });

        let tbody = table.querySelector('tbody');
        tbody.innerHTML = '';
        data.data.forEach(dataRow => {
          let tr = document.createElement('tr');
          dataRow.forEach(dataPoint => {
            let td = document.createElement('td');
            td.textContent = dataPoint;
            tr.append(td);
          })
          tbody.append(tr);
        });
      });
  }

  return (
    <button
      className="fetch-button"
      onClick={handleClick}
    >
      Find
    </button>
  )
}
