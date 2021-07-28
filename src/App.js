import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Intro from "./pages/Intro";
import RomanEmpire from "./pages/book/RomanEmpire";


function App() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Intro />
                </Route>
                {/*//*/}
                {/*//         <Route exact path="/create-account">*/}
                {/*//             <CreateUserPage completed={() => console.log("completed")}/>*/}
                {/*//         </Route>*/}
                {/*//*/}
                {/*//         <Route path="/main">*/}
                {/*//             <Main/>*/}
                {/*//         </Route>*/}
                {/*//*/}
                {/*//         <Route path="/other-user">*/}
                {/*//             <OtherAccount/>*/}
                {/*//         </Route>*/}
                {/*//*/}
                {/*//         <Route path="/world-map">*/}
                {/*//             <WorldMap/>*/}
                {/*//         </Route>*/}
                {/*//*/}
                {/*//         <Route path="/book">*/}
                {/*//             <Book/>*/}
                {/*//         </Route>*/}
                {/*//*/}
                <Route path="/roman-empire">
                    <RomanEmpire />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;