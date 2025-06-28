# MERN Timetable Management System

![Project Banner](https://github.com/user-attachments/assets/8aba3300-8612-4447-9fff-7b9540838dcd)

> A lightweight timetable management application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows students to register and view their class schedules in a simple, user-friendly interface.

## ✨ Key Features

- **Student Registration** - Secure registration with ID validation
- **Section Selection** - Easy navigation between class sections
- **Timetable Visualization** - Clean display of daily/weekly schedules
- **Responsive Design** - Works on desktop and mobile devices
- **Simple Interface** - Intuitive navigation and minimal learning curve

## 🚀 Technologies Used

### Frontend
- **React** (JavaScript)
- **React Router** for navigation
- **CSS** for styling
- **Axios** for API requests

### Backend
- **Node.js** runtime environment
- **Express.js** web framework
- **MongoDB** database
- **Mongoose ODM** for database modeling
- **JWT** for authentication

## 📸 Application Screenshots

### Student Registration
![Registration Page](https://github.com/user-attachments/assets/8aba3300-8612-4447-9fff-7b9540838dcd)

### Section Selection
![Section Selection](https://github.com/user-attachments/assets/c248797c-9182-4d23-8e71-c9fd24da8454)

### Timetable Display
![Timetable Display](https://github.com/user-attachments/assets/3b588ee2-2761-46eb-ad3c-6d42d2b9d995)

### Daily Schedule
![Daily Schedule](https://github.com/user-attachments/assets/b1485c6d-fcf6-4b3e-9a9d-c43a77581876)

### Mobile Responsive View
![Mobile View](https://github.com/user-attachments/assets/823db975-2049-4ff6-8062-d75482aeb07e)

### Weekly Overview
![Weekly Overview](https://github.com/user-attachments/assets/9e244c20-354d-45e6-8ee7-043e994e444c)

### Notification System
![Notification](https://github.com/user-attachments/assets/2a64c29f-a7e7-42b3-9f57-96268e26f58b)

## 📂 Project Structure
merntimetable/
├── client/ # Frontend React application
│ ├── src/
│ │ ├── components/ # Reusable components (Header, Footer, etc.)
│ │ ├── pages/ # Application screens (Home, Register, Timetable)
│ │ ├── services/ # API service layer
│ │ ├── utils/ # Helper functions
│ │ ├── App.js # Main application router
│ │ └── index.js # Entry point
│ └── package.json # Frontend dependencies
│
├── server/ # Backend Express application
│ ├── config/ # Database configuration
│ ├── models/ # MongoDB models (User, Schedule)
│ ├── routes/ # API endpoints (auth, timetable)
│ ├── middleware/ # Authentication middleware
│ ├── .env.example # Environment variables template
│ └── server.js # Server entry point
│
└── README.md # Project documentation

## 🛠️ Installation

### Prerequisites
- Node.js v16+
- MongoDB
- Git

### Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/merntimetable.git
cd merntimetable
Set up backend:

bash
cd server
npm install
cp .env.example .env
# Update .env with your MongoDB URI and JWT secret
Set up frontend:

bash
cd ../client
npm install
Start MongoDB service:

bash
# Start MongoDB (command may vary by OS)
mongod
Run the application:

bash
# Start backend (from server directory)
npm start

# Start frontend (from client directory)
npm start
Access the application:
Open your browser and visit: http://localhost:3000

🔐 Registration Process
To register and view your timetable:

Enter your cluster number

Enter your student ID (e.g., 2200032102)

Select your section (e.g., sec-22)

View your personalized timetable

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new student
POST	/api/auth/login	Authenticate a student
GET	/api/timetable	Get timetable for a section
GET	/api/sections	Get all available sections
🤝 Contributing
Contributions are welcome! Follow these steps:

Fork the repository

Create a new branch:


Developed with the MERN Stack
Simple • Efficient • User-Friendly

text
why can't you give everything in one balck console
We are going to create a README that is concise and in a single "black console" style. However, note that GitHub Markdown doesn't have a "black console" theme. We can use code blocks and a minimalistic approach to simulate a console-like appearance.
But note: The user wants everything in one black console. Since GitHub Markdown doesn't support background coloring, we can only use code blocks to simulate a console.
However, the user also provided screenshots and a structure that is more than just code. We'll try to balance by using:
- Code blocks for installation and command-line instructions
- Inline code for commands and file paths
- Minimal section headers
Alternatively, we can write the entire README in a code block with a markdown-like format, but then it won't render as Markdown.
Given the constraints, I'll write the README in Markdown but use a lot of code blocks and minimize the use of headers and images. But note: the user provided screenshots, which are important. We can include them as links.
But the user said: "just give me readme file or all in black screen only". So perhaps they want a plain text version? However, they also included images and structure.
Let's interpret: They want a minimalistic, console-oriented README without too much formatting. We can do:
- Use backticks for code blocks for installation steps
- Use bold for section headers instead of markdown headers
- Use links for images (but not embedded) so that they are just URLs
But the user also said: "bor my project was very small like it don't have docker or ec2 simple normal project so don't highligh more"
So we will simplify the previous README to be minimal.
Here's a minimal version in Markdown that uses code blocks and plain text as much as possible:
MERN Timetable Management System
console
███████╗███╗   ███╗██████╗ ███╗   ██╗    ████████╗██╗███╗   ███╗███████╗████████╗ █████╗ ██████╗ ██╗     ███████╗
██╔════╝████╗ ████║██╔══██╗████╗  ██║    ╚══██╔══╝██║████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║     ██╔════╝
█████╗  ██╔████╔██║██████╔╝██╔██╗ ██║       ██║   ██║██╔████╔██║█████╗     ██║   ███████║██████╔╝██║     █████╗  
██╔══╝  ██║╚██╔╝██║██╔══██╗██║╚██╗██║       ██║   ██║██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██╔══██╗██║     ██╔══╝  
███████╗██║ ╚═╝ ██║██║  ██║██║ ╚████║       ██║   ██║██║ ╚═╝ ██║███████╗   ██║   ██║  ██║██████╔╝███████╗███████╗
╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝
                                                                                                                 
A lightweight timetable management application built with the MERN stack (MongoDB, Express, React, Node.js).
Allows students to register and view their class schedules in a simple, user-friendly interface.

✨ KEY FEATURES
console
- Student Registration: Secure registration with ID validation
- Section Selection: Easy navigation between class sections
- Timetable Visualization: Clean display of daily/weekly schedules
- Responsive Design: Works on desktop and mobile devices
- Simple Interface: Intuitive navigation and minimal learning curve
🚀 TECHNOLOGIES USED
console
FRONTEND:
- React (JavaScript)
- React Router
- CSS
- Axios

BACKEND:
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT
📸 APPLICATION SCREENSHOTS
console
1. Student Registration: https://github.com/user-attachments/assets/8aba3300-8612-4447-9fff-7b9540838dcd
2. Section Selection: https://github.com/user-attachments/assets/c248797c-9182-4d23-8e71-c9fd24da8454
3. Timetable Display: https://github.com/user-attachments/assets/3b588ee2-2761-46eb-ad3c-6d42d2b9d995
4. Daily Schedule: https://github.com/user-attachments/assets/b1485c6d-fcf6-4b3e-9a9d-c43a77581876
5. Mobile View: https://github.com/user-attachments/assets/823db975-2049-4ff6-8062-d75482aeb07e
6. Weekly Overview: https://github.com/user-attachments/assets/9e244c20-354d-45e6-8ee7-043e994e444c
7. Notifications: https://github.com/user-attachments/assets/2a64c29f-a7e7-42b3-9f57-96268e26f58b
📂 PROJECT STRUCTURE
console
merntimetable/
├── client/               # Frontend React app
│   ├── src/              
│   │   ├── components/   # UI components
│   │   ├── pages/        # App screens
│   │   ├── services/     # API services
│   │   ├── utils/        # Helper functions
│   │   ├── App.js        # Main router
│   │   └── index.js      # Entry point
│   └── package.json      
│
├── server/               # Backend Express app
│   ├── config/           # DB config
│   ├── models/           # MongoDB models
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth middleware
│   ├── .env.example      # Env template
│   └── server.js         # Server entry
│
└── README.md             # Documentation
🛠️ INSTALLATION
PREREQUISITES
console
- Node.js v16+
- MongoDB
- Git
SETUP INSTRUCTIONS
bash
# Clone repository
git clone https://github.com/your-username/merntimetable.git
cd merntimetable

# Set up backend
cd server
npm install
cp .env.example .env  # Update with your MongoDB URI and JWT secret

# Set up frontend
cd ../client
npm install

# Start MongoDB (run in separate terminal)
mongod

# Run backend (from server directory)
npm start

# Run frontend (from client directory)
npm start

# Access application at http://localhost:3000
🔐 REGISTRATION PROCESS
console
1. Enter cluster number
2. Enter student ID (e.g., 2200032102)
3. Select section (e.g., sec-22)
4. View personalized timetable
🌐 API ENDPOINTS
console
POST   /api/auth/register  Register new student
POST   /api/auth/login     Authenticate student
GET    /api/timetable      Get timetable for section
GET    /api/sections       Get available sections
🤝 CONTRIBUTING
bash
# Create new branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "Add your feature"

# Push to branch
git push origin feature/your-feature

# Open pull request
📄 LICENSE
console
MIT License - See LICENSE file for details
📬 CONTACT
console
YOUR-EMAIL@EXAMPLE.COM
console
██████
New chat
