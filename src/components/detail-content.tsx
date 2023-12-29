'use client';
import config from '@/config';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import getNoteById from '@/api/getNoteById';
import updateNote from '@/api/updateNote';
import { useRouter } from 'next/navigation';

interface DetailContentProps {
  params: string | string[];
}

const DetailContent = ({ params }: DetailContentProps) => {
  const [title, setTitle] = React.useState<string>('');
  const [body, setBody] = React.useState<string>('');
  const router = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getNoteById(params);
      if (data) {
        setTitle(data.title);
        setBody(data.body);
      }
    };

    fetchData();
  }, [params]);

  const submit = async () => {
    const data = {
      title,
      body,
    };

    await updateNote(params, data).then((res) => {
      if (res) {
        window.location.reload();
      }
      router.push('/');
    });
  };

  return (
    <>
      <Flex
        width={'100%'}
        padding={5}
        gap={5}
        direction={'column'}
        alignSelf={'start'}>
        <Flex
          direction={'row'}
          align={'center'}
          gap={5}
          justify={'flex-start'}>
          <Link href={'/'}>
            <Button
              size="sm"
              rounded="md"
              color={'white'}
              bg={'primary.500'}
              _hover={{
                bg: 'primary.600',
              }}>
              Back
            </Button>
          </Link>

          <Text
            fontSize={'xl'}
            fontWeight={'semibold'}>
            Edit note with id {params}
          </Text>
        </Flex>

        <Flex
          direction={'column'}
          width={'100%'}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              width={'80%'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Body</FormLabel>
            <Textarea
              width={'80%'}
              placeholder="Here is a sample placeholder"
              size="sm"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </FormControl>
        </Flex>

        <Flex
          direction={'row'}
          align={'center'}
          gap={3}
          justify={'flex-end'}>
          <Link href={'/'}>
            <Button colorScheme="red">Cancel</Button>
          </Link>
          <Button
            colorScheme="green"
            onClick={submit}>
            Save
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default DetailContent;
