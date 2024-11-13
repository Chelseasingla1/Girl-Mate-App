import React from "react";
import { Box, VStack, HStack, Text, Avatar, Button, Badge } from "@chakra-ui/react";

const PersonalizedRecommendations = () => {
  // Mock data to simulate personalized recommendations
  const recommendations = {
    articles: [
      { id: 1, title: "How to Manage Stress", category: "Mental Health" },
      { id: 2, title: "Top Nutritional Tips", category: "Nutrition" },
    ],
    doctors: [
      { id: 1, name: "Dr. Sarah Johnson", specialization: "Mental Health" },
      { id: 2, name: "Dr. Emily Brown", specialization: "Nutrition" },
    ],
    groups: [
      { id: 1, name: "Stress Management Support Group" },
      { id: 2, name: "Healthy Eating Habits Group" },
    ],
  };

  return (
    <VStack spacing={8} align="stretch" p={8} bg="white" borderRadius="md" boxShadow="lg">
      <Text fontSize="3xl" fontWeight="bold" color="teal.600" textAlign="center">
        Personalized Recommendations
      </Text>

      {/* Recommended Articles */}
      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>Articles for You</Text>
        <VStack spacing={4} align="stretch">
          {recommendations.articles.map((article) => (
            <Box
              key={article.id}
              p={4}
              bg="gray.50"
              borderRadius="md"
              boxShadow="sm"
              _hover={{ bg: "gray.100" }}
            >
              <HStack justify="space-between">
                <Text fontWeight="bold">{article.title}</Text>
                <Badge colorScheme="green">{article.category}</Badge>
              </HStack>
              <Button mt={2} colorScheme="teal" size="sm">Read Article</Button>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Recommended Doctors */}
      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>Doctors You May Like</Text>
        <VStack spacing={4} align="stretch">
          {recommendations.doctors.map((doctor) => (
            <Box
              key={doctor.id}
              p={4}
              bg="gray.50"
              borderRadius="md"
              boxShadow="sm"
              _hover={{ bg: "gray.100" }}
            >
              <HStack spacing={4}>
                <Avatar name={doctor.name} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{doctor.name}</Text>
                  <Text fontSize="sm" color="gray.500">{doctor.specialization}</Text>
                </VStack>
              </HStack>
              <Button mt={2} colorScheme="pink" size="sm">View Profile</Button>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Recommended Groups */}
      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>Groups You May Enjoy</Text>
        <VStack spacing={4} align="stretch">
          {recommendations.groups.map((group) => (
            <Box
              key={group.id}
              p={4}
              bg="gray.50"
              borderRadius="md"
              boxShadow="sm"
              _hover={{ bg: "gray.100" }}
            >
              <Text fontWeight="bold">{group.name}</Text>
              <Button mt={2} colorScheme="blue" size="sm">Join Group</Button>
            </Box>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default PersonalizedRecommendations;