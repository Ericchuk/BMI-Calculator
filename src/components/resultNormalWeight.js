import approx from "./approximation.png";
import Footer from "./footer";

function ResultNormalWeight({bim, evalIt}){
    return(
        <div className="position">
            <header>
                <h3>Your BMI <img src={approx} alt="approximation" className="approx" /> {bim}</h3>
                <h2>You are <b>{evalIt}</b></h2>
            </header>
            <section>
                <p>
                Your BMI is in the healthy range. You are at a lower risk of
                developing health problems associated with being overweight or
                obese.
            </p>
            <p>It is of best advice that you maintain it.</p>
            <aside>
                <h3>Exercise Plan</h3>
                <h5>
                    Exercise is an important part of a healthy lifestyle. It can
                    help you maintain a healthy weight and reduce your risk of
                    developing health problems. It can also help you feel better
                    about yourself and improve your self-esteem.
                </h5>
                <p>
                    Exercise can also help you sleep better, have more energy,
                    and reduce stress.
                </p>
                <p>Little Jog around you environmeent for 5 minutes</p>
                <p>Do 10 pushups</p>
                <p>Do 10 situps</p>
                <p>Do 10 squats</p>
                <p>Do 10 jumping jacks</p>
                <p>Do 10 crunches</p>
                <h5>Wrap it here</h5>
            </aside>
            <Footer />
            </section>
            

        </div>
    )
}

export default ResultNormalWeight;