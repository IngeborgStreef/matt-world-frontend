import React, {Component, useState} from 'react';
import {useForm} from "react-hook-form";
import "../../pages/FormStyling.css";

function FormParentDetails(props) {

    const {handleSubmit, formState: { errors }, register} = useForm();
    const [passwordMismatch, setPasswordMismatch] = useState(false)


    function onNext(data) {
        console.log(data)
        if(data.password !== data.repeatPassword){
            //oh no
            setPasswordMismatch(true)
            return;
        }
        props.updateParent(data)
        props.nextStep();
    }

    return (

        <div className="signup-box">
            <h1 className="form-title">Maak een account aan</h1>
            <h4 className="subtext">En lees gave boeken!</h4>

            <form className="form-one" onSubmit={handleSubmit(onNext)}>
                <label htmlFor="firstName">
                    <input type="text"
                           id="firstName"
                           placeholder="Voornaam"
                           defaultValue={props.values.firstName}
                           {...register("firstName",
                               {required: true})}
                    />
                </label>
                {errors.firstName && <p className="errorMessage">Dit veld is verplicht</p>}

                <label htmlFor="lastName">
                    <input type="text"
                           id="lastName"
                           placeholder="Achternaam"
                           defaultValue={props.values.lastName}
                           {...register("lastName",
                               {required: true})}
                    />
                </label>
                {errors.firstName && <p className="errorMessage">Dit veld is verplicht</p>}

                <label htmlFor="email">
                    <input type="text"
                           id="email"
                           placeholder="E-mail"
                           defaultValue={props.values.email}
                           {...register("email",
                               {required: true})}
                    />
                </label>
                {errors.firstName && <p className="errorMessage">Dit veld is verplicht</p>}

                <label htmlFor="password">
                    <input type="password"
                           id="password"
                           placeholder="Wachtwoord"
                           defaultValue={props.values.password}
                           {...register("password",
                               {required:true})}
                    />
                </label>
                {errors.firstName && <p className="errorMessage">Dit veld is verplicht</p>}

                <label htmlFor="confirmPassword">
                    <input type="password"
                           name="confirmPassword"
                           id="password"
                           placeholder="Herhaal wachtwoord"
                           {...register("repeatPassword")}
                    />
                </label>
                {passwordMismatch && <p className="errorMessage">De wachtwoorden komen niet overeen</p> }

                <div className="btn-box">
                    <input
                        type="submit"
                        className="nav-button"
                        value="volgende"
                    >
                    </input>
                </div>

            </form>
        </div>
    )
}


export default FormParentDetails;