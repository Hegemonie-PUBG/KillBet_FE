import { Card, Typography, styled as muiStyled } from '@mui/material';

export const ItemBox = muiStyled(Card)(({ theme }) => ({
  flex: 1,
  minHeight: 256,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  boxShadow: 'var(--shadow-md)',
  overflowY: 'auto',
}));

export const ItemTitle = muiStyled(Typography)(() => ({
  fontWeight: 'bold',
  textAlign: 'center',
}));
