import close from '../assets/x.svg';
import phone from '../assets/phone-call.svg';
import email from '../assets/mail.svg';

const HelpModal = ({ setHelpOpen, helpOpen }) => {
    return (
        <div className={helpOpen ? "help-modal active" : "help-modal"}>
            <h2>Need help?</h2>
            <img src={close} alt="letter x" className="close" onClick={() => setHelpOpen(false)} />
            <button className="secondary-btn">
                <img src={phone} alt="phone" />
                +45 42 72 99 88
            </button>
            <h5>Phone line is open for you questions every day from 6.00 to 22.00</h5>
            <button className="secondary-btn">
                <img src={email} alt="email envelope" />
                info@parkshare.dk
            </button>
        </div>
    );
}

export default HelpModal;