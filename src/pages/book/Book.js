import React from 'react';
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import matt from "../../assets/matt.png"
import arrowlefty from "../../assets/arrowlefty.png"
import arrowrighty from "../../assets/arrowrighty.png"

function Book(props) {
    return (
        <div>
            <div className='bookcontainer'>

                <div className='bookPages'>
                    <leftaside className='leftPage'>
                        <LeftPage
                            title='Rome'
                            text='type story here'
                        />
                    </leftaside>
                </div>

                <div className='bookPages'>
                    <rightaside className='rightPage'>
                        <RightPage
                            imageOne={matt}
                            imageTwo={matt}
                            imageThree={matt}
                            imageFour={matt}
                            imageFive={matt}
                            imageSix={matt}
                            imageSeven={matt}
                            imageEight={matt}
                            imageNine={matt}

                            titleOne="something"
                            titleTwo="something"
                            titleThree="something"
                            titleFour="something"
                            titleFive="something"
                            titleSix="something"
                            titleSeven="something"
                            titleEight="something"
                            titleNine="something"
                        />
                    </rightaside>
                </div>
            </div>
        </div>
    );
}

export default Book;