import React from "react";
import matt from '../assets/matt.png';
import arrowleft from '../assets/arrowleft.png'
import {useHistory} from "react-router-dom";

function CreateAccount() {
    // const history = useHistory();
    // function handleClick() {
    //     history.push("/main");
    // }

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <>
            <main className="mainpagecontainerForm">
                <aside className="matt">
                    <img src={matt} alt="Matt"/>
                </aside>

                <form onSubmit={onFormSubmit} className="newUserForm">
                    <h1>Nieuwe gebruiker</h1>

                    <legend>
                        <legend>Informatie ouder</legend>

                        <label htmlFor="parent-name">
                            Naam ouder:
                            <input type="text"
                                   name="name"
                                   id="details-parent-name"
                            />
                        </label>

                        <label htmlFor="email">
                            E-mail adres:
                            <input type="text"
                                   name="e-mail"
                                   id="e-mail"
                            />
                        </label>

                        <label htmlFor="password">
                            Wachtwoord:
                            <input type="text"
                                   name="password"
                                   id="password"
                            />
                        </label>

                    </legend>

                    <legend>
                        <legend>Informatie kind</legend>
                        <label htmlFor="kid-name">
                            Naam kind:
                            <input type="text"
                                   name="name"
                                   id="details-kid-name"
                            />
                        </label>

                        <label htmlFor="details-age">
                            Leeftijd kind:
                            <input type="text"
                                   name="age"
                                   id="details-age"
                            />
                        </label>
                    </legend>

                    <button type="submit" className="button">
                        Versturen
                    </button>

                </form>
            </main>

            <footer className="arrow">
                <button>
                    <img src="arrowleft" alt="arrowleft"/>
                </button>
            </footer>
        </>
    );
}

export default CreateAccount;