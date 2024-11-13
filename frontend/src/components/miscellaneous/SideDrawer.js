import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import ChatLoading from "../ChatLoading";
import { Spinner } from "@chakra-ui/spinner";
import ProfileModal from "./ProfileModal";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { getSender } from "../../config/ChatLogics";
import UserListItem from "../userAvatar/UserListItem";
import { ChatState } from "../../Context/ChatProvider";
import ExpertList from "../ExpertList"; // Import ExpertList component
import "./SideDrawer.css";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [experts, setExperts] = useState([]); // State for storing experts list
  const [loadingExperts, setLoadingExperts] = useState(false); // Loading state for experts

  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isExpertOpen, onOpen: onOpenExpert, onClose: onCloseExpert } = useDisclosure();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoadingChat(false);
    }
  };

  // Fetch experts when the Expert Guidance modal is opened
  useEffect(() => {
    if (isExpertOpen) {
      const fetchExperts = async () => {
        setLoadingExperts(true);
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
            description: "Failed to Load Experts",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
          });
        }
        setLoadingExperts(false);
      };

      fetchExperts();
    }
  }, [isExpertOpen, user, toast]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#ffe6e9"
        w="100%"
        p="10px"
        borderBottom="2px solid #f8a5c2"
      >
       

        <Text fontSize="3xl" fontFamily="Poppins, sans-serif" color="#e91e63">
          GirlMate
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <NotificationBadge count={notification.length} effect={Effect.SCALE} />
              <BellIcon fontSize="2xl" m={1} color="#e91e63" />
            </MenuButton>
            <MenuList bg="#ffe6e9" color="#e91e63">
              {!notification.length && <MenuItem>No New Messages</MenuItem>}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="#ffe6e9" rightIcon={<ChevronDownIcon color="#e91e63" />}>
              <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
            </MenuButton>
            <MenuList bg="#ffe6e9" color="#e91e63">
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
     
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#ffe6e9">
          <DrawerHeader borderBottomWidth="1px" color="#e91e63">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                border="2px solid #f8a5c2"
                _placeholder={{ color: "#e91e63" }}
              />
              <Button onClick={handleSearch} bg="#f8a5c2" color="#fff" _hover={{ bg: "#f78fb3" }}>
                Go
              </Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button as="a" href="/health-info" className="custom-button blue">
      Health Information
    </Button>
    <Button as="a" href="/community-support" className="custom-button blue">
      Community Support
    </Button>
    <Button as="a" href="/volunteer-recognition" className="custom-button teal">
      Volunteer Recognition
    </Button>
    <Button as="a" href="/personalized-recommendations" className="custom-button purple">
      Personalized Recommendations
    </Button>
    <Button as="a" href="/subscription-plans" className="custom-button purple">
      Go Premium
    </Button>
    <Button as="a" href="/health-resources" className="custom-button purple">
      Health Resources
    </Button>
    <Button className="drawer-button" onClick={onOpen}>
      Search User
    </Button>
    <Button className="drawer-button" onClick={onOpenExpert}>
      Expert Guidance
    </Button>
    

      {/* Modal for Expert Guidance */}
      <Modal isOpen={isExpertOpen} onClose={onCloseExpert}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Expert Guidance</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loadingExperts ? (
              <Spinner />
            ) : (
              <ExpertList experts={experts} onInitiateChat={accessChat} />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onCloseExpert}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}

export default SideDrawer;
