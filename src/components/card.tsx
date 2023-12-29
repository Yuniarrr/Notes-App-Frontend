import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { RefObject } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowRoundForward } from 'react-icons/io';
import deleteNote from '@/api/deleteNote';

interface CardComponentProps {
  id: string;
  title: string;
  body: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ id, title, body }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: RefObject<HTMLButtonElement> = React.useRef(null);

  const handleCardClick = () => {
    router.push(`/${id}`);
  };

  const deleteNoteById = async () => {
    await deleteNote(id).then((res) => {
      onClose();
      if (res) {
        window.location.reload();
      }
    });
  };

  return (
    <>
      <Card
        width={{ base: '48%', md: '250px' }}
        boxShadow={'lg'}
        _hover={{ cursor: 'pointer', boxShadow: 'xl' }}>
        <CardHeader>
          <Flex
            direction={'row'}
            align={'center'}
            justify={'space-between'}>
            <Heading size="md">{title}</Heading>
            <Box
              onClick={onOpen}
              padding={1.5}
              borderRadius={3}
              _hover={{
                bg: 'gray.100',
                cursor: 'pointer',
              }}>
              <AiOutlineClose />
            </Box>
          </Flex>
        </CardHeader>

        <Divider />

        <CardBody>
          <Stack
            divider={<StackDivider />}
            spacing="4">
            <Flex
              direction={'row'}
              align={'center'}
              justify={'space-between'}>
              <Box>
                <Text
                  pt="2"
                  fontSize="sm">
                  {body}
                </Text>
              </Box>
              <Box
                onClick={handleCardClick}
                padding={1.5}
                borderRadius={3}
                _hover={{
                  bg: 'gray.100',
                  cursor: 'pointer',
                }}>
                <IoMdArrowRoundForward />
              </Box>
            </Flex>
          </Stack>
        </CardBody>
      </Card>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold">
              Delete Notes
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure to delete note with id: {id}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={deleteNoteById}
                ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CardComponent;
