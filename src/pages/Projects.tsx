import React from "react";
import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { PRIMARY, SECONDARY } from "../utils/constants/Theme";
import Card from "../components/Card";
import useFetchProjects from "../hooks/useFetchProjects";

const Projects: React.FC = () => {
  const { projects, isLoading } = useFetchProjects();

  return (
    <Center bg="#1f2833" h="100vh">
      <Container minW="50vw">
        <Heading mb="20px" color={PRIMARY}>
          Projects
        </Heading>
        <Text mb="32px" color="white">
          Here is a list of the projects that I've worked on, along with links
          that will take you to the projects and if possible, a link to the repo
          where the source code is located!
        </Text>
        {isLoading ? (
          <Center>
            <Spinner color={SECONDARY} />
          </Center>
        ) : (
          <SimpleGrid
            columns={{ sm: 1, md: 1, lg: 1, xl: 2 }}
            spacing={8}
            h="820px"
            overflow="auto"
          >
            {projects.map((value, key) => {
              return <Card key={key} {...value} />;
            })}
          </SimpleGrid>
        )}
      </Container>
    </Center>
  );
};

export default Projects;
