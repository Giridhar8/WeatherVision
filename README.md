# WeatherVision
# 🌤️ WeatherVision  
### An Interactive Weather Analytics Dashboard built with Vue.js & Chart.js  

WeatherVision is a powerful, modern, and fully interactive weather analytics dashboard built using **Vue.js (Vue 3)**, **OpenWeatherMap API**, **Chart.js**, and **responsive UI design**.  
It allows users to:

✔ Search real-time weather for any city  
✔ Compare multiple cities  
✔ Switch between **Bar, Pie, and Line charts**  
✔ Use light/dark theme  
✔ Visualize temperature, humidity, and wind  
✔ View smooth animations & transitions  
✔ Auto-load last searched city  

This project is perfect for learning **Vue.js**, API integration, and data visualization.

---

## 🚀 Features

### 🔍 **1. Real-time Weather Search**
Fetches live weather data using the OpenWeatherMap API.

### 🌆 **2. Compare Multiple Cities**
Enter cities like:
Hyderabad, Delhi, Mumbai

yaml
Copy code
It fetches and visualizes all of them together.

### 📊 **3. Multiple Visualization Types**
You can switch between:

- **Bar Chart**
- **Pie Chart**
- **Line Chart**

### 🌗 **4. Dark / Light Mode**
A beautiful theme toggle for modern UI experience.

### 🔄 **5. Animated UI + Loading Spinner**
Smooth transitions and stylish loading animation.

### 📈 **6. Weather Metrics Displayed**
- Temperature  
- Humidity  
- Wind Speed  

### 💾 **7. Saves Last Searched City**
Automatically restores your last search when you reopen the app.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| **Vue.js (CDN)** | Frontend Framework |
| **JavaScript (ES6)** | Logic & UI Interaction |
| **Chart.js** | Data Visualization |
| **OpenWeatherMap API** | Weather Data |
| **HTML5 / CSS3** | Layout & Styling |

---

## 📂 Project Structure

WeatherVision/
│── index.html
│── styles.css
│── main.js
└── README.md

yaml
Copy code

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/WeatherVision.git
2️⃣ Open the project folder
bash
Copy code
cd WeatherVision
3️⃣ Get your OpenWeatherMap API key
👉 https://openweathermap.org/api
Verify your email → Generate API Key → Copy it.

4️⃣ Add your API key into main.js
js
Copy code
API_KEY: "YOUR_API_KEY_HERE"
5️⃣ Run the Project
Just open index.html in your browser
OR
use Live Server in VS Code.

📊 How It Works
✔ Fetch Weather
When you search a city:

txt
Copy code
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
✔ Visualize Data
Data is displayed using Chart.js:

Temperature

Humidity

Wind speed

✔ Compare Multiple Cities
Input example:

Copy code
Hyderabad, Delhi, Mumbai
The dashboard loads all weather data and builds comparison charts.

🎨 UI & UX Highlights
Smooth fade animations

Slide-in weather card

Responsive layout

Modern color palette

Rounded UI design

Dark / Light mode

Dynamic chart switching

