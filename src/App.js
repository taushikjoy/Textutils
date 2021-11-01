import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />;
      <Form heading="Enter the text to analyze below" />;
    </div>
  );
}

export default App;
