import { Box, Button } from '@mui/material';
import { RiKakaoTalkFill } from 'react-icons/ri';

const LogIn = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const kakaoUrl = `${BASE_URL}/oauth2/authorize/kakao`;

  const handleLogIn = () => {
    window.location.href = kakaoUrl;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      mt={10}
    >
      <Button
        variant="contained"
        startIcon={<RiKakaoTalkFill />}
        size="large"
        color="secondary"
        sx={{
          backgroundColor: '#FEE500',
          '&:hover': { backgroundColor: '#FEE500' },
          '&:active': { backgroundColor: '#b1a000' },
        }}
        onClick={handleLogIn}
      >
        카카오로 3초만에 시작하기
      </Button>
    </Box>
  );
};

export default LogIn;
