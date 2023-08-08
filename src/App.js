import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Data from "./data";

function App() {
  const cardGroup = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <div className="card-group">{cardGroup}</div>
    </>
  );
}

export default App;
