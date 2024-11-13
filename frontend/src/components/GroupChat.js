import React, { useState } from "react";
import { Box, VStack, HStack, Text, Input, Button, Avatar } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GroupChat = () => {
  const { groupId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "User", content: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <HStack spacing={4} bg="blue.100" p={4} borderRadius="md">
        <Avatar name={`Group ${groupId}`} />
        <Text fontSize="lg" fontWeight="bold">{`Group Chat: ${groupId}`}</Text>
      </HStack>

      <VStack
        spacing={3}
        align="stretch"
        bg="gray.50"
        p={4}
        borderRadius="md"
        h="400px"
        overflowY="auto"
      >
        {messages.length === 0 && (
          <Text color="gray.500" textAlign="center">
            Start a conversation in this group
          </Text>
        )}
        {messages.map((message, index) => (
          <Box
            key={index}
            alignSelf={message.sender === "User" ? "flex-end" : "flex-start"}
            bg={message.sender === "User" ? "blue.100" : "purple.100"}
            p={2}
            borderRadius="md"
            maxW="70%"
          >
            <Text>{message.content}</Text>
          </Box>
        ))}
      </VStack>

      <HStack spacing={2}>
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button onClick={handleSendMessage} colorScheme="blue">
          Send
        </Button>
      </HStack>
    </VStack>
  );
};

export default GroupChat;
