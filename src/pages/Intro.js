import React from 'react';
import "./Intro.css";
import {useHistory} from "react-router-dom";
import earth from "../assets/earth.png";
import {useState} from "react";

function Intro() {
    const history = useHistory();
    const [showEarth, setShowEarth] = useState(false);

    function handleClick() {
        setShowEarth(true);
        setTimeout(() => history.push('/login'), 2000);
    }


    const circle = (
        <div className="circle" onClick={handleClick}>
            <h1 className="title">IT'S A MATT WORLD</h1>
        </div>
    )

    const earthElement = (
        <img
            className="earth"
            src={earth}/>
    )

    return (
        <div className="introPage">
            {showEarth ? earthElement : circle}
        </div>
    );
}

export default Intro;