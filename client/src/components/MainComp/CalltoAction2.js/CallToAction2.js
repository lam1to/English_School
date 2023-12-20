import CustomButton from '../../Form/CustomButton';
import '../../../Styles/callToAction2.css';
//@ts-check

const CallToAction2 = ({ t }) => {
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
              console.log('callToActiion2');
            }}
            title={t('button.start')}
          />
        </div>
      </div>
    </section>
  );
};
export default CallToAction2;
