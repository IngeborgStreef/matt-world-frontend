import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Intro from "./pages/Intro";
import Login from "./pages/Login";
import CreateUserPage from "./pages/CreateUserPage";
import RomanEmpire from "./pages/book/RomanEmpire";


function App() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Intro />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <CreateUserPage path="/create-user">
                    <CreateUserPage />
                </CreateUserPage>

                <Route path="/roman-empire">
                    <RomanEmpire />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;