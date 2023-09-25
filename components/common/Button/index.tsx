import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  wide?: boolean;
}

const Button = ({ variant = 'contained', wide, sx, ...props }: ButtonProps) => {
  return (
    <MuiButton
      {...props}
      variant={variant}
      sx={{ minWidth: wide ? '6rem' : '4rem', fontWeight: 'bold', ...sx }}
    />
  );
};

export default Button;
