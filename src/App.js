import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import SingleGame from "./components/SingleGame";
import BotGame from "./components/BotGame";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Pet Finder</h1>
          <NavLink exact to="/">
            Single Game
          </NavLink>
          <NavLink to="/botgame">Bot Game</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <SingleGame />
          </Route>
          <Route path="/botgame">
            <BotGame />
          </Route>
          <Route path="/leaderboard">
            <Test />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
