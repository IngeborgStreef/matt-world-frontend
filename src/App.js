import React from "react";
import './App.css';

import Intro from './pages/Intro';
import './pages/Intro.css';
import Main from './pages/Main';
import './pages/Main.css';
import CreateAccount from "./pages/CreateAccount";
import './pages/CreateAccount.css';
import OtherAccount from "./pages/OtherAccount";
import './pages/OtherAccount.css';
import AdminAiden from "./pages/admin/AdminAiden";
import './pages/admin/AdminAiden.css';

import NavigationBar from "./components/NavigationBar";
import './components/NavigationBar.css'
import ProfilePicture from "./components/ProfilePicture";
import './components/ProfilePicture.css';
import AdminNavigation from "./components/AdminNavigation";
import './components/AdminNavigation.css';
import Reading from "./components/Reading";
import './components/Reading.css';

function App() {
  return (
    <div className="App">
      {/*<Intro />*/}
      {/*<Main />*/}
      {/*<CreateAccount />*/}
      {/*<OtherAccount />*/}
      <AdminAiden />
      {/*<Reading />*/}
    </div>
  );
}

export default App;