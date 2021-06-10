import React from "react";

function NavigationBar({image, title, navigationdirection}) {
    return (
            <article className="navigation-bar">
                <button type="button">
                    <img src={image} alt={title} />
                    <p className="navigation-direction">
                        {navigationdirection}
                    </p>
                </button>
            </article>
    );
}

export default NavigationBar;