import React, { FC, ReactNode } from 'react';
import { Center, Container, Stack, Title } from '@mantine/core';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const tabs = [
  {
    link: '/home',
    label: 'トップページ'
  },
  {
    link: '/profile',
    label: 'Profile'  
  },
  {
    link: '/tips',
    label: 'Tips'
  },
  {
    link: '/techfinder',
    label: 'TechFinder'
  },
]

type MainLayoutProps = {
  children: ReactNode;
};


const HomeLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header {...{ tabs }} />
      <Container className="pt-5 pb-10">
        <Stack spacing="xl">{children}</Stack>
      </Container>
      <Footer />
    </>
  );
}
