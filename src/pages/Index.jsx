import { Box, Container, VStack, Heading, Text, Input, Button, Link, HStack, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" position="sticky" top="0" bg="teal.500" p={4} zIndex="1000">
        <HStack spacing={8} justifyContent="center">
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Jobs</Link>
          <Link href="#" color="white">Post a Job</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl" mb={4}>Find Your Dream Job</Heading>
          <Text fontSize="lg" mb={8}>Search for jobs that match your skills and passion.</Text>
          <Input placeholder="Search for jobs..." size="lg" mb={4} />
          <Button colorScheme="teal" size="lg">Search</Button>
        </Container>
      </Box>

      {/* Featured Job Listings Section */}
      <Box py={20}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8}>Featured Job Listings</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Software Engineer</Heading>
              <Text mt={4}>Company: Tech Corp</Text>
              <Text>Location: San Francisco, CA</Text>
              <Text mt={4}>We are looking for a skilled software engineer to join our team...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Product Manager</Heading>
              <Text mt={4}>Company: Innovate Ltd</Text>
              <Text>Location: New York, NY</Text>
              <Text mt={4}>Seeking an experienced product manager to lead our new project...</Text>
            </Box>
            {/* Add more job listings as needed */}
          </SimpleGrid>
          <Button colorScheme="teal" size="lg" mt={8}>View More</Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="teal.500" color="white" py={10}>
        <Container maxW="container.md" textAlign="center">
          <Text mb={4}>Contact us: email@example.com | +1 234 567 890</Text>
          <HStack spacing={8} justifyContent="center">
            <Link href="#" color="white">LinkedIn</Link>
            <Link href="#" color="white">Twitter</Link>
            <Link href="#" color="white">Facebook</Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;