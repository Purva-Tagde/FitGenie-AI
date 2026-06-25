# 🏋️ FitGenie-AI
### AI-Powered Personalized Fitness and Nutrition Planner

FitGenie-AI is an intelligent web application that provides personalized workout routines and diet recommendations using Artificial Intelligence. The system analyzes user information such as age, gender, height, weight, fitness goals, activity level, and dietary preferences to generate customized fitness plans.

The application combines a modern React frontend with a Python Flask backend and integrates Google's Gemini AI model to provide smart, personalized recommendations.

## 📌 Features
- 👤 User Registration and Login
- 🤖 AI-powered Personalized Workout Plans
- 🥗 AI-generated Diet Recommendations
- 🎯 Goal-based Fitness Planning
- 📊 User Profile Management
- 💪 BMI-based Suggestions
- ⚡ Fast AI Response Generation using Google Gemini
- 📱 Responsive User Interface
- 🔒 Secure API Integration
- 
## 🛠 Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask
- Flask-CORS

### Artificial Intelligence
- Google Gemini API

### Database
- MongoDB

### Tools & Technologies
- Visual Studio Code
- Git
- GitHub
- Postman
- 
## 📂 Project Structure

FitGenie-AI/
│
├── backend/
│   ├── app.py
│   ├── routes/
│   ├── models/
│   ├── database/
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── .gitignore

## 🚀 How It Works

### Step 1 – User Registration
Users create an account by entering their personal information.
### Step 2 – Login
Registered users securely log in to access their personalized dashboard.
### Step 3 – Enter Fitness Details
The user provides:
- Age
- Gender
- Height
- Weight
- Fitness Goal
- Activity Level
- Dietary Preference
### Step 4 – AI Processing
The backend sends the user information to the Google Gemini AI model, which analyzes the data and generates personalized fitness recommendations.
### Step 5 – Personalized Results
The application displays:
- Customized Workout Plan
- Personalized Diet Plan
- Health Recommendations
- Fitness Tips
# 📊 System Architecture
            User
              │
              ▼
      React Frontend
              │
      REST API Requests
              │
              ▼
       Flask Backend
              │
      Business Logic
              │
     Google Gemini AI API
              │
      Personalized Response
              │
              ▼
      Workout + Diet Plan
## 📸 Screenshots

### Home Page

(Add Screenshot)

### Login Page

(Add Screenshot)

### Register Page

(Add Screenshot)

### Dashboard

(Add Screenshot)

### AI Recommendation Page

(Add Screenshot)

## ⚙ Installation
### Clone Repository

```bash
git clone https://github.com/Purva-Tagde/FitGenie-AI.git
```
Move into the project folder
```bash
cd FitGenie-AI
```
## Backend Setup
Navigate to backend
```bash
cd backend
```
Install dependencies
```bash
pip install -r requirements.txt
```
Run Flask Server
```bash
python app.py
```
## Frontend Setup
Open another terminal
```bash
cd frontend
```
Install dependencies
```bash
npm install
```
Run React Application
```bash
npm start
```
## Environment Variables
Create a `.env` file inside the backend directory.
Example:
```
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```
**Important:** Never upload your API keys or `.env` file to GitHub.
## Learning Outcomes
This project helped in understanding:
- React Development
- Flask Backend Development
- REST API Integration
- MongoDB Database
- Google Gemini AI Integration
- User Authentication
- Full Stack Web Development
- Git & GitHub Version Control
- AI-powered Recommendation Systems
  
## Author
**Purva Tagde**

Bachelor of Technology (Computer Science & Engineering)

GitHub:
https://github.com/Purva-Tagde

This project is developed for educational and academic purposes as a Final Year Engineering Project.
