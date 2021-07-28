import React from 'react';
import StandardBook from "../../components/StandardBook";
import mapRome from "../../assets/mapRome.png";
import caesar from "../../assets/caesar.jpg";
import coins from "../../assets/coins.jpg";

function RomanEmpire(props) {
    return (
        <StandardBook
            frontone= "Het Romeinse Rijk"
            titleone= "De Romeinen"
            backone= "Lang geleden leefden de Romeinen. Dit begon op de grote heuvels in Rome. Maar uiteindelijk
                      zijn ze het grootste rijk geworden die er ooit is geweest. Dit komt omdat ze sterke soldaten hadden
                      en veel dingen hebben uitgevonden. Ga je mee op onderzoek?"

            fronttwo= {mapRome}
            titletwo= "Julius Caesar"
            backtwo= "In het Romeinse Rijk waren de keizers de baas. De eerste keizer heette Julius Ceasar.
                      Keizer Julius heeft in zijn leven veel gedaan. Hij heeft gevochten met piraten. Omdat hij zo
                      sterk was heeft hij ook gewonnen. Hij heeft landen verovert en Rome zo steeds groter gemaakt.
                      De mensen hielden van Caesar omdat hij zo sterk, slim en machtig was."

            frontthree={caesar}
            titlethree="Uitvindingen"
            backthree="De Romeinen hebben een hoop uitgevonden. Ze waren de eerste die muntjes gebruikten om dingen
                       te betalen. Ze hebben ook het cement uitgevonden waarmee ze grote gebouwen konden maken. Als
                       er meer tijd is zal hier meer komen te staan. Voor nu sluiten we af met wegen. Die bouwden ze
                       voor het eerst zo goed. Help je mee met het bouwen van een Romeinse weg?"

            frontfour={coins}
            />
    );
}

export default RomanEmpire;