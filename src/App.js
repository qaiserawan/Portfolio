import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
          <Route path="" />
          <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
