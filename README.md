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

A modern, responsive personal portfolio website built to showcase my skills, projects, education, experience, and contact information.

The project uses **React + TypeScript + Vite** for the frontend and **Python + FastAPI** for the backend.

The next stage of the project includes **PostgreSQL** database integration and production deployment.

---

# 🛠️ Tech Stack

## Frontend

* React
* TypeScript
* Vite
* CSS
* React Router DOM
* Lucide React

## Backend

* Python
* FastAPI
* Uvicorn
* Pydantic

## Database

* PostgreSQL — planned/in progress

## Development Tools

* Visual Studio Code
* Node.js
* npm
* Python
* Git
* GitHub

---

# 📁 Project Structure

```text
arsalan-portfolio/
│
├── backend/
│   ├── venv/
│   └── main.py
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

> The structure may continue to change as new backend, database, and deployment features are added.

---

# ⚙️ Project Setup

## 1. Create the React + TypeScript + Vite Project

The frontend was created using Vite.

```bash
npm create vite@latest
```

During setup:

```text
Framework: React
Variant: TypeScript
```

After creating the project, move into the project directory:

```bash
cd arsalan-portfolio
```

---

# 📦 2. Install Frontend Dependencies

After creating or cloning the project, install all dependencies listed in `package.json`:

```bash
npm install
```

### When do we use `npm install`?

Use this command:

* After cloning the project from GitHub
* After downloading the project on another computer
* When `node_modules` does not exist
* After dependencies in `package.json` have changed

`npm install` reads `package.json` and installs the required packages into:

```text
node_modules/
```

---

# ▶️ 3. Start the Frontend Development Server

Run:

```bash
npm run dev
```

Vite starts the local development server.

Usually the website is available at:

```text
http://localhost:5173
```

Keep this terminal running while developing the frontend.

---

# 📦 4. Additional Frontend Packages

Packages required by the portfolio can be installed using npm.

For example:

```bash
npm install react-router-dom
```

React Router DOM is used to provide navigation between pages without completely reloading the website.

Example routes can include:

```text
/
/about
/skills
/projects
/contact
```

For icons:

```bash
npm install lucide-react
```

Lucide React provides reusable React icons for the interface.

---

# 🏗️ 5. Create a Production Build

Before deployment, create an optimized production build:

```bash
npm run build
```

This command performs the TypeScript checks and creates the optimized website.

The generated production files are placed inside:

```text
dist/
```

Example:

```text
dist/
├── assets/
└── index.html
```

The `dist` folder contains the frontend files that can be deployed.

---

# 👀 6. Preview the Production Build

After running:

```bash
npm run build
```

the production version can be tested locally using:

```bash
npm run preview
```

This lets you preview the optimized production build before deployment.

---

# 🔍 7. Run ESLint

To check the frontend code for common problems:

```bash
npm run lint
```

ESLint helps detect:

* Potential JavaScript/TypeScript errors
* Incorrect React patterns
* Code-quality problems
* Some unused variables/imports

---

# 🐍 Backend Setup

The backend of this portfolio is built using **Python and FastAPI**.

The backend directory is:

```text
arsalan-portfolio/
└── backend/
```

Move into it:

```bash
cd backend
```

---

# 🧪 8. Create a Python Virtual Environment

Create the virtual environment:

```bash
python -m venv venv
```

This creates:

```text
backend/
└── venv/
```

A virtual environment keeps the project's Python packages isolated from the system Python installation.

---

# 🔌 9. Activate the Virtual Environment

### PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

### Command Prompt

```cmd
venv\Scripts\activate
```

After activation, the terminal normally shows:

```text
(venv)
```

VS Code can also automatically activate the selected Python virtual environment when opening a terminal.

---

# 📦 10. Install Backend Packages

With the virtual environment activated:

```bash
pip install fastapi uvicorn
```

FastAPI provides the backend API framework.

Uvicorn runs the FastAPI application as an ASGI server.

---

# 🚀 11. Start the FastAPI Backend

From inside:

```text
backend/
```

run:

```bash
python -m uvicorn main:app --reload
```

The backend development server normally starts at:

```text
http://127.0.0.1:8000
```

The `--reload` option automatically restarts the backend when Python files are changed.

---

# 🔗 12. Backend Routes

The backend currently contains API routes including:

```text
GET /
```

Used to test whether the backend server is working.

The contact API is:

```text
POST /contact
```

It accepts contact-form information such as:

```text
name
email
message
```

The React frontend can send the contact form data to this API.

---

# 📚 13. FastAPI Swagger Documentation

FastAPI automatically generates interactive API documentation.

After starting the backend, open:

```text
http://127.0.0.1:8000/docs
```

From Swagger UI, API endpoints can be inspected and tested directly.

---

# 🔄 Frontend → Backend Flow

The application architecture currently works like this:

```text
User
  │
  ▼
React + TypeScript Frontend
  │
  │ HTTP Request
  ▼
FastAPI Backend
  │
  ▼
API Processing
```

After PostgreSQL integration:

```text
User
  │
  ▼
React + TypeScript
  │
  ▼
FastAPI
  │
  ▼
PostgreSQL
```

For example, the contact form will eventually follow:

```text
Contact Form
     │
     ▼
React
     │
     │ POST /contact
     ▼
FastAPI
     │
     ▼
PostgreSQL
     │
     ▼
Contact Message Stored
```

---

# 🗄️ PostgreSQL — Next Stage

PostgreSQL will be used for persistent backend data.

The planned architecture is:

```text
React
   │
   ▼
FastAPI
   │
   ▼
