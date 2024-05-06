import { Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const CustomSnackbar = (props) => {
  const { handleClose, actionCallback, actionButtonName, open, message, ...anotherProps } = props;
  const action = (
    <>
      {actionButtonName && (
        <Button color="secondary" size="small" onClick={actionCallback}>
          {actionButtonName}
        </Button>
      )}
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <Snackbar
      {...anotherProps}
      open={open}
      message={message ? message : 'Note archived'}
      action={action}
    />
  );
};
export default CustomSnackbar;
