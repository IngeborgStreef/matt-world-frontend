import React from "react";
import NavigationBar from "../components/NavigationBar";
import earth from '../assets/earth.png';
import matt from '../assets/matt.png';
import {useHistory} from "react-router-dom";

function Main() {

    return (
        <main className="mainpagecontainer">
            <aside className="matt">
                <img src={matt} alt="Matt"/>
            </aside>

            <nav className="navigation">
                <h1>IT'S A MATT WORLD</h1>
                <NavigationBar
                    image={earth}
                    title="userpic"
                    navigationdirection="Ga verder"
                    target="/book"
                />
                <NavigationBar
                    image={earth}
                    title="otherpic"
                    navigationdirection="Andere gebruiker"
                    target="/other-user"
                />
                <NavigationBar
                    image={earth}
                    title="emptyuser"
                    navigationdirection="Nieuwe gebruiker"
                    target="/create-account"
                />
            </nav>
        </main>
    );
}

export default Main;