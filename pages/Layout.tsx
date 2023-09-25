import { Box } from '@mui/material';

import Header from '@/components/layout/header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box p={(theme) => theme.spacing(3)}>{children}</Box>
    </>
  );
};

export default Layout;
