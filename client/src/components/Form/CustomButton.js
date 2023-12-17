import { Button } from '@mui/material';

const CustomButton = ({ onClick, title }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: '#005995',
        color: 'white',
        marginTop: '20px',
        borderRadius: '15px',
        width: '220px',
        height: '60px',
        fontSize: '24px',
        fontWeight: '600',
        fontFamily: 'Montserrat',
      }}
      variant="contained"
    >
      {title}
    </Button>
  );
};
export default CustomButton;
