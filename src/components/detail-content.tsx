'use client';
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

interface DetailContentProps {
  params: string | string[];
}

const DetailContent = ({ params }: DetailContentProps) => {
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
          <Button colorScheme="green">Save</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default DetailContent;
