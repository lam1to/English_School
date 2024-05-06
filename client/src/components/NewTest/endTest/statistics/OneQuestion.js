import { Box } from '@mui/material';
import OneAnswer from './OneAnswer';

const OneQuestion = (props) => {
  const { item, i } = props;
  return (
    <Box>
      <Box>
        {i}.{item.question}
      </Box>
      <Box sx={{ padding: '0px 0px 0px 20px' }}>
        {item?.answers.map((oneItem) => (
          <OneAnswer
            key={`statistics-answer-${oneItem.id}`}
            item={oneItem}
            attemptAnswerId={item.answerId}
          />
        ))}
      </Box>
    </Box>
  );
};
export default OneQuestion;
