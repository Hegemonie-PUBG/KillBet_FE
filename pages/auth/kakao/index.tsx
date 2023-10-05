import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

const Kakao = () => {
  const router = useRouter();

  console.log(router.query.code);

  return (
    <div>
      <CircularProgress />
      로그인 중...
    </div>
  );
};

export default Kakao;
