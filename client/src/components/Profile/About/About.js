import { Card } from '@mui/material';
import StaticInformation from './StaticInformation';
import ChangeInfrormation from './ChangeInfrormation';

const About = ({ isEdit, form }) => {
  return (
    <Card className="card-about">
      <h5>About</h5>
      <hr />
      {isEdit ? <ChangeInfrormation form={form} /> : <StaticInformation />}
    </Card>
  );
};
export default About;
