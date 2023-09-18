import { CSSProperties } from 'react';
import {
  type ModalProps as MuiModalProps,
  Modal as MuiModal,
  Box,
  IconButton,
} from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

export interface ModalProps extends Omit<MuiModalProps, 'open' | 'onClose'> {
  isOpen: MuiModalProps['open'];
  hasCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  containerStyle?: CSSProperties;
  handleClose: () => void;
}

const modalContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const SIZE = {
  sm: '24rem',
  md: '36rem',
  lg: '48rem',
  xl: '64rem',
};

const Modal = ({
  isOpen,
  hasCloseButton = true,
  children,
  size = 'md',
  containerStyle,
  handleClose,
  ...props
}: ModalProps) => {
  return (
    <MuiModal {...props} open={isOpen} onClose={handleClose}>
      <Box
        width={SIZE[size]}
        sx={{ ...modalContainerStyle, ...containerStyle }}
      >
        {hasCloseButton && (
          <IconButton
            color="info"
            size="small"
            sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
            onClick={handleClose}
          >
            <FaXmark />
          </IconButton>
        )}
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
