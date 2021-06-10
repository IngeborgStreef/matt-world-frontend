import React from "react";
import './App.css';

import Intro from './pages/Intro';
import './pages/Intro.css';
import Main from './pages/Main';
import './pages/Main.css';
import CreateAccount from "./pages/CreateAccount";
import './pages/CreateAccount.css';

import NavigationBar from "./components/NavigationBar";
import './components/NavigationBar.css'

function App() {
  return (
    <div className="App">
      {/*<Intro />*/}
      {/*<Main />*/}
      <CreateAccount />
    </div>
  );
}

export default App;