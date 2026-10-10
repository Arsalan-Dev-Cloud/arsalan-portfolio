# 🚀 Shaikh Arsalan — Personal Portfolio

A modern, responsive, full-stack personal portfolio built using **React, TypeScript, Vite, Python, and FastAPI**.

The portfolio showcases my technical skills, projects, education, experience, resume, and contact information. It includes a FastAPI backend, REST API integration, and a contact form that sends messages through the Resend email API.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Live Website](#-live-website)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Project Folder Structure](#-project-folder-structure)
- [Frontend Setup](#-frontend-setup)
- [Backend Setup](#-backend-setup)
- [Environment Variables](#-environment-variables)
- [Frontend Commands](#-frontend-commands)
- [Backend Commands](#-backend-commands)
- [API Endpoints](#-api-endpoints)
- [Contact Form Workflow](#-contact-form-workflow)
- [Uptime Monitoring](#-uptime-monitoring)
- [Git and GitHub Commands](#-git-and-github-commands)
- [Build for Production](#-build-for-production)
- [Deployment](#-deployment)
- [Security](#-security)
- [Troubleshooting](#-troubleshooting)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 👨‍💻 About the Project

This is my personal developer portfolio, created to showcase my work, technical skills, education, experience, and software development projects.

The frontend is developed using:

- React
- TypeScript
- Vite
- CSS
- React Router DOM

The backend is developed using:

- Python
- FastAPI
- Pydantic
- Uvicorn
- Python Dotenv
- Resend API

The frontend communicates with the FastAPI backend through REST API requests.

The backend provides profile, skills, and projects data and processes contact-form submissions.

## 🌐 Live Website

| Service | URL |
|---|---|
| Live Portfolio | https://arsalan-portfolio-mbqy.onrender.com/home |
| GitHub Repository | https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio |

**Hosting:** Render

> Note: The backend runs on Render's free tier. After inactivity, the service may spin down, so the first request can take longer while it starts again.

---

## ✨ Features

The portfolio includes:

- Responsive modern UI
- Desktop and mobile compatibility
- React component architecture
- TypeScript support
- React Router page navigation
- Light and dark theme support
- Theme switcher
- Home page
- About page
- Skills page
- Projects page
- Experience page
- Education page
- Contact page
- 404 Not Found page
- Scroll-to-top functionality
- Scroll-reveal animations
- Reusable React components
- Resume download
- GitHub integration
- LinkedIn integration
- FastAPI backend
- REST API communication
- Skills and projects loaded from the backend
- Contact-form validation
- Email-format validation
- Contact-form submission
- Resend API email delivery
- Reply-to support for contact messages
- Environment-based configuration
- Health-check endpoint
- UptimeRobot availability monitoring
- Git and GitHub version control
- Production build support
- Deployment through Render

---

## 🛠 Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| TypeScript | Type-safe application development |
| Vite | Development server and build tool |
| CSS | Styling and responsive design |
| React Router DOM | Client-side navigation |

### Backend

| Technology | Purpose |
|---|---|
| Python | Backend programming language |
| FastAPI | Backend web framework |
| Pydantic | Request data validation |
| Uvicorn | ASGI server |
| Python Dotenv | Local environment-variable loading |
| Resend API | Email delivery over HTTPS |

### Development Tools

| Tool | Purpose |
|---|---|
| Visual Studio Code | Code editor |
| Git | Version control |
| GitHub | Source-code hosting |
| Node.js | JavaScript runtime |
| npm | JavaScript package manager |
| Python | Backend runtime |
| pip | Python package manager |
| PowerShell | Terminal |
| Render | Frontend and backend hosting |
| UptimeRobot | Availability monitoring |

---

## 🏗 Project Architecture

The application follows this general architecture:

```text
                         Visitor
                            |
                            v
                React + TypeScript Frontend
                     (Render Hosting)
                            |
                       HTTPS Requests
                            |
                            v
                    Python FastAPI
                    (Render Hosting)
                       /        \
                      /          \
                     v            v
             Profile, Skills,   Resend API
                Projects            |
                                    v
                                Email Inbox
```

The frontend and backend are deployed as separate services. The frontend uses the configured API base URL to communicate with the backend.

---

## 📁 Project Folder Structure

```text
arsalan-portfolio/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   └── venv/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── title1.png
│   └── resume/
│       └── Shaikh-Arsalan-Resume.pdf
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EducationCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SkillCard.tsx
│   │   └── ThemeSwitcher.tsx
│   │
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── useTheme.ts
│   │
│   ├── data/
│   │   ├── education.ts
│   │   └── experience.ts
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   │
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .env
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

The structure above represents the main project files. Some assets and configuration files may vary as development continues.

Files such as `.env`, `backend/.env`, virtual environments, `node_modules`, and production build output should not be committed to Git.

---

## ⚛️ Frontend Setup

### 1. Prerequisites

Install:

- [Node.js](https://nodejs.org/)
- npm, included with Node.js
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

Verify the installations:

```bash
node --version
npm --version
git --version
```

### 2. Clone the Repository

```bash
git clone https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio.git
```

Move into the project directory:

```bash
cd arsalan-portfolio
```

### 3. Install Frontend Dependencies

```bash
npm install
```

This installs the packages defined in `package.json` and uses `package-lock.json` to maintain dependency versions.

### 4. Configure the Frontend

Create or update the root `.env` file:

```env
VITE_API_URL=http://127.0.0.1:8000
```

This URL points to the local FastAPI backend.

The frontend reads the value using:

```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

For example:

```typescript
fetch(`${API_URL}/api/projects`);
```

Never put passwords or private API keys in variables prefixed with `VITE_`. These variables are included in the client-side application.

### 5. Start the Development Server

```bash
npm run dev
```

Vite normally serves the application at:

```text
http://localhost:5173
```

---

## 🐍 Backend Setup

The backend is located in the `backend/` directory.

### 1. Check Python

```bash
python --version
```

### 2. Move into the Backend Directory

```powershell
cd backend
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

This creates an isolated Python environment in `backend/venv/`.

### 4. Activate the Virtual Environment

Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Windows Command Prompt:

```cmd
venv\Scripts\activate
```

When activated, the terminal may display `(venv)` before the current path.

### 5. Install Backend Dependencies

```bash
python -m pip install -r requirements.txt
```

This installs the packages listed in the backend requirements file.

To inspect installed packages:

```bash
python -m pip list
```

To inspect a specific package:

```bash
python -m pip show fastapi
```

### 6. Start FastAPI

From the `backend/` directory:

```bash
python -m uvicorn main:app --reload
```

The local backend should be available at:

- API root: http://127.0.0.1:8000
- Swagger documentation: http://127.0.0.1:8000/docs
- ReDoc documentation: http://127.0.0.1:8000/redoc
- Health check: http://127.0.0.1:8000/health

### 7. Update Requirements

After deliberately adding or updating Python packages:

```bash
python -m pip freeze > requirements.txt
```

Review the changes before committing them.

### 8. Deactivate the Virtual Environment

```bash
deactivate
```

---

## 🔐 Environment Variables

This project uses separate configuration for the frontend and backend.

### Frontend `.env`

Location:

```text
arsalan-portfolio/.env
```

For local development:

```env
VITE_API_URL=http://127.0.0.1:8000
```

For production, the frontend's environment variable is configured in Render:

```env
VITE_API_URL=https://arsalan-portfolio-api.onrender.com
```

After changing a Vite environment variable, rebuild or redeploy the frontend for the change to take effect.

### Backend `.env`

Location:

```text
arsalan-portfolio/backend/.env
```

Local development example:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_ADDRESS=your_recipient_email@example.com
```

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Secret API key used to authenticate with Resend |
| `EMAIL_ADDRESS` | Recipient inbox for contact-form messages |

Replace the example values with your own configuration.

For production, add these variables in the Render backend service's **Environment** settings.

**Important:** The backend uses Resend over HTTPS, not Gmail SMTP. An `EMAIL_APP_PASSWORD` is not required by the current configuration.

Never commit `.env` files or publish your Resend API key.

---

## 📦 Frontend Commands

Run these commands from the project root.

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

This command is available if the `lint` script is configured in `package.json`.

### View installed packages

```bash
npm list
```

View top-level dependencies:

```bash
npm list --depth=0
```

### Check outdated packages

```bash
npm outdated
```

### Check dependency security advisories

```bash
npm audit
```

You can review compatible fixes with:

```bash
npm audit fix
```

Avoid `npm audit fix --force` unless you have reviewed the potentially breaking changes.

### Install or remove a package

```bash
npm install package-name
```

```bash
npm uninstall package-name
```

---

## 🐍 Backend Commands

Run these commands from the `backend/` directory.

### Create a virtual environment

```bash
python -m venv venv
```

### Activate it in PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

### Upgrade pip

```bash
python -m pip install --upgrade pip
```

### Install dependencies

```bash
python -m pip install -r requirements.txt
```

### View installed packages

```bash
python -m pip list
```

### Start the backend locally

```bash
python -m uvicorn main:app --reload
```

### Generate the requirements file

```bash
python -m pip freeze > requirements.txt
```

---

## 🔌 API Endpoints

The FastAPI backend currently provides the following endpoints.

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/` | Backend status |
| `GET` | `/health` | Health check for availability monitoring |
| `HEAD` | `/health` | Health check for monitors that use HEAD, if enabled in the backend |
| `GET` | `/api/profile` | Returns profile information |
| `GET` | `/api/skills` | Returns technical skills |
| `GET` | `/api/projects` | Returns project information |
| `POST` | `/contact` | Validates and processes a contact-form message |

Interactive API documentation:

https://arsalan-portfolio-api.onrender.com/docs

### Health Check

URL:

https://arsalan-portfolio-api.onrender.com/health

Expected response:

```json
{
  "status": "ok"
}
```

This endpoint helps uptime-monitoring services check whether the backend is responding.

---

## 📧 Contact Form Workflow

The contact form uses the following workflow:

```text
Visitor
   |
   v
React Contact Page
   |
   | POST /contact
   v
FastAPI Backend
   |
   v
Request Validation
   |
   | HTTPS API request
   v
Resend Email API
   |
   v
Configured Recipient Inbox
```

The form collects information such as:

- Visitor name
- Visitor email
- Subject
- Message

The backend validates the request and sends the email through Resend. Where configured, the visitor's email is used as the reply-to address.

### Email Configuration

The backend uses these environment variables:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_ADDRESS=your_recipient_email@example.com
```

- `RESEND_API_KEY` authenticates the backend's requests to Resend.
- `EMAIL_ADDRESS` identifies the recipient inbox.
- The sender address is configured in the backend.

Resend may require a verified sending domain for production email delivery. Review the sender and recipient restrictions in your Resend account.

Do not expose your API key in frontend code, GitHub, screenshots, or logs.

---

## ⏱ Uptime Monitoring

UptimeRobot monitors the backend health endpoint:

```text
https://arsalan-portfolio-api.onrender.com/health
```

Current monitoring configuration:

- **Monitor type:** HTTP(s)
- **Check interval:** 5 minutes
- **Purpose:** Check backend availability and send notifications according to the monitor's settings

Periodic requests may help reduce the impact of cold starts, but monitoring does not guarantee that a Render free-tier service will remain awake continuously. Render may still restart or suspend the service.

If the monitor reports `405 Method Not Allowed`, check whether it is sending `HEAD` requests and ensure the FastAPI health endpoint supports the required methods.

---

## 🔀 Git and GitHub Commands

### Check repository status

```bash
git status
```

### Stage the README

```bash
git add README.md
```

### Stage all changes

```bash
git add .
```

Before staging everything, confirm that no secrets or environment files are included.

### Commit changes

```bash
git commit -m "Update portfolio documentation"
```

### Push changes to GitHub

```bash
git push origin main
```

### View commit history

```bash
git log --oneline
```

### Check configured remote

```bash
git remote -v
```

### Pull latest changes

```bash
git pull origin main
```

Repository:

https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio

---

## 🚀 Build for Production

Before deployment, build the frontend:

```bash
npm run build
```

Vite generates the production assets in `dist/`.

Preview the production build locally:

```bash
npm run preview
```

Resolve build errors before deploying changes.

---

## 🌍 Deployment on Render

The frontend and backend are hosted as separate Render services.

### Frontend Deployment

Live URL:

https://arsalan-portfolio-mbqy.onrender.com/home

Typical build command:

```bash
npm install && npm run build
```

Publish directory:

```text
dist
```

Production environment variable:

```env
VITE_API_URL=https://arsalan-portfolio-api.onrender.com
```

If React Router is used for client-side routing, configure a Render rewrite so application routes resolve to `/index.html`.

### Backend Deployment

Live URL:

https://arsalan-portfolio-api.onrender.com

If the Render backend service's root directory is set to `backend`, a typical build command is:

```bash
pip install -r requirements.txt
```

A typical start command is:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

Configure these backend environment variables in Render:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_ADDRESS=your_recipient_email@example.com
```

Make sure the backend's CORS configuration permits requests from the deployed frontend origin.

The exact build and start commands depend on the root directory configured for the Render service.

### Automatic Deployment

If Render is connected to the GitHub repository with automatic deployment enabled, pushing changes to the configured branch can trigger a deployment.

After deployment, check the service logs and verify the live website and API endpoints.

---

## 🔄 Updating the Portfolio

After making changes locally, test the application and review the files to be committed.

```bash
git status
git add .
git commit -m "Describe your changes"
git push origin main
```

If automatic deployment is enabled, Render can deploy the latest changes from GitHub.

Always check that `.env` files, credentials, virtual environments, and generated files are excluded before pushing.

---

## 🛡 Security

Important security practices:

- Never commit `.env` files, API keys, passwords, or credentials.
- Store `RESEND_API_KEY` only in the backend environment.
- Never expose private keys through `VITE_` environment variables.
- Validate contact-form input on the backend.
- Restrict CORS to the intended frontend origins.
- Consider adding rate limiting and spam protection to the contact endpoint.
- Keep dependencies updated and review security advisories.
- Rotate any credential that has accidentally been exposed.

### Verify ignored files

Check the frontend environment file:

```bash
git check-ignore -v .env
```

Check the backend environment file:

```bash
git check-ignore -v backend/.env
```

Check the backend virtual environment:

```bash
git check-ignore -v backend/venv/
```

Deleting a secret from a later commit does not remove it from earlier Git history. If a credential is exposed, revoke or rotate it.

---

## ⚠️ Troubleshooting

### Frontend Cannot Connect to Backend

Check that the backend is running and the frontend uses the correct API URL.

Local development:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Production:

```env
VITE_API_URL=https://arsalan-portfolio-api.onrender.com
```

Check the browser console, Network panel, CORS settings, and backend logs.

### Skills or Projects Load Slowly

The frontend fetches data from the FastAPI backend. If the backend has spun down after inactivity, the first request may take longer while the service starts.

Check the health endpoint and the Render backend logs.

### Contact Form Fails

1. Confirm `RESEND_API_KEY` is configured in the Render backend environment.
2. Confirm `EMAIL_ADDRESS` contains the intended recipient inbox.
3. Review backend logs for Resend API errors.
4. Check the sender address and domain-verification requirements in Resend.
5. Confirm the frontend is submitting the expected fields to `POST /contact`.

Do not share your private API key when requesting help.

### UptimeRobot Reports a Failed Health Check

1. Open the health URL directly.
2. Check the HTTP response status.
3. Review the Render backend logs.
4. If the monitor sends `HEAD`, ensure the health endpoint supports it.
5. Confirm the latest backend deployment completed successfully.

### `node_modules` Is Missing

Run from the project root:

```bash
npm install
```

### Backend Packages Are Missing

Activate the virtual environment and run:

```bash
python -m pip install -r requirements.txt
```

### CORS Error

Ensure the backend CORS configuration includes the deployed frontend origin, along with the required local development origins.

### `fatal: not a git repository`

Run Git commands from the project root and verify the current directory:

```powershell
Get-Location
```

---

## 🔮 Future Improvements

Potential future improvements include:

- Custom domain
- Improved SEO and social previews
- More portfolio projects and screenshots
- Detailed project pages
- Certificates and achievements
- Blog or technical writing section
- Admin dashboard
- Database integration
- Dynamic education and experience management
- Contact-form rate limiting and CAPTCHA
- Analytics
- Accessibility improvements
- Performance optimization
- Automated testing
- Docker support

---

## 📄 Resume

The resume is stored at:

```text
public/resume/Shaikh-Arsalan-Resume.pdf
```

It can be accessed through the portfolio website.

---

## 🔗 Social Links

- **GitHub:** https://github.com/Arsalan-Dev-Cloud
- **LinkedIn:** https://www.linkedin.com/in/shaikh-arsalan-92b00941a

---

## 👨‍💻 Author

**Shaikh Arsalan**

Full Stack Web Developer · Aspiring Data Engineer

**Location:** Maharashtra, India

---

## 💻 Main Technologies

```text
React
TypeScript
Vite
CSS
Python
FastAPI
Pydantic
REST API
Resend API
Git
GitHub
SQL
PostgreSQL
Apache Spark
Azure
```

---

## ⭐ Repository

Explore the source code:

https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio

Built with ❤️ using React, TypeScript, Python, and FastAPI.
