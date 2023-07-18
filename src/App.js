import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyNav } from "./components/MyNav";
import Api from "./components/Api";
import Fulfilment from "./components/Fulfilment";
function App() {
  return (
    <div className="App">
      <MyNav />
      <Api/>
      <Fulfilment/>
    </div>
  );
}

export default App;
