import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../core/components/layout/main';
import { gtm } from '../../src/core/lib/gtm'; 

const Home: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Material Kit Pro
        </title>
      </Head>
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Home;
