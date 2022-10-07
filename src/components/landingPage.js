import BimCal from "./bmiCal";
import {useState} from 'react';
import ResultUnderWeight from "./resultUnderWeight";
import ResultNormalWeight from './resultNormalWeight';
import ResultOverWeight from    './resultOverWeight';
import ResultObese from './resultObeseWeight';

function LandingPage(){
    const [bim, setBim] = useState(0);
    const [evalIt, setEval] = useState("");
    
    return(
        <article>
            <BimCal bim={bim} setBim={setBim} evalIt={evalIt} setEval={setEval}/>
                {bim && bim < 18.5 ? (
                  <ResultUnderWeight   bim={bim} evalIt={evalIt} />
                ) : null }
                {bim && bim >= 18.5 && bim <= 24.9 ? (
                    <ResultNormalWeight  bim={bim} evalIt={evalIt}/>
                ) : null }
                {bim && bim >= 25 && bim <= 29.9 ? (
                    <ResultOverWeight   bim={bim} evalIt={evalIt}/>
                ) : null }
                {bim && bim >= 30 ? (
                    <ResultObese bim={bim}  evalIt={evalIt}/>
                ) : null }
                
        </article>
    )
}

export default LandingPage;