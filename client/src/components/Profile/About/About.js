import { Card } from '@mui/material';
import StaticInformation from './StaticInformation';
import ChangeInfrormation from './ChangeInfrormation';
import { useContext } from 'react';
import { Context } from '../../..';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

const About = observer(() => {
  const { userStore } = useContext(Context);
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        boxShadow: '9px 9px 23px 1px rgba(0,0,0,0.1)',
      }}
      className="card-about"
    >
      <h5>{t('profile.about.label')}</h5>
      <hr />
      {userStore.isEditMode ? <ChangeInfrormation /> : <StaticInformation />}
    </Card>
  );
});
export default About;
