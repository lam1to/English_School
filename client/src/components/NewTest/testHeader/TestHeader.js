import { Box, Typography, LinearProgress } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Context } from '../../..';
import { observer, useObserver } from 'mobx-react-lite';
import WestIcon from '@mui/icons-material/West';
import { Link } from 'react-router-dom';

const TestHeader = observer((props) => {
  const { currentStep } = props;
  const { testStore } = useContext(Context);
  const { activeTest } = testStore;
  const getValue = () => {
    if (currentStep === 0 || Object.keys(activeTest).length === 0) return 0;
    return (currentStep / activeTest.questions.length) * 100;
  };
  return (
    <Box sx={{ padding: '20px 40px' }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={getValue()} />
      </Box>
      <Box
        component={Link}
        to={'/exercises'}
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <WestIcon sx={{ marginRight: '10px' }} />
        <Typography> Go Back</Typography>
      </Box>
      <Typography sx={{ fontSize: '18px' }}>
        {activeTest.sTopic + ' > ' + activeTest.topic}
      </Typography>
    </Box>
  );
});
export default TestHeader;
