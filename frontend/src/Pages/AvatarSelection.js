// AvatarSelection.js
import React, { useState } from "react";
import { Box, Image, VStack, Button, SimpleGrid, useToast, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const AvatarSelection = ({ onSelectAvatar }) => {
  const toast = useToast();
  const history = useHistory();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Array of predefined avatar image URLs
  const avatars = [
    "./avatar1.png", // Replace with actual paths to your avatar images
    "./avatar2.png",
    "./avatar3.png",
    "./avatar4.png",
    "./avatar5.png",
    "./avatar6.png",
    "./avatar7.png",
    "./avatar8.png",
  ];

  // Handle avatar selection
  const handleAvatarSelect = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    toast({
      title: "Avatar selected!",
      description: "You have chosen your avatar.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  // Confirm avatar selection and navigate back
  const handleConfirmSelection = () => {
    if (selectedAvatar) {
      onSelectAvatar(selectedAvatar); // Pass the selected avatar back
      history.push("/profile"); // Navigate back to the profile page (or wherever appropriate)
    } else {
      toast({
        title: "No Avatar Selected",
        description: "Please choose an avatar before proceeding.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={8} p={8} bg="gray.50" borderRadius="md" boxShadow="md" width="100%" maxWidth="600px" mx="auto">
      <Heading as="h2" size="xl" textAlign="center" color="teal.600">
        Choose Your Avatar
      </Heading>
      <SimpleGrid columns={[2, 3, 4]} spacing={6} w="100%" justifyItems="center">
        {avatars.map((avatarUrl, index) => (
          <Box
            key={index}
            border={selectedAvatar === avatarUrl ? "3px solid teal" : "2px solid transparent"}
            borderRadius="full"
            p={2}
            cursor="pointer"
            transition="border 0.2s"
            _hover={{ border: "2px solid teal" }}
            onClick={() => handleAvatarSelect(avatarUrl)}
            bg="white"
            boxShadow="sm"
            _active={{ transform: "scale(0.95)" }} // Add a subtle scaling effect on click
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={avatarUrl} alt={`Avatar ${index + 1}`} boxSize="80px" borderRadius="full" />
          </Box>
        ))}
      </SimpleGrid>
      <Button colorScheme="teal" size="lg" onClick={handleConfirmSelection} width="full" mt={4}>
        Confirm Selection
      </Button>
    </VStack>
  );
};

export default AvatarSelection;