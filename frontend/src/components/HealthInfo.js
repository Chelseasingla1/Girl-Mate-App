import React from "react";
import { VStack, Box, Text, Divider } from "@chakra-ui/react";

const HealthInfo = () => {
  // Hardcoded health information data
  const healthData = [
    {
      title: "Benefits of Physical Activity",
      description:
        "Regular physical activity can improve muscle strength and boost endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.",
      source: "World Health Organization",
    },
    {
      title: "Healthy Eating",
      description:
        "A balanced diet is essential for a healthy lifestyle. Eating a variety of foods ensures that you get all the essential nutrients your body needs to function properly.",
      source: "Centers for Disease Control and Prevention",
    },
    {
      title: "Mental Health and Wellbeing",
      description:
        "Mental health is just as important as physical health. It affects how we think, feel, and act. Maintaining good mental health is essential to overall well-being.",
      source: "National Institute of Mental Health",
    },
    // Add more entries as needed
  ];

  return (
    <VStack spacing={6} align="stretch" p={6} bg="white" borderRadius="md" boxShadow="lg">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.600">
        Health Information
      </Text>
      {healthData.map((item, index) => (
        <Box key={index} p={5} bg="gray.50" borderRadius="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="semibold" color="teal.500">
            {item.title}
          </Text>
          <Text mt={2} color="gray.700">
            {item.description}
          </Text>
          <Divider my={3} />
          <Text fontSize="sm" color="gray.500">
            Source: {item.source}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default HealthInfo;