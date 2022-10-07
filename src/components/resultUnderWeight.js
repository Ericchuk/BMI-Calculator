import Footer from "./footer";
import Header from "./header";
import AsideFirst from "./asideFirst";
import SecondAside from "./secondAside";
import ThirdAside from "./thirdAside";
import FourthAside from "./fourthAside";

function ResultUnderWeight({ bim, evalIt }) {
  return (
    <div className="position">
      <Header bim={bim} evalIt={evalIt}/>
      <section>
        <AsideFirst evalIt={evalIt} />
        <SecondAside evalIt={evalIt} />
        <ThirdAside evalIt={evalIt} />
        <FourthAside evalIt={evalIt} />
        <Footer bim={bim} />
      </section>
    </div>
  );
}

export default ResultUnderWeight;
