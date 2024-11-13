import React from "react";
import { Box, VStack, HStack, Text, Button, Badge, Divider } from "@chakra-ui/react";

const SubscriptionPlans = () => {
  // Mock data for subscription plans
  const plans = [
    {
      name: "Basic",
      price: "$0",
      features: [
        "Access to community support groups",
        "View public resources",
        "Limited doctor consultations",
      ],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Unlimited doctor consultations",
        "Access to personalized recommendations",
        "Priority customer support",
      ],
    },
    {
      name: "Premium",
      price: "$19.99/month",
      features: [
        "All Pro features",
        "Exclusive premium content",
        "One-on-one health consultations",
        "Ad-free experience",
      ],
    },
  ];

  return (
    <VStack spacing={10} align="stretch" p={8} bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.600">
        Choose Your Subscription Plan
      </Text>

      {plans.map((plan, index) => (
        <Box
          key={index}
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          w="full"
          maxW="500px"
          mx="auto"
          border="2px solid"
          borderColor={plan.name === "Premium" ? "yellow.400" : plan.name === "Pro" ? "blue.400" : "gray.300"}
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }} // Hover effect for interactivity
        >
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text fontSize="2xl" fontWeight="bold">{plan.name}</Text>
              <Badge colorScheme={plan.name === "Premium" ? "yellow" : plan.name === "Pro" ? "blue" : "gray"}>
                {plan.price}
              </Badge>
            </HStack>
            <Divider />
            <VStack align="start" spacing={2}>
              {plan.features.map((feature, idx) => (
                <Text key={idx} fontSize="sm" color="gray.600">• {feature}</Text>
              ))}
            </VStack>
            <Button
              colorScheme={plan.name === "Premium" ? "yellow" : plan.name === "Pro" ? "blue" : "gray"}
              w="full"
              mt={4}
              size="lg" // Increased button size for better visibility
            >
              {plan.name === "Basic" ? "Get Started" : `Subscribe to ${plan.name}`}
            </Button>
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

export default SubscriptionPlans;