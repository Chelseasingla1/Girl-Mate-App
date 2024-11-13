import React from "react";
import { Box, VStack, Text, Button, HStack, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const HealthResources = () => {
  // Mock data for health resources
  const resources = [
    {
      id: 1,
      title: "Managing Stress in Daily Life",
      type: "Article",
      description: "Learn practical tips to manage stress effectively and improve mental well-being.",
      link: "https://example.com/stress-management",
      category: "Mental Health",
    },
    {
      id: 2,
      title: "Nutrition Basics: Eating Right for a Healthy Life",
      type: "Video",
      description: "This video covers the basics of balanced nutrition and how to make healthy food choices.",
      link: "https://example.com/nutrition-basics",
      category: "Nutrition",
    },
    {
      id: 3,
      title: "Exercise Routines for Beginners",
      type: "Article",
      description: "Discover beginner-friendly exercises to help you stay active and healthy.",
      link: "https://example.com/exercise-routines",
      category: "Fitness",
    },
  ];

  return (
    <VStack spacing={8} align="stretch" p={8} bg="gray.50" borderRadius="md" boxShadow="lg">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.600">
        Health Resources
      </Text>
      <Text fontSize="lg" color="gray.600" textAlign="center">
        Explore our curated articles and videos on various health topics.
      </Text>

      {resources.map((resource) => (
        <Box
          key={resource.id}
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          w="full"
          maxW="600px"
          mx="auto"
          transition="background 0.2s"
          _hover={{ bg: "gray.100" }}
        >
          <VStack align="start" spacing={3}>
            <HStack justify="space-between" w="full">
              <Text fontSize="xl" fontWeight="bold">
                {resource.title}
              </Text>
              <Badge colorScheme={resource.type === "Video" ? "blue" : "green"}>{resource.type}</Badge>
            </HStack>
            <Text fontSize="sm" color="gray.500">
              Category: {resource.category}
            </Text>
            <Text color="gray.700">{resource.description}</Text>
            <Button
              as="a"
              href={resource.link}
              target="_blank"
              colorScheme="teal"
              size="md" // Increased button size for better visibility
              rightIcon={<ExternalLinkIcon />}
              variant="outline" // Outline variant for a modern look
            >
              {resource.type === "Video" ? "Watch Video" : "Read Article"}
            </Button>
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

export default HealthResources;