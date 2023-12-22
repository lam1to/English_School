import { ErrorMessage } from '@hookform/error-message';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const CustomAutoComplete = ({
  form,
  name,
  rules,
  nameField,
  id,
  isMultiple,
  data,
  placeholder,
  defaultValue,
}) => {
  const style = {
    backgroundColor: '#F6F7FF',
    borderRadius: '10px',
    width: { xs: '100%', lg: '426px' },
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
    <div className="input-area">
      {nameField && <div className="label_input">{nameField}</div>}
      {isMultiple ? (
        <Controller
          rules={rules}
          control={form.control}
          name={name}
          render={({ field }) => (
            <Autocomplete
              {...field}
              placeholder={placeholder}
              // value={field.value}
              multiple
              limitTags={2}
              // defaultValue={defaultValue && defaultValue}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.label || ''}
              onChange={(e, item) => {
                field.onChange(item);
              }}
              sx={style}
              options={data ? data : []}
              renderInput={(params) => <TextField {...params} label="" />}
            />
          )}
        />
      ) : (
        <Controller
          rules={rules}
          control={form.control}
          name={name}
          placeholder={placeholder}
          render={({ field }) => (
            <Autocomplete
              {...field}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              onChange={(e, item) => {
                field.onChange(item);
              }}
              getOptionLabel={(option) => option.label}
              sx={style}
              options={data ? data : []}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />
      )}

      <ErrorMessage
        errors={form.formState.errors}
        name={name}
        render={({ message }) => <p className="error-field">{message}</p>}
      />
    </div>
  );
};
export default CustomAutoComplete;
