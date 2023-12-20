import { Button } from '@mui/material';

const CustomButton = ({ onClick, title, isSmall, isOutline, className }) => {
  const style = isOutline
    ? {
        border: '1px solid #005995',
        backgroundColor: 'white',
        color: '#005995',
        ':hover': {
          backgroundColor: '#005995',
          color: 'white',
        },
      }
    : {
        backgroundColor: '#005995',
        color: 'white',
        ':hover': {
          border: '1px solid #005995',
          backgroundColor: 'white',
          color: '#005995',
        },
      };
  return (
    <Button
      className={className ? className : ''}
      onClick={onClick}
      sx={{
        textTransform: 'none',
        marginTop: '20px',
        borderRadius: '15px',
        width: `${isSmall && isSmall ? '150px' : '220px'}`,
        height: `${isSmall && isSmall ? '50px' : '60px'}`,
        fontSize: `${isSmall && isSmall ? '22px' : '24px'}`,
        fontWeight: `${isSmall && isSmall ? '500' : '600'}`,
        fontFamily: 'Montserrat',
        ...style,
      }}
      variant="contained"
    >
      {title}
    </Button>
  );
};
export default CustomButton;
