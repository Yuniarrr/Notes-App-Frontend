'use client';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import { Flex, Text } from '@chakra-ui/react';
import DetailContent from '@/components/detail-content';
import { useParams } from 'next/navigation';

const NoteDetail = () => {
  const params = useParams();

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
          <DetailContent params={params.id} />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default NoteDetail;
