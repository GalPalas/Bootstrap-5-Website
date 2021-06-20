import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import WelcomePage from "./components/pages/welcomePage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
