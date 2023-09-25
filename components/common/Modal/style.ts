import { styled as muiStyled, Dialog as MuiDialog } from '@mui/material';

export const Dialog = muiStyled(MuiDialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(1.75)}`,
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}));
