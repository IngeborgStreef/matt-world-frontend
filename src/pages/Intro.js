import React from 'react';
import {useHistory} from "react-router-dom";

function Intro() {
    const history = useHistory();
    function handleClick() {
        history.push("/main");
    }
    // setTimeout(() => history.push('/main'),5000)

    return (
        <div className="introPage">
            <div className='circle' onClick={handleClick}>
                <h1>IT'S A MATT WORLD</h1>
            </div>
        </div>
    );
}

export default Intro;