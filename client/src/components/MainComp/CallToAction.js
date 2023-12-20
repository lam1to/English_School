import { Button } from '@mui/material';
import picture1 from '../../img/callToAction/picture1.png';
import CustomButton from '../Form/CustomButton';
import '../../Styles/callToAction.css';
const CallToAction = ({ t }) => {
  return (
    <section className="call-to-action">
      <div className="picture">
        <img src={picture1} />
      </div>
      <div className="call-action-content">
        <h5
          dangerouslySetInnerHTML={{
            __html: t('home.call.title'),
          }}
        />
        <p>{t('home.call.text')}</p>
        <CustomButton
          isOutline={false}
          isSmall={false}
          onClick={() => {
            console.log('xui');
          }}
          title={t('button.start')}
        />
      </div>
    </section>
  );
};
export default CallToAction;
