import { Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Container maxW="400px" w="400px" p={4} mx="auto">
      <Flex flexDir="column" align="center" gap={2}>
        <Image src="icon.png" w="10" h="10" alt="logo" />

        <Stack flexDir="column" gap={0} textAlign="center">
          <Heading fontSize="2xl" fontWeight="semibold">
            DevSabbir - Fiverr Assistant
          </Heading>
          <Text fontSize="md">
            Version:{" "}
            <span style={{ color: "green", fontSize: "17px" }}>0.0.1</span>
          </Text>
        </Stack>
      </Flex>
    </Container>
  );
};

export default App;
