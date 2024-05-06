import { Box, Button } from '@mui/material';
import { useState } from 'react';

const OneAnswer = (props) => {
  const { item, onAnswered } = props;
  const [backgroundColor, setBackgroundColor] = useState('blue');
  return (
    <Box
      sx={{
        flex: '1 1 45%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        onClick={() => {
          console.log('item = ', item);
          setBackgroundColor(item.isRight ? 'green' : 'red');
          setTimeout(() => {
            onAnswered(item);
          }, 1000);
        }}
        color="inherit"
        sx={{
          backgroundColor: backgroundColor,
          color: 'white',
          ':hover': {
            opacity: '0.8',
            backgroundColor: backgroundColor,
          },
        }}
        variant={'contained'}
      >
        {item.content}
      </Button>
    </Box>
  );
};
export default OneAnswer;
