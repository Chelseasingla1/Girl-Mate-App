import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
          bg="#f8a5c2"
          color="#fff"
          _hover={{ bg: "#f78fb3" }}
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          h="450px"
          bg="#ffe0f0"
          borderRadius="lg"
          boxShadow="lg"
          padding="20px"
        >
          <ModalHeader
            fontSize="32px"
            fontFamily="Poppins, sans-serif"
            color="#d45d79"
            textAlign="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton color="#d45d79" />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            padding="20px"
          >
            <Box
              borderRadius="full"
              boxSize="150px"
              overflow="hidden"
              mb="4"
              border="2px solid #f8a5c2"
            >
              <Image
                src={user.pic}
                alt={user.name}
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <Text fontSize="24px" fontFamily="Poppins, sans-serif" color="#d45d79">
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={onClose}
              bg="#f8a5c2"
              color="#fff"
              _hover={{ bg: "#f78fb3" }}
              fontFamily="Poppins, sans-serif"
            >
              Close
            </Button>
            <Button as="a" href="/avatar-selection" colorScheme="teal">
  Choose Avatar
</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
