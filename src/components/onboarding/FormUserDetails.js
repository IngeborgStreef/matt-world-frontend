import React, {Component, useState} from 'react';
import {useForm} from "react-hook-form";
import "../../pages/FormStyling.css";

function FormUserDetails({props}) {

    const {handleSubmit, formState: {errors}, register} = useForm();
    const [password, setPassword] = useState("");

    const validatePassword = (value) => {
        if (password !== value) return false;
    }

    function onNext(event) {
        event.preventDefault();
        props.nextStep();
    }

    return (
        <div className="signup-box">
            <h1 className="form-title">Maak een account aan</h1>
            <h4 className="subtext">En lees gave boeken!</h4>

            <form className="form-one">
                <label htmlFor="firstName">
                    <input type="text"
                           id="firstName"
                           placeholder="Voornaam"
                           {...register(
                               "firstName",
                               {required: true}
                           )}
                    />
                </label>

                <label htmlFor="lastName">
                    <input type="text"
                           id="lastName"
                           placeholder="Achternaam"
                           {...register(
                               "lastName",
                               {required: true}
                           )}
                    />
                </label>

                <label htmlFor="email">
                    <input type="text"
                           id="email"
                           placeholder="E-mail"
                           {...register(
                               "email",
                               {required: true}
                           )}
                    />
                </label>

                <label htmlFor="password">
                    <input type="password"
                           id="password"
                           placeholder="Wachtwoord"
                           {...register(
                               "password",
                               {required: true}
                           )}
                    />
                </label>

                <label htmlFor="confirmPassword">
                    <input type="password"
                           name="confirmPassword"
                           id="password"
                           placeholder="Herhaal wachtwoord"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <div className="btn-box">
                    <button type="button" className="nav-button">
                        volgende
                    </button>
                </div>

            </form>
        </div>
    )
}


export default FormUserDetails;