# GirlMate: Menstrual Health and Wellness App 🌸

GirlMate is a supportive and inclusive platform designed to empower users with menstrual health tracking, wellness insights, and community support. Built with a focus on inclusivity, GirlMate caters to adolescent girls, women in their 40s and 50s, and transgender and non-binary individuals. The app offers personalized health recommendations, symptom tracking, expert guidance, and a community space where users can connect, share, and support each other.

### Video

[![Video Demo](https://img.youtube.com/vi/7IMVfs7RSpM/0.jpg)](https://youtu.be/7IMVfs7RSpM)

[Watch the demo video](https://youtu.be/7IMVfs7RSpM) 

## 🌟 Features

### 1. **Period & Symptom Tracking**
   - Easily track the start and end of your menstrual cycle.
   - Log symptoms such as cramps, fatigue, and mood changes to receive tailored health insights.
   - Predict your next period based on previous cycle data.

### 2. **Community Support**
   - Join support groups and interact with users who may share similar experiences.
   - Connect with people who can offer advice, support, and encouragement.

### 3. **Expert Guidance**
   - Access resources and guidance from health experts on menstrual health and wellness.
   - Personalized recommendations based on symptoms and health data logged in the app.

### 4. **Customizable Avatars**
   - Personalize your in-app experience by choosing or creating an avatar that represents you.
   - Avatars are designed with inclusivity in mind, catering to various gender identities and preferences.

### 5. **Volunteer Recognition**
   - Users who actively participate in community support and volunteer to help others receive special recognition within the app.
   - Earn badges and acknowledgment for contributions, fostering a sense of community and support.

### 6. **Health Information & Resources**
   - Access a library of health information, articles, and resources tailored to menstrual and general health.
   - Browse content on topics such as menstrual health, mental wellness, self-care tips, and lifestyle adjustments.

### 7. **Personalized Recommendations**
   - Receive advice on menstrual health, lifestyle, and wellness based on your tracked data.
   - Get tips on managing symptoms, such as cramps, mood swings, or fatigue, and learn about dietary or lifestyle changes that can help.

### 8. **Premium Subscription**
   - Go premium to unlock advanced features like detailed health analytics, additional expert consultations, and access to premium content.

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm or Yarn
- Google Cloud account with Dialogflow permissions

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
   - In the `backend` directory, create a `.env` file with the following information:

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

### Frontend

Navigate to `http://localhost:3000` to view the app in the browser. 

### Backend

The backend server should be running at `http://localhost:5000`.

## 💬 Testing the Chatbot

- **Dialogflow Integration**: If enabled, use the chatbot feature to interact with a virtual assistant that can answer questions related to menstrual health and provide personalized recommendations.
- **Rule-Based Chatbot**: Alternatively, the app includes a basic rule-based chatbot that responds to common phrases and questions for menstrual health support.

## 📊 Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Cloud Services**: Google Dialogflow (optional), Google Cloud (for Dialogflow integration)


## 🌈 How This Project Contributes to Gender Equality

GirlMate fosters a supportive, judgment-free space where users of all gender identities can find information, support, and community around menstrual health. By addressing menstruation inclusively and promoting education, GirlMate empowers users with knowledge, awareness, and support, contributing to the global effort toward gender equality and removing stigma associated with menstruation.
