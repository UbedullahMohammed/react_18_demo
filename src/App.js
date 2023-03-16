import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AutoBatching from "./components/Batching/AutoBatching";
import "bootstrap/dist/css/bootstrap.min.css";
import UseidHook from "./components/Hooks/UseidHook";
import UseTransitionHookOne from "./components/Hooks/UseTransitionHookOne";
import UseTransitionHookTwo from "./components/Hooks/UseTransitionHookTwo";
import SuspenseOne from "./components/Suspense/Ex1/SuspenseOne";
import UseDeferredValueHook from "./components/Hooks/UseDeferredValueHook";
import UseEffectHook from "./components/StrictMode/UseEffectHook";
import StateManagement from "./components/Statemanagement/StateManagement";
import DataFetchingOne from "./components/Statemanagement/DataFetching/DataFetchingOne";
import DataFetchingTwo from "./components/Statemanagement/DataFetching/DataFetchingTwo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/batching" element={<AutoBatching />}></Route>
          <Route exact path="/useid" element={<UseidHook />}></Route>
          <Route
            exact
            path="/usetransitionone"
            element={<UseTransitionHookOne />}
          ></Route>
          <Route
            exact
            path="/usetransitiontwo"
            element={<UseTransitionHookTwo />}
          ></Route>
          <Route
            exact
            path="/usedeferrenvalue"
            element={<UseDeferredValueHook />}
          ></Route>
          <Route exact path="/suspense" element={<SuspenseOne />}></Route>
          <Route exact path="/strickmode" element={<UseEffectHook />}></Route>
          <Route
            exact
            path="/statemanagement"
            element={<StateManagement />}
          ></Route>
          <Route
            exact
            path="/datafetchingone"
            element={<DataFetchingOne />}
          ></Route>
          <Route
            exact
            path="/datafetchingtwo"
            element={<DataFetchingTwo />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
