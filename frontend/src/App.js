import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import ExpertsPage from "./Pages/ExpertsPage"; 
import HealthInfo from "./components/HealthInfo";
import CommunitySupport from "./components/CommunitySupport";
import DoctorChat from "./components/DoctorChat"; 
import GroupChat from "./components/GroupChat";
import VolunteerRecognition from "./components/VolunteerRecognition";
import PersonalizedRecommendations from "./components/PersonalizedRecommendations";
import SubscriptionPlans from "./components/SubscriptionPlans";
import HealthResources from "./components/HealthResources";
import AvatarSelection from "./Pages/AvatarSelection";




// const DoctorChat = ({ match }) => (
//   <div>Chat with Doctor ID: {match.params.doctorId}</div>
// );

// const GroupChat = ({ match }) => (
//   <div>Group Chat ID: {match.params.groupId}</div>
// );
const handleAvatarSelection = (avatarUrl) => {
  // Handle avatar URL saving logic here (e.g., update user profile or global state)
  console.log("Avatar selected:", avatarUrl);
};

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/experts" component={ExpertsPage} />
      <Route path="/health-info" component={HealthInfo} />
      <Route path="/community-support" component={CommunitySupport} />
      <Route path="/chat/:doctorId" component={DoctorChat} /> 
      <Route path="/group-chat/:groupId" component={GroupChat} />
      <Route path="/personalized-recommendations" component={PersonalizedRecommendations} />
<Route path="/volunteer-recognition" component={VolunteerRecognition} />
<Route path="/subscription-plans" component={SubscriptionPlans} />
<Route path="/health-resources" component={HealthResources} />
<Route path="/avatar-selection">
          <AvatarSelection onSelectAvatar={handleAvatarSelection} />
        </Route>
      </div>
  );
}

export default App;
