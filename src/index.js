import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AppProvider } from "./components/context";

/*React Router imports*/
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
/*React pages imports*/
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/admission">
            <Admission />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
