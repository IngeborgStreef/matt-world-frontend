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
import AdminElliot from "./pages/admin/AdminElliot";
import './pages/admin/AdminKidStyling.css';
import Goals from "./pages/admin/Goals"
import ShapeGame from './pages/ShapeGame';
import './pages/ShapeGame.css';

import NavigationBar from "./components/NavigationBar";
import './components/NavigationBar.css'
import ProfilePicture from "./components/ProfilePicture";
import './components/ProfilePicture.css';
import AdminNavigation from "./components/AdminNavigation";
import './components/AdminNavigation.css';
import Reading from "./components/Reading";
import './components/Reading.css';
import Shop from "./pages/admin/Shop";
import AwnserButton from "./components/AwnserButton";
import './components/AwnserButton.css';

function App() {
  return (
    <div className="App">
      {/*<Intro />*/}
      {/*<Main />*/}
      {/*<CreateAccount />*/}
      {/*<OtherAccount />*/}
      {/*<AdminAiden />*/}
      {/*<AdminElliot />*/}
      {/*<Goals />*/}
      {/*<Reading />*/}
      {/*<Shop />*/}
      {/*<AdminNavigation />*/}
      <ShapeGame />
      {/*<AwnserButton />*/}
    </div>
  );
}

export default App;