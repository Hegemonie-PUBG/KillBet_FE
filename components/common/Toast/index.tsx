import {
  Slide,
  type SlideProps,
  Snackbar,
  type SnackbarProps,
} from '@mui/material';

interface ToastProps extends Omit<SnackbarProps, 'open' | 'onClose'> {
  isOpen?: SnackbarProps['open'];
  handleClose?: SnackbarProps['onClose'];
}

const Toast = ({
  isOpen,
  message,
  autoHideDuration = 3000,
  handleClose,
  ...props
}: ToastProps) => {
  return (
    <Snackbar
      open={isOpen}
      message={message}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      TransitionComponent={(slideProps: SlideProps) => (
        <Slide direction="up" {...slideProps} />
      )}
      {...props}
    />
  );
};

export default Toast;
