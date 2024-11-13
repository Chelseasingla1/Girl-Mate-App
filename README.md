Here's a styled version of the **GirlMate** README, incorporating markdown formatting to enhance visual appeal and readability:

---

# 🌸 GirlMate: Menstrual Health and Wellness App 🌸

**GirlMate** is a supportive and inclusive platform designed to empower users with menstrual health tracking, wellness insights, and community support. Built with inclusivity in mind, GirlMate caters to adolescent girls, women in their 40s and 50s, as well as transgender and non-binary individuals. The app offers personalized health recommendations, symptom tracking, expert guidance, and a community space where users can connect, share, and support each other.

![GirlMate Banner](https://github.com/user-attachments/assets/c2394904-7562-408f-99cb-8c6a28e3fc3b)

---

### 🎥 Video Demo

[![Video Demo](https://img.youtube.com/vi/7IMVfs7RSpM/0.jpg)](https://youtu.be/7IMVfs7RSpM)

[Watch the demo video](https://youtu.be/7IMVfs7RSpM) 

---

## 🌟 Features

### 1. **Period & Symptom Tracking**
   - 📅 Easily track the start and end of your menstrual cycle.
   - 💬 Log symptoms like cramps, fatigue, and mood changes to receive tailored health insights.
   - 🔮 Predict your next period based on previous cycle data.

### 2. **Community Support**
   - 🤝 Join support groups and connect with users who share similar experiences.
   - 💌 Find advice, support, and encouragement from a judgment-free community.

### 3. **Expert Guidance**
   - 🩺 Access resources and guidance from health experts on menstrual health and wellness.
   - 📝 Receive personalized recommendations based on your symptoms and health data.

### 4. **Customizable Avatars**
   - 🎨 Personalize your experience by choosing or creating an avatar that represents you.
   - 🧑‍🤝‍🧑 Avatars are designed with inclusivity in mind, embracing various gender identities.

### 5. **Volunteer Recognition**
   - 🌟 Earn recognition for actively participating in community support and helping others.
   - 🏅 Receive badges and acknowledgment for contributions, fostering a sense of community.

### 6. **Health Information & Resources**
   - 📚 Access a library of health information, articles, and resources tailored to menstrual and general health.
   - 🧘‍♀️ Browse content on topics like menstrual health, mental wellness, self-care, and lifestyle tips.

### 7. **Personalized Recommendations**
   - 💡 Get advice on menstrual health, lifestyle, and wellness based on tracked data.
   - 🌱 Learn tips on managing symptoms like cramps, mood swings, and fatigue.

### 8. **Premium Subscription**
   - ⭐ Unlock advanced features, including detailed health analytics and additional expert consultations with a premium subscription.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**
- **npm** or **Yarn**
- **Google Cloud account** with Dialogflow permissions (if integrating Dialogflow)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ChelseaSingla1/girlmate.git
   cd girlmate
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Setup Environment Variables:**
   - In the `backend` directory, create a `.env` file with the following:

     ```plaintext
     GOOGLE_APPLICATION_CREDENTIALS=config/your-dialogflow-key.json
     GEMINI_ENDPOINT=https://us-central1-aiplatform.googleapis.com/v1/models/YOUR_MODEL_ID:predict
     PORT=5000
     ```

5. **Start the Development Server:**
   ```bash
   # Run both frontend and backend servers
   npm run dev
   ```

### Accessing the Application

- **Frontend**: Go to `http://localhost:3000` to view the app in your browser.
- **Backend**: The backend server should run on `http://localhost:5000`.

---

## 💬 Testing the Chatbot

- **Dialogflow Integration**: If enabled, interact with a virtual assistant that provides menstrual health support and personalized recommendations.
- **Rule-Based Chatbot**: The app also includes a rule-based chatbot for common menstrual health queries.

---

## 📊 Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Cloud Services**: Google Dialogflow (optional), Google Cloud (for Dialogflow integration)

---

## 🌈 How This Project Contributes to Gender Equality

**GirlMate** fosters a supportive, judgment-free space where users of all gender identities can find information, support, and community around menstrual health. By addressing menstruation inclusively and promoting education, GirlMate empowers users with knowledge, awareness, and support, contributing to the global effort toward gender equality and dismantling menstruation stigma.

---

## 👩‍🔬 What We Learned

- **Real-Time Communication**: Leveraging **Socket.io** for real-time chat functionality.
- **UI Design**: Building responsive interfaces with **Chakra UI**.
- **Global State Management**: Using **React Context API** for efficient data handling.
- **Chatbot Integration**: Experimenting with **Dialogflow** and **Gemini API** for AI-driven interactions, expanding our understanding of Google AI tools.

---

## 🔥 Challenges We Faced

- **Real-Time Chat**: Balancing user presence management with notifications using **Socket.io**.
- **Data Structuring**: Handling multiple user types (e.g., doctors and regular users) and their respective functionalities.
- **User Experience**: Designing a smooth avatar selection process that’s both performant and user-friendly.
- **Chatbot Implementation**: Integrating Dialogflow proved challenging, requiring permissions management and API configuration.

---

## 🌍 What’s Next for GirlMate

In the future, we aim to:
- **Enhance Personalization**: Provide AI-driven recommendations tailored to each user’s health data.
- **Add Premium Features**: Implement a premium subscription model for additional features and insights.
- **Volunteer Recognition System**: Expand with badges and rewards for active contributors.
- **Health Resources**: Develop a curated page with health articles and resources for continued learning.

---

Thank you for your interest in **GirlMate**! We are committed to supporting menstrual health and creating a welcoming community for all users. 

---
