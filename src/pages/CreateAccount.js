import React, {useState} from "react";
import matt from '../assets/matt.png';
import arrowleft from '../assets/arrowleft.png'
import {useHistory} from "react-router-dom";
import {User} from "../models/User";
import {UserService} from "../services/UserService";
import {useForm} from "react-hook-form";

function CreateAccount() {

    const {handleSubmit, formState: {errors}, register} = useForm();
    const [parentName, setParentName] = useState("");
    const [email, setEmail] = useState("");
    const [nameKid, setNameKid] = useState("");
    const [ageKid, setAgeKid] = useState(0);
    const [password, setPassword] = useState("");

    function onFormSubmit(data) {
        console.log(data)
    }

    const validatePassword = (value)=> {
        if (password !== value) return false;
    }

    const history = useHistory();
    function handleClick() {
        history.push("/main");
    }

    //todo injection
    const  userService = new UserService();

    return (
        <>
            <main className="mainpagecontainerForm">
                <aside className="matt">
                    <img src={matt} alt="Matt"/>
                </aside>

                <form className="newUserForm" onSubmit={handleSubmit(onFormSubmit)}>
                    <h1>Nieuwe gebruiker</h1>

                    <legend>
                        <legend>Informatie ouder</legend>

                        <label htmlFor="parent-name">
                            Naam ouder:
                            <input type="text"
                                   id="details-parent-name"
                                   placeholder="Type hier uw naam"
                                   // value={parentName}
                                   // onChange={(event) => setParentName(event.target.value)}
                                   {...register("parentName",
                                       {
                                       required: true
                                   })}
                            />
                            {errors.parentName && <p className="errorMessage">erororororororororororrrrrrooooooooorr</p>}
                        </label>

                        <label htmlFor="email">
                            E-mail adres:
                            <input type="text"
                                   //id
                                   placeholder="ouder@service.nl"
                                   {...register("emailRegistration", {
                                       required: true,
                                       validate: (value) => value.includes('@')
                                   })}
                            />
                            {errors.emailRegistration && <p className="errorMessage">erororororororororororrrrrrooooooooorr</p>}
                        </label>

                        <label htmlFor="password">
                            Wachtwoord:
                            <input type="password"
                                   id="password"
                                   placeholder="Uw wachtwoord"
                                   {...register("password", {
                                       required: true,
                                   })}
                            />
                            {errors.password && <p className="errorMessage">erororororororororororrrrrrooooooooorr</p>}
                        </label>

                        <label htmlFor="password-confirmation">
                            Herhaal wachtwoord:
                            <input type="password"
                                   name="password-confirmation"
                                   id="password-confirmation"
                                   placeholder="Herhaal uw wachtwoord"
                                   {...register("passwordConfirmation", {
                                       required: true,
                                   })}
                            />
                            {errors.passwordConfirmation && <p className="errorMessage">erororororororororororrrrrrooooooooorr</p>}
                        </label>

                    </legend>

                    <legend>
                        <legend>Informatie kind</legend>
                        <label htmlFor="kid-name">
                            Naam kind:
                            <input type="text"
                                   id="details-kid-name"
                                   placeholder="Naam van uw kind"
                                   {...register("nameKid", {
                                           required: true
                                       }
                                   )}
                            />
                            {errors.nameKid && <p className="errorMessage">erororororororororororrrrrrooooooooorr</p>}
                        </label>

                        <label htmlFor="details-age">
                            Leeftijd kind:
                            <input type="text"
                                   id="details-age"
                                   placeholder="Leeftijd van uw kind"
                                   {...register("ageKid", {
                                           required: true
                                       }
                                   )}
                            />
                            {errors.ageKid && <p className="errorMessage">erororororororororororrrrrrooooooooorr</p>}
                        </label>
                    </legend>

                    <button
                        type="submit"
                        className="button">
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

// value={email}
// onChange={(event) => setEmail(event.target.value)}