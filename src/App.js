import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
