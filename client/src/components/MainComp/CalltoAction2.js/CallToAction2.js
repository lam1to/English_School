import CustomButton from '../../Form/CustomButton';
import '../../../Styles/callToAction2.css';
import { redirect, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../..';
import { LOGIN_ROUTE, VOCABULARY_ROUTE } from '../../../utils/consts';

//@ts-check

const CallToAction2 = ({ t }) => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  // console.log('user = ', user);
  return (
    <section className="call-to-action2">
      <div className="_container call-to-action2-container">
        <img src="/img/CallToAction2/groupPeople.png"></img>
        <div>
          <img src="/img/CallToAction2/line.png"></img>
          <h5
            dangerouslySetInnerHTML={{
              __html: t('home.call2.title'),
            }}
          />

          <CustomButton
            isOutline={false}
            isSmall={false}
            onClick={() => {
              // console.log('зашли 1 ');
              if (userStore.isAuth) {
                // console.log('зашли');
                // console.log('router = ', redirect);
                navigate(VOCABULARY_ROUTE);
              } else {
                navigate(LOGIN_ROUTE);
              }
            }}
            title={t('button.start')}
          />
        </div>
      </div>
    </section>
  );
};
export default CallToAction2;
