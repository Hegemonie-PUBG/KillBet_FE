import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';

interface ButtonProps extends MuiButtonProps {}

const Button = ({ ...props }: ButtonProps) => {
  return <MuiButton {...props} />;
};

export default Button;
