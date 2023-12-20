import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Advantages from '../components/MainComp/Advanrages/Advantages';
import CallToAction from '../components/MainComp/CallToAction';
import CallToAction2 from '../components/MainComp/CalltoAction2.js/CallToAction2';
import Contacts from '../components/MainComp/Contacts/Contacts';

const Main = () => {
  const [t] = useTranslation();
  return (
    <div style={{ flex: '1 0 auto' }}>
      <CallToAction t={t} />
      <Advantages t={t} />
      <Contacts t={t} />
      <CallToAction2 t={t} />
    </div>
  );
};
export default Main;
