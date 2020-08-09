import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Saved, Search } from "./pages/index";
import { Header } from "./components/index";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
