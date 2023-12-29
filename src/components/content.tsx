'use client';
import React from 'react';
import CardComponent from './card';
import { Flex, Text } from '@chakra-ui/react';
import getAllNotes from '@/api/getAllNotes';

const Content = () => {
  const [num, setNum] = React.useState<number>(2);
  const [notes, setNotes] = React.useState<Notes[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAllNotes();
      if (data) {
        setNotes(data);
        setNum(data.length);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {num === 0 ? (
        <Flex
          w={'100%'}
          marginY={10}
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
          {notes.map((note) => (
            <CardComponent
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
            />
          ))}
        </Flex>
      )}
    </>
  );
};

export default Content;
