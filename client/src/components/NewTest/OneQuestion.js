import { Box, Button, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import OneAnswer from './OneAnswer';
const OneQuestion = (props) => {
  const { item, onAnswered } = props;
  return (
    <Box
      sx={{
        flex: '1 1 auto',
        display: 'flex',
        marginTop: '-90px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '44px',
        }}
      >
        {item.question}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {item.answers.map((oneAns) => (
          <OneAnswer
            key={`question-${item.id}-answear-${oneAns.id}`}
            item={oneAns}
            onAnswered={onAnswered}
          />
        ))}
      </Box>
    </Box>
  );
};
export default OneQuestion;
