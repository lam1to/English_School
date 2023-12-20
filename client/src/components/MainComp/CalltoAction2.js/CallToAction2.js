import CustomButton from '../../Form/CustomButton';
import '../../../Styles/callToAction2.css';
//@ts-check

const CallToAction2 = () => {
  return (
    <section className="call-to-action2">
      <div className="_container call-to-action2-container">
        <img src="/img/CallToAction2/groupPeople.png"></img>
        <div>
          <img src="/img/CallToAction2/line.png"></img>
          <h5>
            Начинайте свое обучение вместе с <span>нами прямо сейчас!</span>
          </h5>
          <CustomButton
            isOutline={false}
            isSmall={false}
            onClick={() => {
              console.log('callToActiion2');
            }}
            title="Начать"
          />
        </div>
      </div>
    </section>
  );
};
export default CallToAction2;
