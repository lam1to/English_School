const StaticInformation = ({ t, userData }) => {
  return (
    <div className="card-row-items">
      <ul>
        <li>
          <div className="label">{t('profile.about.english_level')}</div>
          <p>
            {userData && userData.englishLevel ? userData.englishLevel : '...'}
          </p>
        </li>
        <li>
          <div className="label">{t('profile.about.languages')}</div>
          <p>{userData && userData.languages ? userData.languages : '...'}</p>
        </li>
        <li>
          <div className="label">{t('profile.about.fun_facts')}</div>
          <p>{userData && userData.funFacts ? userData.funFacts : '...'}</p>
        </li>
        <li></li>
      </ul>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className="label">{t('profile.about.about_me')}</div>
        <div className="about-content">
          {userData && userData.about ? userData.about : '...'}
        </div>
      </div>
    </div>
  );
};
export default StaticInformation;
