import React from 'react';
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import matt from "../../assets/matt.png";
import heuvels from "../../assets/heuvels.jpg"
import kaartrome from "../../assets/kaartrome.png"
import soldaat from "../../assets/soldaat.jpg"
import munten from "../../assets/munten.jpg"

function RomanEmpire(props) {
    return (
        <div>
            <div className='bookcontainer'>

                <div className='bookPages'>
                    <leftaside className='leftPage'>
                        <LeftPage
                            title='Het Romeinse Rijk'
                            text='Lang geleden leefden de Romeinen. Dit begon op de grote heuvels in Rome. Maar uiteindelijk
                            zijn ze het grootste rijk geworden die er ooit is geweest. Dit komt omdat ze sterke soldaten hadden
                            en veel dingen hebben uitgevonden. Ga je mee op onderzoek?'
                        />
                    </leftaside>
                </div>

                <div className='bookPages'>
                    <rightaside className='rightPage'>
                        <RightPage
                            imageOne={heuvels}
                            imageTwo={kaartrome}
                            imageThree={soldaat}
                            imageFour={munten}
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

export default RomanEmpire;