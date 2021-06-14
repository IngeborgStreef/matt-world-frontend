import React from 'react';
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import matt from "../../assets/matt.png";
import munten from "../../assets/munten.jpg"
import nimes from "../../assets/nimes.jpg"
import romeinseweg from "../../assets/romeinseweg.jpg"
import whitespace from "../../assets/whitespace.png"

function Inventions(props) {
    return (
        <div>
            <div className='bookcontainer'>

                <div className='bookPages'>
                    <leftaside className='leftPage'>
                        <LeftPage
                            title='Uitvindingen'
                            text='De Romeinen hebben een hoop uitgevonden. Ze waren de eerste die muntjes gebruikten om dingen
                            te betalen. Ze hebben ook het cement uitgevonden waarmee ze grote gebouwen konden maken. Als
                            er meer tijd is zal hier meer komen te staan. Voor nu sluiten we af met wegen. Die bouwden ze
                            voor het eerst zo goed. Help je mee met het bouwen van een Romeinse weg?'

                        />
                    </leftaside>
                </div>

                <div className='bookPages'>
                    <rightaside className='rightPage'>
                        <RightPage
                            imageOne={munten}
                            imageTwo={whitespace}
                            imageThree={whitespace}
                            imageFour={whitespace}
                            imageFive={nimes}
                            imageSix={whitespace}
                            imageSeven={whitespace}
                            imageEight={whitespace}
                            imageNine={romeinseweg}

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

export default Inventions;