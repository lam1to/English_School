import { Button } from '@mui/material';
import picture1 from '../../img/callToAction/picture1.png';
import CustomButton from '../Form/CustomButton';
import '../../Styles/callToAction.css';
const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="picture">
        <img src={picture1} />
      </div>
      <div className="call-action-content">
        <h5> Учите английский язык в “Easy English”</h5>
        <p>Повышайте свои навыки, обучайтесь с удовольствием</p>
        <CustomButton
          isOutline={false}
          isSmall={false}
          onClick={() => {
            console.log('xui');
          }}
          title="Начать"
        />
      </div>
    </section>
  );
};
export default CallToAction;
