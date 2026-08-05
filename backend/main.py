import os
import smtplib
from email.message import EmailMessage

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv


# Load values from .env
load_dotenv()


app = FastAPI()


# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# HOME ROUTE
# -----------------------------
@app.get("/")
def home():
    return {
        "message": "Portfolio backend is running"
    }


# -----------------------------
# CONTACT MODEL
# -----------------------------
class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str


# -----------------------------
# CONTACT ROUTE
# -----------------------------
@app.post("/contact")
def contact_form(data: ContactMessage):

    sender_email = os.getenv("EMAIL_ADDRESS")
    app_password = os.getenv("EMAIL_APP_PASSWORD")

    if not sender_email or not app_password:
        raise HTTPException(
            status_code=500,
            detail="Email configuration is missing"
        )

    email = EmailMessage()

    email["From"] = f"{data.name} via Portfolio Contact<{sender_email}>"
    email["To"] = sender_email
    email["Subject"] = f"Portfolio Contact: {data.subject}"

    # This lets you directly press Reply in Gmail
    # and reply to the visitor.
    email["Reply-To"] = data.email

    email.set_content(
        f"""
New message from your portfolio website

Name: {data.name}
Email: {data.email}
Subject: {data.subject}

Message:
{data.message}
"""
    )

    try:

        with smtplib.SMTP_SSL(
            "smtp.gmail.com",
            465
        ) as smtp:

            smtp.login(
                sender_email,
                app_password
            )

            smtp.send_message(email)

        return {
            "status": "success",
            "message": "Message sent successfully"
        }

    except Exception as error:

        print("Email error:", error)

        raise HTTPException(
            status_code=500,
            detail="Unable to send email"
        )


# -----------------------------
# PROFILE ROUTE
# -----------------------------
@app.get("/api/profile")
def get_profile():

    return {
        "name": "Shaikh Arsalan",
        "roles": [
            "Full Stack Web Developer",
            "Data Engineer"
        ],
        "location": "Maharashtra, India"
    }


# -----------------------------
# SKILLS ROUTE
# -----------------------------
@app.get("/api/skills")
def get_skills():

    return {
        "skills": [

            {
                "name": "HTML",
                "category": "Frontend"
            },

            {
                "name": "CSS",
                "category": "Frontend"
            },

            {
                "name": "React",
                "category": "Frontend"
            },

            {
                "name": "TypeScript",
                "category": "Frontend"
            },

            {
                "name": "Python",
                "category": "Backend"
            },

            {
                "name": "FastAPI",
                "category": "Backend"
            },

            {
                "name": "SQL",
                "category": "Database"
            },

            {
                "name": "PostgreSQL",
                "category": "Database"
            },

            {
                "name": "Git",
                "category": "Tools"
            },

            {
                "name": "GitHub",
                "category": "Tools"
            },

            {
                "name": "Apache Spark",
                "category": "Data Engineering"
            },

            {
                "name": "Azure",
                "category": "Cloud"
            },

        ]
    }


# -----------------------------
# PROJECTS ROUTE
# -----------------------------
@app.get("/api/projects")
def get_projects():

    return {
        "projects": [

            {
                "id": 1,
                "title": "CryptoTradeX",
                "description":
                    "A real-time cryptocurrency platform featuring live coin prices, interactive charts, authentication, dashboard features, and currency conversion.",
                "technologies": [
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "WebSocket",
                ],
            },

            {
                "id": 2,
                "title": "Vehicle Health Monitoring",
                "description":
                    "A vehicle monitoring and analytics system designed to collect vehicle data, detect faults, analyze performance, and visualize useful insights.",
                "technologies": [
                    "Python",
                    "OBD-II",
                    "SQL",
                    "Power BI",
                    "Data Analytics",
                ],
            },

            {
                "id": 3,
                "title": "TechStore",
                "description":
                    "A modern e-commerce frontend with product browsing, categories, search functionality, reusable React components, and responsive design.",
                "technologies": [
                    "React",
                    "TypeScript",
                    "CSS",
                ],
            },

            {
                "id": 4,
                "title": "Car Showroom Management System",
                "description":
                    "A full-stack car showroom management website with vehicle browsing, user interactions, registration features, and database integration.",
                "technologies": [
                    "HTML",
                    "JavaScript",
                    "CSS",
                    "PHP",
                    "MySQL",
                ],
                "github":
                    "https://github.com/Arsalan-Dev-Cloud/car-showroom-management-system",
            },

            {
                "id": 5,
                "title": "Furniture Showroom Management System",
                "description":
                    "A furniture showroom management website with product browsing, showroom features, user interactions, and database integration.",
                "technologies": [
                    "HTML",
                    "JavaScript",
                    "CSS",
                    "PHP",
                    "MySQL",
                ],
                "github":
                    "https://github.com/Arsalan-Dev-Cloud/furniture-showroom-management-system",
            },

        ]
    }