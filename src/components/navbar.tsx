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

const MenuLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [value, setValue] = React.useState('');

  let handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setValue(inputValue);
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
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Body</FormLabel>
                <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
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
            <Button variant="ghost">Save</Button>
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
