import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useform } from 'react-hook-form'

//Pages
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
import WorldMap from "./pages/WorldMap";
import Book from "./pages/book/Book"
import LeftPage from "./pages/book/LeftPage";
import RightPage from "./pages/book/RightPage";
import './pages/book/Book.css'
import './pages/book/some.css'
import BothPages from "./pages/book/BothPages";


//Assets
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
// import Book from "./pages/book/Book";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Intro/>
                </Route>

                <Route path="/main">
                    <Main />
                </Route>

                <Route path="/create-account">
                    <CreateAccount />
                </Route>

                <Route path="/other-user">
                    <OtherAccount />
                </Route>

                <Route path="/world-map">
                    <WorldMap />
                </Route>

                <Route path="/book">
                    <Book />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;