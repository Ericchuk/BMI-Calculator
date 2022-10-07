import arrow from "./arrow.png";
import callIcon from "./viber.png";
import Up from "./up-arrow.png";
import msg from "./chat-box.png";

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact A Doctor</h2>
      <div>
        <a href="tel:09030791497">
          <img src={callIcon} alt="call" />
          <span className="tooltip">Call</span>
        </a>
        <a href="sms:09030791497">
          <img src={msg} alt="messageBox" />
          <span className="tooltip">SMS</span>
        </a>
      </div>

      <a href="/" className="back">
        <img src={arrow} alt="back" className="arrow" />
        <span className="tooltip">Home</span>
      </a>

      <a href="#top" className="">
        <div className="bouncer">
          <img src={Up} alt="Up" className="up" />
        </div>
      </a>
    </footer>
  );
}

export default Footer;
