import { useState } from "react";

function BimCal({bim, setBim, setEval, evalIt}) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function bimCal(e) {
    e.preventDefault();
    const bimHeight = (height) / 100;
    const bim = Math.ceil(weight / (bimHeight * bimHeight));
    setBim(bim);
    if (bim < 18.5) {
      setEval("Under Weight");
    }else if(bim >= 18.5 && bim < 24.9){
        setEval("Normal Weight");
    }else if(bim >= 25 && bim <= 29.9){
        setEval("Over Weight");
    }else if(bim >= 30){
        setEval("Obese");
    }
  }

  return (
    <section className="calculator">
      <header>
        <h1>BMI Calculator</h1>
      </header>
      <div className="container">
            <div className="card">
                <form>
                  <div className="form-group">
                    <label htmlFor="weight">Weight : </label>
                    <input
                      type="number"
                      className="form-control"
                      id="weight"
                      placeholder="Enter weight in kg"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="height">Height : </label>
                    <input
                      type="number"
                      className="form-control"
                      id="height"
                      placeholder="Enter height in cm"
                      onChange={((e) => setHeight(e.target.value))}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={bimCal}
                  >
                    Calculate
                  </button>
                </form>
              </div>
          </div>
    </section>
  );
}

export default BimCal;
