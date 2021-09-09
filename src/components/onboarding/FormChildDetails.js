import React, {Component, useState} from 'react';
import {useForm} from "react-hook-form";
import "../../pages/FormStyling.css";

function FormChildDetails(props) {

    const {handleSubmit, formState: { errors }, register} = useForm();

    function onNext(data) {
        //if errror dont go to next, show message
        props.updateChild(data);
        props.nextStep();
    }

    function onBack(event) {
        event.preventDefault();
        props.prevStep();
    }

    return (
        <div className="signup-box">
            <h1 className="form-title">Voeg uw kind toe</h1>
            <h4 className="subtext">En lees gave boeken!</h4>

            <form className="form-two" onSubmit={handleSubmit(onNext)}>
                <label htmlFor="Name">
                    <input type="text"
                           id="Name"
                           placeholder="naam kind"
                           {...register(
                               "name",
                               {required: true}
                           )}
                    />
                </label>

                <label htmlFor="dateOfBirth">
                    <input type="date"
                           id="dateOfBirth"
                           placeholder="geboortedatum"
                           {...register(
                               "dateOfBirth",
                               {required: true}
                           )}
                    />
                </label>

                {/*<label htmlFor="add-another-kid" className="add-another-kid-container">*/}
                {/*    <p>Nog een kind toevoegen?</p>*/}
                {/*    <input type="checkbox"*/}
                {/*           id="add-another-kid"*/}
                {/*    />*/}
                {/*    <span className="checkbox"></span>*/}
                {/*</label>*/}

                <div className="btn-box">
                    <button
                        type="button"
                        className="nav-button"
                        onClick={onBack}
                    >
                        vorige
                    </button>
                    <input
                        type="submit"
                        className="nav-button"
                        value= "verstuur"
                    >
                    </input>
                </div>
            </form>

        </div>
    )
}


export default FormChildDetails;