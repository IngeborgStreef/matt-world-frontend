import React from "react";
import matt from '../assets/matt.png';
import arrowleft from '../assets/arrowleft.png'
import {useHistory} from "react-router-dom";
import {User} from "../models/User";
import {UserService} from "../services/UserService";

function CreateAccount() {
    // const history = useHistory();
    // function handleClick() {
    //     history.push("/main");
    // }

    //todo injection
    const  userService = new UserService();

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        let user = new User();
        userService.create(user)
        userService.findByEmail(user.email)
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
                            <input type="password"
                                   name="password"
                                   id="password"
                            />
                        </label>

                        <label htmlFor="password-confirmation">
                            Herhaal wachtwoord:
                            <input type="password"
                                   name="password-confirmation"
                                   id="password-confirmation"
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