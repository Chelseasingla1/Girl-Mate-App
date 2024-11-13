import React from "react";
import { Box, VStack, HStack, Text, Avatar, Badge, StackDivider, Progress } from "@chakra-ui/react";

const VolunteerRecognition = () => {
  // Mock data for the volunteer profile
  const volunteer = {
    name: "Dr. Emily Brown",
    avatar: "https://via.placeholder.com/100",
    points: 1200,
    badges: [
      { name: "Top Contributor", color: "teal" },
      { name: "Monthly Star", color: "yellow" },
      { name: "Helpful Mentor", color: "purple" },
    ],
    contributions: [
      { id: 1, type: "Answer", detail: "Provided mental health guidance to a peer", date: "2024-10-01" },
      { id: 2, type: "Answer", detail: "Participated in nutrition Q&A session", date: "2024-09-25" },
      { id: 3, type: "Article", detail: "Shared insights on mental well-being", date: "2024-09-20" },
    ],
  };

  return (
    <VStack spacing={8} align="stretch" p={8} bg="white" borderRadius="md" boxShadow="lg">
      <HStack spacing={4} align="center">
        <Avatar src={volunteer.avatar} name={volunteer.name} size="xl" />
        <VStack align="start" spacing={0}>
          <Text fontSize="2xl" fontWeight="bold">{volunteer.name}</Text>
          <Text fontSize="lg" color="gray.600">Volunteer Contributor</Text>
          <Text fontSize="sm" color="gray.500">Points: {volunteer.points}</Text>
        </VStack>
      </HStack>

      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={2}>Badges Earned</Text>
        <HStack spacing={2}>
          {volunteer.badges.map((badge, index) => (
            <Badge key={index} colorScheme={badge.color} p={2} borderRadius="md">
              {badge.name}
            </Badge>
          ))}
        </HStack>
      </Box>

      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={2}>Contribution Progress</Text>
        <Progress value={(volunteer.points % 1000) / 10} colorScheme="green" borderRadius="md" />
        <Text fontSize="sm" color="gray.500" mt={1}>
          {volunteer.points} / 1000 Points
        </Text>
      </Box>

      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={2}>Contribution History</Text>
        <VStack align="stretch" divider={<StackDivider borderColor="gray.200" />} spacing={2}>
          {volunteer.contributions.map((contribution) => (
            <Box key={contribution.id} p={3} bg="gray.50" borderRadius="md" boxShadow="sm">
              <HStack justify="space-between">
                <Text fontWeight="bold">{contribution.type}</Text>
                <Text fontSize="sm" color="gray.500">{contribution.date}</Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">{contribution.detail}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default VolunteerRecognition;