import React from "react";
import { Box, VStack, Text, Button, Avatar, HStack, Divider } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const CommunitySupport = () => {
  const history = useHistory();

  const experts = [
    { _id: "1", name: "Dr. Sarah Johnson", specialization: "Gynecologist" },
    { _id: "2", name: "Dr. Emily Brown", specialization: "Nutritionist" },
    { _id: "3", name: "Dr. Alice White", specialization: "Mental Health Counselor" },
  ];

  const peers = [
    { _id: "101", groupName: "Menstrual Health Support" },
    { _id: "102", groupName: "Nutrition and Wellness Group" },
    { _id: "103", groupName: "Mental Health and Wellbeing" },
  ];

  const initiateChat = (doctorId) => history.push(`/chat/${doctorId}`);
  const joinGroup = (groupId) => history.push(`/group-chat/${groupId}`);

  return (
    <VStack spacing={8} align="stretch" p={8} bg="gray.50" borderRadius="md" boxShadow="lg">
      <Text fontSize="3xl" fontWeight="bold" color="teal.600" textAlign="center">
        Community Support
      </Text>

      <VStack align="start" spacing={4} w="full">
        <Text fontSize="xl" fontWeight="semibold" color="teal.500">Doctors Available:</Text>
        {experts.map((expert) => (
          <Box
            key={expert._id}
            p={4}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            w="full"
            _hover={{ boxShadow: "lg" }} // Hover effect for better interactivity
          >
            <HStack spacing={4}>
              <Avatar name={expert.name} />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{expert.name}</Text>
                <Text fontSize="sm" color="gray.500">Specialization: {expert.specialization}</Text>
              </VStack>
              <Button colorScheme="pink" size="sm" onClick={() => initiateChat(expert._id)}>
                Initiate Chat
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>

      <Divider />

      <VStack align="start" spacing={4} w="full">
        <Text fontSize="xl" fontWeight="semibold" color="teal.500">Peer Support Groups:</Text>
        {peers.map((peer) => (
          <Box
            key={peer._id}
            p={4}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            w="full"
            _hover={{ boxShadow: "lg" }} // Hover effect for better interactivity
          >
            <HStack spacing={4}>
              <Avatar name={peer.groupName} />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{peer.groupName}</Text>
              </VStack>
              <Button colorScheme="blue" size="sm" onClick={() => joinGroup(peer._id)}>
                Join Group
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default CommunitySupport;