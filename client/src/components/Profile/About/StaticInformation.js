const StaticInformation = ({ t, userData }) => {
  return (
    <div className="card-row-items">
      <ul>
        <li>
          <div className="label">{t('profile.about.english_level')}</div>
          <p>
            {userData && userData.englishLevel
              ? userData.englishLevel
              : 'B1 - Intermediate'}{' '}
          </p>
        </li>
        <li>
          <div className="label">{t('profile.about.languages')}</div>
          <p>
            {userData && userData.languages
              ? userData.languages
              : 'Russian, English'}
          </p>
        </li>
        <li>
          <div className="label">{t('profile.about.fun_facts')}</div>
          <p>
            {userData && userData.funFacts
              ? userData.funFacts
              : 'I adore fries with ice cream!'}
          </p>
        </li>
        <li></li>
      </ul>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className="label">{t('profile.about.about_me')}</div>
        <div className="about-content">
          {userData && userData.about
            ? userData.about
            : '  I can say about myself that I am hardworking, attentive, organized, and effectively solve tasks. My hobbies are purely feminine — I love needlework: I knit, sew, embroider. I love communicating with people and spending time with friends!'}
        </div>
      </div>
    </div>
  );
};
export default StaticInformation;
