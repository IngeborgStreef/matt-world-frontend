import React from "react";
import './ProfilePicture.css';

function ProfilePicture({image, title}) {
    return (
        <article type="button"
                className="profile-picture">
            <img src={image} alt={title}
                 className="picture"
            />
        </article>
    )
}

export default ProfilePicture;