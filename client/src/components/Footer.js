import { matchPath, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';
import '../Styles/footer.css';
import { EXERCISES_ID_ROUTE } from '../utils/consts';
const routeNonVisible = [EXERCISES_ID_ROUTE];
const Footer = () => {
  const { pathname } = useLocation();
  const isMatch = routeNonVisible.some((path) => matchPath(path, pathname));
  console.log('isMatch = ', isMatch);
  return isMatch ? null : (
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
