import React from "react";
import book from "../assets/book.png";

function Reading({book, booktitle, howfaralong}) {
    return (
        <article className="somecontainer">
            <img
                className="book"
                src={book}
                alt="book"
            />
            <div className="informationdetails">
                <p className="booktitle">
                    {booktitle}
                </p>
                <p className="how-far-along">
                    {howfaralong}
                </p>
            </div>
        </article>
    )
}

export default Reading;