import React from 'react';
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import matt from "../../assets/matt.png";
import caesar from "../../assets/caesar.jpg"
import piratenschip from "../../assets/piratenschip.jpg"

function Emperors(props) {
    return (
        <div>
            <div className='bookcontainer'>

                <div className='bookPages'>
                    <leftaside className='leftPage'>
                        <LeftPage
                            title='Julius Caesar'
                            text='In het Romeinse Rijk waren de keizers de baas. De eerste keizer heette Julius Ceasar.
                            Keizer Julius heeft in zijn leven veel gedaan. Hij heeft gevochten met piraten. Omdat hij zo
                            sterk was heeft hij ook gewonnen. Hij heeft landen verovert en Rome zo steeds groter gemaakt.
                            De mensen hielden van Caesar omdat hij zo sterk, slim en machtig was.'
                        />
                    </leftaside>
                </div>

                <div className='bookPages'>
                    <rightaside className='rightPage'>
                        <RightPage
                            imageOne={caesar}
                            imageTwo={piratenschip}
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

export default Emperors;