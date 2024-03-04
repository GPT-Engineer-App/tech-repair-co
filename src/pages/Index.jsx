import React from "react";
import { Box, Container, Flex, Heading, Stack, Text, Button, Icon, Image, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { FaTools, FaNetworkWired, FaLaptop, FaDesktop, FaPhoneAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box as="header" py={10}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1">TechPro Solutions</Heading>
          <Button colorScheme="blue" leftIcon={<FaPhoneAlt />}>
            Contact Us
          </Button>
        </Flex>
      </Box>

      <Box as="main" py={10}>
        <VStack spacing={8} alignItems="flex-start">
          <Heading as="h2" size="xl">
            Expert IT Services for Your Business
          </Heading>
          <Text fontSize="lg">At TechPro Solutions, we handle all aspects of your IT infrastructure including hardware, software management, and any other related technology needs. We specialize in PC and laptop repair, networking, and more to keep your business running smoothly.</Text>
          <Button colorScheme="blue" size="lg">
            Learn More
          </Button>
        </VStack>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={10}>
          <ServiceCard icon={FaTools} title="Hardware Repair" description="Expert repair services for PCs, laptops, and more." />
          <ServiceCard icon={FaNetworkWired} title="Networking" description="Robust networking solutions for a seamless workflow." />
          <ServiceCard icon={FaLaptop} title="Laptop Services" description="Comprehensive laptop repair and maintenance." />
          <ServiceCard icon={FaDesktop} title="PC Support" description="Reliable support and repair services for desktop computers." />
        </Grid>

        <Box mt={20}>
          <Heading as="h3" size="lg" mb={5}>
            Why Choose Us?
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Feature title="Certified Professionals" description="Our team of certified technicians is ready to tackle any IT challenge." />
            <Feature title="Fast & Reliable" description="We pride ourselves on quick turnaround times and reliable services." />
            <Feature title="Customer Satisfaction" description="We're not happy until you are. We strive for 100% customer satisfaction." />
          </Stack>
        </Box>
      </Box>

      <Box as="footer" py={10}>
        <Text align="center">&copy; {new Date().getFullYear()} TechPro Solutions. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <VStack p={5} shadow="md" borderWidth="1px" borderRadius="md" alignItems="flex-start" justifyContent="center">
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Heading as="h4" size="md" my={2}>
      {title}
    </Heading>
    <Text fontSize="sm">{description}</Text>
  </VStack>
);

const Feature = ({ title, description }) => (
  <HStack align="start" spacing={4}>
    <Icon as={FaPlus} color="blue.500" />
    <VStack align="start">
      <Text fontWeight="bold">{title}</Text>
      <Text fontSize="sm">{description}</Text>
    </VStack>
  </HStack>
);

export default Index;
