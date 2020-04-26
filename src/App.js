import React from 'react';
import { Provider } from "./store";
import reducers from "./store/reducers"
import initialState from "./store/initialState";

import Nav from "./components/Nav";
import BottomMenu from "./components/BottomMenu";
import Settings from "./components/Settings";
import CyclesPage from "./components/CyclesPage";
import StateController from "./components/StateController";
import DefineChronotype from "./components/DefineChronotype";
import Message from "./components/Message";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Provider initialState={initialState} reducer={reducers}>
      <Nav/>
      <main>
        <Route path="/" component={CyclesPage} exact/>
        <Route path="/settings" component={Settings} exact/>
        <Route path="/definechronotype" component={DefineChronotype} exact/>
        <Message/>
      </main>
      <BottomMenu/>
      <StateController/>
    </Provider>
  </Router>
)

export default App;
