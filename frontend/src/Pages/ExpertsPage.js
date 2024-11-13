// Pages/ExpertsPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast, Spinner, VStack, Box, Text } from "@chakra-ui/react";
import ExpertList from "../components/ExpertList"; // Assuming ExpertList component is already created
import { ChatState } from "../Context/ChatProvider";

const ExpertsPage = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { user } = ChatState();

  useEffect(() => {
    const fetchExperts = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.get("/api/experts", config);
        setExperts(data);
      } catch (error) {
        toast({
          title: "Error Occurred!",
          description: "Failed to load experts",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
      setLoading(false);
    };

    fetchExperts();
  }, [user, toast]);

  return (
    <VStack spacing={4} align="stretch">
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="#e91e63">
          Expert Guidance
        </Text>
      </Box>
      {loading ? (
        <Spinner />
      ) : (
        <ExpertList experts={experts} onInitiateChat={() => {}} /> // Pass necessary function for chat initiation
      )}
    </VStack>
  );
};

export default ExpertsPage;
