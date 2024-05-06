import { useContext } from 'react';
import { Context } from '../../../..';
import { Box } from '@mui/material';
import OneQuestion from './OneQuestion';

const Statistics = () => {
  const { testStore } = useContext(Context);
  const { activeTest, resultTest } = testStore;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '10px 0px 50px' }}>
      {activeTest.questions.map((oneItem, i) => (
        <OneQuestion key={`statistics-question-${oneItem.id}`} i={i + 1} item={oneItem} />
      ))}
    </Box>
  );
};
export default Statistics;
