'use client';
import {
  Box,
  Flex,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import config from '@/config';
import createNewNote from '@/api/createNewNote';
import { useRouter } from 'next/navigation';

const MenuLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const router = useRouter();
  const [titleRequired, setTitleRequired] = React.useState(false);
  const [bodyRequired, setBodyRequired] = React.useState(false);

  React.useEffect(() => {
    if (title) {
      setTitleRequired(false);
    }

    if (body) {
      setBodyRequired(false);
    }
  }, [title, body]);

  const submit = async () => {
    if (!title || !body) {
      setTitleRequired(true);
      setBodyRequired(true);
      return;
    }

    if (!title) {
      setTitleRequired(true);
      return;
    }

    if (!body) {
      setBodyRequired(true);
      return;
    }

    const data = {
      title,
      body,
    };

    await createNewNote(data).then((res) => {
      if (res) {
        router.push('/');
        window.location.reload();
      }
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        size="sm"
        rounded="md"
        color={'white'}
        bg={'primary.500'}
        _hover={{
          bg: 'primary.600',
        }}>
        Create
      </Button>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={'column'}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="New title"
                />
                {titleRequired && (
                  <Box
                    color="red.500"
                    fontSize="sm"
                    fontWeight="semibold">
                    Title is required
                  </Box>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Body</FormLabel>
                <Textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="New body"
                  size="sm"
                />
                {bodyRequired && (
                  <Box
                    color="red.500"
                    fontSize="sm"
                    fontWeight="semibold">
                    Body is required
                  </Box>
                )}
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="green"
              onClick={submit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

interface NavBarContainerProps {
  children: React.ReactNode;
}

const NavBarContainer = ({ children, ...props }: NavBarContainerProps) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        boxShadow={'md'}
        borderBottom={1}
        paddingX={8}
        paddingY={5}
        {...props}>
        {children}
      </Flex>
    </>
  );
};

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  return (
    <NavBarContainer {...props}>
      <Image
        src="/logo.jpeg"
        alt="Logo"
        height="40px"
      />
      <MenuLinks />
    </NavBarContainer>
  );
};

export default NavBar;
