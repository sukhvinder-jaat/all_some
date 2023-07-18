import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyNav } from "./components/MyNav";
import SellShoper from "./components/SellShoper";
function App() {
  return (
    <div className="App">
      {/* <MyNav /> */}
      <SellShoper/>
    </div>
  );
}

export default App;
