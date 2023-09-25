import { styled as muiStyled, TextField as MuiTextField } from '@mui/material';

export const TextField = muiStyled(MuiTextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
