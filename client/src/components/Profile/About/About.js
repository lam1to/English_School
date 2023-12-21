import { Card } from '@mui/material';
import StaticInformation from './StaticInformation';
import ChangeInfrormation from './ChangeInfrormation';

const About = ({ isEdit, form, t }) => {
  return (
    <Card
      sx={{
        boxShadow: '9px 9px 23px 1px rgba(0,0,0,0.1)',
      }}
      className="card-about"
    >
      <h5>{t('profile.about.label')}</h5>
      <hr />
      {isEdit ? (
        <ChangeInfrormation t={t} form={form} />
      ) : (
        <StaticInformation t={t} />
      )}
    </Card>
  );
};
export default About;
