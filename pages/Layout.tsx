import Header from '@/components/header';
import styled from '@emotion/styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;
