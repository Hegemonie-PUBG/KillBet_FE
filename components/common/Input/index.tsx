import {
  type TextFieldProps as MuiTextFieldProps,
  type TextFieldVariants,
} from '@mui/material';

import * as S from './style';

type TextFieldProps = {
  variant?: TextFieldVariants;
} & Omit<MuiTextFieldProps, 'variant'>;

interface InputProps extends TextFieldProps {}

const Input = ({ ...props }: InputProps) => {
  return <S.TextField size="small" {...props} />;
};

export default Input;
