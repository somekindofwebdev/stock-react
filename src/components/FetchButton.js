export default function FetchButton({ tableId }) {
  function handleClick() {
    fetch('http://localhost:8000/items/5?q=somequery')
      .then(response => response.json())
      .then(json => {
        let table = document.getElementById(tableId);
        table.innerHTML = json.q;
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
