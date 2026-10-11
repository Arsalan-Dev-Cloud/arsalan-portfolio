
import os
import json

from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

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
        "https://arsalan-portfolio-mbqy.onrender.com",
        "http://localhost:5173",
        "http://127.0.0.1:5173",

        "http://localhost:4173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/health")
@app.head("/health")
def health_check():
    return {"status": "ok"}




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
    api_key = os.getenv("RESEND_API_KEY")
    recipient_email = os.getenv("EMAIL_ADDRESS")

    if not api_key or not recipient_email:
        raise HTTPException(
            status_code=500,
            detail="Email configuration is missing"
        )

    payload = {
        "from": "Portfolio Contact <onboarding@resend.dev>",
        "to": [recipient_email],
        "subject": f"Portfolio Contact: {data.subject}",
        "reply_to": data.email,
        "text": (
            "New message from your portfolio website\n\n"
            f"Name: {data.name}\n"
            f"Email: {data.email}\n"
            f"Subject: {data.subject}\n\n"
            f"Message:\n{data.message}"
        ),
    }

    request = Request(
        "https://api.resend.com/emails",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "arsalan-portfolio-contact/1.0",
        },
        method="POST",
    )

    try:
        print("Contact form: sending through Resend API...", flush=True)

        with urlopen(request, timeout=20) as response:
            result = json.loads(response.read().decode("utf-8"))

        print(
            f"Contact form: Resend accepted email. ID: {result.get('id')}",
            flush=True,
        )

        return {
            "status": "success",
            "message": "Message sent successfully",
        }

    except HTTPError as error:
        details = error.read().decode("utf-8", errors="replace")
        print(
            f"Resend API error: HTTP {error.code}: {details}",
            flush=True,
        )
        raise HTTPException(
            status_code=502,
            detail="Email provider rejected the request. Check backend logs.",
        )

    except (URLError, TimeoutError, OSError) as error:
        print(f"Resend connection error: {error!r}", flush=True)
        raise HTTPException(
            status_code=502,
            detail="Could not connect to the email provider.",
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
                "title": "Invoice Generator",
                "description":
                    "The application allows users to create professional invoices, generate PDF documents, manage invoice history, securely store generated PDFs in the cloud, and manage their accounts. It also includes a role-based admin system with user, invoice, revenue, and activity monitoring.",
                "technologies": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Flask",
                    "PostgreSQL",
                    "ReportLab",
                    "Cloudinary"
                ],
                "github":
                    "https://github.com/Arsalan-Dev-Cloud/car-showroom-management-system",
                "demo":
                    "https://invoice-generator-96ez.onrender.com/",
            },

            {
                "id": 2,
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
                "id": 3,
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
                "github":
                    "https://github.com/Arsalan-Dev-Cloud/AI-Vehicle-Health-Monitoring",
            },

            {
                "id": 4,
                "title": "TechStore",
                "description":
                    "A modern e-commerce frontend with product browsing, categories, search functionality, reusable React components, and responsive design.",
                "technologies": [
                    "React",
                    "TypeScript",
                    "CSS",
                ],
                "github":
                    "https://github.com/Arsalan-Dev-Cloud/react-techstore",
                "demo":
                    "https://react-techstore.onrender.com/"
            },

            {
                "id": 5,
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
                "id": 6,
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