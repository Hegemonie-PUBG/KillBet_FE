import {
  type DialogProps,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

import * as S from './style';

export interface ModalProps extends Omit<DialogProps, 'open' | 'onClose'> {
  isOpen: DialogProps['open'];
  modalTitle?: React.ReactNode;
  modalActions?: React.ReactNode;
  hasCloseButton?: boolean;
  size?: DialogProps['maxWidth'];
  handleClose: () => void;
}

const Modal = ({
  isOpen,
  modalTitle,
  modalActions,
  hasCloseButton = true,
  children,
  size,
  handleClose,
  ...props
}: ModalProps) => {
  return (
    <S.Dialog
      fullWidth
      {...props}
      open={isOpen}
      maxWidth={size}
      onClose={handleClose}
    >
      {modalTitle && (
        <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
          {typeof modalTitle === 'string' ? (
            <Typography
              component="div"
              sx={({ palette, spacing }) => ({
                width: 'fit-content',
                height: '0.75rem',
                marginTop: spacing(1.5),
                backgroundColor: palette.secondary.main,
                lineHeight: 0,
                fontSize: 'inherit',
                fontWeight: 'inherit',
              })}
            >
              {modalTitle}
            </Typography>
          ) : (
            modalTitle
          )}
        </DialogTitle>
      )}
      {hasCloseButton && (
        <IconButton
          aria-label="close"
          color="info"
          sx={{ position: 'absolute', top: 8, right: 8 }}
          onClick={handleClose}
        >
          <FaXmark />
        </IconButton>
      )}
      <DialogContent>{children}</DialogContent>
      {modalActions && <DialogActions>{modalActions}</DialogActions>}
    </S.Dialog>
  );
};

export default Modal;
