# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
'''--------------------------------------------------------------------------------------------------------------'''

# 🚀 Shaikh Arsalan — Personal Portfolio

A modern, responsive, full-stack personal portfolio website built using **React, TypeScript, Vite, Python, and FastAPI**.

The portfolio showcases my skills, projects, education, experience, and contact information. It also includes a working backend API and a contact form that sends messages directly to my email using Gmail SMTP.

---

# 📌 Table of Contents

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
- [Git and GitHub Commands](#-git-and-github-commands)
- [API Endpoints](#-api-endpoints)
- [Contact Form Workflow](#-contact-form-workflow)
- [Build for Production](#-build-for-production)
- [Updating the Portfolio](#-updating-the-portfolio)
- [Security](#-security)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

# 👨‍💻 About the Project

This is my personal developer portfolio created to showcase my work, technical skills, education, experience, and software development projects.

The frontend is developed using:

- React
- TypeScript
- Vite
- CSS
- React Router

The backend is developed using:

- Python
- FastAPI
- Pydantic
- Python Dotenv
- Gmail SMTP

The frontend communicates with the FastAPI backend through REST API requests.

The backend currently provides:

- Skills data
- Projects data
- Profile information
- Contact form email delivery

---

# 🌐 Live Website

The portfolio will be deployed after final deployment configuration is completed.

```text
Live Website:
Coming Soon
```

Backend API:

```text
Coming Soon
```

---

# ✨ Features

The portfolio currently includes:

- Responsive modern UI
- Desktop and mobile compatibility
- React-based component architecture
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
- Scroll reveal animations
- Reusable React components
- Resume download
- GitHub integration
- LinkedIn integration
- FastAPI backend
- REST API communication
- Skills loaded from FastAPI
- Projects loaded from FastAPI
- Contact form validation
- Email validation
- Contact form submission
- Gmail SMTP integration
- Direct reply support using `Reply-To`
- Environment variable configuration
- Secure Gmail App Password usage
- Git/GitHub version control
- Production build support

---

# 🛠 Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| TypeScript | Type-safe JavaScript |
| Vite | Development server and build tool |
| CSS | Styling and responsive design |
| React Router DOM | Client-side routing |

---

## Backend

| Technology | Purpose |
|---|---|
| Python | Backend programming language |
| FastAPI | Backend web framework |
| Pydantic | Request data validation |
| Uvicorn | ASGI server |
| Python Dotenv | Environment variable loading |
| SMTP | Email delivery |
| Gmail | Contact message destination |

---

## Development Tools

| Tool | Purpose |
|---|---|
| VS Code | Code editor |
| Git | Version control |
| GitHub | Source code hosting |
| npm | JavaScript package manager |
| pip | Python package manager |
| PowerShell | Terminal |
| Node.js | JavaScript runtime |
| Python Virtual Environment | Backend dependency isolation |

---

# 🏗 Project Architecture

The application follows this general architecture:

```text
                        Visitor
                           │
                           ▼
                React + TypeScript
                       Frontend
                           │
                    REST API Calls
                           │
                           ▼
                    Python FastAPI
                       Backend
                     /          \
                    /            \
                   ▼              ▼
            Skills/Projects    Gmail SMTP
                                  │
                                  ▼
                              Email Inbox
```

---

# 📁 Project Folder Structure

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
│   │
│   └── resume/
│       └── Shaikh-Arsalan-Resume.pdf
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
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
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

> `.env`, `backend/.env`, `node_modules`, `dist`, and `backend/venv` are excluded from GitHub using `.gitignore`.

---

# ⚛️ Frontend Setup

## 1. Install Node.js

Node.js must be installed before running the React application.

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

---

## 2. Clone the Repository

```bash
git clone https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio.git
```

Move into the project:

```bash
cd arsalan-portfolio
```

# ⚡ Creating the React + TypeScript Project with Vite

This portfolio frontend was created using Vite.

To create a new React + TypeScript project with Vite, run:

```bash
npm create vite@latest
or
npm create vite@latest arsalan-portfolio -- --template react-ts

---

## 3. Install Frontend Dependencies

```bash
npm install
```

This command reads:

```text
package.json
```

and downloads all required packages into:

```text
node_modules/
```

---

## 4. Start the Development Server

```bash
npm run dev
```

Vite will normally start the frontend at:

```text
http://localhost:5173
```

or:

```text
http://127.0.0.1:5173
```

---

# 🐍 Backend Setup

The backend is located inside:

```text
backend/
```

Move into the backend folder:

```bash
cd backend
```

---

## 1. Check Python

```bash
python --version
```

---

## 2. Create a Python Virtual Environment

```bash
python -m venv venv
```

This creates:

```text
backend/venv/
```

The virtual environment keeps backend packages separate from global Python packages.

---

## 3. Activate Virtual Environment

### Windows PowerShell

```powershell
venv\Scripts\Activate.ps1
```

### Windows Command Prompt

```cmd
venv\Scripts\activate
```

After activation, the terminal may look like:

```text
(venv) PS E:\arsalan-portfolio\backend>
```

---

## 4. Deactivate Virtual Environment

When finished:

```bash
deactivate
```

---

## 5. Install Backend Packages

Install FastAPI:

```bash
python -m pip install fastapi
```

Install Uvicorn:

```bash
python -m pip install uvicorn
```

Install Python Dotenv:

```bash
python -m pip install python-dotenv
```

Install all required backend dependencies from the existing requirements file:

```bash
python -m pip install -r requirements.txt
```

---

## 6. Check Installed Packages

```bash
python -m pip list
```

---

## 7. Check a Specific Package

Example:

```bash
python -m pip show fastapi
```

For Python Dotenv:

```bash
python -m pip show python-dotenv
```

For Uvicorn:

```bash
python -m pip show uvicorn
```

---

## 8. Generate `requirements.txt`

After installing or updating backend dependencies:

```bash
python -m pip freeze > requirements.txt
```

The current backend requirements include packages such as:

```text
annotated-doc
annotated-types
anyio
click
colorama
fastapi
h11
idna
pydantic
pydantic_core
python-dotenv
starlette
typing-inspection
typing_extensions
uvicorn
```

---

## 9. Start FastAPI Backend

From inside:

```text
backend/
```

run:

```bash
python -m uvicorn main:app --reload
```

FastAPI normally starts at:

```text
http://127.0.0.1:8000
```

---

## 10. FastAPI Swagger Documentation

FastAPI automatically provides interactive API documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

Alternative documentation:

```text
http://127.0.0.1:8000/redoc
```

---

# 🔐 Environment Variables

This project uses two different `.env` files.

---

## Frontend `.env`

Location:

```text
arsalan-portfolio/.env
```

Development configuration:

```env
VITE_API_URL=http://127.0.0.1:8000
```

React reads the variable using:

```ts
const API_URL = import.meta.env.VITE_API_URL
```

Example API request:

```ts
fetch(`${API_URL}/api/projects`)
```

---

## Backend `.env`

Location:

```text
arsalan-portfolio/backend/.env
```

Example:

```env
EMAIL_ADDRESS=your_email@gmail.com
EMAIL_APP_PASSWORD=your_google_app_password
```

The real values must never be uploaded to GitHub.

---

# 📦 Frontend Commands

## Install dependencies

```bash
npm install
```

---

## Start development server

```bash
npm run dev
```

---

## Build production version

```bash
npm run build
```

The production files are generated inside:

```text
dist/
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Run ESLint

Depending on the scripts available in `package.json`:

```bash
npm run lint
```

---

## Install React Router

React Router is used for navigation between portfolio pages.

```bash
npm install react-router-dom
```

---

## Install a New npm Package

General syntax:

```bash
npm install package-name
```

Example:

```bash
npm install react-router-dom
```

---

## Install Development Dependency

```bash
npm install --save-dev package-name
```

Example:

```bash
npm install --save-dev typescript
```

---

## Remove an npm Package

```bash
npm uninstall package-name
```

Example:

```bash
npm uninstall react-router-dom
```

---

## View Installed npm Packages

```bash
npm list
```

---

## View Top-Level npm Packages

```bash
npm list --depth=0
```

---

## Check Outdated Packages

```bash
npm outdated
```

---

## Check npm Security Issues

```bash
npm audit
```

---

## Automatically Fix Compatible Security Issues

```bash
npm audit fix
```

Avoid using:

```bash
npm audit fix --force
```

unless you understand the breaking dependency changes it may introduce.

---

## Check Vite Version

```bash
npm list vite
```

---

## Check React Version

```bash
npm list react
```

---

# 🐍 Backend Commands

## Move into backend

```bash
cd backend
```

---

## Create virtual environment

```bash
python -m venv venv
```

---

## Activate virtual environment

```powershell
venv\Scripts\Activate.ps1
```

---

## Upgrade pip

```bash
python -m pip install --upgrade pip
```

---

## Install FastAPI

```bash
python -m pip install fastapi
```

---

## Install Uvicorn

```bash
python -m pip install uvicorn
```

---

## Install Dotenv

```bash
python -m pip install python-dotenv
```

---

## Install dependencies from requirements

```bash
python -m pip install -r requirements.txt
```

---

## Generate requirements

```bash
python -m pip freeze > requirements.txt
```

---

## List Python packages

```bash
python -m pip list
```

---

## Start FastAPI

```bash
python -m uvicorn main:app --reload
```

---

## Start FastAPI Using Host and Port

```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

---

# 🔌 API Endpoints

The FastAPI backend currently provides the following endpoints.

---

## Backend Status

```http
GET /
```

Example response:

```json
{
  "message": "Portfolio backend is running"
}
```

---

## Profile

```http
GET /api/profile
```

Returns profile information.

---

## Skills

```http
GET /api/skills
```

Returns technical skills used by the React Skills page.

---

## Projects

```http
GET /api/projects
```

Returns portfolio project information.

---

## Contact

```http
POST /contact
```

Expected JSON request:

```json
{
  "name": "Example User",
  "email": "example@gmail.com",
  "subject": "Portfolio Contact",
  "message": "Hello, I would like to contact you."
}
```

---

# 📧 Contact Form Workflow

The contact system works like this:

```text
Visitor
   │
   ▼
Contact.tsx
   │
   │ POST /contact
   ▼
FastAPI
   │
   ▼
Pydantic Validation
   │
   ▼
Gmail SMTP
   │
   ▼
Portfolio Owner's Gmail Inbox
```

The backend authenticates using:

```env
EMAIL_ADDRESS
EMAIL_APP_PASSWORD
```

The message includes:

- Visitor name
- Visitor email
- Subject
- Message

The backend also uses:

```python
email["Reply-To"] = data.email
```

This allows the portfolio owner to click **Reply** in Gmail and reply directly to the visitor.

---

# 🔑 Gmail App Password

The backend does **not** use the normal Gmail password.

A Google-generated App Password is used instead.

The `.env` format is:

```env
EMAIL_ADDRESS=your_email@gmail.com
EMAIL_APP_PASSWORD=your_google_generated_app_password
```

Never share or upload the real App Password.

---

# 🛡 Security

Sensitive files are excluded using `.gitignore`.

Important ignored files include:

```gitignore
.env
.env.*
backend/.env

backend/venv/
venv/
.venv/

node_modules/
dist/
dist-ssr/

__pycache__/
*.py[cod]
```

---

## Verify that `.env` is ignored

Frontend:

```bash
git check-ignore -v .env
```

Backend:

```bash
git check-ignore -v backend/.env
```

Virtual environment:

```bash
git check-ignore -v backend/venv/
```

---

# 🔀 Git and GitHub Commands

## Initialize Git Repository

```bash
git init
```

---

## Check Repository Status

```bash
git status
```

---

## Rename Default Branch to `main`

```bash
git branch -M main
```

---

## Stage All Files

```bash
git add .
```

---

## Stage One File

```bash
git add filename
```

Example:

```bash
git add README.md
```

---

## Remove a File from Staging

```bash
git restore --staged filename
```

---

## Create a Commit

```bash
git commit -m "Your commit message"
```

Example:

```bash
git commit -m "Initial commit - React TypeScript portfolio with FastAPI backend"
```

---

## Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio.git
```

---

## Check Git Remote

```bash
git remote -v
```

---

## Push First Commit

```bash
git push -u origin main
```

---

## Push Future Changes

After the initial setup:

```bash
git add .
```

```bash
git commit -m "Describe your changes"
```

```bash
git push
```

---

## View Commit History

```bash
git log
```

Compact version:

```bash
git log --oneline
```

---

## Check Current Branch

```bash
git branch
```

---

## Pull Latest Changes

```bash
git pull
```

---

## Clone Repository

```bash
git clone https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio.git
```

---

# 🚀 Build for Production

Before deployment, create a production frontend build:

```bash
npm run build
```

Vite creates:

```text
dist/
```

A successful build should show output similar to:

```text
vite building for production...
✓ modules transformed
✓ built successfully
```

Test the production build locally:

```bash
npm run preview
```

---

# 🔄 Updating the Portfolio

The website can continue to be updated after deployment.

For example, after adding a new project:

```bash
git add .
git commit -m "Add new portfolio project"
git push
```

If deployment is connected to GitHub, the hosting platform can automatically redeploy the latest version.

---

# 📚 Adding New Projects

Projects are currently returned from the FastAPI backend.

Example project object:

```python
{
    "id": 6,
    "title": "New Project",
    "description": "Project description",
    "technologies": [
        "React",
        "Python",
        "FastAPI"
    ],
    "github": "https://github.com/username/project"
}
```

After changing the backend:

```bash
git add .
git commit -m "Add new project"
git push
```

---

# 🧠 Adding New Skills

Skills are provided through:

```http
GET /api/skills
```

Example:

```python
{
    "name": "Docker",
    "category": "Tools"
}
```

---

# 🎓 Education and Experience

Education and Experience data are currently stored in the frontend:

```text
src/data/education.ts
src/data/experience.ts
```

These files can be edited whenever new information needs to be added.

---

# 🧪 Local Development Workflow

Normally, two terminals are used during development.

## Terminal 1 — Backend

```bash
cd E:\arsalan-portfolio\backend
```

Activate environment:

```powershell
venv\Scripts\Activate.ps1
```

Start FastAPI:

```bash
python -m uvicorn main:app --reload
```

---

## Terminal 2 — Frontend

```bash
cd E:\arsalan-portfolio
```

Start Vite:

```bash
npm run dev
```

The frontend communicates with:

```text
http://127.0.0.1:8000
```

using:

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

# 🧹 Useful Terminal Commands

## Show Current Folder

PowerShell:

```powershell
Get-Location
```

---

## Move to Project Folder

```powershell
cd E:\arsalan-portfolio
```

---

## Move to Backend

```powershell
cd E:\arsalan-portfolio\backend
```

---

## Go Back One Folder

```powershell
cd ..
```

---

## List Files

PowerShell:

```powershell
Get-ChildItem
```

or:

```powershell
dir
```

---

## Clear Terminal

```powershell
cls
```

---

# ⚠️ Troubleshooting

## Frontend Cannot Connect to Backend

Make sure FastAPI is running:

```bash
python -m uvicorn main:app --reload
```

Check:

```text
http://127.0.0.1:8000
```

---

## Contact Form Gives 500 Error

Check that:

```text
backend/.env
```

contains:

```env
EMAIL_ADDRESS=your_real_email
EMAIL_APP_PASSWORD=your_google_app_password
```

Restart FastAPI after changing `.env`.

---

## Skills or Projects Are Not Loading

Confirm frontend `.env` contains:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Restart Vite:

```bash
npm run dev
```

---

## CORS Error

FastAPI currently allows local Vite development URLs such as:

```python
allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
```

The deployed frontend domain must later be added to the CORS configuration.

---

## `fatal: not a git repository`

Run Git commands from the project root and initialize Git if required:

```bash
git init
```

---

## Check Git Root

```bash
git status
```

---

## `node_modules` Missing

Run:

```bash
npm install
```

---

## Backend Packages Missing

Activate the virtual environment and run:

```bash
python -m pip install -r requirements.txt
```

---

# 🌍 Deployment

The project is designed so the frontend and backend can be deployed to suitable hosting platforms.

The final deployment platform will be selected separately.

During deployment, the frontend environment variable will change from:

```env
VITE_API_URL=http://127.0.0.1:8000
```

to a public backend URL such as:

```env
VITE_API_URL=https://your-backend-domain.example
```

The Gmail credentials must be configured directly through the hosting platform's environment variable settings.

Never upload the production `.env` files.

---

# 🔮 Future Improvements

Possible future improvements include:

- Custom domain
- Improved animations
- More portfolio projects
- Project screenshots
- Project detail pages
- Admin dashboard
- Database integration
- Dynamic education management
- Dynamic experience management
- Blog section
- Certificates section
- Achievement section
- Better backend validation
- Contact spam protection
- Rate limiting
- CAPTCHA
- Analytics
- SEO improvements
- Open Graph metadata
- Better accessibility
- Performance optimization
- Automated deployment
- Cloud hosting
- Docker support

---

# 📄 Resume

The resume is available inside:

```text
public/resume/Shaikh-Arsalan-Resume.pdf
```

and can be accessed/downloaded through the portfolio website.

---

# 🔗 Social Links

## GitHub

https://github.com/Arsalan-Dev-Cloud

## LinkedIn

https://www.linkedin.com/in/shaikh-arsalan-92b00941a

---

# 👨‍💻 Author

**Shaikh Arsalan**

Full Stack Web Developer  
Data Engineer

---

# 📍 Location

Maharashtra, India

---

# 💻 Main Technologies

```text
React
TypeScript
Vite
CSS
Python
FastAPI
Pydantic
REST API
Gmail SMTP
Git
GitHub
SQL
PostgreSQL
Apache Spark
Azure
```

---

# ⭐ Repository

If you find this portfolio useful or interesting, feel free to explore the repository.

```text
https://github.com/Arsalan-Dev-Cloud/arsalan-portfolio
```

---

Built with ❤️ using React, TypeScript, Python, and FastAPI.