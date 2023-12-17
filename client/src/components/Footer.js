import logo from '../img/logo.png';
import '../Styles/footer.css';
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="_container footer-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-row-block">
          <ul className="footer-row">
            <li>Sign in</li>
            <li>Sign up</li>
            <li>Email</li>
            <li>Telegram</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
