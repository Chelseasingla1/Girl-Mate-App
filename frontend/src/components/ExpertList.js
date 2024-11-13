// components/ExpertList.js
import React from "react";
import { Box, Text, Avatar, Button, VStack } from "@chakra-ui/react";

const ExpertList = ({ experts, onInitiateChat }) => {
  return (
    <VStack spacing="10px">
      {experts && experts.length > 0 ? (
        experts.map((expert) => (
          <Box
            key={expert._id}
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            p={3}
            w="100%"
            borderRadius="lg"
            bg="#f8e1e6"
            border="1px solid #f78fb3"
          >
            <Avatar name={expert.name} src={expert.profilePic} size="md" mr={3} />
            <Box flex="1">
              <Text fontWeight="bold" fontSize="lg" color="#e91e63">
                {expert.name}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {expert.specialization}
              </Text>
            </Box>
            <Button
              colorScheme="pink"
              onClick={() => onInitiateChat(expert._id)}
              size="sm"
            >
              Initiate Chat
            </Button>
          </Box>
        ))
      ) : (
        <Text>No experts available at the moment.</Text>
      )}
    </VStack>
  );
};

export default ExpertList;
