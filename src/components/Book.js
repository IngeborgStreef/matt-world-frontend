import React from 'react';
import './Book.css';
import {FiArrowLeftCircle} from "react-icons/fi";
import {FiArrowRightCircle} from "react-icons/fi";
import {IconContext} from "react-icons"

function Book({
                          frontone,
                          titleone,
                          backone,
                          fronttwo,
                          titletwo,
                          backtwo,
                          frontthree,
                          titlethree,
                          backthree,
                          frontfour,
                          titlefour,
                          backfour
                      }) {

    let currentLocation = 1;
    let numOfPapers = 4;
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
        const paperFour = document.querySelector("#page-four");

        console.log(`paperOne: ${paperOne.style.zIndex}, paperTwo: ${paperTwo.style.zIndex}, paperThree: ${paperThree.style.zIndex}, paperFour: ${paperFour.style.zIndex}, currentPage: ${currentLocation}`)

        paperOne.style.zIndex = 1
        paperTwo.style.zIndex = 1
        paperThree.style.zIndex = 1
        paperFour.style.zIndex = 1


        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    openBook();
                    paperOne.classList.add("flipped");
                    paperOne.style.zIndex = 3;
                    paperTwo.style.zIndex = 2;
                    break;
                case 2:
                    paperTwo.classList.add("flipped");
                    paperTwo.style.zIndex = 4;
                    paperThree.style.zIndex = 3;
                    break;
                case 3:
                    paperThree.classList.add("flipped");
                    paperThree.style.zIndex = 5;
                    paperFour.style.zIndex = 4;
                    break;
                case 4:
                    paperFour.classList.add("flipped");
                    paperFour.style.zIndex = 5;
                    closeBook(false);
                    break;
                default:
                    throw new Error("unknown state");
            }
            currentLocation++;
            console.log(`paperOne: ${paperOne.style.zIndex}, paperTwo: ${paperTwo.style.zIndex}, paperThree: ${paperThree.style.zIndex}, paperFour: ${paperFour.style.zIndex}, currentPage: ${currentLocation}`)
        }
    }

    function goPrevPage() {

        const paperOne = document.querySelector("#page-one");
        const paperTwo = document.querySelector("#page-two");
        const paperThree = document.querySelector("#page-three");
        const paperFour = document.querySelector("#page-four");

        console.log(`paperOne: ${paperOne.style.zIndex}, paperTwo: ${paperTwo.style.zIndex}, paperThree: ${paperThree.style.zIndex}, paperFour: ${paperFour.style.zIndex}, currentPage: ${currentLocation}`)

        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    paperOne.classList.remove("flipped");
                    paperOne.style.zIndex = 5;
                    break;
                case 3:
                    paperTwo.classList.remove("flipped");
                    paperTwo.style.zIndex = 4;
                    break;
                case 4:
                    paperThree.classList.remove("flipped");
                    paperThree.style.zIndex = 3;
                    break;
                case 5:
                    openBook();
                    paperFour.classList.remove("flipped");
                    paperFour.style.zIndex = 2;
                    break;
                default:
                    throw new Error("unknown state");
            }

            currentLocation--;
            console.log(`paperOne: ${paperOne.style.zIndex}, paperTwo: ${paperTwo.style.zIndex}, paperThree: ${paperThree.style.zIndex}, paperFour: ${paperFour.style.zIndex}, currentPage: ${currentLocation}`)
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
                            {titleone}
                        </h1>
                        <p>
                            {backone}
                        </p>
                    </div>
                </div>
            </div>

            <div className="paper" id="page-two">
                <div className="front-page">
                    <div className="front-content">
                        <img id="picturepagetwo" src={fronttwo} alt={fronttwo} className="bookpictures"/>
                    </div>
                </div>
                <div className="back-page">
                    <div className="back-content">
                        <h1>
                            {titletwo}
                        </h1>
                        <p>
                            {backtwo}
                        </p>
                    </div>
                </div>
            </div>

            <div className="paper" id="page-three">
                <div className="front-page">
                    <div className="front-content">
                        <img id="picturepagethree" src={frontthree} alt={frontthree} className="bookpictures"/>
                    </div>
                </div>
                <div className="back-page">
                    <div className="back-content">
                        <h1>
                            {titlethree}
                        </h1>
                        <p>
                            {backthree}
                        </p>
                    </div>
                </div>
            </div>

            <div className="paper" id="page-four">
                <div className="front-page">
                    <div className="front-content">
                        <img id="picturepagefour" src={frontfour} alt={frontfour} className="bookpictures"/>
                    </div>
                </div>
                <div className="back-page">
                    <div className="back-content">
                        <h1>
                            {titlefour}
                        </h1>
                        <p>
                            {backfour}
                        </p>
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

export default Book;