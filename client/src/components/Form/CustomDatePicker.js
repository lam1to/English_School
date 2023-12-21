import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ErrorMessage } from '@hookform/error-message';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CustomDatePicker = ({ form, name, rules, nameField, small }) => {
  const style = {
    backgroundColor: '#F6F7FF',
    borderRadius: '10px',
    width: { xs: '100%', lg: small ? '200px' : '426px' },
    //   height: '54px',
    '.MuiOutlinedInput-input': {
      cursor: 'pointer',
    },
    '& input': {
      fontSize: '14px',
      // height: '54px',
      // py: '10.5px',
      backgroundColor: '#F6F7FF',
      cursor: 'pointer',
      borderRadius: '10px',
    },
    '& fieldset': {
      // height: '54px',
      border: '1px solid #E1E4F1',
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: '#0F23FB !important',
    },
  };

  return (
    <div style={{ minHeight: `${small && '0px'}` }} className="input-area">
      <div className="label_input">{nameField}</div>
      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(e) => {
                field.onChange(e.$d);
              }}
              sx={style}
            />
          </LocalizationProvider>
        )}
      />
      <ErrorMessage
        errors={form.formState.errors}
        name={name}
        render={({ message }) => <p className="error-field">{message}</p>}
      />
    </div>
  );
};
export default CustomDatePicker;
