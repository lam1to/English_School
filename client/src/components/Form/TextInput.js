import '../../Styles/auth.css';
import { TextField } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
const TextInput = ({ form, name, rules, nameField, isPassword }) => {
  return (
    <div className="input_block">
      <div className="label_input">{nameField}</div>
      <TextField
        {...form.register(name, rules)}
        type={isPassword ? 'password' : 'text'}
        sx={{
          backgroundColor: '#F6F7FF',
          borderRadius: '10px',
          width: '300px',
          height: '54px',
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
        }}
      ></TextField>
      <ErrorMessage
        errors={form.formState.errors}
        name={name}
        render={({ message }) => <p className="error-field">{message}</p>}
      />
    </div>
  );
};
export default TextInput;
