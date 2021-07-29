import React from "react";
import "./FormStyling.css";
import {useHistory} from "react-router-dom";
import matt from "../assets/matt.png"
import UserForm from "../components/user/UserForm";
import UserService from "../components/user/UserService";

function CreateUserPage() {

    const history = useHistory();
    const userService = new UserService();

    async function onComplete(user) {
        await userService.createUser(user)
        history.push("/login");
    }

    return (
        <body>
        <div className="signup-box">
            <h1 className="form-title">Maak een account aan</h1>
            <h4 className="subtext">En lees gave boeken!</h4>
            <form className="form">
                <label htmlFor="voornaam">
                    <input type="text"
                           name="first-name"
                           id="first-name"
                           placeholder="voornaam"
                    />
                </label>

                <label htmlFor="achternaam">
                    <input type="text"
                           name="achter-name"
                           id="achter-name"
                           placeholder="achternaam"
                    />
                </label>

                <label htmlFor="email">
                    <input type="text"
                           name="email"
                           id="email"
                           placeholder="e-mail"
                    />
                </label>

                <label htmlFor="password">
                    <input type="password"
                           name="password"
                           id="password"
                           placeholder="wachtwoord"
                    />
                </label>

                <label htmlFor="password">
                    <input type="password"
                           name="password"
                           id="password"
                           placeholder="herhaal wachtwoord"
                    />
                </label>
                <button type="submit" className="signup-button">
                    aanmaken
                </button>
            </form>
        </div>
        </body>
    )
}

export default CreateUserPage;