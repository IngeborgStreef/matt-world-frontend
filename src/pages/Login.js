// import React from 'react';
// import {useForm} from "react-hook-form";
// import {useHistory} from "react-router-dom";
// import axios from "axios";
//
// function Login() {
//
//     const {handleSubmit, formState: {errors}, register} = useForm();
//     const history = useHistory();
//
//     async function onFormSubmit(data) {
//         let response = await axios.post("http://localhost:8080/login",{username: data.email, password: data.password});
//         let token = response.data.jwt;
//         //todo set token
//         console.log(token);
//         history.push("/roman-empire")
//     }
//
//     return (
//         <>
//             <form className="loginForm" onSubmit={handleSubmit(onFormSubmit)}>
//                 <h1>Login</h1>
//
//                 <div>
//                     <label htmlFor="email">
//                         <input type="text"
//                                name="e-mail"
//                                id="e-mail"
//                                placeholder="Email"
//                                {...register("email", {
//                                    required: true,
//                                })}
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label htmlFor="password">
//                         <input type="password"
//                                name="password"
//                                id="password"
//                                placeholder="Wachtwoord"
//                                {...register("password", {
//                                    required: true,
//                                })}
//                         />
//                     </label>
//                 </div>
//
//                 <button type="submit" className="button">
//                     Login
//                 </button>
//             </form>
//
//         </>
//     );
// }
//
// export default Login;