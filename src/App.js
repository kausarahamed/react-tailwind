import "./App.css";
import Header from "./component/header/Header";
import Navber from "./component/Navbar/Navber";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Header></Header>
      <h1 className="text-6xl">welcome to my pricing club</h1>
    </div>
  );
}

export default App;
