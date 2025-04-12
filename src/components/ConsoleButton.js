export default function ConsoleButton({ buttonText, messageText }) {
  function handleClick() {
    console.log(messageText);
  }

  return (
    <button
      className="console-button"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}
