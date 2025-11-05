# 🏗️ SmartSite - Construction Safety Monitor

SmartSite is a **real-time safety monitoring system** designed for **construction sites**. It helps ensure worker well-being by continuously tracking **environmental and climate conditions** such as temperature, humidity, air quality, UV index, and wind speed. Based on these readings, SmartSite automatically determines the **current safety status** and displays alerts when conditions may pose risks.


Take a look : https://hegdesubhas.github.io/Construction-Safety-Monitor/

---

## 🌟 Key Features

- 🌡️ **Live Climate Condition Monitoring**  
  Tracks temperature, humidity, wind speed, UV index, and air quality.

- ⚠️ **Smart Safety Evaluation**  
  Displays safety status dynamically (e.g., Safe, Caution, Hazard).

- 🌤️ **Weather Condition Display**  
  Shows real-time weather condition (Clear, Rain, Fog, etc.).

- 🚨 **Emergency Reporting**  
  One-click emergency alert button for quick incident reporting.

- 💻 **User-Friendly Dashboard**  
  Clean and responsive UI for desktop or mobile use.

---

## 🖥️ Preview (Dashboard UI)

| Climate Dashboard | Safety Status |
|------------------|--------------|
| ![Dashboard UI](preview.png) | Displays real-time safety indication |

---

## 🔧 Tech Stack

| Layer | Technology Used |
|------|-----------------|
| Frontend | HTML, CSS, JavaScript |
| Data Source (Weather/Climate) | API (OpenWeather / Visual Crossing / Air Quality API) |
| Hosting (Optional) | GitHub Pages / Vercel / Netlify |

---

## 📌 How It Works

1. The system fetches real-time climate and weather data from external APIs.
2. Data is processed to evaluate:
   - Heat stress risk
   - Air quality safety level
   - UV exposure risk
3. Based on the readings, a **Safety Status** is displayed:
   - ✅ Safe
   - ⚠️ Caution
   - 🚨 Hazard / Unsafe
4. Users can press **Report Emergency** to notify supervisors / safety officers.

---

## 🚀 Setup & Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/smartsite-safety-monitor.git
Open the project folder:

bash
Copy code
cd smartsite-safety-monitor
Open the index.html file in a browser:

bash
Copy code
double click index.html
Make sure to add your API keys in the JavaScript file (if required).

🛠️ Configuration
Edit your script.js (or inline JS) to insert API Key:

js
Copy code
const apiKey = "YOUR_API_KEY_HERE";
Supported APIs:

OpenWeatherMap

Visual Crossing Weather

AirVisual Air Quality API

▶️ Future Enhancements (Planned)
📱 Mobile app version

🧑‍🤝‍🧑 Worker ID login & attendance

🆘 Automated SOS SMS alerts

📊 Historical safety analytics dashboard

🤝 Contributing
Contributions are welcome!
Feel free to:

Open Issues

Suggest features

Create Pull Requests

📜 License
This project is open-source and available under the MIT License.

⭐ If you found this project helpful, don't forget to Star the repository!







