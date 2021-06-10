import React from "react";
import NavigationBar from "../components/NavigationBar";
import earth from '../assets/earth.png';
import matt from '../assets/matt.png';

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
                />
                <NavigationBar
                    image={earth}
                    title="otheruserpic"
                    navigationdirection="Andere gebruiker"
                />
                <NavigationBar
                    image={earth}
                    title="emptyuser"
                    navigationdirection="Nieuwe gebruiker"
                />
            </nav>
        </main>
    );
}

export default Main;