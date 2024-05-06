import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../..';
import CircularProgressWithLabel from '../../UI/CircularProgressWithLabel';
import Statistics from './statistics/Statistics';

const EndTest = observer((props) => {
  const {} = props;
  const { testStore } = useContext(Context);
  const { activeTest, resultTest } = testStore;
  const [isOpenStatistics, setIsOpenStatistics] = useState(false);
  const isSuccess = resultTest?.percentageCorrect > 50;
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
        {isSuccess ? (
          <>
            <Typography>Congratulations!!</Typography>
            <Typography>You have successfully completed the test {activeTest.topic}</Typography>
          </>
        ) : (
          <>Ты лох</>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: isSuccess ? 'green' : 'red',
          height: '120px',
          borderRadius: '50%',
          color: 'white',
        }}
      >
        <CircularProgressWithLabel
          size={120}
          color="inherit"
          labelColor="white"
          value={resultTest?.percentageCorrect}
        />
      </Box>
      <Box>
        <Typography
          onClick={() => {
            setIsOpenStatistics((prev) => !prev);
          }}
          sx={{ cursor: 'pointer', ':hover': { color: 'blue' } }}
        >
          {isOpenStatistics ? 'Hide' : 'Show'} statistics
        </Typography>
        {isOpenStatistics && <Statistics />}
      </Box>
    </Box>
  );
});
export default EndTest;
