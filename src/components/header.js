import hamburger from './hamburger.png'
import close from './close.png'
import {useState} from 'react'

function Header({bim, evalIt}){
    const [show, setShow] = useState(false);

    function showMenu(){
        setShow(!show);
    }
    return(
        <header id="top" >
        <nav className="mobileNav">
          <img src={hamburger} alt="hamburger" className="hamburger mainBurger" onClick={showMenu}/>
          <h1><a href="/">YorHealth</a></h1>
          <div className={show ? "display" : ""}>
            <a href="#risk">Risk</a>
            <a href="#causes">Causes</a>
            <a href="#treatment">Treatment</a>
            <a href="#contact">Contact</a>
            <img src={close} alt="close" className="hamburger" onClick={showMenu}/>
          </div>
        </nav>

        <nav className="desktopNav">
          <h1><a href="/">YorHealth</a></h1>
          <div>
            <a href="#risk">Risk</a>
            <a href="#causes">Causes</a>
            <a href="#treatment">Treatment</a>
            <a href="#contact">Contact</a>
          </div>
            
          </nav>
        <aside>
          <div>
            <h3>
              Your BMI is <span>{bim}</span>
            </h3>
            <h2>
              You are <b>{evalIt}</b>
            </h2>
          </div>
        </aside>
      </header>
    )
}

export default Header;