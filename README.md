# sa-budget-queen-coza

SA Budget Queen - Home of the Royal Savings and FinFreedom

## Description

The SA Budget Queen is a personal finance and budgeting web application specifically designed for middle-aged South Africans facing economic pressures. It aims to empower users with tools for financial management, savings, and informed decision-making, tailored to the unique South African context.

## Project Status

**Active Development**

The project is currently in the **Core User Features** sprint, focusing on building the foundational features of the Minimum Viable Product (MVP).

### Key Features (Implemented & In Progress)

*   **User Authentication**: Secure JWT-based authentication with refresh token rotation, user registration (including SA ID validation), login, and secure logout. An email verification flow is also in place.
*   **User Management**: Basic profile management capabilities.
*   **Budget Creation Wizard**: A multi-step UI for creating an initial budget, with backend integration.
*   **Expense Entry**: A simple form for logging expenses by amount, category, and date.
*   **Simple Dashboard**: A basic layout displaying an overview of income vs. expenses.
*   **Global State & UI Feedback**: Robust error handling (custom 404/500 pages), a `Toast` notification system, and a global loading overlay, all managed with Zustand and React Query.
*   **Mobile-Responsive Design**: Ongoing work to ensure the application is fully usable on mobile devices.

### South African Context Specifics

The application is being built with a strong focus on the South African context, including:

*   **Currency**: All financial data is handled in South African Rand (ZAR).
*   **Identification**: SA ID number validation during registration.
*   **Compliance**: Designed with POPIA (Protection of Personal Information Act) compliance in mind.
*   **Future Considerations**: Features like load shedding impact tracking, Stokvel management, and integration with local banking and tax systems (SARS) are planned.

## Technology Stack

This project leverages a modern and robust technology stack to ensure scalability, maintainability, and a great user experience.

*   **Frontend**:
    *   **Framework**: Next.js 14+ (App Router) with React.js 18+ and TypeScript.
    *   **Styling**: Tailwind CSS.
    *   **State Management**: Zustand (for global client state) & React Query (for server state).
    *   **Forms**: React Hook Form with Zod for validation.
    *   **Icons**: `lucide-react`.
*   **Backend**:
    *   **Runtime & Language**: Node.js 20+ LTS with TypeScript.
    *   **Framework**: Express.js.
    *   **Database ORM**: Prisma.
    *   **Validation**: Zod.
    *   **Authentication**: JWT with refresh token strategy & bcrypt for password hashing.
*   **Database**: PostgreSQL 15+.
*   **Infrastructure (Planned)**: Docker for containerization, Google Cloud (Cloud Run, Cloud SQL) for deployment, and GitHub Actions for CI/CD.

## Development & Testing

*   **Code Quality**: ESLint and Prettier for consistent code style and formatting.
*   **Testing**: Jest and React Testing Library for the frontend; Jest and Supertest for backend API testing. Playwright is planned for E2E testing.
*   **Package Manager**: pnpm is the preferred package manager for this project.

---

## Getting Started

### Prerequisites

You will need [Node.js](https://nodejs.org/) (version 18 or higher) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate into the project directory and install dependencies:
   ```sh
   cd sa-budget-queen-coza
   npm install
   ```

## Usage

To run the application in development mode with live-reloading:
```sh
npm run dev
```
This will start the server, and you can view the application at `http://localhost:3000`.
