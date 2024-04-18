import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

const StaticInformation = observer(() => {
  const { t } = useTranslation();
  const { userStore } = useContext(Context);
  const { englishLevel, languages, funFacts, about } = userStore.user;
  return (
    <div className="card-row-items">
      <ul>
        <li>
          <div className="label">{t('profile.about.english_level')}</div>
          <p>{englishLevel ? englishLevel : '...'}</p>
        </li>
        <li>
          <div className="label">{t('profile.about.languages')}</div>
          <p>{languages ? languages : '...'}</p>
        </li>
        <li>
          <div className="label">{t('profile.about.fun_facts')}</div>
          <p>{funFacts ? funFacts : '...'}</p>
        </li>
        <li></li>
      </ul>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className="label">{t('profile.about.about_me')}</div>
        <div className="about-content">{about ? about : '...'}</div>
      </div>
    </div>
  );
});
export default StaticInformation;
