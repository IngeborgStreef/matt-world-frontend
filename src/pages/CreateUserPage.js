// import React, {useState} from "react";
// import "./FormStyling.css";
// import {useForm} from "react-hook-form";
//
// function CreateUserPage({props}) {
//
//     const {handleSubmit, formState: {errors}, register} = useForm();
//     const [password, setPassword] = useState("");
//
//     const validatePassword = (value) => {
//         if (password !== value) return false;
//     }
//
//     return (
//         <body>
//         <div className="signup-box">
//             <h1 className="create-user-title">Maak een account aan</h1>
//             <h4 className="subtext">En lees gave boeken!</h4>
//
//             <form className="form-one">
//                 <label htmlFor="firstName" className="create-user-label">
//                     <input type="text"
//                            id="firstName"
//                            placeholder="Voornaam"
//                            {...register(
//                                "firstName",
//                                {required: true}
//                            )}
//                     />
//                 </label>
//
//                 <label htmlFor="lastName" className="create-user-label">
//                     <input type="text"
//                            id="lastName"
//                            placeholder="Achternaam"
//                            {...register(
//                                "lastName",
//                                {required: true}
//                            )}
//                     />
//                 </label>
//
//                 <label htmlFor="email" className="create-user-label">
//                     <input type="text"
//                            id="email"
//                            placeholder="E-mail"
//                            {...register(
//                                "email",
//                                {required: true}
//                            )}
//                     />
//                 </label>
//
//                 <label htmlFor="password" className="create-user-label">
//                     <input type="password"
//                            id="password"
//                            placeholder="Wachtwoord"
//                            {...register(
//                                "password",
//                                {required: true}
//                            )}
//                     />
//                 </label>
//
//                 <label htmlFor="confirmPassword" className="create-user-label">
//                     <input type="password"
//                            name="confirmPassword"
//                            id="password"
//                            placeholder="Herhaal wachtwoord"
//                            value={password}
//                            onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//
//                 <div className="btn-box" className="create-user-label">
//                     <button type="button" className="nav-button">
//                         volgende
//                     </button>
//                 </div>
//
//             </form>
//         </div>
//
//         <div className="signup-box">
//             <h1 className="form-title">Voeg uw kind toe</h1>
//             <h4 className="subtext">En lees gave boeken!</h4>
//
//             <form className="form-two">
//                 <label htmlFor="Name">
//                     <input type="text"
//                            id="Name"
//                            placeholder="naam kind"
//                            {...register(
//                                "Name",
//                                {required: true}
//                            )}
//                     />
//                 </label>
//
//                 <label htmlFor="Age">
//                     <input type="date"
//                            id="Age"
//                            placeholder="geboortedatum"
//                            {...register(
//                                "Age",
//                                {required: true}
//                            )}
//                     />
//                 </label>
//
//                     <label htmlFor="add-another-kid" className="add-another-kid-container">
//                         <p>Nog een kind toevoegen?</p>
//                         <input type="checkbox"
//                                id="add-another-kid"
//                         />
//                         <span className="checkbox"></span>
//                     </label>
//
//                 <div className="btn-box">
//                     <button type="button" className="nav-button">
//                         vorige
//                     </button>
//                     <button type="submit" className="nav-button">
//                         verstuur
//                     </button>
//                 </div>
//             </form>
//
//         </div>
//
//         </body>
//     )
// }
//
// export default CreateUserPage;

// <button type="submit" className="signup-button">
//     bevestig
// </button>