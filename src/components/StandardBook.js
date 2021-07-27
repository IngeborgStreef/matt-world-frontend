import React from 'react';
import './StandardBook.css';
import {FiArrowLeftCircle} from "react-icons/fi";
import {FiArrowRightCircle} from "react-icons/fi";
import {IconContext} from "react-icons"

function StandardBook({frontone, backone, fronttwo, backtwo, frontthree, backthree}) {

    let currentLocation = 1;
    let numOfPapers = 3;
    let maxLocation = numOfPapers + 1;

    function openBook() {
        document.querySelector("#book").style.transform = "translateX(50%)";
        document.querySelector("#prev-btn").style.transform = "translateX(-180px)";
        document.querySelector("#nxt-btn").style.transform = "translateX(180px)";
    }

    function closeBook(isAtBeginning) {

        const book = document.querySelector("#book");
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#nxt-btn");

        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }

        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function goNextPage() {

        const paperOne = document.querySelector("#page-one");
        const paperTwo = document.querySelector("#page-two");
        const paperThree = document.querySelector("#page-three");

        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    openBook();
                    paperOne.classList.add("flipped");
                    paperOne.style.zIndex = 1;
                    break;
                case 2:
                    paperTwo.classList.add("flipped");
                    paperTwo.style.zIndex = 2;
                    break;
                case 3:
                    paperThree.classList.add("flipped");
                    paperThree.style.zIndex = 3;
                    closeBook(false);
                    break;
                default:
                    throw new Error("unknown state");
            }
            currentLocation++;
        }
    }

    function goPrevPage() {

        const paperOne = document.querySelector("#page-one");
        const paperTwo = document.querySelector("#page-two");
        const paperThree = document.querySelector("#page-three");

        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    paperOne.classList.remove("flipped");
                    paperOne.style.zIndex = 3;
                    break;
                case 3:
                    paperTwo.classList.remove("flipped");
                    paperTwo.style.zIndex = 2;
                    break;
                case 4:
                    openBook();
                    paperThree.classList.remove("flipped");
                    paperThree.style.zIndex = 1;
                    break;
                default:
                    throw new Error("unknown state");
            }

            currentLocation--;
        }
    }

    return (

        <body>

        <IconContext.Provider value={{style: {fontSize: '50px', color: "rgb(105,105,105"}}}>
            <button className="button" id="prev-btn" onClick={goPrevPage}>
                <FiArrowLeftCircle/>
            </button>
        </IconContext.Provider>

        <div className="book" id="book">

            <div className="paper" id="page-one">
                <div className="front-page">
                    <div className="front-content">
                        <h1>
                            {frontone}
                        </h1>
                    </div>
                </div>
                <div className="back-page">
                    <div className="back-content">
                        <h1>
                            {backone}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="paper" id="page-two">
                <div className="front-page">
                    <div className="front-content">
                        <h1>
                            {fronttwo}
                        </h1>
                    </div>
                </div>
                <div className="back-page">
                    <div className="back-content">
                        <h1>
                            {backtwo}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="paper" id="page-three">
                <div className="front-page">
                    <div className="front-content">
                        <h1>
                            {frontthree}
                        </h1>
                    </div>
                </div>
                <div className="back-page">
                    <div className="back-content">
                        <h1>
                            {backthree}
                        </h1>
                    </div>
                </div>
            </div>

        </div>

        <IconContext.Provider value={{style: {fontSize: '50px', color: "rgb(105,105,105"}}}>
            <button className="button" id="nxt-btn" onClick={goNextPage}>
                <FiArrowRightCircle/>
            </button>
        </IconContext.Provider>

        </body>
    );
}

export default StandardBook;