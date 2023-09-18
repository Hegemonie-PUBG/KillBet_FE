import {
  TextField,
  type TextFieldProps as MuiTextFieldProps,
  type TextFieldVariants,
} from '@mui/material';

type TextFieldProps = {
  variant?: TextFieldVariants;
} & Omit<MuiTextFieldProps, 'variant'>;

interface InputProps extends TextFieldProps {}

const Input = ({ ...props }: InputProps) => {
  return <TextField {...props} />;
};

export default Input;
