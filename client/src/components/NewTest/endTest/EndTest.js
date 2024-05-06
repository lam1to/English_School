import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '../../..';
import CircularProgressWithLabel from '../../UI/CircularProgressWithLabel';

const EndTest = observer((props) => {
  const {} = props;
  const { testStore } = useContext(Context);
  const { activeTest, resultTest } = testStore;
  console.log('activeTest = ', activeTest);
  console.log('resultTest = ', resultTest);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Box>
        <Typography>Congratulations!!</Typography>
        <Typography>You have successfully completed the test {activeTest.topic}</Typography>
      </Box>
      <Box sx={{ backgroundColor: 'green', height: '120px', borderRadius: '50%' }}>
        <CircularProgressWithLabel size={120} value={resultTest?.percentageCorrect} />
      </Box>
    </Box>
  );
});
export default EndTest;
