import { Typography, styled as muiStyled } from '@mui/material';

export const Label = muiStyled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  paddingBottom: theme.spacing(0.5),
  '&:not(:first-of-type)': { marginTop: theme.spacing(3) },
}));
