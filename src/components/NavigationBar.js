import React from "react";
import {useHistory} from "react-router-dom";

function NavigationBar({image, title, navigationdirection, target}) {
    const history = useHistory();
    function handleClick() {
        history.push(target);
    }

    return (
            <article className="navigation-bar">
                <button
                    type="button"
                    onClick={handleClick}
                >
                    <img src={image} alt={title} />
                    <p className="navigation-direction">
                        {navigationdirection}
                    </p>
                </button>
            </article>
    );
}

export default NavigationBar;