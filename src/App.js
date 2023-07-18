import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyNav } from "./components/MyNav";
import Api from "./components/Api";
function App() {
  return (
    <div className="App">
      <MyNav />
      <Api/>
    </div>
  );
}

export default App;
