// import React, {useState} from 'react';
// import {useForm} from "react-hook-form";
//
// function UserForm(props) {
//
//     const {handleSubmit, formState: {errors}, register} = useForm();
//     const [passwordError, setPasswordError] = useState(false);
//     const [error, setError] = useState("");
//
//     //todo form errors are broken?
//
//     async function onFormSubmit(data) {
//         setError("")
//         console.log(data)
//         setPasswordError(false)
//         if (data.password !== data.passwordConfirmation) {
//             setPasswordError(true)
//             return;
//         }
//         try {
//             await props.completed({name: data.name, email: data.email, password: data.password})
//         } catch (e) {
//             setError("Fout bij het aanmaken van gebruiker. Is het email adres al in geruik?")
//         }
//     }
//
//     return (
//         <>
//             <form className="newUserForm" onSubmit={handleSubmit(onFormSubmit)}>
//                 <h1>{props.title}</h1>
//
//                 <legend>
//                     <label htmlFor="parent-name">
//                         Naam ouder:
//                         <input type="text"
//                                id="details-parent-name"
//                                placeholder="Type hier uw naam"
//                                {...register("name", {
//                                    required: true,
//                                })}
//                         />
//                         {errors.parentName &&
//                         <p className="errorMessage">Mag niet leeg zijn</p>}
//                     </label>
//
//                     <label htmlFor="email">
//                         E-mail adres:
//                         <input type="text"
//                             //id
//                                placeholder="ouder@service.nl"
//                                {...register("email", {
//                                    required: true,
//                                    validate: (value) => value.includes('@')
//                                })}
//                         />
//                         {errors.emailRegistration &&
//                         <p className="errorMessage">Moet een @ bevatten</p>}
//                     </label>
//
//                     <label htmlFor="password">
//                         Wachtwoord:
//                         <input type="password"
//                                id="password"
//                                placeholder="Uw wachtwoord"
//                                {...register("password", {
//                                    required: true,
//                                })}
//                         />
//                         {errors.password && <p className="errorMessage">Mag niet leeg zijn</p>}
//
//                     </label>
//
//                     <label htmlFor="password-confirmation">
//                         Herhaal wachtwoord:
//                         <input type="password"
//                                name="password-confirmation"
//                                id="password-confirmation"
//                                placeholder="Herhaal uw wachtwoord"
//                                {...register("passwordConfirmation", {
//                                    required: true,
//                                })}
//                         />
//                         {errors.passwordConfirmation &&
//                         <p className="errorMessage">Mag niet leeg zijn</p>}
//                         {passwordError && <p className="errorMessage">Wachtwoorden zijn niet het zelfde</p> }
//                     </label>
//                     {error !== "" && <p className="errorMessage">error</p> }
//                 </legend>
//
//                 <button
//                     type="submit"
//                     className="button">
//                     Versturen
//                 </button>
//
//             </form>
//         </>
//     );
// }
//
// export default UserForm;