import React from "react";

function AwnserButton({image, title}) {
    return (
        <>
            <button className="awnser-button">
                <img
                    className="awnser-picture"
                    src={image}
                    alt={title}
                />
            </button>
        </>
    )
}

export default AwnserButton;