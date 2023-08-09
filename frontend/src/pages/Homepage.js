import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={5}
        bg="teal.500"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="lg"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" color="white" align= "center">
          PERlis-CONnect
        </Text>
      </Box>
      <Box
        bgGradient="linear(to-t, teal.400, teal.300)"
        w="100%"
        p={6}
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="lg"
        transition="background 0.3s ease"
        _hover={{ bgGradient: "linear(to-t, teal.500, teal.400)" }}
      >
        <Tabs isFitted variant="enclosed-colored" colorScheme="teal">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
