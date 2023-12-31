import Image from 'next/image';
import styles from './page.module.css';
import { Flex } from '@chakra-ui/react';
import NavBar from '@/components/navbar';
import Content from '@/components/content';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Flex
        direction={'column'}
        minHeight={'100vh'}
        align={'center'}
        justify={'space-between'}>
        <Flex
          direction={'column'}
          width={'100%'}
          align={'center'}
          justify={'start'}>
          <NavBar />
          <Content />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
