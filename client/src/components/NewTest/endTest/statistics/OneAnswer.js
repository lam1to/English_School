import { Box } from '@mui/material';

const OneAnswer = (props) => {
  const { item, attemptAnswerId } = props;
  const color = item.isRight ? 'green' : item.id === attemptAnswerId && 'red';
  return <Box sx={{ color: color }}>{item.content}</Box>;
};
export default OneAnswer;
