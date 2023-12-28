import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box
        w={'100%'}
        boxShadow={'0 -1px 6px rgba(0,0,0,0.1)'}
        paddingTop={5}
        marginY={5}>
        <Text style={{ textAlign: 'center' }}>
          © 2023. Midyanisa Yuniar - MSIB - Dibimbing.id
        </Text>
      </Box>
    </>
  );
};

export default Footer;
