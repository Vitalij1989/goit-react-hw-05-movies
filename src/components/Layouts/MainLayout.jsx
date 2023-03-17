import { Footer } from 'components/Layouts/Footer/Footer';
import { Header } from 'components/Layouts/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Wraper.styled';

export const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Wrapper>
  );
};
