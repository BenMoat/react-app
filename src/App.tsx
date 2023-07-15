import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
