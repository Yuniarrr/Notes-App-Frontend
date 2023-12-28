'use client';
import React from 'react';
import CardComponent from './card';
import { Flex, Text } from '@chakra-ui/react';

const Content = () => {
  const [num, setNum] = React.useState<number>(2);

  return (
    <>
      {num === 0 ? (
        <Flex
          w={'100%'}
          align="center"
          justify="center">
          <Text fontSize="lg">No notes available</Text>
        </Flex>
      ) : (
        <Flex
          w={'100%'}
          padding={5}
          align="center"
          justify="center"
          wrap={'wrap'}
          gap={4}>
          {Array.from({ length: num }).map((_, i) => (
            <CardComponent
              key={i}
              id={i}
              title={`Client ${i}`}
              body={`Body ${i}`}
            />
          ))}
        </Flex>
      )}
    </>
  );
};

export default Content;
