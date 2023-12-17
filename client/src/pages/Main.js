import Footer from '../components/Footer';
import Advantages from '../components/MainComp/Advanrages/Advantages';
import CallToAction from '../components/MainComp/CallToAction';
import CallToAction2 from '../components/MainComp/CalltoAction2.js/CallToAction2';
import Contacts from '../components/MainComp/Contacts/Contacts';

const Main = () => {
  return (
    <div style={{ flex: '1 0 auto' }}>
      <CallToAction />
      <Advantages />
      <Contacts />
      <CallToAction2 />
    </div>
  );
};
export default Main;
