import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Main from './Components/Main';
import MentoBoard from './Components/MentoBoard';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Route path="/" exact component={Signin}/>
      <Route path="/Signup" component={Signup}/>
      <Route path="/main" component={Main}/>
      <Route path="/mentoboard" component={MentoBoard}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
