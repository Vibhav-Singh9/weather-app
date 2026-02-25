# 🌦 Weather Forecast Application

A full-stack Weather Forecast application built using React, Node.js, and Express.  
The application fetches real-time weather data from the OpenWeather API and displays current weather details in a clean and responsive interface.

The backend acts as a secure proxy layer to protect API credentials and manage cross-origin communication, while the frontend delivers a smooth user experience with loading states and cloud deployment handling.

---

## 🚀 Live Deployment

- Frontend: Deployed on Vercel  
- Backend: Deployed on Render  

---

## 🛠 Tech Stack

- React.js
- Node.js
- Express.js
- Axios
- OpenWeather API
- CORS
- Render
- Vercel

---

## ✨ Features

- 🌍 Search weather by city name
- 🌡 Real-time temperature, humidity, and wind data
- 🔐 Secure backend API proxy
- ⏳ Dynamic loading states
- ☁️ Cold-start handling for cloud deployment
- 🌐 Fully cloud-hosted architecture

---

## 📁 Project Structure

weather-app/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ │ ├── Loader.jsx
│ │ │ ├── FullScreenLoader.jsx
│ │ │ └── WeatherCard.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.jsx
│ │ └── App.css
│ └── package.json
│
├── server/ # Node + Express Backend
│ ├── routes/
│ │ └── weather.routes.js
│ ├── server.js
│ └── package.json
│
└── README.md

---

## ⚙️ Backend Setup

- Built using Express.js
- Configured CORS for secure cross-origin requests
- Integrated OpenWeather API through REST endpoints
- Structured using modular routing
- Deployed on Render as a Web Service

---

## 🎨 Frontend Setup

- Built using React.js
- API communication handled using Axios
- Loading and cold-start states implemented for better UX
- Configured environment-based API URL handling
- Deployed on Vercel for fast global delivery

---

## 🌐 Architecture Overview

User  
⬇  
Vercel (React Frontend)  
⬇  
Render (Node.js Backend)  
⬇  
OpenWeather API  

---

## 📄 License

This project is developed for educational and portfolio purposes.  
Feel free to explore and modify for learning.
