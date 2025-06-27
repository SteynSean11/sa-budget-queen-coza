# SA Budget Queen - Project Blueprint

Welcome to the SA Budget Queen project! This document serves as a guide to the current state of the application, its architecture, and the path forward for development.

## 1. Project Goal

The goal is to create a comprehensive personal finance and budgeting web application tailored for South Africans. The application will provide educational content, budgeting tools, and a supportive community to help users achieve financial freedom.

## 2. Technology Stack

- **Frontend**:
  - **Framework**: React with TypeScript
  - **Bundler/Dev Server**: Vite
  - **Styling**: Tailwind CSS with PostCSS
- **Backend**:
  - **Framework**: Express.js (running on Node.js)
- **Development & Code Quality**:
  - **Dev Workflow**: `concurrently` and `nodemon` to run frontend and backend servers simultaneously.
  - **Linting**: ESLint
  - **Formatting**: Prettier

## 3. Project Structure

The project is organized into a frontend application and a basic backend server.

```
├── src/
│   ├── components/
│   │   ├── auth/         # Authentication modals (SignIn, SignUp)
│   │   ├── common/       # Highly reusable, generic components (Button, Card, Logo)
│   │   ├── layout/       # Major page structure (Navbar, Footer)
│   │   └── profile/      # User profile components (ProfileModal)
│   ├── contexts/
│   │   └── AuthContext.tsx # Manages client-side auth state and modals
│   ├── App.tsx           # Main application component, lays out the landing page
│   ├── index.css         # Global styles and Tailwind directives
│   └── index.tsx         # Application entry point
├── server.js             # Minimal Express.js backend server
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS theme and brand color configuration
├── tsconfig.json         # TypeScript configuration
└── TASK.md               # High-level feature and task tracking
```

## 4. Development Workflow

1.  **Installation**: Run `npm install` to install all dependencies.
2.  **Running the Dev Server**: Run `npm run dev:concurrent`.
    - This script uses `concurrently` to start two processes:
      1. The Vite dev server for the React frontend.
      2. `nodemon` to watch and restart the `server.js` backend on any changes.

3.  **Code Quality**:
    - Run `npm run lint` to check for linting errors.
    - Run `npm run format` to automatically format the code with Prettier.

## 5. Current State of the Application

### Frontend

The frontend is currently a **feature-rich, static landing page**. It showcases all the intended features of the application through various sections (`HeroSection`, `StatsSection`, `EducationalContent`, etc.).

- **Authentication**: The UI for authentication is fully implemented on the client side.
  - The `src/contexts/AuthContext.tsx` file contains a **mock authentication system**. It simulates user login, logout, and profile updates without any backend interaction.
  - The `SignInModal`, `SignUpModal`, and `ProfileModal` are fully functional from a UI perspective and are controlled by the state within `AuthContext`.

### Backend

The backend (`server.js`) is a minimal Express server. It is set up but currently has **no API endpoints**. It's a blank canvas ready for API development.

## 6. How to Contribute & Next Steps

The most logical and critical next step is to **connect the frontend to a real backend**. This involves replacing the mock functionality with live API calls and data persistence.

### Step 1: Build the Backend API

1.  **Choose and Set Up a Database**: The project needs a database. Good choices would be PostgreSQL (with a library like `pg`) or MongoDB (with `mongoose`).
2.  **Implement User Endpoints in `server.js`**:
    - `POST /api/auth/register`: Create a new user in the database. Hash passwords using a library like `bcryptjs`.
    - `POST /api/auth/login`: Authenticate a user and return a session token (e.g., a JWT).
    - `GET /api/users/me`: Get the current logged-in user's profile.
    - `PUT /api/users/me`: Update the current user's profile.
3.  **Create Budgeting Endpoints**:
    - Design and implement API endpoints for creating, reading, updating, and deleting budgets and transactions.

### Step 2: Integrate Frontend with the API

1.  **Update `AuthContext.tsx`**:
    - Replace the mock functions (`signIn`, `signUp`, `signOut`, `updateUserProfile`) with `fetch` or `axios` calls to the newly created backend endpoints.
    - On successful login, store the authentication token (e.g., in `localStorage`) and the user data in the context's state.
    - Protect authenticated routes and API calls by sending the token in the request headers.

### Step 3: Build Out New Features

Once a user can successfully register and log in, you can start building the authenticated parts of the application.

1.  **Implement Routing**: Introduce a routing library like `react-router-dom` to create separate pages (e.g., `/`, `/dashboard`, `/profile`).
2.  **Create the Dashboard**:
    - Build the main dashboard component that a user sees after logging in.
    - Create new components for budgeting features (e.g., `BudgetForm.tsx`, `TransactionList.tsx`, `CategoryChart.tsx`) and place them in the `src/components/` directory.
    - Fetch and display real user data from your new API endpoints.

By following this blueprint, you can systematically build out the SA Budget Queen application, transforming it from a static showcase into a dynamic, data-driven platform.

