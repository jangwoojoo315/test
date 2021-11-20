import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Main from "./Components/Main";
import MentoBoard from "./Components/MentoBoard";
import MentiBoard from "./Components/MentiBoard";
import PointStore from "./Components/PointStore";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Signin} />
        <Route path="/Signup" component={Signup} />
        <Route path="/main" component={Main} />
        <Route path="/mentoboard" component={MentoBoard} />
        <Route path="/mentiboard" component={MentiBoard} />
        <Route path="/pointstore" component={PointStore} />
      </BrowserRouter>
    </div>
  );
}

export default App;
