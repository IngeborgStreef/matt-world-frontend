import React from 'react';
import "./FormStyling.css";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

function Login() {

    const {handleSubmit, formState: {errors}, register} = useForm();
    const history = useHistory();

    async function onFormSubmit(data) {
        // let response = await axios.post("http://localhost:8080/login", {username: data.email, password: data.password});
        // let token = response.data.jwt;
        // //todo set token
        // console.log(token);
        history.push("/roman-empire")
    }

    return (
        <body>
        <div>
            <div className="login-box">
                <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
                    <h1 className="form-title">Login</h1>

                    <div>
                        <label htmlFor="email">
                            <input type="text"
                                   name="e-mail"
                                   id="e-mail"
                                   placeholder="Email"
                                   {...register("email", {
                                       required: true,
                                   })}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder="Wachtwoord"
                                   {...register("password", {
                                       required: true,
                                   })}
                            />
                        </label>
                    </div>

                    <input
                        type="submit"
                        className="login-button"
                        value="Login"
                    >
                    </input>
                </form>
            </div>
            <p className="go-make-account">
                Nog geen account?
            </p>

            <div className="link-go-make-account">
                <Link to="/create-user" style={{color: '#FF729F', textDecoration: 'none'}}>
                    <p>Maak er hier een aan</p>
                </Link>
            </div>
        </div>
        </body>
    );
}

export default Login;