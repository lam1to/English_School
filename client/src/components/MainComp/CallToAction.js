import { Button } from '@mui/material';
import picture1 from '../../img/callToAction/picture1.png';
import CustomButton from '../Form/CustomButton';
import '../../Styles/callToAction.css';
import { useContext } from 'react';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, VOCABULARY_ROUTE } from '../../utils/consts';
const CallToAction = ({ t }) => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
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
            // console.log('зашли 1 ');
            if (userStore.isAuth) {
              navigate(VOCABULARY_ROUTE);
            } else {
              navigate(LOGIN_ROUTE);
            }
          }}
          title={t('button.start')}
        />
      </div>
    </section>
  );
};
export default CallToAction;