PostgreSQL
```

The database can initially store contact-form submissions.

A possible table structure:

```text
contact_messages
-------------------------
id
name
email
message
created_at
```

Database integration will be added to the project as development continues.

---

# 🖥️ Running the Full Project Locally

The frontend and backend need to run at the same time during development.

## Terminal 1 — Frontend

From the project root:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Terminal 2 — Backend

Move into:

```bash
cd backend
```

Activate the environment if necessary:

```powershell
.\venv\Scripts\Activate.ps1
```

Then run:

```bash
python -m uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger:

```text
http://127.0.0.1:8000/docs
```

---

# 🧠 Important npm Commands

| Command                    | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| `npm create vite@latest`   | Create a new Vite project                |
| `npm install`              | Install dependencies from `package.json` |
| `npm install package-name` | Install a new package                    |
| `npm run dev`              | Start development server                 |
| `npm run build`            | Create optimized production build        |
| `npm run preview`          | Preview production build                 |
| `npm run lint`             | Run ESLint checks                        |

---

# 🐍 Important Backend Commands

| Command                               | Purpose                           |
| ------------------------------------- | --------------------------------- |
| `python -m venv venv`                 | Create Python virtual environment |
| `.\venv\Scripts\Activate.ps1`         | Activate venv in PowerShell       |
| `pip install fastapi uvicorn`         | Install backend dependencies      |
| `python -m uvicorn main:app --reload` | Start FastAPI development server  |
| `pip freeze`                          | Display installed Python packages |
| `pip freeze > requirements.txt`       | Save backend dependencies         |

---

# 📄 Backend Requirements File

Before deployment, backend dependencies should be saved using:

```bash
pip freeze > requirements.txt
```

This creates:

```text
backend/
├── main.py
├── requirements.txt
└── venv/
```

A hosting platform can then install the backend dependencies using:

```bash
pip install -r requirements.txt
```

---

# 🌐 Deployment Architecture

The project is intended to be deployed publicly as a personal portfolio.

A typical production architecture can be:

```text
Visitor
   │
   ▼
Frontend Hosting
   │
   ▼
React Portfolio
   │
   │ HTTPS API Request
   ▼
FastAPI Hosting
   │
   ▼
PostgreSQL Database
```

Even when the frontend, backend, and database are hosted by different providers, they remain parts of **one application** because they communicate over HTTPS and database connections.

Potential deployment services include:

* Vercel — React frontend
* Netlify — React frontend
* Render — FastAPI backend
* Railway — backend/database hosting
* Neon — managed PostgreSQL

The final deployment configuration will be selected when the database and backend integration are complete.

---

# 🔐 Environment Variables

Sensitive information such as database URLs, API keys, and passwords should never be hard-coded into the source code.

A backend `.env` file can later contain:

```text
DATABASE_URL=your_postgresql_connection_string
```

The `.env` file should be included in `.gitignore`.

Example:

```gitignore
.env
venv/
__pycache__/
node_modules/
dist/
```

Never upload passwords, database credentials, secret keys, or private environment variables to GitHub.

---

# 🔄 Recommended Development Workflow

When working on the project:

```text
1. Open the project in VS Code
        ↓
2. Start frontend
   npm run dev
        ↓
3. Start backend in another terminal
   python -m uvicorn main:app --reload
        ↓
4. Develop / modify features
        ↓
5. Test frontend and API
        ↓
6. Run lint
   npm run lint
        ↓
7. Test production build
   npm run build
        ↓
8. Commit changes with Git
        ↓
9. Push to GitHub
```

---

# 🐙 Git Workflow

Check modified files:

```bash
git status
```

Add changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update portfolio"
```

Push to GitHub:

```bash
git push
```

A typical workflow is therefore:

```bash
git status
git add .
git commit -m "Update portfolio"
git push
```

---

# 📌 Current Project Status

### Frontend

* [x] React project created
* [x] TypeScript configured
* [x] Vite configured
* [x] Responsive portfolio UI
* [x] Navigation/pages
* [x] Contact form UI
* [x] Production build working
* [x] `npm run build` tested successfully

### Backend

* [x] Backend directory created
* [x] Python virtual environment created
* [x] FastAPI installed
* [x] Uvicorn installed
* [x] FastAPI server working
* [x] `GET /` working
* [x] Swagger documentation working
* [x] `POST /contact` working
* [x] Frontend/backend foundation established

### Database

* [ ] Create PostgreSQL database
* [ ] Create contact messages table
* [ ] Connect FastAPI to PostgreSQL
* [ ] Store contact form submissions
* [ ] Test database operations

### Deployment

* [ ] Prepare environment variables
* [ ] Create backend `requirements.txt`
* [ ] Deploy PostgreSQL database
* [ ] Deploy FastAPI backend
* [ ] Deploy React frontend
* [ ] Configure production API URL
* [ ] Configure CORS
* [ ] Test production contact form
* [ ] Connect custom domain if required

---

# 🗺️ Development Roadmap

```text
React + TypeScript Frontend
           │
           ✓
           │
           ▼
FastAPI Backend
           │
           ✓
           │
           ▼
PostgreSQL Database
           │
           ▼
Frontend ↔ Backend ↔ Database
           │
           ▼
Production Configuration
           │
           ▼
Deployment
           │
           ▼
Public Portfolio Website
```

---

# 👨‍💻 Developer

**Shaikh Arsalan**

Full Stack Web Developer & Data Engineer

Technologies being developed and practiced through this project include:

* React
* TypeScript
* Python
* FastAPI
* PostgreSQL
* REST APIs
* Git & GitHub
* Responsive Web Development
* Frontend/Backend Integration

---

# 📜 License

This project is a personal portfolio project.

The source code may be used for learning and reference unless otherwise specified.

---

# 🚧 Project Status

This portfolio is currently under active development.

Upcoming work primarily includes:

**PostgreSQL → FastAPI database integration → frontend integration testing → production deployment.**
