import React from "react";
import './App.css';
import {userForm} from "./components/onboarding/UserForm"
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Intro from "./pages/Intro";
import UserForm from "./components/onboarding/UserForm";
import Login from "./pages/Login";
import RomanEmpire from "./pages/book/RomanEmpire";
import Background from "./components/background/Background";

function App() {
    return (
        <div>
            <div className="star-container">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>


        <Router>
            <Switch>

                <Route exact path="/">
                    <Intro/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/create-user">
                    <UserForm/>
                </Route>

                <Route path="/roman-empire">
                    <RomanEmpire/>
                </Route>

            </Switch>
        </Router>
</div>
);
}

export default App;